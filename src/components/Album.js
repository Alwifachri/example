import data from '../Song.js';
import '../SongApp.css';

const SongAlbum = () => {
return (
    <div className="Album">{
            <img src="https://i.scdn.co/image/ab67616d0000b273e8b066f70c206551210d902b" alt={data.album.name} className="Image" />    
            }
    </div>
    )
};

export default SongAlbum;