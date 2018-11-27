---
layout: post
title: "Optimization of Inference: Part 1"
<!--subtitle: A Data Science project-->
<!--image: /img/hello_world.jpeg-->
---

An important class of estimators may be defined as the point or parameters at which some function achieves an optimum, this may either be a maximum or a minimum depending on the characteristics or nature of the function. There are many functions that involves various numbers of parameters, such as probability density function (after all, this is statistics :)).

In statistics, once an objective function has been chosen, observations on random variables are make and considered fixed. The function optimization in inference then varies the function parameters or sometime referred to as the "decision variables". The function is optimized with respect to the parameter value. In calculus, we usually use the First and Second derivative tests to determine the local/global maxima. I will be exploring two general ways in which optimization is used in statistical inference. One is to minimize deviations of observed values from what is predicted by the model. This is simply to minimize the error. The second way optimization is used in statistical inference is to maximize the likelihood.

One important note is that the solution to an optimization problem is "best" for the problem and its objective function. In conclusion, the solution is local not global.
