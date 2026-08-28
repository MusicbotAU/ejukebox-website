---
layout: default
permalink: /products.html
title: Plans & Pricing | Background Music for Pubs, Clubs, Cafes & Retail
description: Build your own eJukebox. Solo from $49/mo for a single-area shop, Core from $169/mo for a venue, or Complete with every add-on included. Pick only the features you want, watch what each one does, and try it free for 30 days.
schema_page_type: CollectionPage
---

{% include pricing-menu.html mode="public" %}

<style>
  /* Beyond-the-menu section. Prefixed pb- so it cannot collide with the ejm- menu styles. */
  .pb-more { max-width: 1080px; margin: 0 auto 64px; padding: 0 20px; }
  .pb-more-head { text-align: center; margin: 0 0 34px; }
  .pb-more-head h2 { font-size: clamp(1.5rem, 2.9vw, 2.1rem); line-height: 1.16; margin: 0 0 12px; color: var(--ejm-ink); }
  .pb-more-head p { color: var(--ejm-soft); font-size: 1.04rem; line-height: 1.65; margin: 0 auto; max-width: 66ch; }
  .pb-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
  @media (max-width: 820px) { .pb-grid { grid-template-columns: 1fr; } }
  .pb-card { background: var(--ejm-card); border: 1.5px solid var(--ejm-line); border-radius: var(--ejm-r);
    padding: 28px 26px; transition: border-color .2s ease, transform .2s ease; }
  .pb-card:hover { border-color: var(--ejm-line-2); transform: translateY(-3px); }
  .pb-card .pb-ico { font-size: 1.5rem; color: var(--ejm-ind-lt); margin-bottom: 14px; display: block; }
  .pb-card h3 { font-size: 1.22rem; margin: 0 0 11px; color: var(--ejm-ink); line-height: 1.28; border: 0; padding: 0; }
  .pb-card p { color: var(--ejm-soft); font-size: .98rem; line-height: 1.62; margin: 0 0 14px; }
  .pb-card ul { margin: 0 0 16px; padding-left: 20px; color: var(--ejm-soft); font-size: .95rem; line-height: 1.7; }
  .pb-card strong { color: var(--ejm-ink); }
  .pb-link { display: inline-flex; align-items: center; gap: 8px; font-weight: 700; font-size: .95rem;
    color: var(--ejm-cyan); text-decoration: none; }
  .pb-link:hover { text-decoration: underline; }
</style>

<div class="pb-more">
  <div class="pb-more-head">
    <h2>Two more things, outside the menu</h2>
    <p>The menu above covers what nearly every venue needs. These two sit either side of it - one is free, and one is built from scratch for you.</p>
  </div>
  <div class="pb-grid">

    <div class="pb-card">
      <i class="fas fa-headphones pb-ico"></i>
      <h3>Have a listen first - free</h3>
      <p>Before you decide anything, hear what our music directors actually build. Four channels, streaming right now, no sign-up and no card.</p>
      <ul>
        <li><strong>Hits</strong> - current chart and recent favourites</li>
        <li><strong>Smooth</strong> - relaxed, easy, good for daytime</li>
        <li><strong>Rock</strong> - classic through to modern</li>
        <li><strong>Country</strong> - Australian and international</li>
      </ul>
      <p>These demo streams carry eJukebox branding and promos, so they are for listening rather than for playing in your venue - but the sound and the programming are exactly what you would get.</p>
      <a class="pb-link" href="/stream-us.html"><i class="fas fa-play-circle"></i> Listen to the demo channels</a>
    </div>

    <div class="pb-card">
      <i class="fas fa-tower-broadcast pb-ico"></i>
      <h3>Custom Branded Radio</h3>
      <p>For groups, shopping centres and large clubs that want their own station rather than a subscription - think Coles Radio, but yours.</p>
      <ul>
        <li>Your <strong>own branded station</strong>, one to four channels</li>
        <li><strong>Professional voice-overs and imaging</strong>, plus national, regional or venue-specific promos</li>
        <li><strong>Dedicated infrastructure</strong> and priority support</li>
        <li>Option to <strong>stream publicly</strong> on iHeartRadio, your website or your app</li>
        <li>Built for multi-site groups and RSL clubs, including the automated 6pm ode and silence</li>
      </ul>
      <p>Scoped and quoted per project rather than priced off a menu.</p>
      <a class="pb-link" href="/custom-radio.html"><i class="fas fa-arrow-right"></i> See Custom Branded Radio</a>
    </div>

  </div>
</div>
