import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
// const BASE_URL = 'https://youtube-v2.p.rapidapi.com/';


const options = {
    method: 'GET',
    url: BASE_URL,
    params: {
        // relatedToVideoId: '7ghhRHRP6t4',
        // part: 'id,snippet',
        // type: 'video',
        maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': 'b5e38ab58fmsh9c92f0c5f626759p1ad78fjsn7588006cb180',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        // 'X-RapidAPI-Host': 'youtube-v2.p.rapidapi.com'

    }
};

export const fetchFromAPI =  (url) => {
    return axios.get(`${BASE_URL}/${url}`, options).then(function (response) {
        return response.data;
    }).catch(function (error) {
        console.error(error);
    });
}

export const fetchSuggestedVideosAPI =  (id) => {
    options.params.relatedToVideoId = id;
    options.params.part= 'id,snippet';
    options.params.type= 'video';
    return axios.get(`${BASE_URL}/search`, options).then(function (response) {
        return response.data;
    }).catch(function (error) {
        console.error(error);
    });
}

export const fetchVideoDetailsAPI =  (id) => {
    options.params.part= 'contentDetails,snippet,statistics'
    options.params.id= id;
    return axios.get(`${BASE_URL}/videos`, options).then(function (response) {
        return response.data;
    }).catch(function (error) {
        console.error(error);
    });
}

export const fetchChannelDetailsAPI =  (id) => {
    options.params.part= 'snippet,statistics'
    options.params.id= id;
    return axios.get(`${BASE_URL}/channels`, options).then(function (response) {
        return response.data;
    }).catch(function (error) {
        console.error(error);
    });
}