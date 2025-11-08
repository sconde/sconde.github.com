# Jekyll Blog Development Container

Production-grade devcontainer configuration for secure, reproducible Jekyll development.

## Architecture

**Base Image**: Chainguard minimal Ruby (Alpine-based)
- Zero CVE baseline with nightly security updates
- Non-root user execution (UID 65532)
- Minimal attack surface (no unnecessary packages)

**Ruby Version**: 3.3.x series
**Jekyll Version**: 4.4.x

## Quick Start

### Prerequisites
- VSCode with Dev Containers extension
- Docker Desktop or Docker Engine

### Launch Container

1. Open project in VSCode
2. Command Palette: `Dev Containers: Reopen in Container`
3. Wait for build and initialization (3-5 minutes first time)
4. Jekyll server starts automatically on port 4000

### Accessing the Blog

- Local: http://localhost:4000
- LiveReload enabled (automatic browser refresh)

## Available Tasks

Run tasks via Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`):

- **Serve Jekyll**: Start development server with LiveReload
- **Build Jekyll (Production)**: Production build with optimizations
- **Clean Jekyll Build**: Remove generated files
- **Bundle Install**: Install Ruby dependencies
- **Bundle Update**: Update all gems
- **Create New Post**: Interactive post creation wizard
- **Check Jekyll Doctor**: Validate Jekyll configuration

## Container Features

### Security
- Non-root user (nonroot:nonroot)
- No privileged access
- Security option: no-new-privileges
- Defined network ports only (4000, 35729)

### Performance
- Persistent gem cache (Docker volume)
- Multi-threaded bundle install (20 jobs)
- Incremental builds enabled
- LiveReload for instant feedback

### Developer Experience
- Ruby LSP (IntelliSense, code navigation)
- Markdown linting and preview
- YAML validation (frontmatter)
- Git integration (Git LFS supported)
- Jekyll snippets

## Directory Structure

```
.devcontainer/
├── Dockerfile              # Custom container image definition
├── devcontainer.json       # VSCode container configuration
└── README.md              # This file

.vscode/
├── extensions.json        # Recommended extensions
├── settings.json          # Workspace settings
└── tasks.json            # Build and development tasks
```

## Dependencies

Managed via [Gemfile](../Gemfile):

- Jekyll 4.4.x
- Webrick 1.8+ (Ruby 3.0+ requirement)
- csv, base64 (Ruby 3.4+ forward compatibility)
- jekyll-paginate, jekyll-sitemap
- jekyll-livereload (development)

## Port Forwarding

- **4000**: Jekyll development server
- **35729**: LiveReload WebSocket

## Troubleshooting

### Container fails to build
```bash
# Rebuild without cache
Dev Containers: Rebuild Container
```

### Bundle install failures
```bash
# Inside container terminal
bundle clean --force
bundle install --retry 5
```

### Jekyll server not starting
```bash
# Check port availability
lsof -ti:4000 | xargs kill -9

# Restart server
bundle exec jekyll serve --host 0.0.0.0 --livereload
```

### Permission errors
Verify `remoteUser: nonroot` in devcontainer.json and rebuild container.

## References

- Dockerfile: [.devcontainer/Dockerfile](./Dockerfile)
- Configuration: [.devcontainer/devcontainer.json](./devcontainer.json)
- Dependencies: [Gemfile](../Gemfile)
- Chainguard Ruby: https://images.chainguard.dev/directory/image/ruby/overview
- Dev Containers: https://containers.dev
