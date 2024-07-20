import { Button } from "@mui/material";
import Cartitem from "./Cartitem"
import { useNavigate } from "react-router-dom";

const Cartpage = () => {
  const navigate = useNavigate();
  const handlecheckout =()=>{
    navigate('/checkout/?step=2')
  }
  return (
    <div>
      <div className="grid-cols-3 relative lg:grid">

        <div className="col-span-2">
          {[1,1,1,1].map((item,index) =><Cartitem item={item} key={index}/>)}
        </div>

        <div className="px-5 py-1 top-0 sticky mt-5 lg:mt-5 shadow-lg">
            <div>
                <p className="font-bold opacity-60 pb-3 text-md">Price Details</p>
                <hr />

                <div className="text-black font-semibold text-sm space-y-2">

                  <div className="flex justify-between p-3">
                    <span>Price ($)</span>
                    <span>499/-</span>
                  </div>

                  <div className="flex justify-between p-3">
                    <span>Discount</span>
                    <span className="text-green-700">-$129/-</span>
                  </div>

                  <div className="flex justify-between p-3">
                    <span>Delivery charge</span>
                    <span className="text-green-700">free</span>
                  </div>

                  <div className="flex justify-between p-3">
                    <span>Total Amount</span>
                    <span className="text-green-700">$499/-</span>
                  </div>
                </div>

                <Button
                onClick={handlecheckout}
                className="w-full"
                  sx={{
                    py: ".5rem",
                    px: "2rem",
                    backgroundColor: "#824BE2",
                    mt: "2rem",
                  }}
                  variant="contained"
                >
                  CHECKOUT
                </Button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Cartpage