---
layout: default
title: Song Requests for Pubs, Clubs & Venues
description: QR code song requests for pubs, clubs and venues. Customers request from their phone or the free eJukebox Request app while your staff stay in control.
schema_service: Song request portal for pubs, clubs and functions
service_type: Interactive song request system for venues
last_reviewed: 2026-10-13
schema_app:
  name: eJukebox Song Requests
  description: Customers request songs at an eJukebox venue from their own phone, through the venue's QR code in any phone browser or the free eJukebox Request app. They see what is playing and what is coming up, search, preview and request songs, while the venue decides what can be requested and how often.
  category: BusinessApplication
  os: Any
howto:
  name: How customers request a song in an eJukebox venue
  description: Patrons request music from their own phone in a few taps, while the venue keeps full control of what actually plays.
  total_time: PT1M
  cost: 0
  tool:
    - Any smartphone with a web browser, or the free eJukebox Request app
  steps:
    - name: Scan the QR code
      text: Scan the eJukebox QR code on the table, bar or wall. It opens the venue's request page in the phone's browser, or the eJukebox Request app if it is installed.
    - name: Find a song
      text: Search by artist or title, hear a 30-second preview, or tap Help me pick and describe what you are after, such as 80s Australian pub rock or something for a 50th.
    - name: Send the request
      text: Tap Request. The venue sets the rules behind the scenes - which songs can be requested and how many each person can request every hour.
    - name: Watch it come up
      text: The coming-up list shows the real playing order, so you can see where your song sits.
---

