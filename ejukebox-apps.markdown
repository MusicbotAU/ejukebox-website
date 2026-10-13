---
layout: default
title: eJukebox Apps for Android & iOS
description: Download eJukebox Admin for iPhone and Android, the free staff app that runs your venue's music, requests, announcements and screens from your phone.
schema_app:
  name: eJukebox Apps
  description: The eJukebox apps for iPhone and Android. eJukebox Admin is the staff app - run the music, requests, announcements, screens and team from your phone.
  category: BusinessApplication
  os: [Android, iOS]
last_reviewed: 2026-10-09
---

<style>
  /* ---------- Download the apps. Prefixed dl- to avoid collisions with site styles. ---------- */
  .dl-hero { position:relative; overflow:hidden; border-radius:var(--ejm-r);
    background: radial-gradient(120% 130% at 85% 0%, #1d2a52 0%, #1a1a2e 46%, #14142a 100%);
    border:1.5px solid var(--ejm-line-2); padding:52px 38px 46px; margin:8px 0 34px; }
  .dl-hero::after { content:""; position:absolute; inset:auto -10% -55% -10%; height:60%;
    background: radial-gradient(60% 100% at 50% 0%, rgba(34,211,238,.16), transparent 70%); pointer-events:none; }
  .dl-hero-grid { display:grid; grid-template-columns:1.1fr .9fr; gap:40px; align-items:center; position:relative; z-index:1; }
  .dl-eyebrow { display:inline-flex; align-items:center; gap:8px; font-size:.78rem; font-weight:800;
    letter-spacing:.14em; text-transform:uppercase; color:var(--ejm-cyan);
    background:rgba(34,211,238,.10); border:1px solid rgba(34,211,238,.28);
    padding:7px 14px; border-radius:999px; margin-bottom:18px; }
  .dl-grad { background:linear-gradient(95deg, var(--ejm-cyan), var(--ejm-ind-lt) 55%, var(--ejm-pink));
    -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; }
  .dl-hero p { font-size:1.12rem; line-height:1.6; margin:0 0 12px; max-width:52ch; }
  .dl-hero p.dl-fine { font-size:.92rem; margin:0; }

  /* ---- store badges (official Apple and Google artwork) ---- */
  .dl-badges { display:flex; flex-wrap:wrap; align-items:center; gap:14px; margin:24px 0 16px; }
  .dl-badges a { display:inline-block; line-height:0; border-radius:10px; transition:transform .2s ease, box-shadow .2s ease; }
  .dl-badges a:hover { transform:translateY(-2px); box-shadow:0 10px 24px rgba(0,0,0,.45); }
  .dl-badges img { display:block; width:auto; height:52px; }
  /* The App Store PNG's lettering and outline are transparent cut-outs, so on a dark page
     they show the background. A white backing clipped to the badge's corners restores them. */
  .dl-badges a.dl-as { background:#fff; border-radius:6px; }
  .dl-badges a.dl-gp img { height:56px; }
  /* On phones the theme gives every image a 15px top and bottom margin, which would
     show as a white frame round the App Store badge. */
  #main-content .dl-badges img { margin:0 !important; }

  /* ---- section heads ---- */
  .dl-sec-head { margin:46px 0 22px; max-width:74ch; }
  .dl-sec-head p { font-size:1.04rem; line-height:1.65; margin:0; }

  /* ---- three steps ---- */
  .dl-steps { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
  .dl-step { position:relative; background:var(--ejm-card); border:1.5px solid var(--ejm-line);
    border-radius:var(--ejm-r); padding:30px 24px 24px; }
  .dl-num { display:grid; place-items:center; width:42px; height:42px; margin-bottom:16px; border-radius:50%;
    font-family:'Poppins',sans-serif; font-size:1.05rem; font-weight:700; color:#fff;
    background:linear-gradient(135deg,var(--ejm-ind),var(--ejm-pink)); box-shadow:0 8px 22px rgba(99,102,241,.35); }
  .dl-step p { font-size:.96rem; line-height:1.62; margin:0; }
  .dl-step strong { color:var(--ejm-ink); }

  /* ---- what it does ---- */
  .dl-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:18px; }
  .dl-card { background:var(--ejm-card); border:1.5px solid var(--ejm-line); border-radius:var(--ejm-r); padding:24px 22px; }
  .dl-card > i { display:block; margin-bottom:12px; font-size:1.35rem; color:var(--ejm-ind-lt); }
  .dl-card p { font-size:.95rem; line-height:1.6; margin:0; }
  .dl-more { display:flex; flex-direction:column; justify-content:center; gap:10px;
    background:linear-gradient(155deg, rgba(34,211,238,.14), rgba(99,102,241,.12)), var(--ejm-card);
    border-color:rgba(34,211,238,.32); }
  .dl-more a { font-weight:700; font-size:1.02rem; }

  /* ---- customers need no app ---- */
  .dl-note { display:flex; gap:18px; align-items:flex-start; margin:30px 0 0; padding:24px 26px;
    background:var(--ejm-card-2); border:1.5px solid var(--ejm-line); border-radius:var(--ejm-r); }
  .dl-note > i { margin-top:3px; font-size:1.6rem; color:var(--ejm-cyan); }
  .dl-note p { margin:0; font-size:.98rem; line-height:1.62; }
  .dl-note strong { color:var(--ejm-ink); }

  /* ---- faq ---- */
  .dl-faq { display:grid; grid-template-columns:repeat(2,1fr); gap:14px; }
  .dl-qa { background:var(--ejm-card); border:1.5px solid var(--ejm-line); border-radius:var(--ejm-r); padding:22px 24px; }
  .dl-qa p { font-size:.94rem; line-height:1.62; margin:0; }

  /* The theme sets #main-content h2/h3 size, colour and margins with !important and an
     id selector, so headings inside cards and bands have to answer in kind. */
  #main-content .dl-sec-head h2 { margin:0 0 10px !important; }
  #main-content .dl-step h3 { margin:0 0 9px !important; font-size:1.14rem !important; }
  #main-content .dl-card h3 { margin:0 0 8px !important; font-size:1.08rem !important; }
  #main-content .dl-qa h3 { margin:0 0 8px !important; font-size:1.04rem !important; }

  @media (max-width:980px){
    .dl-steps, .dl-grid { grid-template-columns:repeat(2,1fr); }
  }
  @media (max-width:820px){
    .dl-hero { padding:38px 24px 34px; }
    .dl-hero-grid { grid-template-columns:1fr; gap:34px; }
    .dl-steps, .dl-grid, .dl-faq { grid-template-columns:1fr; }
    .dl-note { flex-direction:column; gap:10px; }
  }
</style>

<div class="dl-hero">
  <div class="dl-hero-grid">
    <div>
      <span class="dl-eyebrow"><i class="fas fa-download"></i> Download the apps</span>
      <h1>Download the eJukebox App for <span class="dl-grad">iPhone &amp; Android</span></h1>
      <p><strong>eJukebox Admin</strong> is the free staff app for eJukebox venues. Run the music, requests, announcements, screens and your team, all from your phone.</p>
      <div class="dl-badges">
        <a class="dl-as" href="https://apps.apple.com/au/app/ejukebox-admin/id6804389405" target="_blank" rel="noopener"><img src="/blobs/AppleAppStoreLogo.png" alt="Download eJukebox Admin on the App Store"></a>
        <a class="dl-gp" href="https://play.google.com/store/apps/details?id=au.com.ejukebox.media" target="_blank" rel="noopener"><img src="/blobs/GooglePlayStoreLogo.png" alt="Get eJukebox Admin on Google Play"></a>
      </div>
      <p class="dl-fine">iPhone needs iOS 15.1 or later. The iPhone app is not listed in App Store search, so use the button above.</p>
    </div>
    <div>
      {% include admin-phone.html %}
    </div>
  </div>
</div>

<div class="dl-sec-head">
  <h2>Up and running in three steps</h2>
  <p>Download it, find your venue, sign in. That is all there is to it.</p>
</div>
<div class="dl-steps">
  <div class="dl-step">
    <span class="dl-num">1</span>
    <h3>Download the app</h3>
    <p>Tap the button for your phone. <strong>On iPhone, use the button on this page</strong>, because the app is not listed in App Store search.</p>
  </div>
  <div class="dl-step">
    <span class="dl-num">2</span>
    <h3>Find your venue</h3>
    <p>Open the app and search for your venue by name, or type in your venue code.</p>
  </div>
  <div class="dl-step">
    <span class="dl-num">3</span>
    <h3>Sign in</h3>
    <p>Continue with Google, Microsoft or Apple, or use the venue password. First time with your own account? Tap <strong>Ask to be added</strong> and a manager approves you.</p>
  </div>
</div>

<div class="dl-sec-head">
  <h2>What your team can do with it</h2>
</div>
<div class="dl-grid">
  <div class="dl-card">
    <i class="fas fa-gauge-high"></i>
    <h3>See the room at a glance</h3>
    <p>What is playing, what is coming up next, and whether the player is healthy.</p>
  </div>
  <div class="dl-card">
    <i class="fas fa-sliders"></i>
    <h3>Steer the music</h3>
    <p>Skip a track, hold a request or bump it to the top, reorder what is next and switch channels. Or just ask in plain English.</p>
  </div>
  <div class="dl-card">
    <i class="fas fa-microphone-lines"></i>
    <h3>Talk to the room</h3>
    <p>Record an announcement, type one for the announcer voice to read, go live on the speakers, or schedule it for later.</p>
  </div>
  <div class="dl-card">
    <i class="fas fa-tv"></i>
    <h3>Run the screens</h3>
    <p>Put photos and slides up on your venue's screens, and approve patron photos.</p>
  </div>
  <div class="dl-card">
    <i class="fas fa-user-group"></i>
    <h3>Look after your team</h3>
    <p>Invite staff, approve access requests, and choose who can manage the team.</p>
  </div>
  <div class="dl-card dl-more">
    <p>Some features depend on your eJukebox plan.</p>
    <a href="/admin-app/">See everything eJukebox Admin does &rarr;</a>
  </div>
</div>

<div class="dl-note">
  <i class="fas fa-qrcode"></i>
  <p><strong>Your customers do not need an app.</strong> They scan the code at your venue and request songs from their phone's browser, with nothing to download. <a href="/ejukebox-request-portal.html">How song requests work</a></p>
</div>

<div class="dl-sec-head">
  <h2>Trouble getting in?</h2>
</div>
<div class="dl-faq">
  <div class="dl-qa">
    <h3>I can't find it in the App Store</h3>
    <p>The iPhone app goes straight to eJukebox venues, so App Store search will not show it. Use the App Store button on this page and it opens directly.</p>
  </div>
  <div class="dl-qa">
    <h3>It says my account isn't set up at the venue yet</h3>
    <p>Your sign-in worked, your account just has not been added to the venue. Tap <strong>Ask to be added</strong> and a manager approves it.</p>
  </div>
  <div class="dl-qa">
    <h3>Which phones does it work on?</h3>
    <p>iPhone, on iOS 15.1 or later, and Android phones.</p>
  </div>
  <div class="dl-qa">
    <h3>Does it cost anything?</h3>
    <p>The app is free for eJukebox venues. What it can do follows your venue's plan. <a href="/admin-app/">See what is included</a>.</p>
  </div>
</div>

<div class="try-demo">
  <div class="demo-content">
    <h2><i class="fas fa-mobile-screen-button"></i> Not on eJukebox yet?</h2>
    <p>eJukebox Admin is free for eJukebox venues. Tell us about yours and we will show you what it would do for your room.</p>
    <a href="/contact/" class="demo-link">
      <i class="fas fa-comments"></i>
      Tell us about your venue
    </a>
    <p class="demo-note">Or <a href="/products.html">see plans &amp; pricing</a> for your venue.</p>
  </div>
</div>
