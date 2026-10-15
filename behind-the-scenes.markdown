---
layout: default
title: Behind the Scenes of a Jukebox Installation
description: How eJukebox runs in your venue - a compact player that plays on if the internet drops, updates itself overnight, and alerts us if the music stops.
schema_service: Managed jukebox player installation for Australian venues
service_type: Cloud-managed music player installation and maintenance
last_reviewed: 2026-10-15
howto:
  name: "How eJukebox is set up in your venue"
  description: >-
    From box to music without the fuss: your player arrives set up for your venue, it plugs into your sound system, and the music and the apps take over.
  supply:
    - "Your existing amplifier and speakers"
    - "Power and a wired network connection"
  steps:
    - name: "We set it up first"
      text: >-
        Your player is configured for your venue, your zones and your music before it ever leaves us.
    - name: "Plug it in"
      text: >-
        Power, network and audio. We install it, work with your AV installer if you have one, or send illustrated step-by-step instructions so you can do it yourself - with one-on-one video call support if you need it.
    - name: "Music, and the apps"
      text: >-
        The music starts, your staff sign in to <a href="/admin-app/">eJukebox Admin</a>, and your customers start requesting.
faqs:
  - q: >-
      What equipment do we need?
    a: >-
      Your existing amplifier and speakers, power, and a wired network connection. The compact eJukebox player connects to your sound system and tucks away in a rack, cupboard or office.
  - q: >-
      Who installs it?
    a: >-
      Your choice. We install it, work with your AV installer if you have one, or send illustrated step-by-step instructions so you can do it yourself - with one-on-one video call support if you need it. Either way, your player arrives already set up for your venue, your zones and your music.
  - q: >-
      What happens if the internet goes down?
    a: >-
      The music keeps going. Every player carries the venue's music on board and keeps playing until the connection comes back.
  - q: >-
      How do you know if something goes wrong?
    a: >-
      Every player checks in with us every minute. If the music stops for 30 seconds, our team is alerted on their phones - usually before anyone in the room notices - and almost anything can be fixed remotely.
  - q: >-
      Does the player need maintenance?
    a: >-
      No. Updates and a fresh restart happen overnight while you are closed, and our team sets up, watches and updates every player, so nobody at the venue ever has to manage a computer.
  - q: >-
      Can one player run different music in different areas?
    a: >-
      Yes. One player drives up to four zones - different music in the bar, the bistro and the beer garden.
schema_apps: [admin]
schema_about: [broadcast-automation, audio-processing, sound-reinforcement]
---

