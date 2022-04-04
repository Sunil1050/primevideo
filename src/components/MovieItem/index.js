import './index.css'

const MovieItem = props => {
  const {eachMovie} = props
  const {thumbnailUrl} = eachMovie
  return <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
}
export default MovieItem
