import data from '../Song.js';
import '../SongApp.css';

const SongAlbum = () => {
return (
    <div className="Album">{
            data.album.images.map((images,i) => {
            return <img key={i} src={images.url} alt={data.album.name} className="Image" />    
            }
        )
    }
    </div>
    )
};

export default SongAlbum;