<style>
  /* ---------- Behind the scenes. Prefixed bt- to avoid collisions with site styles. ---------- */

  /* The theme forces #main-content h1/h2/h3 sizes, colours and margins, and every p colour,
     with !important and an id selector - so copy inside .bt-page answers in kind. */
  #main-content .bt-page p { color:var(--ejm-soft) !important; }
  #main-content .bt-page strong { color:var(--ejm-ink); }
  #main-content .bt-page h2 { margin:0 0 12px !important; font-size:clamp(1.6rem,3vw,2.25rem) !important;
    line-height:1.15; color:var(--ejm-ink) !important; letter-spacing:-.5px; }
  #main-content .bt-page h3 { margin:0 0 8px !important; font-size:1.1rem !important; line-height:1.3; color:var(--ejm-ink) !important; }

  /* ---- hero ---- */
  .bt-hero { position:relative; overflow:hidden; border-radius:22px; margin:8px 0 34px; padding:56px 44px 50px;
    background: radial-gradient(110% 120% at 85% 0%, #14403f 0%, #142130 45%, #111a24 100%);
    border:1.5px solid rgba(20,184,166,.32); box-shadow:0 40px 90px rgba(0,0,0,.45); }
  .bt-hero::before { content:""; position:absolute; width:520px; height:520px; right:-140px; top:-200px; border-radius:50%;
    background:radial-gradient(circle, rgba(52,211,153,.20), transparent 65%); pointer-events:none; }
  .bt-hero-grid { display:grid; grid-template-columns:1.1fr .9fr; gap:40px; align-items:center; position:relative; z-index:1; }
  .bt-eyebrow { display:inline-flex; align-items:center; gap:8px; font-size:.78rem; font-weight:800;
    letter-spacing:.14em; text-transform:uppercase; color:var(--ejm-green);
    background:rgba(52,211,153,.10); border:1px solid rgba(52,211,153,.3);
    padding:7px 14px; border-radius:999px; margin-bottom:18px; }
  .bt-grad { background:linear-gradient(95deg, var(--ejm-green), var(--ejm-cyan) 55%, var(--ejm-ind-lt));
    -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; }
  #main-content .bt-page .bt-lead { font-size:1.12rem; line-height:1.65; margin:0 0 22px; max-width:54ch; }
  .bt-ticks { list-style:none; margin:0; padding:0; display:grid; gap:8px; }
  .bt-ticks li { display:flex; gap:10px; align-items:center; margin:0; font-size:.95rem; color:var(--ejm-soft); }
  .bt-ticks li i { color:var(--ejm-green); }

  /* status panel - an illustration of what we see, not a screenshot */
  .bt-panel { background:#0b1218; border:1.5px solid rgba(52,211,153,.28); border-radius:18px; padding:20px 20px 16px;
    box-shadow:0 30px 70px rgba(0,0,0,.55), 0 0 50px rgba(52,211,153,.10); }
  .bt-panel-head { display:flex; justify-content:space-between; align-items:center; padding-bottom:12px; margin-bottom:6px;
    border-bottom:1px solid var(--ejm-line); font-size:.74rem; font-weight:800; letter-spacing:.06em; text-transform:uppercase; color:var(--ejm-mut); }
  .bt-live { display:inline-flex; align-items:center; gap:7px; color:var(--ejm-green); }
  .bt-live::before { content:""; width:8px; height:8px; border-radius:50%; background:var(--ejm-green);
    box-shadow:0 0 0 0 rgba(52,211,153,.7); animation:btPulse 2s infinite; }
  @keyframes btPulse { 70%{box-shadow:0 0 0 9px rgba(52,211,153,0);} 100%{box-shadow:0 0 0 0 rgba(52,211,153,0);} }
  .bt-row { display:grid; grid-template-columns:34px 1fr auto; gap:12px; align-items:center; padding:11px 0;
    border-bottom:1px solid rgba(255,255,255,.05); animation:btIn .6s ease-out both; }
  .bt-row:last-of-type { border-bottom:none; }
  .bt-row.d2{animation-delay:.2s;} .bt-row.d3{animation-delay:.4s;} .bt-row.d4{animation-delay:.6s;} .bt-row.d5{animation-delay:.8s;}
  @keyframes btIn { from{opacity:0; transform:translateY(10px);} to{opacity:1; transform:none;} }
  .bt-row > i { display:grid; place-items:center; width:34px; height:34px; border-radius:10px; font-size:.85rem; color:#fff;
    background:linear-gradient(135deg,#14b8a6,#22d3ee); }
  .bt-k { font-size:.84rem; font-weight:700; color:var(--ejm-ink); }
  .bt-v { font-size:.76rem; color:var(--ejm-mut); margin-top:2px; }
  .bt-ok { padding:4px 10px; border-radius:999px; font-size:.64rem; font-weight:800; letter-spacing:.06em; text-transform:uppercase;
    color:var(--ejm-green); background:rgba(52,211,153,.12); border:1px solid rgba(52,211,153,.32); white-space:nowrap; }

  /* ---- section heads ---- */
  .bt-sec-head { margin:60px 0 24px; max-width:76ch; }
  .bt-kick { display:block; font-size:.78rem; font-weight:800; letter-spacing:.16em; text-transform:uppercase; color:var(--ejm-green); margin-bottom:10px; }
  #main-content .bt-page .bt-sec-head p { font-size:1.06rem; line-height:1.65; margin:0; }

  /* ---- what sits in the venue ---- */
  .bt-venue { display:grid; grid-template-columns:.9fr 1.1fr; gap:24px; align-items:stretch; }
  .bt-photo { position:relative; min-height:360px; border-radius:18px; overflow:hidden; border:1.5px solid var(--ejm-line); }
  .bt-photo img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; margin:0 !important; }
  .bt-photo span { position:absolute; left:16px; bottom:14px; padding:7px 13px; border-radius:999px; font-size:.8rem; font-weight:700;
    color:#fff; background:rgba(10,10,22,.72); backdrop-filter:blur(4px); }
  .bt-grid2 { display:grid; grid-template-columns:1fr 1fr; gap:16px; }
  .bt-card { padding:24px 22px; border-radius:18px; background:linear-gradient(165deg, var(--ejm-card-2), var(--ejm-card)); border:1.5px solid var(--ejm-line);
    transition:border-color .25s ease, transform .25s ease; }
  .bt-card:hover { border-color:rgba(52,211,153,.4); transform:translateY(-3px); }
  .bt-ico { display:grid; place-items:center; width:48px; height:48px; margin-bottom:14px; border-radius:13px; font-size:1.15rem; color:#fff;
    background:linear-gradient(135deg,#14b8a6,#6366f1); box-shadow:0 10px 24px rgba(0,0,0,.3); }
  #main-content .bt-page .bt-card p { margin:0; font-size:.95rem; line-height:1.62; }

  /* ---- never stops (band) ---- */
  .bt-band { margin:60px 0 0; padding:46px 40px; border-radius:22px;
    background:radial-gradient(80% 120% at 0% 0%, rgba(52,211,153,.16), transparent 60%), linear-gradient(160deg,#122326,#101a22);
    border:1.5px solid rgba(52,211,153,.28); }
  .bt-band-head { max-width:70ch; margin-bottom:26px; }
  .bt-grid3 { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; }
  .bt-band .bt-card { background:rgba(8,14,18,.55); }
  .bt-big { display:block; font-family:'Poppins',sans-serif; font-size:2rem; line-height:1.05; margin-bottom:8px;
    background:linear-gradient(95deg, var(--ejm-green), var(--ejm-cyan)); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; }

  /* ---- quote ---- */
  .bt-quote { display:grid; grid-template-columns:auto 1fr; gap:22px; align-items:center; margin:60px 0 0; padding:32px 36px; border-radius:20px;
    background:linear-gradient(160deg, var(--ejm-card-2), var(--ejm-card)); border:1.5px solid var(--ejm-line-2); }
  .bt-quote > i { font-size:2.4rem; color:var(--ejm-pink); opacity:.8; }
  #main-content .bt-page .bt-quote p { margin:0 0 10px; font-size:1.14rem; line-height:1.6; color:var(--ejm-ink) !important; font-weight:500; }
  .bt-by { font-size:.92rem; color:var(--ejm-mut); }
  .bt-by a { font-weight:600; }

  /* ---- steps ---- */
  .bt-steps { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
  .bt-step { padding:28px 24px; border-radius:18px; background:var(--ejm-card); border:1.5px solid var(--ejm-line); }
  .bt-num { display:grid; place-items:center; width:44px; height:44px; margin-bottom:16px; border-radius:50%;
    font-family:'Poppins',sans-serif; font-size:1.1rem; font-weight:700; color:#fff;
    background:linear-gradient(135deg,#14b8a6,#6366f1); box-shadow:0 8px 22px rgba(20,184,166,.35); }
  #main-content .bt-page .bt-step p { margin:0; font-size:.95rem; line-height:1.62; }

  /* ---- closing call to action (site-standard try-demo block, dressed for this page) ---- */
  #main-content .bt-page .try-demo { position:relative; overflow:hidden; margin:60px 0 10px; padding:52px 40px; text-align:center;
    border-radius:22px; border:1.5px solid rgba(52,211,153,.30);
    background:radial-gradient(70% 120% at 50% 0%, rgba(20,184,166,.30), transparent 70%), linear-gradient(155deg,#132a2c,#121a24); }
  #main-content .bt-page .try-demo h2 i { color:var(--ejm-green); margin-right:8px; }
  #main-content .bt-page .try-demo p { max-width:60ch; margin:0 auto 24px; font-size:1.06rem; line-height:1.65; }
  #main-content .bt-page .try-demo .demo-link { display:inline-flex; align-items:center; gap:10px; padding:15px 28px;
    border-radius:12px; font-weight:700; color:#fff !important; text-decoration:none;
    background:linear-gradient(135deg, #14b8a6, var(--ejm-ind)); box-shadow:0 14px 34px rgba(20,184,166,.35); }
  #main-content .bt-page .try-demo .demo-note { margin:18px auto 0; font-size:.95rem; }

  @media (max-width:980px){
    .bt-grid3 { grid-template-columns:1fr 1fr; }
  }
  @media (max-width:820px){
    .bt-hero { padding:40px 22px 34px; }
    .bt-hero-grid, .bt-venue, .bt-grid2, .bt-grid3, .bt-steps { grid-template-columns:1fr; }
    .bt-photo { min-height:240px; }
    .bt-band { padding:32px 22px; }
    .bt-quote { grid-template-columns:1fr; padding:26px 22px; }
    #main-content .bt-page .try-demo { padding:40px 22px; }
    .bt-sec-head { margin:46px 0 22px; }
  }
</style>

<div class="bt-page">

<div class="bt-hero">
  <div class="bt-hero-grid">
    <div>
      <span class="bt-eyebrow"><i class="fas fa-gears"></i> Behind the scenes</span>
      <h1>The Quiet Engine Behind <span class="bt-grad">Every Great Night</span></h1>
      <p class="bt-lead">eJukebox looks effortless in the room because a lot happens out of sight. A compact player at your venue, music that keeps going whatever the internet does, and a team that hears about a problem before your customers do.</p>
      <ul class="bt-ticks">
        <li><i class="fas fa-circle-check"></i> Keeps playing if the internet drops</li>
        <li><i class="fas fa-circle-check"></i> Watched every minute, alerts us within 30 seconds</li>
        <li><i class="fas fa-circle-check"></i> Updates itself overnight while you are closed</li>
      </ul>
    </div>
    <div>
      <div class="bt-panel" role="img" aria-label="Illustration of an eJukebox player's status: music playing, checked in a few seconds ago, local library ready, overnight maintenance done, no alerts">
        <div class="bt-panel-head"><span>Your venue &middot; player</span><span class="bt-live">Live</span></div>
        <div class="bt-row"><i class="fas fa-music"></i><div><div class="bt-k">Music playing</div><div class="bt-v">Front bar and bistro</div></div><span class="bt-ok">OK</span></div>
        <div class="bt-row d2"><i class="fas fa-heart-pulse"></i><div><div class="bt-k">Checked in</div><div class="bt-v">12 seconds ago</div></div><span class="bt-ok">OK</span></div>
        <div class="bt-row d3"><i class="fas fa-hard-drive"></i><div><div class="bt-k">Music on board</div><div class="bt-v">Plays on if the internet drops</div></div><span class="bt-ok">Ready</span></div>
        <div class="bt-row d4"><i class="fas fa-moon"></i><div><div class="bt-k">Overnight maintenance</div><div class="bt-v">Updated and restarted while closed</div></div><span class="bt-ok">Done</span></div>
        <div class="bt-row d5"><i class="fas fa-bell"></i><div><div class="bt-k">Alerts</div><div class="bt-v">Silence for 30 seconds pages our team</div></div><span class="bt-ok">None</span></div>
      </div>
    </div>
  </div>
</div>

<div class="bt-sec-head">
  <span class="bt-kick">At your venue</span>
  <h2>A small player that does a big job</h2>
  <p>Out of sight in your rack, cupboard or office, and nothing your staff ever need to touch.</p>
</div>
<div class="bt-venue">
  <div class="bt-photo"><img src="/assets/images/stock/dj-at-work.jpg" alt="Hands on a turntable under purple light" loading="lazy"><span>Big sound from a small box</span></div>
  <div class="bt-grid2">
    <div class="bt-card"><span class="bt-ico"><i class="fas fa-microchip"></i></span><h3>Compact and solid state</h3><p>Small enough to tuck away, with no moving parts to wear out. Built to run all day, every day.</p></div>
    <div class="bt-card"><span class="bt-ico"><i class="fas fa-plug"></i></span><h3>Plugs into what you have</h3><p>It connects to your existing amplifier and speakers, on a wired network connection for rock-solid streaming.</p></div>
    <div class="bt-card"><span class="bt-ico"><i class="fas fa-layer-group"></i></span><h3>One player, up to four zones</h3><p>Different music in the bar, the bistro and the beer garden, all from the one player.</p></div>
    <div class="bt-card"><span class="bt-ico"><i class="fas fa-tv"></i></span><h3>Your screens, too</h3><p>A spare HDMI output can put photos and slides up on a TV. <a href="/in-venue-screens/">More on in-venue screens</a>.</p></div>
  </div>
</div>

<div class="bt-band">
  <div class="bt-band-head">
    <span class="bt-kick">Built never to stop</span>
    <h2>The music keeps going. We make sure of it.</h2>
  </div>
  <div class="bt-grid3">
    <div class="bt-card"><span class="bt-big">30 sec</span><h3>We know when it stops</h3><p>Every player checks in with us every minute. If the music stops for 30 seconds, our team gets an alert on their phones - usually before anyone in the room notices.</p></div>
    <div class="bt-card"><span class="bt-big"><i class="fas fa-wifi"></i></span><h3>Internet down? Music isn't</h3><p>Every player carries the venue's music on board. If the connection drops, it keeps playing until the internet comes back.</p></div>
    <div class="bt-card"><span class="bt-big"><i class="fas fa-moon"></i></span><h3>Looks after itself overnight</h3><p>Updates and a fresh restart happen in the small hours while you are closed, so every day starts clean.</p></div>
    <div class="bt-card"><span class="bt-big"><i class="fas fa-screwdriver-wrench"></i></span><h3>Fixed from afar</h3><p>Almost anything can be sorted remotely, without a technician visit and without anyone at the venue lifting a finger.</p></div>
    <div class="bt-card"><span class="bt-big"><i class="fas fa-wave-square"></i></span><h3>Broadcast-quality sound</h3><p>Every track is professionally processed for consistent volume, so nothing jumps out between songs.</p></div>
    <div class="bt-card"><span class="bt-big"><i class="fas fa-user-shield"></i></span><h3>Managed for you</h3><p>Every player is set up, watched and kept up to date by our team. Nobody at the venue ever has to manage a computer.</p></div>
  </div>
</div>

<div class="bt-quote">
  <i class="fas fa-quote-left"></i>
  <div>
    <p>&ldquo;The changeover was much easier than I had expected. The instructions were easy to follow, and there was very little disruption to the gym's music service.&rdquo;</p>
    <div class="bt-by">Samantha Morton, Owner, Peak Health &amp; Fitness, Walkerston QLD &middot; <a href="/people-love-ejukebox.html#peak-health-fitness">Read her story</a></div>
  </div>
</div>

<div class="bt-sec-head">
  <span class="bt-kick">Getting set up</span>
  <h2>From box to music, without the fuss</h2>
</div>
<div class="bt-steps">
  {% include howto-steps.html prefix="bt" num="1" %}
</div>

<div class="bt-sec-head">
  <span class="bt-kick">Questions</span>
  <h2>Installation and support questions, answered</h2>
</div>
<div class="fq-list">
{% include faq-list.html mode="details" %}
</div>

<div class="try-demo">
  <div class="demo-content">
    <h2><i class="fas fa-music"></i> Want music that just works?</h2>
    <p>Tell us about your venue - the rooms, the speakers, the vibe - and we will show you exactly how eJukebox would run behind the scenes.</p>
    <a href="/contact/" class="demo-link">
      <i class="fas fa-comments"></i>
      Tell us about your venue
    </a>
    <p class="demo-note">Or <a href="/products.html">see plans &amp; pricing</a> for your venue.</p>
  </div>
</div>

</div>
