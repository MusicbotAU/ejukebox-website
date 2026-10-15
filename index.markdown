---
layout: default
title: Jukebox Music for Pubs, Clubs, Cafes & Retail
description: Australia's jukebox and background music service for pubs, clubs, bars, cafes and retail. Curated licensed channels, song requests, and a free trial.
hero:
  image: /assets/images/stock/bartenders.jpg
  alt: Bartenders serving drinks at a busy bar
  eyebrow: Licensed music for Australian venues
  h1: "Jukebox & Background Music for Pubs, Clubs, Cafes & Retail"
  sub: Professionally curated, fully licensed music your staff control from their phone and your customers request from theirs.
  form: true
faqs:
  - q: >-
      What is eJukebox?
    a: >-
      eJukebox is an Australian owned background music and digital jukebox service for pubs, clubs, bars, cafes, restaurants, gyms, shops and more. Professionally curated, licensed channels play all day on their own, your staff steer the music from their phones, and customers can request songs from theirs whenever you want them to.
  - q: >-
      How much does background music for a business cost?
    a: >-
      Solo is ${solo} a month ex GST - one curated channel for a single area, streamed to a device you already own. Core, the hospitality base with two zones, song requests and an on-site player, is ${core} a month ex GST, and Complete adds every software add-on for ${complete} a month ex GST. <a href="/products.html">See plans &amp; pricing</a>.
  - q: >-
      Can I play Spotify in my business?
    a: >-
      No. A personal Spotify account is licensed for personal use only, and Spotify's own terms rule out playing it in a business. eJukebox is licensed for business use, and leaving personal streaming also removes the extra charge it adds to your OneMusic licence.
  - q: >-
      Do I still need a OneMusic licence?
    a: >-
      Yes. Every business that plays music where customers or staff can hear it holds its own OneMusic licence, whoever supplies the music, and our monthly fee does not include it. For pubs and clubs we can collect it and pay it to OneMusic for you, at cost. <a href="/licensing.html">How music licensing works</a>.
  - q: >-
      Does it work with our existing speakers and TVs?
    a: >-
      Yes. A compact player connects to your existing amplifier and speakers, screen features use the TVs already on your walls through a spare HDMI socket, and if you have an AV installer we work with them directly.
  - q: >-
      Do customers need an app to request songs?
    a: >-
      No. They scan a QR code and request from their phone's browser, or use the free <a href="/ejukebox-apps.html#request">eJukebox Request</a> app. Song requests are your choice - switch them on or off, decide what can be requested, and set how many songs each person can request every hour.
  - q: >-
      What happens if the internet drops out?
    a: >-
      On Core and Complete the music keeps playing - the on-site player carries your music on board and catches up when the connection is back. Every player is watched, and our team is alerted if the music ever stops.
  - q: >-
      Where in Australia does eJukebox work?
    a: >-
      Everywhere. eJukebox runs over an ordinary internet connection, so venues in every state and territory - capital cities, regional centres and country towns - get the same music, apps and support. Your player arrives set up, and you plug it in with illustrated instructions and video call support, or with your own AV installer.
last_reviewed: 2026-10-15
schema_apps: [request, admin, music]
schema_about: [background-music, jukebox, pub, hospitality]
schema_service: Jukebox and background music for Australian venues
service_type: Commercial background music and digital jukebox service
---

{% include hero.html %}