<style>
  /* ---------- Song requests. Prefixed sr- to avoid collisions with site styles. ---------- */

  /* The theme forces #main-content h1/h2/h3 sizes, colours and margins, and every p colour,
     with !important and an id selector - so copy inside .sr-page answers in kind. */
  #main-content .sr-page p { color:var(--ejm-soft) !important; }
  #main-content .sr-page strong { color:var(--ejm-ink); }
  #main-content .sr-page h2 { margin:0 0 12px !important; font-size:clamp(1.6rem,3vw,2.25rem) !important;
    line-height:1.15; color:var(--ejm-ink) !important; letter-spacing:-.5px; }
  #main-content .sr-page h3 { margin:0 0 9px !important; font-size:1.12rem !important; line-height:1.3; color:var(--ejm-ink) !important; }

  /* ---- hero ---- */
  .sr-hero { position:relative; overflow:hidden; border-radius:22px; margin:8px 0 22px; padding:56px 44px 50px;
    background: radial-gradient(110% 120% at 85% 0%, #3d2150 0%, #1c1630 45%, #121225 100%);
    border:1.5px solid rgba(236,72,153,.3); box-shadow:0 40px 90px rgba(0,0,0,.45); }
  .sr-hero::before { content:""; position:absolute; width:540px; height:540px; right:-150px; top:-190px; border-radius:50%;
    background:radial-gradient(circle, rgba(236,72,153,.24), transparent 65%); pointer-events:none; }
  .sr-hero-grid { display:grid; grid-template-columns:1.1fr .9fr; gap:40px; align-items:center; position:relative; z-index:1; }
  .sr-eyebrow { display:inline-flex; align-items:center; gap:8px; font-size:.78rem; font-weight:800; letter-spacing:.14em;
    text-transform:uppercase; color:#f9a8d4; background:rgba(236,72,153,.12); border:1px solid rgba(236,72,153,.32);
    padding:7px 14px; border-radius:999px; margin-bottom:18px; }
  .sr-grad { background:linear-gradient(95deg, var(--ejm-amber), var(--ejm-pink) 55%, var(--ejm-ind-lt));
    -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; }
  #main-content .sr-page .sr-lead { font-size:1.14rem; line-height:1.65; margin:0 0 24px; max-width:54ch; }
  .sr-ctas { display:flex; flex-wrap:wrap; gap:12px; margin:0 0 22px; }
  #main-content .sr-btn, #main-content .sr-btn-ghost { display:inline-flex; align-items:center; gap:10px; padding:14px 22px;
    border-radius:12px; font-weight:700; text-decoration:none; transition:transform .2s ease, box-shadow .2s ease; }
  #main-content .sr-btn { color:#fff !important; background:linear-gradient(135deg, var(--ejm-pink), var(--ejm-ind)); box-shadow:0 12px 30px rgba(236,72,153,.35); }
  #main-content .sr-btn-ghost { color:var(--ejm-ink) !important; background:rgba(255,255,255,.06); border:1.5px solid rgba(255,255,255,.18); }
  #main-content .sr-btn:hover, #main-content .sr-btn-ghost:hover { transform:translateY(-2px); text-shadow:none; }
  .sr-ticks { list-style:none; margin:0; padding:0; display:grid; gap:8px; }
  .sr-ticks li { display:flex; gap:10px; align-items:center; margin:0; font-size:.95rem; color:var(--ejm-soft); }
  .sr-ticks li i { color:var(--ejm-green); }

  /* ---- at a glance ---- */
  .sr-stats { display:grid; grid-template-columns:repeat(4,1fr); gap:14px; margin:0 0 10px; }
  .sr-stat { padding:22px 20px; border-radius:16px; background:linear-gradient(160deg, var(--ejm-card-2), var(--ejm-card)); border:1.5px solid var(--ejm-line); }
  .sr-stat b { display:block; font-family:'Poppins',sans-serif; font-size:1.55rem; line-height:1.1; margin-bottom:6px;
    background:linear-gradient(95deg, var(--ejm-amber), var(--ejm-pink)); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; }
  .sr-stat span { display:block; font-size:.9rem; line-height:1.5; color:var(--ejm-soft); }

  /* ---- section heads ---- */
  .sr-sec-head { margin:60px 0 24px; max-width:76ch; }
  .sr-kick { display:block; font-size:.78rem; font-weight:800; letter-spacing:.16em; text-transform:uppercase; color:var(--ejm-pink); margin-bottom:10px; }
  #main-content .sr-page .sr-sec-head p { font-size:1.06rem; line-height:1.65; margin:0; }

  /* ---- steps ---- */
  .sr-steps { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
  .sr-step { position:relative; padding:30px 26px 26px; border-radius:18px; background:var(--ejm-card); border:1.5px solid var(--ejm-line); }
  .sr-num { display:grid; place-items:center; width:44px; height:44px; margin-bottom:16px; border-radius:50%;
    font-family:'Poppins',sans-serif; font-size:1.1rem; font-weight:700; color:#fff;
    background:linear-gradient(135deg,var(--ejm-amber),var(--ejm-pink)); box-shadow:0 8px 22px rgba(236,72,153,.35); }
  .sr-step-ico { position:absolute; right:24px; top:28px; font-size:1.4rem; color:rgba(255,255,255,.14); }
  #main-content .sr-page .sr-step p { margin:0; font-size:.96rem; line-height:1.62; }

  /* ---- cards ---- */
  .sr-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:18px; }
  .sr-grid3 { display:grid; grid-template-columns:repeat(3,1fr); gap:18px; }
  .sr-card { position:relative; display:flex; flex-direction:column; padding:26px 24px; border-radius:18px;
    background:linear-gradient(165deg, var(--ejm-card-2), var(--ejm-card)); border:1.5px solid var(--ejm-line);
    transition:border-color .25s ease, transform .25s ease; }
  .sr-card:hover { border-color:rgba(236,72,153,.4); transform:translateY(-3px); }
  .sr-ico { display:grid; place-items:center; width:50px; height:50px; margin-bottom:16px; border-radius:14px; font-size:1.2rem; color:#fff;
    background:linear-gradient(135deg,var(--ejm-pink),var(--ejm-ind)); box-shadow:0 10px 24px rgba(0,0,0,.3); }
  .sr-ico.b { background:linear-gradient(135deg,var(--ejm-ind),var(--ejm-cyan)); }
  .sr-ico.c { background:linear-gradient(135deg,var(--ejm-amber),var(--ejm-pink)); }
  #main-content .sr-page .sr-card p { margin:0 0 12px; font-size:.96rem; line-height:1.62; }
  #main-content .sr-page .sr-card p:last-child { margin-bottom:0; }
  .sr-add { display:inline-flex; align-self:flex-start; align-items:center; gap:6px; margin-top:auto; padding:4px 10px; border-radius:999px;
    font-size:.68rem; font-weight:800; letter-spacing:.07em; text-transform:uppercase; color:var(--ejm-amber);
    background:rgba(245,166,35,.11); border:1px solid rgba(245,166,35,.32); }
  .sr-inc { color:var(--ejm-green); background:rgba(52,211,153,.11); border-color:rgba(52,211,153,.32); }
  .sr-more { margin-top:10px; font-weight:600; font-size:.92rem; }

  /* ---- faq ---- */
  .sr-faq { display:grid; grid-template-columns:repeat(2,1fr); gap:14px; }
  .sr-qa { padding:22px 24px; border-radius:16px; background:var(--ejm-card); border:1.5px solid var(--ejm-line); }
  .sr-qa:last-child:nth-child(odd) { grid-column:1 / -1; }
  #main-content .sr-page .sr-qa p { margin:0; font-size:.95rem; line-height:1.64; }

  /* ---- closing call to action (site-standard try-demo block, dressed for this page) ---- */
  #main-content .sr-page .try-demo { position:relative; overflow:hidden; margin:60px 0 10px; padding:52px 40px; text-align:center;
    border-radius:22px; border:1.5px solid rgba(236,72,153,.35);
    background:radial-gradient(70% 120% at 50% 0%, rgba(236,72,153,.30), transparent 70%), linear-gradient(155deg,#2a1d48,#151428); }
  #main-content .sr-page .try-demo h2 i { color:var(--ejm-amber); margin-right:8px; }
  #main-content .sr-page .try-demo p { max-width:60ch; margin:0 auto 24px; font-size:1.06rem; line-height:1.65; }
  #main-content .sr-page .try-demo .demo-link { display:inline-flex; align-items:center; gap:10px; padding:15px 28px;
    border-radius:12px; font-weight:700; color:#fff !important; text-decoration:none;
    background:linear-gradient(135deg, var(--ejm-pink), var(--ejm-ind)); box-shadow:0 14px 34px rgba(236,72,153,.4); }
  #main-content .sr-page .try-demo .demo-note { margin:18px auto 0; font-size:.95rem; }

  @media (max-width:980px){
    .sr-stats { grid-template-columns:repeat(2,1fr); }
    .sr-grid3 { grid-template-columns:1fr 1fr; }
  }
  @media (max-width:820px){
    .sr-hero { padding:40px 22px 34px; }
    .sr-hero-grid, .sr-steps, .sr-grid, .sr-grid3, .sr-faq { grid-template-columns:1fr; }
    .sr-qa:last-child:nth-child(odd) { grid-column:auto; }
    #main-content .sr-page .try-demo { padding:40px 22px; }
    .sr-sec-head { margin:46px 0 22px; }
  }
  @media (max-width:480px){ .sr-ctas a { width:100%; justify-content:center; } }
