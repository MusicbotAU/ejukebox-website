---
layout: default
title: Listen to Free eJukebox Demo Streams
description: Listen to eJukebox demo streams free. Hear the Hits, Smooth, Rock and Country channels for pubs, clubs and cafes. Test before you buy.
schema_service: Demo music streams for Australian venues
service_type: Demonstration streams of curated commercial music channels
schema_about: [internet-radio, streaming-media]
---

<div class="stream-hero">
  <div class="hero-content">
    <div class="hero-icon pulse-ring">
      <i class="fas fa-headphones-alt"></i>
    </div>
    <h1>Listen to <span class="gradient-text">Demo Music Streams</span> - Try Before You Buy</h1>
    <p class="hero-subtitle">Experience what eJukebox sounds like in real life. Hook it up to some decent speakers or headphones, give it the pub test!</p>
  </div>
</div>

<div class="stream-intro">
  <p>Enjoy one of the following demo feeds, all streamed live from Australia just like a real radio station and in glistening high quality audio.</p>
</div>

<div class="streams-grid">
{% comment %} Hidden 13 Oct 2026: listen2.ejukebox.net/one returns 404. Remove this comment block when the stream is back. {% endcomment %}
  {% comment %}
  <div class="stream-card hits">
    <div class="stream-card-header">
      <div class="stream-icon">
        <i class="fas fa-fire"></i>
      </div>
      <h3>eJukebox Hits</h3>
      <span class="stream-badge">Pop / Top 40</span>
    </div>
    <div class="stream-player">
      <audio src="https://listen2.ejukebox.net/one" type="audio/mpeg" controls></audio>
    </div>
    <div class="stream-status">
      <span class="live-indicator"></span>
      Streaming Live from Australia
    </div>
  </div>

  {% endcomment %}
  <div class="stream-card smooth">
    <div class="stream-card-header">
      <div class="stream-icon">
        <i class="fas fa-spa"></i>
      </div>
      <h3>eJukebox Smooth</h3>
      <span class="stream-badge">Easy Listening</span>
    </div>
    <div class="stream-player">
      <audio src="https://listen2.ejukebox.net/two" type="audio/mpeg" controls></audio>
    </div>
    <div class="stream-status">
      <span class="live-indicator"></span>
      Streaming Live from Australia
    </div>
  </div>

{% comment %} Hidden 13 Oct 2026: listen2.ejukebox.net/three returns 404. Remove this comment block when the stream is back. {% endcomment %}
  {% comment %}
  <div class="stream-card rock">
    <div class="stream-card-header">
      <div class="stream-icon">
        <i class="fas fa-guitar"></i>
      </div>
      <h3>eJukebox Rock</h3>
      <span class="stream-badge">Rock Classics</span>
    </div>
    <div class="stream-player">
      <audio src="https://listen2.ejukebox.net/three" type="audio/mpeg" controls></audio>
    </div>
    <div class="stream-status">
      <span class="live-indicator"></span>
      Streaming Live from Australia
    </div>
  </div>

  {% endcomment %}
  <div class="stream-card country">
    <div class="stream-card-header">
      <div class="stream-icon">
        <i class="fas fa-hat-cowboy"></i>
      </div>
      <h3>eJukebox Country</h3>
      <span class="stream-badge">Country Vibes</span>
    </div>
    <div class="stream-player">
      <audio src="https://listen2.ejukebox.net/four" type="audio/mpeg" controls></audio>
    </div>
    <div class="stream-status">
      <span class="live-indicator"></span>
      Streaming Live from Australia
    </div>
  </div>
</div>

<div class="direct-links-section">
  <div class="section-header">
    <i class="fas fa-link"></i>
    <h2>Direct Links</h2>
  </div>
  <p class="section-intro">Still having trouble, or if you manually want to add this to a custom app or Sonos for example? Here's a direct link to the stream:</p>
  
  <div class="links-grid">
    {% comment %}
    <a href="https://listen2.ejukebox.net/one" class="direct-link hits" target="_blank">
      <i class="fas fa-external-link-alt"></i>
      <span>eJukebox Hits</span>
    </a>
    {% endcomment %}
    <a href="https://listen2.ejukebox.net/two" class="direct-link smooth" target="_blank">
      <i class="fas fa-external-link-alt"></i>
      <span>eJukebox Smooth</span>
    </a>
    {% comment %}
    <a href="https://listen2.ejukebox.net/three" class="direct-link rock" target="_blank">
      <i class="fas fa-external-link-alt"></i>
      <span>eJukebox Rock</span>
    </a>
    {% endcomment %}
    <a href="https://listen2.ejukebox.net/four" class="direct-link country" target="_blank">
      <i class="fas fa-external-link-alt"></i>
      <span>eJukebox Country</span>
    </a>
  </div>
</div>
