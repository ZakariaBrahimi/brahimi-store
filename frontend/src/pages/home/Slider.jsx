import ImageGallery from 'react-image-gallery'
import slider_1 from '../../assets/1-slider.jpg'
function Slider() {
    
    const images = [
        // {
        //   original: "https://picsum.photos/id/1018/1000/600/",
        //   thumbnail: "https://picsum.photos/id/1018/250/150/",
        //   originalWidth: 10,
          
        // },
        // {
        //     original: "https://picsum.photos/id/1015/1000/600/",
        //     thumbnail: "https://picsum.photos/id/1015/250/150/",
        //     originalWidth: 10,
        // },
        {
            original: slider_1,
            thumbnail: slider_1,
            // originalHeight:10000000,
            // thumbnailHeight:'10px'
        },
        {
            original: slider_1,
        }
      ];
  return (
    <div className=''>
        <ImageGallery
            showIndex={true}
            className=""
            items={images}
            showNav={false}
            showThumbnails={false}
            showFullscreenButton={false}
            showPlayButton={false}
            autoPlay={true}
            // originalWidth={3}
          />
    </div>
    
  )
}

export default Slider