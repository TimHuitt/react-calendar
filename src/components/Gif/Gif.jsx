
import { useState, useEffect } from "react";



const Gif = () => {
  const [ gifData, setGifData ] = useState({})
  const [ limit, setLimit ] = useState('8')
  const [ query, setQuery ] = useState('search')
  let content
  
  const handleRequest = async () => {
    // const gifURL = `https://api.giphy.com/v1/gifs/search?api_key=j1NX9kwdYBEpPxrd5A51p2Bl6470nFMY&q=${query}&limit=${limit}`
    // const gifURL = `https://api.giphy.com/v1/gifs/search?api_key=j1NX9kwdYBEpPxrd5A51p2Bl6470nFMY&q=${query}&limit=${limit}`
    // fetch(gifURL)
    // .then((res) => res.json())
    // .then((json) => {
    //   return(json.data)
    // })
    // .catch(null)
    try {
      const gifURL = `https://api.giphy.com/v1/gifs/search?api_key=j1NX9kwdYBEpPxrd5A51p2Bl6470nFMY&q=${query}&limit=${limit}`
      const response = await fetch(gifURL)
      const responseData = await response.json()
      setGifData(responseData.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    handleRequest()
  }, [limit, query])


  return (
    <div className='gif rounded-3'>
      <img className="p-4 img-fluid" src={ gifData[0].images.original.url  } />
      
      <div className="img-title d-flex justify-content-center align-items-center pb-4">
        
      </div>
    </div>
  )
}

export default Gif