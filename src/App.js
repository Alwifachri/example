import React, {Component} from 'react'; 
import './SongApp.css';
import SongArtist from './components/Songartists.js';
import SongAlbum from './components/Album.js';
import SongTitle from './components/Songtitle';

class App extends Component {
  render() {
    return (
      <div className="Song-App">
          <SongAlbum />
          <SongTitle />
          <SongArtist />
          <button className="Button">Select</button>
      </div>
    );
  }
}

export default App;