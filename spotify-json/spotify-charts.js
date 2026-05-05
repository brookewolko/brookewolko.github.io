const spotifyChart =
// paste code from Canvas below //




document.getElementById('week').innerHTML = `Top 10 on Spotify for <span class="green">${spotifyChart.displayChart.date}</span>`;
document.getElementById('list').innerHTML =
  spotifyChart.entries.map(spotifyData => {
    return `<li class="track">
    <div>
      <img class="albumCover" src="${spotifyData.trackMetadata.displayImageUri}">
    </div>
    <div class="track-info">
      <div class="rank">
        <div class="current">${spotifyData.chartEntryData.currentRank}</div>
      </div>
      <div class="credits">
        <div class="title">${spotifyData.trackMetadata.trackName}</div>
        <div class="artists">${spotifyData.trackMetadata.artists.map(creators => { return creators.name }).join('\n')}</div>
        <div class="listen"><a href="${spotifyData.trackMetadata.trackUri.replace("spotify:track:", "https://open.spotify.com/track/")}" target="_blank">Listen on Spotify</a></div>
      <div>
    </div>
  </li>`
  }).join('');

function narrow() {
  document.getElementById('filter').innerHTML = " ";
  var search = document.getElementById('search').value;
  var tracks = document.getElementsByClassName('track');
  var arr = Array.from(tracks);
  var filt = arr.map(e => e.outerHTML);
  document.getElementById('filter').innerHTML = filt.filter(f => f.match(search)).join('')
}
