import data from '../Song.js';
import '../SongApp.css';

const SongTitle = () => {
return (
    <div className="Title">
        <p>{data.name}</p>
    </div>
)};

export default SongTitle;