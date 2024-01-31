import slider_1 from '../../assets/1-slider.jpg'

function Slider() {
    const sliderStyles = {
        backgroundImage: `url(${slider_1})`
    }
  return (
    <div style={sliderStyles} className=' rounded-lg shadow-lg border-1 border-red-500 p-1 mx-auto h-44 md:h-64 lg:h-96 bg-cover bg-center bg-no-repeat '>
    </div>
  )
}

export default Slider