</style>

<div class="sr-page">

<div class="sr-hero">
  <div class="sr-hero-grid">
    <div>
      <span class="sr-eyebrow"><i class="fas fa-hand-pointer"></i> Song requests</span>
      <h1>Let the Room <span class="sr-grad">Pick the Music</span></h1>
      <p class="sr-lead">Your customers request songs from their own phone - from the venue's QR code in any phone browser, or the free eJukebox Request app. They pick the music. You stay in control of what plays.</p>
      <div class="sr-ctas">
        <a class="sr-btn" href="/contact/"><i class="fas fa-champagne-glasses"></i> Get it for your venue</a>
        <a class="sr-btn-ghost" href="/ejukebox-apps.html#request"><i class="fas fa-mobile-screen-button"></i> The Request app</a>
      </div>
      <ul class="sr-ticks">
        <li><i class="fas fa-circle-check"></i> No app needed - any phone browser works</li>
        <li><i class="fas fa-circle-check"></i> You choose what can be requested, and how often</li>
        <li><i class="fas fa-circle-check"></i> Licensed, family-friendly library with no explicit lyrics</li>
      </ul>
    </div>
    <div>{% include app-fan.html left="request-ai-search" center="request-home" right="request-voice" size="tight" eager="1" %}</div>
  </div>
