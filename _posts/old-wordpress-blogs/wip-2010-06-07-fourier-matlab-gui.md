---
layout: post
title: Fourier Matlab GUI
<!--subtitle: A Data Science project-->
<!--image: /img/hello_world.jpeg-->
---

As a degree requirement at Umass Dartmouth, I took<a href="http://www.umassd.edu/cas/mathematics/people/leon/mth204Sp10.html"> intro to Matlab</a> with Dr. <a href="http://www.umassd.edu/1academic/cartsandsciences/mathematics/people/people/leon/">Steven J. Leon</a>. One of the project I needed to work on was to construct a Matlab GUI for the Fourier Approximation of a given function. This GUI needed to have as input the following:
<ol>
	<li>a function \( f(x) \)</li>
	<li>number of points \( np \)</li>
	<li>number of coefficients \( nc \)</li>
</ol>
Using the complex truncated form of Fourier series, the GUI will display the reconstructions vs. the function as well as the error term on the right. Here is the screen shot of the GUI
<p style="text-align:center;"><a href="http://mathrule.files.wordpress.com/2010/06/trig.jpg"><img class="aligncenter size-medium wp-image-66" title="FOURIER GUI" src="http://mathrule.files.wordpress.com/2010/06/trig.jpg?w=300" alt="" width="300" height="187" /></a></p>
<p style="text-align:left;">Although I must say, it took me a while to figure out some of the syntax. I also had one line referring a particular handle that was incorrect and getting errors lines before Matlab was able to catch. Thanks charles</p>
