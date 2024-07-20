import { Box, Grid } from "@mui/material"
import Addresscard from "../AddressCard/Addresscard"
import OrderTracker from "./OrderTracker"
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetails = () => {
  return (
    <div className="p-5 lg:px-20">
        <div>
            <Addresscard/>
        </div>

        <div className="py-10">
            <OrderTracker activeStep={4}/>
        </div>

        <Grid container className="space-y-5">
            {[1,1,1,1].map((items,index)=>
                        <Grid key={index} item container className="shadow-xl rounded-md p-5 border items-center justify-between">
                        <Grid item xs={6}>
                        <div className="flex items-center space-x-2">
                        <div>
                                <img className="w-[8rem] h-[5rem] object-cover rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZMRpCv6yg2-2vtfWQwGQwNqzewvJw2jVcjg&s" alt="" />
                            </div>
        
                            <div className="space-y-1 text-sm">
                                <p>Men Slim Mid</p>
                                <p><span>Color:Pink</span> <span>Size:M</span></p>
                                <p>Seller  linira</p>
                                <p>$1922</p>
                            </div>
                        </div>
                        </Grid>
        
                        <Grid item>
                            <Box >
                                <StarBorderIcon className="text-indigo-700 text-xs"/>
                                <span className="ml-1 text-sm font-semibold">Rate & Review</span>
                            </Box>
                        </Grid>
        
                    </Grid>
        )
            
            }

        </Grid>
    </div>
  )
}

export default OrderDetails