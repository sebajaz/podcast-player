const fetchPodcast = async() => {
        const response = await fetch('https://api.audioboom.com/audio_clips')
        const data = await response.json()
        return data.body.audio_clips
    
}

export default fetchPodcast;


