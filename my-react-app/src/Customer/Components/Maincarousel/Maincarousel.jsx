import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import data from '../../../Datas/Datas'
console.log(data);

const items = data.map((item,indx)=>(
  <div className="carousel-item w-full h-72 sm:h-80 md:h-96 lg:h-108 xl:h-120" key={indx}>
  <img
    className="w-full h-full  object-fill rounded"
    src={item.image}
    alt={`Slide ${indx}`}
  />
</div>
))
const Maincarousel = () => {
  return (
    <div className='relative z-10 w-full bg-fuchsia-200 p-2 h-full'>
        
    <AliceCarousel
        animationType="fadeout" 
        animationDuration={800}
        disableButtonsControls
        infinite
        items={items}
        mouseTracking
        autoPlay
        autoPlayInterval={1000}
    />

    </div>
  )
}

export default Maincarousel






