'use strict';

window.onSpotifyWebPlaybackSDKReady = () => {
  const token = 'BQDycIHx6eNcu5nbHYSdo9xiZUfVdv6t5jb_xDHP3CgleUSt2Hpyr51inY9dN5rt5t5-vk_wXc73DsQo4dzviGvoaANOC72LqoF01B8EnXUjM5YunDAJ08aP_ou8VVjEIqQ5nYuX_gl5yCXY_0T8LdORVtwzj8Qy3bOG';
  const player = new Spotify.Player({
    name: 'Web Playback SDK Quick Start Player',
    getOAuthToken: cb => { cb(token); }
  });
  console.log(player);
  // Error handling
  player.addListener('initialization_error', ({ message }) => { console.error(message); });
  player.addListener('authentication_error', ({ message }) => { console.error(message); });
  player.addListener('account_error', ({ message }) => { console.error(message); });
  player.addListener('playback_error', ({ message }) => { console.error(message); });

  // Playback status updates
  player.addListener('player_state_changed', state => { console.log(state); });

  // Ready
  player.addListener('ready', ({ device_id }) => {
    console.log('Ready with Device ID', device_id);
  });

  // Not Ready
  player.addListener('not_ready', ({ device_id }) => {
    console.log('Device ID has gone offline', device_id);
  });

  // Connect to the player!
  player.connect();
};

const closeIcon = document.getElementById('close__banner');
const banner = document.getElementsByClassName('main__banner');

function closeBanner(){
  banner[0].classList.add("oculto");
}

closeIcon.addEventListener("click", closeBanner);