</div>

<div class="sr-stats">
  <div class="sr-stat"><b>No app</b><span>The QR code opens in any phone's browser</span></div>
  <div class="sr-stat"><b>30 seconds</b><span>Preview any song before requesting it</span></div>
  <div class="sr-stat"><b>Help me pick</b><span>Describe the mood, get songs to choose from</span></div>
  <div class="sr-stat"><b>Per hour</b><span>Request limits for each person, set by you</span></div>
</div>

<div class="sr-sec-head">
  <span class="sr-kick">How it works</span>
  <h2>Scan, pick, and watch it come up</h2>
  <p>QR code song requests take a customer about a minute, and nobody has to queue at a jukebox or flag down a staff member.</p>
</div>
<div class="sr-steps">
  <div class="sr-step"><span class="sr-num">1</span><i class="fas fa-qrcode sr-step-ico"></i><h3>Scan the code</h3><p>QR codes on the tables, the bar or the wall open your venue's request page in the phone's browser - or the eJukebox Request app if they have it.</p></div>
  <div class="sr-step"><span class="sr-num">2</span><i class="fas fa-magnifying-glass sr-step-ico"></i><h3>Find a song</h3><p>Search by artist or title, hear a 30-second preview, or tap <strong>Help me pick</strong> and describe it: "80s Aussie pub rock", "something for a 50th".</p></div>
  <div class="sr-step"><span class="sr-num">3</span><i class="fas fa-list-ol sr-step-ico"></i><h3>Watch it come up</h3><p>The coming-up list shows the real playing order, so everyone can see exactly where their song sits.</p></div>
</div>

{% include photo-band.html src="/assets/images/stock/smartphone-photo.jpg" alt="A phone held up in a crowded, glowing room" src2="/assets/images/stock/party-crowd-sunset.jpg" alt2="Friends celebrating at sunset" src3="/assets/images/stock/concert-phone.jpg" alt3="A phone filming a night out" caption="The people who never ask for a song finally do." %}

<div class="sr-sec-head">
  <span class="sr-kick">You stay in charge</span>
  <h2>Requests on your terms</h2>
  <p>Handing the music to the room only works if you set the rules. These are yours, from the eJukebox Admin app.</p>
</div>
<div class="sr-grid">
  <div class="sr-card"><span class="sr-ico"><i class="fas fa-sliders"></i></span><h3>Choose what can be requested</h3><p>Open the whole library, or lock requests to the channel that is playing so the room's sound stays right.</p></div>
  <div class="sr-card"><span class="sr-ico b"><i class="fas fa-scale-balanced"></i></span><h3>Set fair limits</h3><p>Cap how many songs each person can request every hour, so one table cannot take over the night.</p></div>
  <div class="sr-card"><span class="sr-ico c"><i class="fas fa-list-check"></i></span><h3>Steer the queue</h3><p>Hold a request, remove one that does not belong, or move it to the top - from the <a href="/admin-app/">eJukebox Admin app</a>, without leaving the bar.</p></div>
  <div class="sr-card"><span class="sr-ico"><i class="fas fa-pause"></i></span><h3>Pause any time</h3><p>Switch requests off for speeches, a band or a quiet dinner service, and back on when you are ready.</p></div>
</div>

<div class="sr-sec-head">
  <span class="sr-kick">Discovery</span>
  <h2>Nobody needs to know the song name</h2>
