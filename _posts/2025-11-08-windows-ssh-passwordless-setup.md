---
layout: post
title: "Windows SSH Passwordless Login"
subtitle: "Administrator authorized_keys gotcha"
date: 2025-11-08
tags: ssh, windows11, remote-development, vscode
---

I wanted to SSH into my Windows 11 machine from my Linux box for remote development with VS Code. Both machines are on the same LAN - should be straightforward.

It wasn't.

My Windows machine uses a PIN for login. When I tried to SSH in, it kept asking for a password. The Microsoft account password didn't work. I didn't want to create a separate local account. After spending hours troubleshooting with `ssh -vvv`, I finally figured out the issue.

## The Administrator authorized_keys Problem

Windows OpenSSH has a special rule for Administrator accounts. If your user is in the Administrators group, the system ignores `~\.ssh\authorized_keys` and instead uses:

```
C:\ProgramData\ssh\administrators_authorized_keys
```

This file needs specific ownership (SYSTEM) and strict permissions, otherwise SSH silently rejects your keys.

## Setup SSH Keys

### Linux Side

Generate an SSH key:

```bash
ssh-keygen -t rsa -b 4096
cat ~/.ssh/id_rsa.pub
```

Copy the entire public key.

### Windows Side

Open PowerShell as Administrator:

```powershell
# Create the administrators authorized keys file
$admKeys = "C:\ProgramData\ssh\administrators_authorized_keys"
New-Item -Path $admKeys -ItemType File -Force

# Paste your Linux public key
notepad $admKeys
```

After pasting the key and saving:

```powershell
# Normalize to Unix line endings
(Get-Content $admKeys -Raw) -replace "`r`n","`n" | Set-Content -NoNewline -Encoding ascii $admKeys

# Set ownership and permissions
icacls $admKeys /setowner "NT AUTHORITY\SYSTEM"
icacls $admKeys /inheritance:r
icacls $admKeys /grant "SYSTEM:(F)" "Administrators:(F)"

# Restart SSH
Restart-Service sshd
```

### Test

From Linux:

```bash
ssh username@windows-ip
```

Should connect without a password.

The biggest gotcha with this setup: Administrator accounts use `C:\ProgramData\ssh\administrators_authorized_keys` instead of the user's `~\.ssh\authorized_keys`.

The file ownership matters - it must be owned by SYSTEM, not your user account. Line endings also matter. Windows CRLF line endings will break SSH key authentication, which is why the normalization step is necessary.

## Multiple Linux Machines

To add more Linux machines, append their public keys to the file:

```powershell
$admKeys = "C:\ProgramData\ssh\administrators_authorized_keys"
notepad $admKeys  # Add new key on new line

# Re-normalize and set permissions
(Get-Content $admKeys -Raw) -replace "`r`n","`n" | Set-Content -NoNewline -Encoding ascii $admKeys
icacls $admKeys /setowner "NT AUTHORITY\SYSTEM"
icacls $admKeys /inheritance:r
icacls $admKeys /grant "SYSTEM:(F)" "Administrators:(F)"
```

## VS Code Remote Development

With SSH working:

1. Install "Remote - SSH" extension
2. `F1` → "Remote-SSH: Connect to Host"
3. Enter `username@windows-ip`

## References

- [OpenSSH for Windows Documentation](https://docs.microsoft.com/en-us/windows-server/administration/openssh/openssh_overview)
- [VS Code Remote SSH](https://code.visualstudio.com/docs/remote/ssh)
- [OpenSSH key management](https://docs.microsoft.com/en-us/windows-server/administration/openssh/openssh_keymanagement)
