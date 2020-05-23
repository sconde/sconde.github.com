---
layout: testresume
<!--title: Testing the Resume-->
<!--subtitle: Computational Scientist & Accountant-->
<!--theme-used: https://github.com/sharu725/online-cv-->
---

{% assign data-name = page.data %}

<!--<h1> {{ data-name }} </h1>-->

{% include career-profile_cv.html data_name=data-name %}

{% include experiences_cv.html %}

{% include projects_cv.html %}

{% include publications_cv.html %}

