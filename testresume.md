---
layout: resume
<!--title: About Me-->
<!--subtitle: Computational Scientist & Accountant-->
---


{% include career-profile_cv.html %}

{% unless site.sidafa.data.sidebar.education %}
  {% include education_cv.html %}
{% endunless %}

{% include experiences_cv.html %}

{% include projects_cv.html %}

{% include publications_cv.html %}

{% include skills_cv.html %}
