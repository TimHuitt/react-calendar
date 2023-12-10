
import { useState, useEffect } from "react";
import words from "../../data/words.js"
import "./Gif.css"


const Gif = ({ newQuery }) => {
  const [ gifData, setGifData ] = useState({})

  const getRandomQuery = () => {

    const rng = Math.floor(Math.random() * words.length)
    return words[rng]
    
  }
  
  const handleRequest = () => {
    newQuery.replace('International', '')
      .replace('for ', '')
      .replace('the ', '')
      .replace('of ', '')
      .replace('Day ', '')
      .replace('World ', '')
    newQuery = newQuery && newQuery.length < 40 
      ? newQuery 
      : getRandomQuery()

    const gifURL = `https://api.giphy.com/v1/gifs/search?api_key=j1NX9kwdYBEpPxrd5A51p2Bl6470nFMY&q=${newQuery}&limit=1`
    
    fetch(gifURL)
    .then((res) => res.json())
    .then((json) => {
      setGifData(json.data)
    })
    .catch(null)
  }

  useEffect(() => {
    handleRequest()
  }, [])

  const thisGif = gifData.length > 0
    ? gifData[0].images.original.url
    : ''

  return (
    <div className='gif rounded-3'>
      <img className="p-4 img-fluid" src={ thisGif } />
      <div className="img-title d-flex justify-content-center align-items-center pb-4">
      </div>
    </div>
  )
}

export default Gif