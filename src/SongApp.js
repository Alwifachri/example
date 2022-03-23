import React, {Component} from 'react'; 
import data from './Song.js';
import './SongApp.css';

class Appsong extends Component {
  render() {
    return (
      <div className="Song-App">
          <div className="Album">{
              data.album.images.map((images,i) => {
              return <img key={i} src={images.url} alt={data.album.name} className="Image" />    
              })
          }
          </div>
          <div className="Title">
              <p>{data.name}</p>
          </div>
          <div className="Artist">{
              data.album.artists.map((artists,i) => {
              return <p key={i}>{artists.name}</p>    
              })
          }
          </div>
          <button className="Button">Select</button>
      </div>
    );
  }
}

export default Appsong;