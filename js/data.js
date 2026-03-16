// ─────────────────────────────────────────
//  js/data.js
//  All site content lives here.
//  Edit this file to update your website.
// ─────────────────────────────────────────

const SITE_DATA = {

  // ── Artist info ──────────────────────────
  artist: {
    name:         "Rosie Crown",
    tagline:      "Dreamy Pop · Singer-Songwriter",
    bio:          "Rosie Crown is a dreamy pop artist drawing from the language of soft mornings and slow afternoons — her sound somewhere between Lana Del Rey's ache and Mazzy Star's haze. With a debut EP already turning heads, she's available for intimate venues, festival stages, and everything in between.",
    heroSubtitle: "Drifting between waking and dream — lush arrangements, velvet vocals, and stories that linger long after the music fades.",
  },

  // ── Navigation ───────────────────────────
  nav: [
    { label: "Music",  href: "#audio"   },
    { label: "Live",   href: "#live"    },
    { label: "About",  href: "#about"   },
    { label: "Book",   href: "#booking" },
  ],

  // ── Marquee ticker ───────────────────────
  marqueeItems: [
    "New singles out now",
    "Available for bookings 2026–27",
    "Snooze",
    "Together",
    "Live dates this spring",
  ],

  // ── Tracks ───────────────────────────────
  // audioSrc: path relative to index.html, e.g. "assets/snooze.mp3"
  tracks: [
    { num: "01", name: "Snooze - Sneak Peak",      duration: "0:28", badge: "New Release", audioSrc: "assets/Snooze_Sneak_Peak.wav" },
    { num: "02", name: "Together",                 duration: "0:28", badge: "New Release", audioSrc: "assets/togethershort.wav" },
    { num: "03", name: "Angel",                    duration: "1:45", badge: null,          audioSrc: "assets/AngelWeb.m4a" },
    { num: "04", name: "I love you, friend",       duration: "0:25", badge: null,          audioSrc: "assets/iloveyoufriendshort.wav" },
    { num: "05", name: "Body Unpositive - demo",   duration: "1:25", badge: null,          audioSrc: "assets/Bodyunpositivity.mp3" },
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
  // embedId: YouTube video ID (e.g. "dQw4w9WgXcQ") — clicking the card loads the player
  videos: [
    {
      id:       "v1",
      platform: "youtube",
      title:    '"Tennessee Whiskey" — Live at Reveler',
      meta:     "",
      embedId:  "qspflJpjPC4",
      bgLabel:  '"Tennessee Whiskey"',
      bgColor:  "linear-gradient(155deg,#3a2e2c,#6b3a44)",
      featured: true,
    },
    {
      id:       "v2",
      platform: "instagram",
      title:    '"Creep"',
      meta:     "",
      embedId:  "https://www.instagram.com/reel/DRf8UopDfiA/",
      bgLabel:  "Creep",
      bgColor:  "linear-gradient(135deg,#2e2a3a,#5a3a50)",
      featured: false,
    },
    {
      id:       "v3",
      platform: "tiktok",
      title:    '"Mary on a cross"',
      meta:     "",
      embedId:  "https://www.instagram.com/reel/Cj4aq-DAyZt/",
      bgLabel:  "Mary on a cross",
      bgColor:  "linear-gradient(135deg,#2e2e2a,#4a3c38)",
      featured: false,
    },
    {
      id:       "v4",
      platform: "youtube",
      title:    '"Hate me"',
      meta:     "",
      embedId:  "https://www.instagram.com/reel/CISPR8nD3P-/",
      bgLabel:  "Hate me",
      bgColor:  "linear-gradient(135deg,#3a2a2a,#5c3040)",
      featured: false,
    },
    {
      id:       "v5",
      platform: "instagram",
      title:    '"Running up that hill"',
      meta:     "",
      embedId:  "https://www.instagram.com/reel/Cgs3vuBAaSf/",
      bgLabel:  "Running up that hill",
      bgColor:  "linear-gradient(135deg,#2a2e38,#3a4050)",
      featured: false,
    },
    {
      id:       "v6",
      platform: "tiktok",
      title:    "The Winner Takes It All",
      meta:     "",
      embedId:  "https://www.instagram.com/reel/C1-0Hjrul6M/",
      bgLabel:  "The Winner Takes It All",
      bgColor:  "linear-gradient(135deg,#2a2e38,#3a4050)",
      featured: false,
    },
    {
      id:       "v7",
      platform: "youtube",
      title:    "Santeria",
      meta:     "",
      embedId:  "https://www.instagram.com/reel/DIaLxEmNcHJ/",
      bgLabel:  "Santeria",
      bgColor:  "linear-gradient(135deg,#2e2a3a,#5a3a50)",
      featured: false,
    },
  ],

  // ── Booking contact details ───────────────
  bookingDetails: [
    { label: "Management", value: "therosiecrown@gmail.com" },
  ],

  // ── Social / streaming links ──────────────
  socials: [
    { label: "Instagram",   href: "https://www.instagram.com/therosiecrown/" },
    { label: "Spotify",     href: "https://open.spotify.com/artist/4R5Td0kAQ1fcWeES76vzdG?si=5JIK-5JBQ2a_AkP7XtKjnQ" },
    { label: "Apple Music", href: "https://music.apple.com/us/artist/rosie-crown/1782194425" },
    { label: "TikTok",      href: "https://www.tiktok.com/@therosiecrown" },
    { label: "YouTube",     href: "https://www.youtube.com/@rosiecrown" },
  ],

};
