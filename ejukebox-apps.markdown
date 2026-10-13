---
layout: default
title: eJukebox Apps for Android & iOS
description: The eJukebox apps for iPhone and Android - Request puts the jukebox in your customers' hands, Admin lets your staff run the room from their phone.
schema_app:
  name: eJukebox Apps
  description: The eJukebox apps for iPhone and Android. eJukebox Request lets customers see what is playing and request songs at the venue; eJukebox Admin lets staff run the music, announcements, screens and team.
  category: BusinessApplication
  os: [Android, iOS]
last_reviewed: 2026-10-13
---

<style>
  /* ---------- Download the apps. Prefixed dl- to avoid collisions with site styles. ---------- */

  /* The theme forces #main-content h1/h2/h3 sizes, colours and margins, and every p colour,
     with !important and an id selector - so copy inside .dl-page answers in kind. */
  #main-content .dl-page p { color:var(--ejm-soft) !important; }
  #main-content .dl-page strong { color:var(--ejm-ink); }
  #main-content .dl-page h2 { margin:0 0 12px !important; font-size:clamp(1.6rem,3vw,2.2rem) !important;
    line-height:1.15; color:var(--ejm-ink) !important; letter-spacing:-.5px; }
  #main-content .dl-page h3 { margin:0 0 8px !important; font-size:1.08rem !important; line-height:1.3; color:var(--ejm-ink) !important; }

  /* ---- hero ---- */
  .dl-hero { position:relative; overflow:hidden; border-radius:22px;
    background: radial-gradient(110% 120% at 80% 10%, #2b2350 0%, #18162e 45%, #121225 100%);
    border:1.5px solid var(--ejm-line-2); padding:56px 44px 50px; margin:8px 0 30px; box-shadow:0 40px 90px rgba(0,0,0,.45); }
  .dl-hero::before { content:""; position:absolute; width:560px; height:560px; right:-160px; top:-200px; border-radius:50%;
    background:radial-gradient(circle, rgba(236,72,153,.22), transparent 65%); pointer-events:none; }
  .dl-hero::after { content:""; position:absolute; width:480px; height:480px; right:120px; bottom:-300px; border-radius:50%;
    background:radial-gradient(circle, rgba(34,211,238,.16), transparent 65%); pointer-events:none; }
  .dl-hero-grid { display:grid; grid-template-columns:1fr 1fr; gap:36px; align-items:center; position:relative; z-index:1; }
  .dl-eyebrow { display:inline-flex; align-items:center; gap:8px; font-size:.78rem; font-weight:800;
    letter-spacing:.14em; text-transform:uppercase; color:var(--ejm-cyan);
    background:rgba(34,211,238,.10); border:1px solid rgba(34,211,238,.28);
    padding:7px 14px; border-radius:999px; margin-bottom:18px; }
  .dl-grad { background:linear-gradient(95deg, var(--ejm-amber), var(--ejm-pink) 50%, var(--ejm-cyan));
    -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; }
  #main-content .dl-page .dl-lead { font-size:1.14rem; line-height:1.65; margin:0 0 24px; max-width:50ch; }
  .dl-jump { display:flex; flex-wrap:wrap; gap:12px; }
  #main-content .dl-jump a { display:inline-flex; align-items:center; gap:10px; padding:13px 20px; border-radius:12px;
    font-weight:700; text-decoration:none; transition:transform .2s ease, box-shadow .2s ease; }
  #main-content .dl-jump a:hover { transform:translateY(-2px); text-shadow:none; }
  #main-content .dl-jump .dl-j1 { color:#fff !important; background:linear-gradient(135deg,var(--ejm-pink),var(--ejm-ind)); box-shadow:0 12px 28px rgba(236,72,153,.32); }
  #main-content .dl-jump .dl-j2 { color:var(--ejm-ink) !important; background:rgba(34,211,238,.10); border:1.5px solid rgba(34,211,238,.35); }
  .dl-jump small { display:block; font-size:.72rem; font-weight:600; opacity:.85; }

  /* two phones, customer app in front */
  .dl-duo { position:relative; display:flex; justify-content:center; align-items:flex-start; min-height:560px; }
  .dl-duo .dl-front { position:relative; z-index:2; width:280px; transform:rotate(-4deg); margin-right:-70px; }
  .dl-duo .dl-back { position:relative; z-index:1; width:270px; transform:rotate(5deg) translateY(46px); opacity:.92; }
  .dl-duo .rqp-phone, .dl-duo .aph-phone { width:100%; }
  .dl-tag { position:absolute; z-index:3; padding:6px 12px; border-radius:999px; font-size:.7rem; font-weight:800;
    letter-spacing:.08em; text-transform:uppercase; white-space:nowrap; box-shadow:0 8px 20px rgba(0,0,0,.4); }
  .dl-tag.cust { left:-6px; top:-14px; color:#fff; background:linear-gradient(135deg,var(--ejm-pink),var(--ejm-ind)); }
  .dl-tag.staff { right:-6px; top:30px; color:#06232a; background:var(--ejm-cyan); }

  /* ---- app sections ---- */
  .dl-app { display:grid; grid-template-columns:1.15fr .85fr; gap:34px; align-items:center; margin:0 0 26px;
    padding:40px 40px; border-radius:22px; scroll-margin-top:90px; }
  .dl-app.cust { background:linear-gradient(160deg, rgba(236,72,153,.12), rgba(99,102,241,.06)), var(--ejm-card);
    border:1.5px solid rgba(236,72,153,.30); }
  .dl-app.staff { background:linear-gradient(160deg, rgba(34,211,238,.10), rgba(99,102,241,.06)), var(--ejm-card);
    border:1.5px solid rgba(34,211,238,.28); }
  .dl-who { display:inline-flex; align-items:center; gap:8px; margin-bottom:14px; padding:6px 13px; border-radius:999px;
    font-size:.74rem; font-weight:800; letter-spacing:.12em; text-transform:uppercase; }
  .dl-app.cust .dl-who { color:#f9a8d4; background:rgba(236,72,153,.12); border:1px solid rgba(236,72,153,.32); }
  .dl-app.staff .dl-who { color:var(--ejm-cyan); background:rgba(34,211,238,.10); border:1px solid rgba(34,211,238,.30); }
  #main-content .dl-page .dl-app-lead { font-size:1.06rem; line-height:1.65; margin:0 0 18px; }
  .dl-feats { list-style:none; margin:0 0 22px; padding:0; display:grid; gap:12px; }
  .dl-feats li { display:grid; grid-template-columns:36px 1fr; gap:12px; align-items:start; margin:0; }
  .dl-feats li > i { display:grid; place-items:center; width:36px; height:36px; border-radius:10px; font-size:.9rem; color:#fff; }
  .dl-app.cust .dl-feats li > i { background:linear-gradient(135deg,var(--ejm-pink),var(--ejm-ind)); }
  .dl-app.staff .dl-feats li > i { background:linear-gradient(135deg,var(--ejm-cyan),var(--ejm-ind)); }
  .dl-feats b { display:block; color:var(--ejm-ink); font-size:.98rem; margin-bottom:2px; }
  .dl-feats span { display:block; color:var(--ejm-soft); font-size:.92rem; line-height:1.55; }
  .dl-side { padding:26px 24px; border-radius:18px; background:rgba(10,10,22,.55); border:1px solid var(--ejm-line-2); text-align:center; }
  .dl-side .dl-icon { display:grid; place-items:center; width:64px; height:64px; margin:0 auto 14px; border-radius:18px; font-size:1.6rem; color:#fff; }
  .dl-app.cust .dl-icon { background:linear-gradient(135deg,var(--ejm-amber),var(--ejm-pink)); }
  .dl-app.staff .dl-icon { background:linear-gradient(135deg,var(--ejm-cyan),var(--ejm-ind)); }
  .dl-side .dl-name { font-family:'Poppins',sans-serif; font-size:1.25rem; font-weight:700; color:var(--ejm-ink); margin-bottom:4px; }
  #main-content .dl-page .dl-side p { font-size:.88rem; line-height:1.55; margin:0 0 16px; }
  #main-content .dl-page .dl-side p.dl-fine { margin:14px 0 0; font-size:.82rem; }

  /* ---- store badges (official Apple and Google artwork) ---- */
  .dl-badges { display:flex; flex-direction:column; align-items:center; gap:10px; }
  .dl-badges a { display:inline-block; line-height:0; border-radius:10px; transition:transform .2s ease, box-shadow .2s ease; }
  .dl-badges a:hover { transform:translateY(-2px); box-shadow:0 10px 24px rgba(0,0,0,.45); }
  .dl-badges img { display:block; width:auto; height:48px; }
  /* The App Store PNG's lettering and outline are transparent cut-outs, so on a dark page
     they show the background. A white backing clipped to the badge's corners restores them. */
  .dl-badges a.dl-as { background:#fff; border-radius:6px; }
  .dl-badges a.dl-gp img { height:52px; }
  /* On phones the theme gives every image a 15px top and bottom margin. */
  #main-content .dl-badges img { margin:0 !important; }
  .dl-more { display:inline-block; margin-top:4px; font-weight:700; }

  /* ---- also from eJukebox ---- */
  .dl-music { display:grid; grid-template-columns:auto 1fr auto; gap:24px; align-items:center; margin:8px 0 0;
    padding:26px 30px; border-radius:18px; background:linear-gradient(160deg, rgba(245,166,35,.10), rgba(236,72,153,.05)), var(--ejm-card-2);
    border:1.5px solid rgba(245,166,35,.28); }
  .dl-music .dl-icon { display:grid; place-items:center; width:58px; height:58px; border-radius:16px; font-size:1.4rem; color:#fff;
    background:linear-gradient(135deg,var(--ejm-amber),var(--ejm-pink)); }
  .dl-music .dl-kick { font-size:.72rem; font-weight:800; letter-spacing:.12em; text-transform:uppercase; color:var(--ejm-amber); margin-bottom:4px; }
  #main-content .dl-page .dl-music p { margin:0; font-size:.95rem; line-height:1.55; }
  .dl-music .dl-badges { flex-direction:row; }
  .dl-music .dl-badges img { height:42px; }
  .dl-music .dl-badges a.dl-gp img { height:46px; }

  /* ---- section heads + faq ---- */
  .dl-sec-head { margin:56px 0 22px; max-width:74ch; }
  .dl-faq { display:grid; grid-template-columns:repeat(2,1fr); gap:14px; }
  .dl-qa { background:var(--ejm-card); border:1.5px solid var(--ejm-line); border-radius:16px; padding:22px 24px; }
  .dl-qa:last-child:nth-child(odd) { grid-column:1 / -1; }
  #main-content .dl-page .dl-qa p { font-size:.94rem; line-height:1.62; margin:0; }

  /* ---- closing call to action (site-standard try-demo block, dressed for this page) ---- */
  #main-content .dl-page .try-demo { position:relative; overflow:hidden; margin:60px 0 10px; padding:52px 40px; text-align:center;
    border-radius:22px; border:1.5px solid rgba(34,211,238,.30);
    background:radial-gradient(70% 120% at 50% 0%, rgba(99,102,241,.32), transparent 70%), linear-gradient(155deg,#1f2148,#141428); }
  #main-content .dl-page .try-demo h2 i { color:var(--ejm-cyan); margin-right:8px; }
  #main-content .dl-page .try-demo p { max-width:60ch; margin:0 auto 24px; font-size:1.06rem; line-height:1.65; }
  #main-content .dl-page .try-demo .demo-link { display:inline-flex; align-items:center; gap:10px; padding:15px 28px;
    border-radius:12px; font-weight:700; color:#fff !important; text-decoration:none;
    background:linear-gradient(135deg, var(--ejm-pink), var(--ejm-ind)); box-shadow:0 14px 34px rgba(236,72,153,.35); }
  #main-content .dl-page .try-demo .demo-note { margin:18px auto 0; font-size:.95rem; }

  @media (max-width:980px){
    .dl-hero-grid { grid-template-columns:1fr; }
    .dl-duo { min-height:auto; margin-top:10px; }
  }
  @media (max-width:860px){
    .dl-hero { padding:40px 22px 34px; }
    .dl-app { grid-template-columns:1fr; padding:30px 22px; gap:24px; }
    .dl-music { grid-template-columns:1fr; text-align:center; justify-items:center; padding:26px 20px; }
    .dl-music .dl-badges { flex-wrap:wrap; justify-content:center; }
    .dl-faq { grid-template-columns:1fr; }
    .dl-qa:last-child:nth-child(odd) { grid-column:auto; }
    #main-content .dl-page .try-demo { padding:40px 22px; }
  }
  @media (max-width:560px){
    .dl-duo .dl-back { display:none; }
    .dl-duo .dl-front { transform:none; margin:0 auto; }
    .dl-tag.cust { left:50%; transform:translateX(-50%); }
    .dl-jump a { width:100%; justify-content:center; }
  }
</style>

<div class="dl-page">

<div class="dl-hero">
  <div class="dl-hero-grid">
    <div>
      <span class="dl-eyebrow"><i class="fas fa-mobile-screen-button"></i> The eJukebox apps</span>
      <h1>Two Apps. <span class="dl-grad">One Great Night.</span></h1>
      <p class="dl-lead"><strong>eJukebox Request</strong> puts the jukebox in your customers' hands. <strong>eJukebox Admin</strong> lets your staff run the room from their phone. Both free, on iPhone and Android.</p>
      <div class="dl-jump">
        <a class="dl-j1" href="#request"><i class="fas fa-music"></i><span>Get eJukebox Request<small>For your customers</small></span></a>
        <a class="dl-j2" href="#admin"><i class="fas fa-sliders"></i><span>Get eJukebox Admin<small>For your staff</small></span></a>
      </div>
    </div>
    <div>
      <div class="dl-duo">
        <div class="dl-front"><span class="dl-tag cust">Customers</span>{% include request-phone.html %}</div>
        <div class="dl-back"><span class="dl-tag staff">Staff</span>{% include admin-phone.html %}</div>
      </div>
    </div>
  </div>
</div>

<div class="dl-app cust" id="request">
  <div>
    <span class="dl-who"><i class="fas fa-users"></i> For your customers</span>
    <h2>eJukebox Request</h2>
    <p class="dl-app-lead">Their phone becomes the jukebox. Customers walk in, see what is playing and pick the next song, all from the app.</p>
    <ul class="dl-feats">
      <li><i class="fas fa-location-dot"></i><div><b>Walk in and you are connected</b><span>The app finds the room. Scan the venue's QR code or type its short code and you are in.</span></div></li>
      <li><i class="fas fa-music"></i><div><b>See what is playing</b><span>The song on now, how long is left, and what is coming up next, live.</span></div></li>
      <li><i class="fas fa-magnifying-glass"></i><div><b>Pick the next song</b><span>Search the venue's library, hear a preview and queue it. Not sure? Tap "Help me pick" and describe the mood.</span></div></li>
      <li><i class="fas fa-microphone"></i><div><b>Add your voice</b><span>Where the venue allows it, record a short dedication that plays right before your song and blends into the intro, like a radio DJ.</span></div></li>
      <li><i class="fas fa-image"></i><div><b>Your photo on the big screen</b><span>Where the venue has switched it on, send a photo from your phone to the venue's screens.</span></div></li>
    </ul>
  </div>
  <div class="dl-side">
    <span class="dl-icon"><i class="fas fa-music"></i></span>
    <div class="dl-name">eJukebox Request</div>
    <p>Free for customers at any venue running eJukebox.</p>
    <div class="dl-badges">
      <a class="dl-as" href="https://apps.apple.com/au/app/ejukebox-request/id6804389497" target="_blank" rel="noopener"><img src="/blobs/AppleAppStoreLogo.png" alt="Download eJukebox Request on the App Store"></a>
      <a class="dl-gp" href="https://play.google.com/store/apps/details?id=au.com.ejukebox.request" target="_blank" rel="noopener"><img src="/blobs/GooglePlayStoreLogo.png" alt="Get eJukebox Request on Google Play"></a>
    </div>
    <p class="dl-fine">Rather not download anything? Customers can scan the venue's code and request from their phone's browser instead.</p>
  </div>
</div>

{% include app-fan.html left="request-ai-picks" center="request-home" right="request-voice" caption="eJukebox Request. Real screens from Club Buffalo, our demo venue." %}

<div class="dl-app staff" id="admin">
  <div>
    <span class="dl-who"><i class="fas fa-user-gear"></i> For your staff</span>
    <h2>eJukebox Admin</h2>
    <p class="dl-app-lead">Run the room from your phone. Everything that matters about the venue's sound, without leaving the floor.</p>
    <ul class="dl-feats">
      <li><i class="fas fa-gauge-high"></i><div><b>The room at a glance</b><span>What is playing, what is next, and whether the player is healthy.</span></div></li>
      <li><i class="fas fa-sliders"></i><div><b>Steer the music</b><span>Skip, hold or reorder requests and switch channels. Or just ask in plain English.</span></div></li>
      <li><i class="fas fa-microphone-lines"></i><div><b>Talk to the room</b><span>Record an announcement, type one for the announcer voice, go live, or schedule it for later.</span></div></li>
      <li><i class="fas fa-tv"></i><div><b>Run the screens</b><span>Put photos and slides on the venue's screens, and approve patron photos.</span></div></li>
      <li><i class="fas fa-user-group"></i><div><b>Look after your team</b><span>Invite staff, approve access requests and choose who manages the team.</span></div></li>
    </ul>
    <a class="dl-more" href="/admin-app/">See everything eJukebox Admin does &rarr;</a>
  </div>
  <div class="dl-side">
    <span class="dl-icon"><i class="fas fa-sliders"></i></span>
    <div class="dl-name">eJukebox Admin</div>
    <p>Free for staff at eJukebox venues. Some features depend on your plan.</p>
    <div class="dl-badges">
      <a class="dl-as" href="https://apps.apple.com/au/app/ejukebox-admin/id6804389405" target="_blank" rel="noopener"><img src="/blobs/AppleAppStoreLogo.png" alt="Download eJukebox Admin on the App Store"></a>
      <a class="dl-gp" href="https://play.google.com/store/apps/details?id=au.com.ejukebox.media" target="_blank" rel="noopener"><img src="/blobs/GooglePlayStoreLogo.png" alt="Get eJukebox Admin on Google Play"></a>
    </div>
    <p class="dl-fine">The iPhone app is not listed in App Store search, so use the button above. Sign in: find your venue, then Google, Microsoft, Apple or the venue password.</p>
  </div>
</div>

<div class="dl-music">
  <span class="dl-icon"><i class="fas fa-radio"></i></span>
  <div>
    <div class="dl-kick">Also from eJukebox</div>
    <p><strong>eJukebox Music</strong> - every radio station in Australia and New Zealand in one free app, each at the best sound it broadcasts. More than 800 stations, with our own eJukebox channels at the top.</p>
  </div>
  <div class="dl-badges">
    <a class="dl-as" href="https://apps.apple.com/au/app/ejukebox-music/id6809090284" target="_blank" rel="noopener"><img src="/blobs/AppleAppStoreLogo.png" alt="Download eJukebox Music on the App Store"></a>
    <a class="dl-gp" href="https://play.google.com/store/apps/details?id=au.com.ejukebox.music" target="_blank" rel="noopener"><img src="/blobs/GooglePlayStoreLogo.png" alt="Get eJukebox Music on Google Play"></a>
  </div>
</div>

{% include app-fan.html left="admin-music-menu" center="admin-voice" right="admin-slides" caption="The Music, Voice and Screen menus in eJukebox Admin. Real screens from Club Buffalo, our demo venue." %}

<div class="dl-sec-head">
  <h2>Which app do I need?</h2>
</div>
<div class="dl-faq">
  <div class="dl-qa">
    <h3>I'm a customer at an eJukebox venue</h3>
    <p>Get <strong>eJukebox Request</strong>. Open it at the venue, scan the code or type the venue's short code, and start picking songs. You can also skip the app and request from your phone's browser.</p>
  </div>
  <div class="dl-qa">
    <h3>I work at an eJukebox venue</h3>
    <p>Get <strong>eJukebox Admin</strong>. Find your venue, sign in, and if it is your first time with your own account, tap <strong>Ask to be added</strong> so a manager can approve you.</p>
  </div>
  <div class="dl-qa">
    <h3>I can't find eJukebox Admin in the App Store</h3>
    <p>The staff app goes straight to eJukebox venues, so App Store search will not show it. Use the App Store button on this page and it opens directly.</p>
  </div>
  <div class="dl-qa">
    <h3>Which phones do they work on?</h3>
    <p>iPhone, on iOS 15.1 or later, and Android phones.</p>
  </div>
  <div class="dl-qa">
    <h3>Do they cost anything?</h3>
    <p>No. Both apps are free to download. Request is free for customers, and what Admin can do follows the venue's eJukebox plan. <a href="/admin-app/">See what is included</a>.</p>
  </div>
</div>

<div class="try-demo">
  <div class="demo-content">
    <h2><i class="fas fa-mobile-screen-button"></i> Want this in your venue?</h2>
    <p>Your customers pick the music, your staff run the room, and nobody leaves the floor. Tell us about your venue and we will show you what eJukebox would do for it.</p>
    <a href="/contact/" class="demo-link">
      <i class="fas fa-comments"></i>
      Tell us about your venue
    </a>
    <p class="demo-note">Or <a href="/products.html">see plans &amp; pricing</a> for your venue.</p>
  </div>
</div>

</div>
