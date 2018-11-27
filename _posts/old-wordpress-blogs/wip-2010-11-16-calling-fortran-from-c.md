---
layout: post
title: Calling Fortran Subroutines in C Program
<!--subtitle: -->
<!--image: /img/hello_world.jpeg-->
---


So I am currently working on a parallel Linear Splitting scheme. There is a serial code that implements this scheme written in fortan 77, :(

Truth be told, rewriting the scheme to implement in parallel using MPI is really not that difficult. After all, its a lot of matrix operations and matrix operations are very MPI and parallel friendly.

There is a catch however, the fortran scheme using <a href="http://www.netlib.org/vfftpack/">vfftpack from netlib</a>. A lot of go-to statements and....a lot of go-to statements. The first time I looked at the subroutines, I think I had a headache or something. But no worries, I didn't have to rewrite the vfftpack in C. I simply used "extern" and called the subroutine from C.

&nbsp;

It is all nice and magical. But it could a big hassle if you don't remember to pass things in the subroutine by reference, and reformat your arrays to be column-major. Or you could simply write you entire code with arrays in column-major in C if you will be calling the FORTRAN subroutine(s) a lot. This is my case.
