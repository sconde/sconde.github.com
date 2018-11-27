---
layout: post
title: Maternal Smoking and Infant Health
subtitle: A Data Science project
<!--image: /img/hello_world.jpeg-->
---

Question: Does maternal smoking does indeed negatively impact the health of the baby?

"Smoking by pregnant women may result in fetal injury, premature birth, and low birth weight", U.S Surgeon General's health warning on side panel of cigarette packages

Although our generation know not to smoke while pregnant for the sake of the infant, this was a controversial topic in history. Like most controversial topic, people turned to scientist for answer. Many studies were undertaken to help guide the nation and help many infants, by comparing the birth weights of babies " to smokers and nonsmokers in order to determine whether they corroborate the Surgeon General’s warning."

Using some data, I perform my first statistical study to help answer the above question.

Given a sample data list of birth weights, is there statistical evidence supporting the fact that there is a difference between babies born to mothers who smoked during pregnancy and those who did not? If so, is the difference important to the health of the baby?

We use <a href="http://www.stat.berkeley.edu/users/statlabs/labs.html">The maternal Smoking and Infant Health data</a> from Berkley. The weights were given in pairs with a boolean value representing where the mother was a smoker or not. Some of the values were represented by "9", probably describing the uncertainty if the mother was a smoker or not, there were disregarded. Below is the Matlab script to stratify the data

```matlab
%Chapter 1: Maternal Smoking and Infant Health
%Sidafa Conde
%01/27/2011
%MTH 332 Mathematical Statistics
clear all; clc, close all

data = data.data;
%err = find(data(:,2)>1); %find the indeces that are undertermined smokers/nonsmokers
%data(ans,:) = [];   %delete the undertermined from the data
smokers_ind = find(data(:,2)==1);   %find the indeces of value 1 for smokers
nonsmokers_ind = find(data(:,2)==0);   %find the indeces of value 0 for nonsmokers
smokers = data(smokers_ind); %BWT of smoker mothers
nonsmokers = data(nonsmokers_ind); %BWT of nonsmoker mothers
nhist(smokers,'color','summer','separate','median')
title('Birth Weight of Smokers')
ylabel('Frequency'); xlabel('Birth Weight')
figure

nhist(nonsmokers,'separate','median')
title('Birth Weight of Non Smokers')
ylabel('Frequency'); xlabel('Birth Weight')

```

I use a histogram to visually display the birth weight distribution of parents who smoke and those that don't.

<a href="http://mathrule.files.wordpress.com/2011/01/smokers.jpg"><img class="size-medium wp-image-389 alignleft" title="Smokers" src="http://mathrule.files.wordpress.com/2011/01/smokers.jpg?w=300" alt="" width="300" height="225" /></a>
<p style="text-align:center;"><a href="http://mathrule.files.wordpress.com/2011/01/nonsmokers.jpg"><img class="size-medium wp-image-390 aligncenter" title="Non Smokers" src="http://mathrule.files.wordpress.com/2011/01/nonsmokers.jpg?w=300" alt="" width="300" height="225" /></a></p>
<!--$$ \begin{tabular}{|c|c|c|} &amp; Smokers &amp; Non Smokers \\mean &amp; 114.11 &amp; 123.05\\std &amp; 18.10 &amp; 17.40\\median &amp;115.00&amp; 123.00\\ \end{tabular}$$-->

The two histogram appears to have similar shape. They appear to be normally distributed. However, as it may be evident in the table above, the centers of the distribution are different. The average birth weight for infants of parant who smoke is relatively less than those of parant who do not smoke. One might jump to conclusion and conclude that there exist an evidence here that suggest that smoking is in fact decreasing infants birth weight. There may appear to be a relationship from looking at the two histograms. However, rest assure that with a different scale, the two graphs may have completely different shape and distribution (may look skewed).

Based on the given data and statistical result, it is difficult to conclude that the difference in weight between babies born to mothers who smoked during pregnancy and those who did not is significant. This is mostly due to the difficulty in isolating smoking as a factor, since the effects of other factors are not well-defined.  Living conditions, including air quality and noise, for example, could have similar effects, and without removing all external influences, it can be difficult to determine causal relations. For a much better study to reach a concrete conclusion, a controlled study, experiment or observation must be done. At this moment, the lurking variable in the sample make it difficult to reach a concrete conclusion.