<style>
  /* homepage: the music-and-sales band and the four reasons, prefixed hs- */
  html { overflow-x:clip; } /* the band runs edge to edge - never let it cause a sideways scroll */
  .hs-band { position:relative; width:100vw; margin:0 0 70px calc(50% - 50vw); min-height:clamp(400px, 44vw, 580px);
    display:flex; align-items:center; overflow:hidden; isolation:isolate; background:#0b0b14; }
  #main-content .hs-band > img, #main-content .hs-card > img { position:absolute; inset:0; z-index:0; width:100%; height:100%; max-width:none;
    object-fit:cover; margin:0 !important; border-radius:0 !important; box-shadow:none !important; transform:none; transition:transform .8s ease; }
  #main-content .hs-band > img { object-position:center 45%; }
  .hs-band::after { content:""; position:absolute; inset:0; z-index:1;
    background:linear-gradient(90deg, rgba(8,8,16,.94) 0%, rgba(8,8,16,.82) 34%, rgba(8,8,16,.45) 64%, rgba(8,8,16,.18) 100%),
               linear-gradient(0deg, rgba(8,8,16,.6) 0%, rgba(8,8,16,0) 45%); }
  .hs-copy { position:relative; z-index:2; width:100%; max-width:1200px; margin:0 auto; padding:70px 28px; }
  .hs-copy-in { max-width:590px; }
  .hs-kick { display:block; margin-bottom:14px; font-size:.78rem; font-weight:800; letter-spacing:.2em; text-transform:uppercase; color:var(--ejm-amber); }
  #main-content .hs-band h2 { margin:0 0 18px !important; padding:0 !important; border:0 !important; text-align:left !important;
    font-size:clamp(1.9rem, 4.2vw, 3.1rem) !important; line-height:1.1 !important; letter-spacing:-.5px; color:#fff !important; }
  .hs-band h2 em { font-style:normal; color:var(--ejm-amber); }
  #main-content .hs-band p { margin:0 0 22px; max-width:46ch; font-size:1.08rem; line-height:1.65; color:rgba(255,255,255,.84) !important; }
  #main-content .hs-band p.hs-src { margin:0; font-size:.85rem; color:rgba(255,255,255,.6) !important; }
  #main-content .hs-band .hs-src a { color:rgba(255,255,255,.9) !important; text-decoration:underline; text-underline-offset:3px; }

  #main-content .hs-head { margin:0 0 10px !important; padding:0 !important; border:0 !important; text-align:center !important;
    font-size:clamp(1.6rem, 3vw, 2.2rem) !important; line-height:1.2 !important; color:var(--ejm-ink) !important; }
  #main-content .hs-sub { margin:0 auto 30px; max-width:60ch; text-align:center; font-size:1.05rem; color:var(--ejm-soft) !important; }
  .hs-cards { display:grid; grid-template-columns:1fr 1fr; gap:22px; margin:0 0 30px; }
  .hs-card { position:relative; min-height:clamp(300px, 30vw, 360px); display:flex; align-items:flex-end; overflow:hidden; isolation:isolate;
    border-radius:18px; border:1px solid var(--ejm-line); background:#0b0b14; }
  .hs-card::after { content:""; position:absolute; inset:0; z-index:1;
    background:linear-gradient(0deg, rgba(5,5,12,.95) 0%, rgba(5,5,12,.8) 32%, rgba(5,5,12,.28) 64%, rgba(5,5,12,.05) 100%); }
  #main-content .hs-card:hover > img { transform:scale(1.04); }
  .hs-card-copy { position:relative; z-index:2; padding:26px 26px 24px; }
  #main-content .hs-card h3 { margin:0 0 8px !important; font-size:1.3rem !important; line-height:1.25 !important; color:#fff !important; }
  #main-content .hs-card h3::before { content:none !important; }
  #main-content .hs-card p { margin:0; font-size:1rem; line-height:1.55; color:rgba(255,255,255,.86) !important; }
  .hs-card p b { color:#fff; font-size:1.12em; }
  @media (max-width:760px) {
    .hs-band { min-height:0; }
    .hs-band::after { background:linear-gradient(0deg, rgba(8,8,16,.95) 0%, rgba(8,8,16,.82) 55%, rgba(8,8,16,.5) 100%); }
    .hs-copy { padding:150px 20px 44px; }
    .hs-cards { grid-template-columns:1fr; }
  }
  @media (prefers-reduced-motion:reduce) { #main-content .hs-card > img { transition:none; } }
  /* the app strip between the hero and the band: real store badges as a trust signal */
  .hs-apps { position:relative; width:100vw; margin:0 0 0 calc(50% - 50vw); padding:16px 0;
    background:linear-gradient(90deg, #0d0d1a, #17172d 50%, #0d0d1a); border-top:1px solid rgba(255,255,255,.07); border-bottom:1px solid rgba(255,255,255,.07); }
  .hs-apps-in { max-width:1200px; margin:0 auto; padding:0 24px; display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:12px 28px; }
  #main-content .hs-apps p { margin:0; font-size:.98rem; line-height:1.5; text-align:center; color:var(--ejm-soft) !important; }
  #main-content .hs-apps p strong { color:#fff; }
  #main-content .hs-apps p a { color:var(--ejm-ink) !important; text-decoration:underline; text-underline-offset:3px; text-decoration-color:rgba(255,255,255,.35); }
  .hs-apps-badges { display:flex; align-items:center; gap:12px; }
  .hs-apps-badges a { display:inline-block; line-height:0; border-radius:8px; transition:transform .2s ease, box-shadow .2s ease; }
  .hs-apps-badges a:hover { transform:translateY(-2px); box-shadow:0 10px 24px rgba(0,0,0,.45); }
  .hs-apps-badges a.hs-as { background:#fff; border-radius:6px; } /* the badge PNG's lettering is transparent */
  #main-content .hs-apps-badges img { display:block; width:auto; height:40px; margin:0 !important; border-radius:0 !important; box-shadow:none !important; transform:none !important; }
  #main-content .hs-apps-badges a.hs-gp img { height:44px; } /* Google's PNG carries its own padding */
  /* works-with-what-you-have: numbered, no icons */
  .hs-setup { display:grid; grid-template-columns:.9fr 1.1fr; gap:40px; align-items:start; margin:70px 0; }
  #main-content .hs-setup h2 { margin:0 0 16px !important; padding:0 !important; border:0 !important; text-align:left !important;
    font-size:clamp(1.6rem, 3vw, 2.2rem) !important; line-height:1.15 !important; color:var(--ejm-ink) !important; }
  #main-content .hs-setup-copy p { margin:0; font-size:1.05rem; line-height:1.7; color:var(--ejm-soft) !important; }
  #main-content .hs-setup-list { list-style:none; margin:0; padding:0; display:grid; grid-template-columns:1fr 1fr; gap:14px; counter-reset:hs; }
  #main-content .hs-setup-list li { margin:0; padding:20px 20px 22px; border-radius:16px; counter-increment:hs;
    background:rgba(255,255,255,.035); border:1px solid rgba(255,255,255,.08); border-top:2px solid var(--ejm-teal); }
  #main-content .hs-setup-list li::before { content:counter(hs, decimal-leading-zero); display:block; margin-bottom:8px;
    font-size:.78rem; font-weight:800; letter-spacing:.14em; color:var(--ejm-amber); }
  #main-content .hs-setup-list b { display:block; margin-bottom:6px; font-size:1.08rem; color:#fff; }
  #main-content .hs-setup-list span { display:block; font-size:.96rem; line-height:1.55; color:var(--ejm-soft); }

  /* the trial offer: two ways in, no icons */
  .hs-trial { position:relative; margin:70px 0; padding:52px 44px 48px; border-radius:26px; overflow:hidden; isolation:isolate; text-align:center;
    border:1px solid transparent;
    background:radial-gradient(ellipse 70% 90% at 0% 0%, rgba(20,184,166,.18), transparent 60%) padding-box,
               radial-gradient(ellipse 70% 90% at 100% 100%, rgba(236,72,153,.16), transparent 60%) padding-box,
               linear-gradient(#11111d, #11111d) padding-box,
               linear-gradient(135deg, rgba(236,72,153,.7), rgba(99,102,241,.55), rgba(20,184,166,.7)) border-box; }
  #main-content .hs-trial h2 { margin:0 0 30px !important; padding:0 !important; border:0 !important; text-align:center !important;
    font-size:clamp(1.7rem, 3.4vw, 2.4rem) !important; line-height:1.15 !important; color:#fff !important; }
  .hs-trial-grid { display:grid; grid-template-columns:1fr 1fr; gap:20px; text-align:left; }
  .hs-trial-card { display:flex; flex-direction:column; align-items:flex-start; padding:28px 28px 30px; border-radius:18px;
    background:rgba(255,255,255,.045); border:1px solid rgba(255,255,255,.1); backdrop-filter:blur(6px); }
  .hs-trial-len { font-family:'Poppins',sans-serif; font-size:1.5rem; font-weight:800; line-height:1; margin-bottom:10px;
    background:linear-gradient(90deg, var(--ejm-pink), var(--ejm-ind-lt)); -webkit-background-clip:text; background-clip:text; color:transparent; }
  #main-content .hs-trial h3 { margin:0 0 10px !important; font-size:1.25rem !important; line-height:1.3 !important; color:#fff !important; }
  #main-content .hs-trial h3::before { content:none !important; }
  #main-content .hs-trial-card p { margin:0 0 22px; flex:1; font-size:1rem; line-height:1.65; color:var(--ejm-soft) !important; }
  #main-content .hs-trial-btn { display:inline-block; padding:13px 26px; border-radius:999px; font-weight:800; text-decoration:none; color:#fff !important;
    background:linear-gradient(135deg, var(--ejm-pink), var(--ejm-ind)); box-shadow:0 12px 30px rgba(236,72,153,.3); transition:transform .2s ease, box-shadow .2s ease; }
  #main-content .hs-trial-btn:hover { transform:translateY(-2px); box-shadow:0 16px 36px rgba(236,72,153,.42); }
  #main-content .hs-trial-ghost { background:transparent; box-shadow:none; border:1.5px solid rgba(255,255,255,.28); }
  #main-content .hs-trial-ghost:hover { border-color:rgba(255,255,255,.55); box-shadow:none; }
  @media (max-width:760px) {
    .hs-setup { grid-template-columns:1fr; gap:24px; margin:56px 0; }
    #main-content .hs-setup-list { grid-template-columns:1fr; }
    .hs-trial { padding:38px 18px 30px; }
    .hs-trial-grid { grid-template-columns:1fr; }
  }
  /* the questions venues ask - an accordion; the fq- styles come with faq-list.html */
  .hs-faq { margin:64px 0 24px; }
  .hs-faq-head { text-align:center; }
  #main-content .hs-faq h2 { margin:0 !important; padding:0 !important; border:0 !important; text-align:center !important;
    font-size:clamp(1.6rem, 3vw, 2.2rem) !important; line-height:1.15 !important; color:var(--ejm-ink) !important; }
</style>

<div class="hs-apps">
  <div class="hs-apps-in">
    <p><strong>Free apps for iPhone and Android</strong> - <a href="/ejukebox-apps.html#request">eJukebox Request</a> for customers, <a href="/admin-app/">eJukebox Admin</a> for staff.</p>
    <div class="hs-apps-badges">
      <a class="hs-as" href="https://apps.apple.com/au/app/ejukebox-request/id6804389497" target="_blank" rel="noopener"><img src="/blobs/AppleAppStoreLogo.png" alt="Download eJukebox Request on the App Store" width="132" height="40"></a>
      <a class="hs-gp" href="https://play.google.com/store/apps/details?id=au.com.ejukebox.request" target="_blank" rel="noopener"><img src="/blobs/GooglePlayStoreLogo.png" alt="Get eJukebox Request on Google Play" width="140" height="44"></a>
    </div>
  </div>
</div>

<section class="hs-band" aria-labelledby="hs-band-title">
  <img src="/assets/images/home/music-for-venues-increase-sales-ejukebox-1280.webp" srcset="/assets/images/home/music-for-venues-increase-sales-ejukebox-768.webp 768w, /assets/images/home/music-for-venues-increase-sales-ejukebox-1280.webp 1280w, /assets/images/home/music-for-venues-increase-sales-ejukebox-1920.webp 1920w" sizes="100vw" width="1920" height="1080" loading="lazy" decoding="async" alt="Music for venues that increases sales - a pub bar with stools, screens and speakers ready for eJukebox background music">
  <div class="hs-copy"><div class="hs-copy-in">
    <span class="hs-kick">Research shows</span>
    <h2 id="hs-band-title">Venues with background music have <em>48.2% more sales</em></h2>
    <p>The right music keeps a room lively, and a lively room sells more. eJukebox looks after it all day, every day.</p>
    <p class="hs-src">Source: OneMusic, <a href="https://onemusic.com.au/presto/" target="_blank" rel="noopener">Hospitality Presto Report</a></p>
  </div></div>
</section>

<h2 class="hs-head">Why background music matters to your customers</h2>
<p class="hs-sub">Customers notice the music in a venue - when it is right, and when it is wrong.</p>

<div class="hs-cards">
  <article class="hs-card">
    <img src="/assets/images/home/customers-want-background-music-ejukebox-640.webp" srcset="/assets/images/home/customers-want-background-music-ejukebox-640.webp 640w, /assets/images/home/customers-want-background-music-ejukebox-1100.webp 1100w" sizes="(max-width: 760px) 100vw, 590px" width="1100" height="619" loading="lazy" decoding="async" alt="Customers want background music - a florist serving a customer in a shop with eJukebox music playing">
    <div class="hs-card-copy">
      <h3>Customers want background music</h3>
      <p><b>97%</b> of venues recognise their customers want to hear music.</p>
    </div>
  </article>
  <article class="hs-card">
    <img src="/assets/images/home/music-creates-atmosphere-ejukebox-640.webp" srcset="/assets/images/home/music-creates-atmosphere-ejukebox-640.webp 640w, /assets/images/home/music-creates-atmosphere-ejukebox-1100.webp 1100w" sizes="(max-width: 760px) 100vw, 590px" width="1100" height="619" loading="lazy" decoding="async" alt="Music creates atmosphere - an outdoor dining terrace under festoon lights, set for eJukebox background music">
    <div class="hs-card-copy">
      <h3>Music creates the atmosphere</h3>
      <p>Yet only <b>27%</b> of customers said a venue's choice of music actually created a nice atmosphere.</p>
    </div>
  </article>
  <article class="hs-card">
    <img src="/assets/images/home/bad-music-hurts-business-ejukebox-640.webp" srcset="/assets/images/home/bad-music-hurts-business-ejukebox-640.webp 640w, /assets/images/home/bad-music-hurts-business-ejukebox-1100.webp 1100w" sizes="(max-width: 760px) 100vw, 590px" width="1100" height="619" loading="lazy" decoding="async" alt="Bad music hurts business - an empty beach bar with its bar stools and no customers">
    <div class="hs-card-copy">
      <h3>Bad music hurts business</h3>
      <p><b>90%</b> said bad music made them leave a venue or vow never to return.</p>
    </div>
  </article>
  <article class="hs-card">
    <img src="/assets/images/home/good-music-in-your-pub-can-increase-sales-ejukebox-640.webp" srcset="/assets/images/home/good-music-in-your-pub-can-increase-sales-ejukebox-640.webp 640w, /assets/images/home/good-music-in-your-pub-can-increase-sales-ejukebox-1100.webp 1100w" sizes="(max-width: 760px) 100vw, 590px" width="1100" height="619" loading="lazy" decoding="async" alt="Good music in your pub can increase sales - friends raising beers in a busy pub with eJukebox music">
    <div class="hs-card-copy">
      <h3>Good music in your pub can increase sales</h3>
      <p>Pubs with music make <b>21% more sales</b> on weekdays than pubs without.</p>
    </div>
  </article>
</div>

<div class="stats-cta">
  <p><strong>The solution?</strong> Professionally curated music from <strong>eJukebox</strong></p>
  <a href="/products.html" class="btn-glow">See Our Packages <i class="fas fa-arrow-right"></i></a>
</div>


<div class="section-header-fancy">
  <h2>Background music for your business</h2>
</div>

<div class="features-grid-home">
  <div class="feature-card-home">
    <div class="feature-icon-home radio"><i class="fas fa-broadcast-tower"></i></div>
    <h3>Programmed Like a Great Radio Station</h3>
    <p>Each <strong>eJukebox</strong> channel flows from song to song, levelled for volume and timed for the hour, with no ads and no talk - the polish of a radio station, made for your room.</p>
  </div>
  
  <div class="feature-card-home">
    <div class="feature-icon-home playlist"><i class="fas fa-compact-disc"></i></div>
    <h3>Professionally Curated Channels</h3>
    <p>Our channels are crafted by real people, not algorithms. This means each song is carefully selected and positioned for a perfect flow, so you'll never need to skip a track.</p>
  </div>
  
  <div class="feature-card-home">
    <div class="feature-icon-home setup"><i class="fas fa-magic"></i></div>
    <h3>Stress-Free Setup</h3>
    <p>With <strong>eJukebox</strong>, there's no need to worry about creating or managing music. Our tried and tested selection is designed to provide a stress-free, enjoyable ambiance for your customers.</p>
  </div>
  
  <div class="feature-card-home">
    <div class="feature-icon-home volume"><i class="fas fa-sliders-h"></i></div>
    <h3>Consistent Volume Levels</h3>
    <p>Enjoy superior sound quality with consistent volume levels across all songs, avoiding the jarring volume changes common in other music services.</p>
  </div>
  
  <div class="feature-card-home">
    <div class="feature-icon-home custom"><i class="fas fa-star"></i></div>
    <h3>Custom Radio Stations</h3>
    <p>We can create a custom radio station tailored specifically for your business, just like the supermarkets, enhancing your brand and customer experience.</p>
  </div>

  <div class="feature-card-home">
    <div class="feature-icon-home radio"><i class="fas fa-wifi"></i></div>
    <h3>Plays On If the Internet Drops</h3>
    <p>Core venues play from a compact on-site player that carries the music on board, so a full room never goes quiet because the connection did.</p>
  </div>
</div>


<style>
  /* song requests on the homepage, prefixed hp- */
  .hp-req { display:grid; grid-template-columns:1.05fr .95fr; gap:34px; align-items:center; margin:60px 0 50px; padding:46px 42px 40px; border-radius:22px; overflow:hidden;
    background:linear-gradient(140deg, rgba(99,102,241,.16), rgba(20,184,166,.07)), var(--ejm-card); border:1.5px solid var(--ejm-line); }
  .hp-kick { display:block; margin-bottom:10px; font-size:.78rem; font-weight:800; letter-spacing:.16em; text-transform:uppercase; color:var(--ejm-teal); }
  #main-content .hp-req h2 { margin:0 0 14px !important; padding:0; border:0; font-size:clamp(1.6rem,3vw,2.2rem) !important; line-height:1.15; color:var(--ejm-ink) !important; }
  #main-content .hp-req p { margin:0 0 16px; font-size:1.05rem; line-height:1.65; color:var(--ejm-soft) !important; }
  #main-content .hp-req strong { color:var(--ejm-ink); }
  #main-content .hp-req ul { list-style:none; margin:0 0 24px; padding:0; display:grid; gap:9px; }
  #main-content .hp-req li { display:flex; gap:10px; align-items:baseline; margin:0; padding:0; font-size:.97rem; line-height:1.5; color:var(--ejm-soft); }
  #main-content .hp-req li::before { content:none; }
  #main-content .hp-req li i { width:18px; flex:none; text-align:center; color:var(--ejm-green); }
  #main-content .hp-req .hp-btn { display:inline-flex; align-items:center; gap:10px; padding:13px 22px; border-radius:12px; font-weight:700; text-decoration:none; color:#fff !important;
    background:linear-gradient(135deg, var(--ejm-pink), var(--ejm-ind)); box-shadow:0 12px 30px rgba(236,72,153,.3); }
  @media (max-width:860px) { .hp-req { grid-template-columns:1fr; padding:32px 20px 26px; } }
</style>

<div class="hp-req">
  <div>
    <span class="hp-kick"><i class="fas fa-hand-pointer"></i> Song requests - your choice</span>
    <h2>Want the room picking the next song?</h2>
    <p>Not every venue does, so requests are entirely up to you. Choose Core or Complete and your customers can request songs from their own phone - by scanning your QR code, or in the free eJukebox Request app. You set the rules, and you can switch requests off any time while the music carries on by itself.</p>
    <ul>
      <li><i class="fas fa-wand-magic-sparkles"></i><span><strong>Help me pick</strong> - describe the mood, get songs to choose from</span></li>
      <li><i class="fas fa-headphones"></i><span>30-second previews before anyone requests</span></li>
      <li><i class="fas fa-microphone-lines"></i><span>Voice dedications that play right before their song and blend into the intro (add-on)</span></li>
    </ul>
    <a class="hp-btn" href="/ejukebox-request-portal.html"><i class="fas fa-music"></i> How song requests work</a>
  </div>
  {% include app-fan.html left="request-ai-search" center="request-home" right="request-voice" size="tight" %}
</div>

<div class="venue-showcase pub-cafe">
  <div class="venue-content">
    <h2>Background music for pubs and cafes</h2>
    <p>At <strong>eJukebox</strong>, our music channels are meticulously curated to mirror the familiar feel of top radio stations, ensuring each song resonates with your customers. This familiarity creates a warm and inviting atmosphere in your pub or café, encouraging patrons to stay longer and spend more. Studies show that customers who feel comfortable in familiar surroundings are more likely to make purchases, boosting your business's revenue.</p>
    <p>Additionally, all our songs are free from swearing, making them safe for families and suitable for all age groups. Choose <strong>eJukebox</strong> for a seamless, family-friendly music experience that enhances your customers' visit.</p>
    <div class="venue-badges">
      <span class="venue-badge"><i class="fas fa-child"></i> Family Friendly</span>
      <span class="venue-badge"><i class="fas fa-clock"></i> Stay Longer</span>
      <span class="venue-badge"><i class="fas fa-dollar-sign"></i> Spend More</span>
    </div>
  </div>
  <div class="venue-image">
    <img src="blobs/eJukebox_fun07.jpg" alt="Pub and Café atmosphere">
  </div>
</div>


<div class="venue-showcase medical reverse">
  <div class="venue-content">
    <h2>Background music for medical centres and waiting rooms</h2>
    <p>At <strong>eJukebox</strong>, every track undergoes state-of-the-art broadcast-quality audio processing to ensure impeccable sound. Unlike other online music services where volume levels can fluctuate, our songs are perfectly mixed for consistent volume throughout. This professional-grade sound quality provides a seamless listening experience akin to top radio stations, creating a calming and flawless ambiance in your medical center. Patients will appreciate the serene and consistent audio environment, enhancing their overall experience and comfort during their visit.</p>
    <div class="venue-badges">
      <span class="venue-badge"><i class="fas fa-volume-down"></i> Calming Audio</span>
      <span class="venue-badge"><i class="fas fa-heart"></i> Patient Comfort</span>
      <span class="venue-badge"><i class="fas fa-check-circle"></i> Professional Sound</span>
    </div>
  </div>
  <div class="venue-image">
    <img src="/assets/images/stock/waiting-lounge.jpg" alt="A calm, bright waiting area" loading="lazy">
  </div>
</div>


<div class="venue-showcase retail">
  <div class="venue-content">
    <h2>Licensed music for pubs, bars and retail stores</h2>
    <p><strong>eJukebox</strong> is a <a href="/background-music-for-business/">background music provider</a> fully licensed for commercial use, unlike personal music services such as Spotify or Amazon Music, whose own terms rule out playing them in a business. With <strong>eJukebox</strong> you are not relying on a personal account. Your venue still holds its own OneMusic licence, and for pubs and clubs we can collect and pay it for you, at cost. Enjoy high-quality, professionally curated music channels that enhance your store's atmosphere while staying within the law.</p>
    <div class="venue-badges">
      <span class="venue-badge"><i class="fas fa-gavel"></i> Fully Licensed</span>
      <span class="venue-badge"><i class="fas fa-shield-alt"></i> Legal & Compliant</span>
      <span class="venue-badge"><i class="fas fa-smile"></i> Peace of Mind</span>
    </div>
  </div>
  <div class="venue-image">
    <img src="/assets/images/retail-store.jpg" alt="A retail store with music playing" loading="lazy">
  </div>
</div>


<div class="dayparting-section">
  <div class="dayparting-header">
    <h2>Music that changes with the time of day</h2>
    <p class="dayparting-subtitle"><strong>eJukebox</strong> uses time-of-day music scheduling, or 'dayparting,' to ensure the right songs play at the right times.</p>
  </div>
  <div class="dayparting-timeline">
    <div class="time-block morning">
      <h4>Morning</h4>
      <p>Light, uplifting tunes to start the day</p>
    </div>
    <div class="time-block afternoon">
      <h4>Afternoon</h4>
      <p>Energetic tracks for the midday rush</p>
    </div>
    <div class="time-block evening">
      <h4>Evening</h4>
      <p>Upbeat vibes for the night crowd</p>
    </div>
  </div>
  <p class="dayparting-description">Your channel changes with the time of day on its own, so the mood always matches the room.</p>
</div>


<div class="test-drive-section">
  <div class="test-drive-content">
    <h2>Hear eJukebox music live before you sign up</h2>
    <p>Hear the real thing before you spend a cent. Our channels stream live, commercial free, 24 hours a day, exactly as they would sound in your venue.</p>
    <a href="./stream-us.html" class="test-drive-badge"><i class="fas fa-headphones"></i> Listen Now</a>
    <p class="test-drive-lead"><strong>With an eJukebox solution you:</strong></p>
    <div class="test-drive-features">
      <div class="test-feature">
        <i class="fas fa-check-circle"></i>
        <span>Play the same music your customers already hear on commercial radio, so the room never feels alienated</span>
      </div>
      <div class="test-feature">
        <i class="fas fa-check-circle"></i>
        <span>Never get caught out by swearing or explicit lyrics, because every channel is filtered clean and family friendly</span>
      </div>
      <div class="test-feature">
        <i class="fas fa-check-circle"></i>
        <span>Stay on the right side of the law. A personal Spotify account cannot legally be played in public, under Spotify's own terms</span>
      </div>
    </div>
  </div>
</div>


<section class="hs-setup" aria-labelledby="hs-setup-title">
  <div class="hs-setup-copy">
    <span class="hs-kick">Easy to set up</span>
    <h2 id="hs-setup-title">Works with your speakers, your screens and your AV team</h2>
    <p>eJukebox plugs into the sound system you already have. If you have an AV installer, we work with them directly - and if you would rather do it yourself, we walk you through it.</p>
  </div>
  <ol class="hs-setup-list">
    <li><b>Your speakers</b><span>A compact player connects to your existing amplifier and speakers.</span></li>
    <li><b>Your TVs</b><span>Screen features use the TVs already on your walls - a spare HDMI socket is all it takes.</span></li>
    <li><b>Your AV team</b><span>Got an installer? We work with them, so eJukebox slots straight into your setup.</span></li>
    <li><b>Help at every step</b><span>Illustrated, step-by-step installation instructions, plus one-on-one video call support if you need it.</span></li>
  </ol>
</section>

<section class="hs-trial" aria-labelledby="hs-trial-title">
  <div class="hs-trial-head">
    <span class="hs-kick">Risk free</span>
    <h2 id="hs-trial-title">Two ways to try eJukebox free</h2>
  </div>
  <div class="hs-trial-grid">
    <div class="hs-trial-card">
      <span class="hs-trial-len">7 days</span>
      <h3>Streaming trial</h3>
      <p>Pick a channel and get your own private, ad-free stream link by SMS in seconds. No credit card, nothing to install.</p>
      <a class="hs-trial-btn" href="/free-trial.html">Start the 7-day trial</a>
    </div>
    <div class="hs-trial-card">
      <span class="hs-trial-len">30 days</span>
      <h3>The whole system, in your venue</h3>
      <p>On Core and Complete we install the full eJukebox, hardware and setup covered, and you run it live with your own customers requesting songs.</p>
      <a class="hs-trial-btn hs-trial-ghost" href="/contact/">Ask about the 30-day trial</a>
    </div>
  </div>
</section>


<div class="tm-row tm-row-lead">
{% include testimonial.html id="peak-health-fitness" %}
{% include testimonial.html id="diana-f" %}
</div>

<section class="hs-faq" aria-labelledby="hs-faq-title">
  <div class="hs-faq-head">
    <span class="hs-kick">Questions</span>
    <h2 id="hs-faq-title">Background music and jukebox questions, answered</h2>
  </div>
  <div class="fq-list">
  {% include faq-list.html mode="details" %}
  </div>
</section>
