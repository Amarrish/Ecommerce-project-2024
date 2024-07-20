import { Avatar, Box, Grid, Rating } from "@mui/material"

const ProductReviewcard = () => {
  return (
    <div>
        <Grid container spacing={3} gap={3}>
            <Grid item xs={1}>
                <Box>
                    <Avatar className="text-white" sx={{width:56,height:56,bgcolor:'#E7A652'}}>

                    </Avatar>
                </Box>
            </Grid>

            <Grid item xs={9}>
                <div className="space-y-2">
                    <div>
                        <p>Raam</p>
                        <p className="opacity-70">April 05 2023</p>
                    </div>
                </div>
                <Rating value={4.5} name="half-rating"/>
                <p className="opacity-70">Nice Rating i love this product</p>
            </Grid>
        </Grid>
    </div>
  )
}

export default ProductReviewcard