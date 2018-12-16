---
layout: post
title: "Python: Numpy Broadcasting"
tags: python, numpy
<!--image: /img/hello_world.jpeg-->
---

It's simple: Arrays with different sizes cannot be used in binary arithmetic operations. One of
the very first lessons learned in any linear algebra course. Binary operations
on arrays of the same size are performed on an element-by-element-basis.

In Matlab, the very first programming language I was ever introduced to, if we try adding two matrices
```matlab
rand(3,4) + rand(2,4)
````
we get the following error: `Matrix dimensions must agree.` To ensure the array
arithmetic operation is carried out and produces the desired results, the user
essentially must ensures consistent dimensions between the arrays: replicate
one array (or both arrays) so that the dimensions are matched. In Matlab, you can do this with [Tony's
Trick](https://blogs.mathworks.com/loren/2006/02/22/scalar-expansion-and-more-take-2/), `repmat`, or `bsxfun`.


In python, `numpy` provides a build-in workaround to allow arithmetic between arrays of different shapes.
This is called *array broadcasting* and is an available numpy method used when performing
arithmetic between arrays with different shape/size. 

Broadcasting is simply a set of rules for applying binary arithmetic ([`ufuncs`](https://docs.scipy.org/doc/numpy-1.15.1/reference/ufuncs.html)) on arrays of different sizes.

Array broadcasting greatly reduces and simplifies ones code. Moreover, " Broadcasting provides a means of vectorizing array operations so that looping occurs in C instead of Python". Developed for numpy, broadcasting has been adopted in many other libraries such as [Theano](http://deeplearning.net/software/theano/tutorial/broadcasting.html), [TensorFlow](https://www.tensorflow.org/xla/broadcasting), [Octave](https://www.gnu.org/software/octave/doc/v4.2.1/Broadcasting.html), [Julia](https://docs.julialang.org/en/v1/base/arrays/index.html#Broadcast-and-vectorization-1)

Broadcasting essentially "implicitly" replicates the smaller array along the last mismatched dimension.  I say "implicitly" because Numpy does not actually
make an in-memory copy of the expanded array.

> Broadcasting provides a means of vectorizing array operations so that looping
> occurs in C instead of Python. It does this without making needless copies of
> data and usually leads to efficient algorithm implementations.
- [Broadcasting - Scipy](https://docs.scipy.org/doc/numpy-1.13.0/user/basics.broadcasting.html)


### Rules of Broadcasting

In Numpy, two array dimension are compatible when
1. they are equal, or
2. one of them is 1

A smaller array is said to be **broadcastable** if:
- the dimension is prepended with 1 in its shape
- size in each dimension of the output shape is maximum of the import sizes in
    that dimension
- 


With this in mind, broadcasting in Numpy follows a strict set of rules to determine the
interaction between the two arrays:

1. If the two arrays differ in their number of dimensions, the shape of the one
   with fewer dimension is *padded* with ones on its leading (left) side.
2. If the shape of the two arrays does not match in any dimension, the array
   with shape equal to 1 in that dimension is stretched to match the other
   shape
3. If in dimension the sized disagree and neither is equal to 1, an error is
   raised


### Example 1

```python
M = np.ones((2, 3))
a = np.arange(3)
M.shape = (2,3)
a.shape = (3)
```
From rule 1, the smaller array (`a`) is padded on the left with ones
```python
M.shape -> (2,3)
a.shape -> (1,3)
```

Then by rule 2, we see that the first dimension disagree. So this dimension is
stretched to match
```python
M.shape -> (2,3)
a.shape -> (2,3)
```
then the arithmetic is carried out element-by-element.

Dimensions are considered in reverse order, starting with the trailing
dimension. For example, looking at the columns before the rows in a 2D case.
Numpy will effectively pad missing dimensions with a size of 1 when comparing
arrays.

Therefore, the comparison between a 2D array `A.shape = (2,3)` and a vector `b.shape = (3)`
is essentially equivalent to `A.shape = (2,3)`, `b.shape = (1,3)` as the vector
`b` will been broadcasted along `axis=0` (stretched horizontally - `b.shape = (2,3)`)

The same notion applies to the comparison between a scalar that is treated as
an array:
```python
A.shape = (2,3)
b.shape = (1)
```

In broadcast, this becomes
```python
A.shape = (2,3)
b.shape = (1,1)
```

the scalar `b` is broadcasted along both axes (`axis=0` and `axis=1`) and the
arithmetic is done with the shape
```python
A.shape = (2,3)
b.shape = (2,3)
```

## References

- [Machine Learning Mastery](https://machinelearningmastery.com/broadcasting-with-numpy-arrays/)
- [Loren on the Art of MATLAB](https://blogs.mathworks.com/loren/2016/10/24/matlab-arithmetic-expands-in-r2016b/)
- [Python Data Science Handbook](https://jakevdp.github.io/PythonDataScienceHandbook/02.05-computation-on-arrays-broadcasting.html)
- [CS231n Convolation Neural Networks for Visual Recognition](http://cs231n.github.io/)
- [Ericsbroadcasting Doc](https://scipy.github.io/old-wiki/pages/EricsBroadcastingDoc)
