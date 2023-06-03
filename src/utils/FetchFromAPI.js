import axios from 'axios';


const BASE_URL = `https://youtube-v31.p.rapidapi.com`;

const options = {
    params: {
        maxResults: '50'
    },
    headers: {
        // eslint-disable-next-line no-undef
        'X-RapidAPI-Key': '83978ee180msh910bf0da0e0450bp140534jsne6d607a1d4b9',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
}