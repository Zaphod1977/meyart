import React from 'react';
import SpotifyPlayer from 'react-spotify-player';

function Project(props) {
  // const { linkurl, imageSource, imageAlt, label } = props;
  const size = {
    width: '100%',
    height: 635,
  };
  const view = 'list'; // or 'coverart'
  const theme = 'black'; // or 'white'

  return (
    <div>
      <SpotifyPlayer
        uri="https://open.spotify.com/playlist/37i9dQZF1EUMDoJuT8yJsl?si=d8ddf5159473425d"
        size={size}
        view={view}
        theme={theme}
      />
    </div>
  )
}

export default Project;