---
layout: post
title:  Analyzing Horror Movie Profit
subtitle: Tidy-Tuesday Project
date:   2018-11-17 14:57:00
categories: [python]
tags: [R, Data Science, Tidy Tuesday]
---

This is part of the [Tidy Tuesday Projection](https://github.com/rfordatascience/tidytuesday): analyizing a dataset of movie profits and budgets as an example of exploratory data analysis in R.

Question
--------

<!--$$a^2 + b^2 = c^2$$-->

Are scary movies a good investment in Hollywood?
 <!--This is have been generated-->
 <!--\( 1/x^{2} \)-->

Library Used
------------
`tidyverse`
```R
── Conflicts ───────────────────────────────────────────────────────── tidyverse_conflicts() ──
✖ dplyr::filter() masks stats::filter()
✖ dplyr::lag()    masks stats::lag()
```

Data

| Header              | Description                                          |
|---------------------|------------------------------------------------------|
| `release_date`      | month-day-year                                       |
| `movie`             | Movie title                                          |
| `production_budget` | Money spent to create the film                       |
| `domestic_gross`    | Gross revenue in USA                                 |
| `worldwide_gross`   | Gross worldwide revenuew                             |
| `distributor`       | The distribution company                             |
| `mpaa_rating`       | Appropriate age rating by the US-based rating agency |
| `genre`             | Film category                                        |
