
import { useState, useEffect } from "react";
import words from "../../data/words.js"
import "./Gif.css"
import { useDataContext } from '../../context/DataContext.jsx'


const Gif = ({ newQuery, currentDay }) => {
  const [ gifData, setGifData ] = useState({})
  const { addData } = useDataContext()

  const getRandomQuery = () => {
    const rng = Math.floor(Math.random() * words.length)
    return words[rng]
  }
  
  const handleRequest = () => {
    newQuery = newQuery.replace(/\b(?:International|for|the|of|World)\b\s*/gi, '').trim();
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


  useEffect(() => {
    if (gifData.length > 0) {
      addData({[currentDay]: gifData[0].images.original.url})
    }
  }, [gifData])
  
  
  return (
    <div className='gif rounded-3' name={thisGif}>
      <img className="p-4 img-fluid" src={ thisGif } />
      <div className="img-title d-flex justify-content-center align-items-center pb-4">
      </div>
    </div>
  )
}

export default Gif