---
layout: post
title: "Installing NVIDIA cuDNN, PyTorch, and FastAI"
subtitle: "Machine Learning and Deep Learning Software Setup"
<!--image: /img/hello_world.jpeg-->
tags: cuda, machine-learning, deep-learning, pytorch, cudnn
---

In this note, I detail a step-by-step instruction I followed to setup software on NVIDIA-based "Deep Learning Box".

I'm using Ubuntu 18.04 LTS. This is a machines I've dedicated for experimentation. It is only running Ubuntu Linux - no dual booting.

## CUDA Installation

This machine, named `tchalla`, has two GPUs: a GTX 1050ti and a GTX 960:
```bash
$ nvidia-smi
Thu Jan 24 22:02:25 2019
+-----------------------------------------------------------------------------+
| NVIDIA-SMI 410.48                 Driver Version: 410.48                    |
|-------------------------------+----------------------+----------------------+
| GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |
| Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |
|===============================+======================+======================|
|   0  GeForce GTX 105...  Off  | 00000000:0F:00.0  On |                  N/A |
| 30%   29C    P8    N/A /  75W |    553MiB /  4038MiB |      0%      Default |
+-------------------------------+----------------------+----------------------+
|   1  GeForce GTX 960     Off  | 00000000:42:00.0 Off |                  N/A |
|  0%   35C    P8     8W / 160W |      1MiB /  2002MiB |      0%      Default |
+-------------------------------+----------------------+----------------------+

+-----------------------------------------------------------------------------+
| Processes:                                                       GPU Memory |
|  GPU       PID   Type   Process name                             Usage      |
|=============================================================================|
|    0      1047      G   /usr/lib/xorg/Xorg                           205MiB |
|    0      1325      G   /usr/bin/gnome-shell                         119MiB |
|    0      7749      G   ...uest-channel-token=14858601992556674804    51MiB |
|    0     21931      G   /home/sconde/TPL/paraview-5.6/lib/paraview   162MiB |
|    0     22128      G   gnome-control-center                          11MiB |
+-----------------------------------------------------------------------------+
```

As you can, I'm running NVIDIA `Driver Version: 410.48`. I'm using [Lmod: A New Environment Module System](https://lmod.readthedocs.io/en/latest/index.html). 
With this, I'm able to experiment with different CUDA versions: 10.0 and 9.2.

```bash
$ module load cuda/
cuda/10.0  cuda/9.2

$ module load cuda/10.0
$ nvcc --version
nvcc: NVIDIA (R) Cuda compiler driver
Copyright (c) 2005-2018 NVIDIA Corporation
Built on Sat_Aug_25_21:08:01_CDT_2018
Cuda compilation tools, release 10.0, V10.0.130

$ module load cuda/9.2

The following have been reloaded with a version change:
  1) cuda/10.0 => cuda/9.2

$ nvcc --version
nvcc: NVIDIA (R) Cuda compiler driver
Copyright (c) 2005-2018 NVIDIA Corporation
Built on Tue_Jun_12_23:07:04_CDT_2018
Cuda compilation tools, release 9.2, V9.2.148
```

## Python Installation

Using modules, I have both `python2` and `python3` installed on `tchalla`. 
However for this setup, I'm running `python3`. 
After all, [countdown to the end of life of `python2` is on the way. 
](https://pythonclock.org/)

## cuDNN Installation

- Sign up for an NVIDIA account (if new)
- Download the Cudnn version supported by installed CUDA Version

```bash
$ cat build-and-install-cudnn.sh
#!/bin/bash
# note: should be source
# Assert that the installer script (from CUDA) is provided
#if ([ $# -gt 2 ]); then
    #echo 'illegal number of parameter'
    #echo 'usage: bash build-and-install-cuda.sh [cuda_installer.sh]'
#fi

. ../setup-machine/setup_functions.sh
if [ -z "$TPL_ROOT" ]; then TPL_ROOT=$HOME/TPL ; fi

this_pwd=$PWD
#cuda_root=$TPL_CUDA_ROOT
cuda_root=/home/sconde/TPL/cuda/10.0/install
cuda_version=$CUDA_VERSION
cudnn_tar=cudnn-10.0-linux-x64-v7.4.2.24.tgz
cudnn_tar_fullpath=$this_pwd/$cudnn_tar
cudnn_short_name=`echo "$cudnn_tar" | cut -d "-" -f1,2`
echo $cudnn_short_name

mkdir $cudnn_short_name && tar zxf $cudnn_tar_fullpath -C $cudnn_short_name --strip-components 1

cp -Pv $cudnn_short_name/lib64/* $cuda_root/lib64/
cp  -v $cudnn_short_name/include/* $cuda_root/include
chmod a+r $cuda_root/include/cudnn.h
```
## Setup FastAI

For now, I'm using conda's virtual environment

- `conda create -n fastai`
- `source activate fastai`
- `conda install -c pytorch -c fastai fastai`
<!--- Follow some further instructions for performance gains: with compatible cpu-->
    <!--- `conda uninstall --force jpeg libtiff -y`-->
    <!--- `conda install -c conda-forge libjpeg-turbo`-->
    <!--- `CC="cc -mavx2" pip install --no-cache-dir -U --force-reinstall --no-binary :all: --compile pillow-simd`-->


## Testing

```bash
$ cat test_torch_cuda.py
'''
Purpose: verify the torch installation is good
        Check if CUDA devices are accessible inside a Library.
'''
import torch

assert torch.cuda.is_available(), 'something went wrong'
print("Pytorch CUDA is Good!!")

$ python test_torch_cuda.py
Pytorch CUDA is Good!!
```
