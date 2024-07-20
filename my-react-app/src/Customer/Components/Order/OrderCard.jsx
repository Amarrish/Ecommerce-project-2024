import { Grid } from "@mui/material"
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from "react-router-dom";
const OrderCard = () => {
    const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/account/order/${2}`)} className="p-5 shadow-md hover:shadow-2xl border">
      <Grid container spacing={2} className="justify-between">
        <Grid xs={6} item>
            <div className="flex">
                <div className="">
                    <img className="w-[10rem] h-[5rem] object-cover object-top rounded-lg p-1" src="https://5.imimg.com/data5/SELLER/Default/2021/7/ZW/DY/RA/133215290/mens-wear.jpg" alt="" />
                </div>

                <div className="text-xs font-semibold space-y-1">
                    <p>Mens clothins </p>
                    <p className="opacity-70">Size: M</p>
                    <p className="opacity-70">Color:Black</p>
                </div>
            </div>
        </Grid>




        <Grid xs={2} item>
            <p className="text-md font-semibold">$1000</p>
        </Grid>
        <Grid xs={4} item>
            <div>
                {
                    true && <div className="flex">
                    <span><AdjustIcon className="text-green-700 text-sm" sx={{width:'15px',height:'15px'}}/></span>
                    <p className="ml-1 text-md font-semibold">Delivered on march 03</p>
                </div>
                }

               {
                false &&  <div className="flex">
                <span className="text-green-700"><AdjustIcon/></span>
                <p>Expected Delivered on march 03</p>
            </div>
               }

                <p className="text-xs font-semibold opacity-55">your Item has been Delivered</p>
            </div>
        </Grid>
        </Grid>  
    </div>
  )
}

export default OrderCard