// ─────────────────────────────────────────
//  sections/stream.js
//  Streaming platform links bar —
//  sits directly below the hero.
// ─────────────────────────────────────────

function renderStream() {
  const { socials } = SITE_DATA;

  const spotify   = socials.find(s => s.label === "Spotify");
  const apple     = socials.find(s => s.label === "Apple Music");

  // SVG icons — inline so color transitions work via CSS
  const spotifyIcon = `
    <svg class="stream__btn-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424a.622.622 0 01-.857.207c-2.348-1.435-5.304-1.76-8.785-.964a.623.623 0 01-.277-1.215c3.809-.87 7.076-.496 9.712 1.115.294.18.387.563.207.857zm1.223-2.722a.78.78 0 01-1.072.257c-2.687-1.652-6.785-2.131-9.965-1.166a.78.78 0 01-.973-.519.781.781 0 01.52-.973c3.632-1.102 8.147-.568 11.234 1.329a.78.78 0 01.256 1.072zm.105-2.835C14.692 8.95 9.375 8.775 6.297 9.71a.937.937 0 11-.543-1.794c3.532-1.072 9.404-.865 13.115 1.338a.937.937 0 01-.955 1.613z"/>
    </svg>
  `;

const appleIcon = `<img src="assets/Apple_Music_Icon_RGB_lg_073120.svg" style="width:22px;height:22px;display:block;" alt="Apple Music" />`;

document.getElementById("stream-root").innerHTML = `
    <div class="stream" id="stream">
      <div class="stream__left">
        <span class="stream__label">Stream now</span>
      </div>
      <div class="stream__right">
        ${spotify ? `
          <a class="stream__btn stream__btn--spotify"
             href="${spotify.href}"
             target="_blank"
             rel="noopener noreferrer">
            ${spotifyIcon}
            Spotify
          </a>
        ` : ""}
        ${apple ? `
          <a class="stream__btn stream__btn--apple"
             href="${apple.href}"
             target="_blank"
             rel="noopener noreferrer">
            ${appleIcon}
            Apple Music
          </a>
        ` : ""}
      </div>
    </div>
  `;
}
