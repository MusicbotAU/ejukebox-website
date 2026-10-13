---
layout: default
title: Why People Love eJukebox, Reviews
description: See why Australian pubs, clubs and cafes love eJukebox. Testimonials and reviews from venues running it every day. Start your free trial.
---

<style>
  /* five-star row above the heading, prefixed lv- - static and even, so it reads as part
     of the design rather than a rating someone picked */
  .lv-stars { display:flex; justify-content:center; gap:4px; margin:0 0 18px; font-size:1.45rem; line-height:1; color:var(--ejm-amber); }
  .lv-stars i { filter:drop-shadow(0 2px 6px rgba(245,166,35,.28)); }
  /* the theme's accent bar sits at the left; centre it under the stars on this centred hero */
  #main-content .love-hero h1:before { margin-left:auto; margin-right:auto; }
</style>

<div class="love-hero">
  <div class="hero-content">
    <div class="lv-stars" aria-hidden="true">
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
    </div>
    <h1>What Our Venues <span class="gradient-text">Say About Us</span></h1>
    <p class="hero-subtitle">Real words from real eJukebox venues</p>
  </div>
</div>

{% include testimonial.html id="peak-health-fitness" full=true %}

<div class="tm-row">
{% include testimonial.html id="diana-f" %}
</div>

{% include photo-band.html src="/assets/images/stock/party-crowd-sunset.jpg" alt="A crowd enjoying a night out at sunset" caption="Real rooms, every night of the week." %}

<div class="try-demo">
  <div class="demo-content">
    <h2><i class="fas fa-comments"></i> Want to hear it in your venue?</h2>
    <p>Tell us about your venue and we will show you what eJukebox would sound like in your room.</p>
    <a href="/contact/" class="demo-link">
      <i class="fas fa-paper-plane"></i>
      Tell us about your venue
    </a>
    <p class="demo-note">Already an eJukebox venue and loving it? We would love to share your story - <a href="/contact/">get in touch</a>.</p>
  </div>
</div>
