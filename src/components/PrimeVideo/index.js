import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMovies = moviesList.filter(item => item.categoryId === 'ACTION')

  return (
    <div className="bg-container">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="prime-video"
        />
        <div className="movies-container">
          <h1 className="heading">Action Movies</h1>
          <MoviesSlider moviesList={actionMovies} />
        </div>
      </div>
    </div>
  )
}
export default PrimeVideo
