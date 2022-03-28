import data from '../Song.js';
import Songbutton from './Button.js';
import '../SongApp.css';

const SongAlbum = () => {
    return (
        data.map(e => (
            <div className="Songs">
                <p>{e.album.name}</p>
                <img src={e.album.images[1].url} alt={e.album.name} />
                <p>{e.name}</p>
                <p>{e.artists[0].name}</p>
                <Songbutton />
            </div>
        )
    )
    )
}

export default SongAlbum;