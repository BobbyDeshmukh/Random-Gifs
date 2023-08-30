import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const useGif = (tag) => {

    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState('false');

    const randomurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const tagurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

    async function fetchData() {
        setLoading(true);

        const { data } = await axios.get(tag ? tagurl : randomurl);

        const imagesource = data.data.images.downsized_large.url;
        setGif(imagesource);
        setLoading(false);
    }

    useEffect(() => {
        fetchData('car');
    }, [])

    return { gif, loading, fetchData };
};

export default useGif;
