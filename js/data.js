// ─────────────────────────────────────────
//  js/data.js
//  All site content lives here.
//  Edit this file to update your website.
// ─────────────────────────────────────────

const SITE_DATA = {

  // ── Artist info ──────────────────────────
  artist: {
    name:       "Rosie Crown",
    tagline:    "Dreamy Pop · Singer-Songwriter",
    bio:        "Rosie Crown is a dreamy pop artist drawing from the language of soft mornings and slow afternoons — her sound somewhere between Lana Del Rey's ache and Mazzy Star's haze. With a debut EP already turning heads, she's available for intimate venues, festival stages, and everything in between.",
    heroSubtitle: "Drifting between waking and dream — lush arrangements, velvet vocals, and stories that linger long after the music fades.",
  },

  // ── Navigation ───────────────────────────
  nav: [
    { label: "Music",  href: "#music"   },
    { label: "Live",   href: "#live"    },
    { label: "About",  href: "#about"   },
    { label: "Book",   href: "#booking" },
  ],

  // ── Marquee ticker ───────────────────────
  marqueeItems: [
    "New singles out now",
    "Available for bookings 2026-27",
    "Snooze",
    "Together",
    "Live dates this spring",
  ],

  // ── Tracks ───────────────────────────────
  // To add real audio: set audioSrc to a relative path e.g. "assets/audio/snooze.mp3"
  tracks: [
    { num: "01", name: "Snooze - Sneak Peak",           duration: "0:29", badge: "New Release", audioSrc: "assets/Snooze_Sneak_Peak.wav" },
    { num: "02", name: "Together",      duration: "0:28", badge: "New Release",     audioSrc: "assets/togethershort.wav" },
    { num: "03", name: "Angel",      duration: "1:45", badge: Null,     audioSrc: "assets/AngelWeb.m4a },
    { num: "04", name: "I love you, friend",      duration: "0:25", badge: Null,     audioSrc: "assets/iloveyoufriendshort.wav },
    { num: "05", name: "Body Unpositive - demo",      duration: "1:25", badge: Null,     audioSrc: "assets/Bodyunpositivity.mp3},

  ],

  ep: {
    title: "EP Coming Soon",
    sub:   "Stream everywhere · 2026",
  },

  // ── About chips ──────────────────────────
  chips: [
    "Intimate venues",
    "Festival stages",
    "Private events",
    "Collaborations",
    "Live sessions",
    "Brand partnerships",
  ],

  // ── Videos ───────────────────────────────
  // platform: "youtube" | "instagram" | "tiktok"
  // embedId: YouTube video ID, or full URL for IG/TT
  // thumbnailColor: fallback gradient (used when no thumbnail image set)
  // To use real embeds, set embedId and the card will show an iframe on click.
  videos: [
    {
      id:             "v1",
      platform:       "youtube",
      title:          '"Tennessee Whiskey" — Live at Reveler',
      embedId:        "qspflJpjPC4",
      bgLabel:        '"Tennessee Whiskey"',
      bgColor:        "linear-gradient(155deg,#3a2e2c,#6b3a44)",
      featured:       true,
    },
    {
      id:             "v2",
      platform:       "instagram",
      title:          '"Dried Roses" Reel',
      embedId:        "https://www.instagram.com/reel/DRf8UopDfiA/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      bgLabel:        "dried roses",
      bgColor:        "linear-gradient(135deg,#2e2a3a,#5a3a50)",
      featured:       false,
    },
    {
      id:             "v3",
      platform:       "tiktok",
      title:          '"Golden Hour Skin"',
      meta:           "22.1k views",
      embedId:        null,
      bgLabel:        "golden hour",
      bgColor:        "linear-gradient(135deg,#2e2e2a,#4a3c38)",
      featured:       false,
    },
    {
      id:             "v4",
      platform:       "youtube",
      title:          '"Almost Morning" session',
      meta:           "5.4k views",
      embedId:        null,
      bgLabel:        "almost morning",
      bgColor:        "linear-gradient(135deg,#3a2a2a,#5c3040)",
      featured:       false,
    },
    {
      id:             "v5",
      platform:       "instagram",
      title:          '"Blush & Fade" live',
      meta:           "6.3k plays",
      embedId:        null,
      bgLabel:        "blush & fade",
      bgColor:        "linear-gradient(135deg,#2a2e38,#3a4050)",
      featured:       false,
    },
    {
      id:             "v6",
      platform:       "tiktok",
      title:          "Writing session vlog",
      meta:           "11.4k views",
      embedId:        null,
      bgLabel:        "writing",
      bgColor:        "linear-gradient(135deg,#2a2e38,#3a4050)",
      featured:       false,
    },
    {
      id:             "v7",
      platform:       "youtube",
      title:          "Studio acoustic session",
      meta:           "3.8k views",
      embedId:        null,
      bgLabel:        "acoustic",
      bgColor:        "linear-gradient(135deg,#2e2a3a,#5a3a50)",
      featured:       false,
    },
  ],

  // ── Booking contact details ───────────────
  bookingDetails: [
    { label: "Management",    value: "therosiecrown@gmail.com" }
  ],

  // ── Social links ─────────────────────────
  socials: [
    { label: "Instagram",    href: "https://www.instagram.com/therosiecrown/" },
    { label: "Spotify",      href: "https://open.spotify.com/artist/4R5Td0kAQ1fcWeES76vzdG?si=5JIK-5JBQ2a_AkP7XtKjnQ"   },
    { label: "Apple Music",  href: "https://music.apple.com/us/artist/rosie-crown/1782194425" },
    { label: "TikTok",       href: "https://www.tiktok.com/@therosiecrown"    },
    { label: "YouTube",      href: "https://www.youtube.com/@rosiecrown"   },
  ],

};