</div>
<div class="sr-grid3">
  <div class="sr-card"><span class="sr-ico"><i class="fas fa-wand-magic-sparkles"></i></span><h3>Help me pick</h3><p>Ask for music the way you would ask a person. It comes back with songs from your venue's library to browse and request.</p><span class="sr-add sr-inc"><i class="fas fa-check"></i> Core and Complete</span></div>
  <div class="sr-card"><span class="sr-ico b"><i class="fas fa-headphones"></i></span><h3>30-second previews</h3><p>Tap any track for a quick preview before requesting it. Try before you queue.</p><span class="sr-add sr-inc"><i class="fas fa-check"></i> Core and Complete</span></div>
  <div class="sr-card"><span class="sr-ico c"><i class="fas fa-map-location-dot"></i></span><h3>Playing across the country</h3><p>A live grid of what is playing in eJukebox venues around Australia, filtered to your venue's style. Tap a track to request it.</p><span class="sr-add sr-inc"><i class="fas fa-check"></i> Core and Complete</span></div>
</div>

<div class="sr-sec-head">
  <span class="sr-kick">Make it bigger</span>
  <h2>Add-ons that turn requests into a show</h2>
  <p>Start with requests, then add the extras that suit your room. <a href="/products.html">See plans &amp; pricing</a>.</p>
</div>
<div class="sr-grid">
  <div class="sr-card"><span class="sr-ico"><i class="fas fa-microphone-lines"></i></span><h3>Voice dedications</h3><p>Customers record a short shout-out that plays right before their song and blends into the intro, like a radio DJ - checked before it airs.</p><span class="sr-add">Add-on</span><a class="sr-more" href="/voice-announcements/">More on voice features &rarr;</a></div>
  <div class="sr-card"><span class="sr-ico b"><i class="fas fa-image"></i></span><h3>Photos on the big screen</h3><p>Customers send a photo from their phone to your venue's screens, screened automatically first.</p><span class="sr-add">Add-on</span><a class="sr-more" href="/in-venue-screens/">More on in-venue screens &rarr;</a></div>
  <div class="sr-card"><span class="sr-ico c"><i class="fab fa-spotify"></i></span><h3>Spotify playlists</h3><p>Guests sign in with Spotify and request from their own playlists, matched to your library.</p><span class="sr-add">Add-on</span><a class="sr-more" href="/spotify-integration/">More on Spotify integration &rarr;</a></div>
  <div class="sr-card"><span class="sr-ico"><i class="fas fa-display"></i></span><h3>A request screen on the wall</h3><p>A touchscreen booth where customers walk up, browse and pick a song - no phone needed.</p><span class="sr-add">Add-on</span><a class="sr-more" href="/in-venue-screens/">More on in-venue screens &rarr;</a></div>
</div>

<div class="sr-sec-head">
  <span class="sr-kick">Questions</span>
  <h2>What venues ask first</h2>
</div>
<div class="sr-faq">
  <div class="sr-qa"><h3>Do customers need to download an app?</h3><p>No. The QR code opens your venue's request page in any phone's browser. Customers who like apps can use the free <a href="/ejukebox-apps.html#request">eJukebox Request</a> app instead.</p></div>
  <div class="sr-qa"><h3>Can someone request something inappropriate?</h3><p>The library is licensed and family-friendly, with no explicit lyrics. You also choose whether requests come from the whole library or just the current channel, and you can remove anything from the queue.</p></div>
  <div class="sr-qa"><h3>Can one table hog the music?</h3><p>Not if you do not want them to. Set how many songs each person can request every hour.</p></div>
  <div class="sr-qa"><h3>Can people request from home?</h3><p>In the eJukebox Request app, requests are only accepted while the customer is at the venue. From anywhere else they can see what is playing, but not request.</p></div>
  <div class="sr-qa"><h3>What does it cost?</h3><p>Song requests, previews and Help me pick come with Core and Complete. The extras above are add-ons. <a href="/products.html">See plans &amp; pricing</a>.</p></div>
</div>

<div class="try-demo">
  <div class="demo-content">
    <h2><i class="fas fa-music"></i> Hand the room the jukebox</h2>
    <p>Tell us about your venue and we will show you song requests running in a room like yours.</p>
    <a href="/contact/" class="demo-link">
      <i class="fas fa-comments"></i>
      Tell us about your venue
    </a>
    <p class="demo-note">Or <a href="/products.html">see plans &amp; pricing</a> for your venue.</p>
  </div>
</div>

</div>
