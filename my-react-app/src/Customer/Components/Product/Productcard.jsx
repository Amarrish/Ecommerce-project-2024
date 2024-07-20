import { useNavigate } from 'react-router-dom';
import './Product.css';
import PropTypes from 'prop-types'


const Productcard = ({product}) => {
    const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/product/${5}`)} className="product-container w-[14rem] cursor-pointer bg-white px-2 rounded flex flex-col product-center text-center justify-center">

        <div className="imagesection justify-center flex flex-row w-full h-[18rem]">
            <img className="w-full h-full object-fill object-left-top rounded" src={product.imageurl} alt="" />
        </div>

        <div className="textsection bg-white text-black p-2">
            <p className="text-xl font-bold">{product.title}</p>
            <p>The Ultimate Chic Coord Set White...</p>

            <div className="price flex space-x-2 text-xs font-bold">
            <p>Price: $ 788/- </p>
            <p className="line-through opacity-50">$ 1299/-</p>
            <p className="text-green-800">Off 35% </p>
            </div>

        </div>
    </div>
  )
}
Productcard.propTypes={
    product:PropTypes.shape({
        imageurl: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired
}
export default Productcard

