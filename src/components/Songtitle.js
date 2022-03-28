import data from '../Song.js';
import '../SongApp.css';

const SongTitle = () => {
    return (
        <p>{data[0].artists[0].name}</p>
        ) 
}

export default SongTitle;