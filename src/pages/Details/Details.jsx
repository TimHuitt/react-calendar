import { useParams } from "react-router-dom"
import { useDataContext } from "../../context/DataContext.jsx"


const Details = () => {
  let { id } = useParams()
  const { data } = useDataContext()

  id = parseInt(id)
  let url

  data.forEach((d) => {
    const day = parseInt(Object.keys(d).join(''))
    if (day === id) {
      url = d[day]
    }
  })
  
  return (
    <>
      <h1>Details</h1>
      <img src={url} />
    </>
  )
}

export default Details