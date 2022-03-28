import React, {Component} from 'react'; 
import './SongApp.css';
import SongAlbum from './components/Album.js';

class App extends Component {
  render() {
    return (
      <div className="Song-App">
          <SongAlbum />
      </div>
    );
  }
}

export default App;