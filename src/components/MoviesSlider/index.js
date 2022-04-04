import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {moviesList} = props
  const renderMoviesSlider = () => {
    const settings = {
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 4,
    }
    return (
      <Slider {...settings}>
        <div className="d-flex">
          {moviesList.map(item => (
            <MovieItem eachMovie={item} />
          ))}
        </div>
      </Slider>
    )
  }
  return renderMoviesSlider()
}
export default MoviesSlider
