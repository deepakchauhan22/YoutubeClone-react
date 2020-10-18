import axios from 'axios';
const KEY = 'AIzaSyALSd-1Oa3Go4TtzyUA73TiKl1NNaoiZ2s';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})