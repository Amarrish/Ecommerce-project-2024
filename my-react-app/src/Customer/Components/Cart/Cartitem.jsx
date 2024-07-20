import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { Button, IconButton } from '@mui/material';
const Cartitem = () => {
  return (
    <div className="p-5 lg:shadow-lg lg:rounded-lg">
    <div className="flex">

        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
            <img className="h-full w-full object-cover" src="https://contents.mediadecathlon.com/p1786958/2b0a8a97ea3b1154f2f3734009451fe2/p1786958.jpg?format=auto&quality=70&f=650x0" alt="image" />
        </div>

        <div className="space-y-2 mt-2">
            <h2 className="font-bold">Menslim</h2>
            <p className="text-sm opacity-70 font-semibold">Size: M,L,X</p>
            <p className="text-sm opacity-70 font-semibold">Seller: Jack</p>

            <div className="flex space-x-3 font-semibold">
                <p>$99</p>
                <p className="line-through opacity-70">$159</p>
                <p className="text-green-700">5% OFF</p>
            </div>
        </div>

    </div>
       <div className='flex space-x-5'>
       <div className='flex space-x-2'>
            <IconButton sx={{color:'#673DE6'}}><AddCircleOutlineIcon/></IconButton>
            <span className='py-1 px-5 border rounded'>3</span>
            <IconButton sx={{color:'#1976D2'}}><RemoveCircleOutlineIcon/></IconButton>
        </div>

        <div>
        <Button>Remove</Button>
        </div>
       </div>

    </div>
  )
}

export default Cartitem