import PropTypes from 'prop-types';
const Homesecion = ({product}) => {
  return (
    <div className="homesection max-w-sm p-4 md:p-6 lg:p-8 bg-blue-200 px-2 rounded mx-2 m-2 flex flex-col product-center text-center justify-center">
      
      <>
      <div className="homesectionphoto justify-center flex flex-row">
            <img style={{height:'200px'}} src={product.imageurl} alt="" />
        </div>

        <div className="homesectioninfo mt-2 p-2">
            <h1 className="font-bold text-lg">{product.title}</h1>
            <p className="text-sm">{product.brand}</p>
            <p className="text-sm font-medium">Price: ${product.price}/-</p>
        </div>
      </>
        
    </div>
  )
}

Homesecion.propTypes = {
  product: PropTypes.shape({
    imageurl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Homesecion