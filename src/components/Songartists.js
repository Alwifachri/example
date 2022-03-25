import data from '../Song.js'
import '../SongApp.css';

const SongArtist = () => {
return (
<div className="Artist">{
    data.album.artists.map((artists,i) => {
    return <p key={i}>{artists.name}</p>    
    })
    }
</div>
)};

export default SongArtist;
