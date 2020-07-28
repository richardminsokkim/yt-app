import axios from 'axios';

const KEY = 'AIzaSyAkAL4ZLEKt_V4oHmJ2Hzgioyg5e7d2Fvg';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    }
});


