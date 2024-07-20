import { Button, Grid, Typography } from "@mui/material"

const Footer = () => {
  return (
    <div>
        <Grid className="bg-black text-white text-center mt-10" container sx={{py:3, bgcolor:'black', color:'white'}}>

            <Grid xs={12} sm={6} md={4} lg={4}>
            <Typography className="pb-5" variant="h6">{""} Company</Typography>
            <div> <Button>{""} authorship information</Button></div>
            <div><Button>{""} copyright information</Button></div>
            <div><Button>{""} contact information</Button></div>
            <div><Button>{""} back to top links</Button></div>
            </Grid>

            <Grid xs={12} sm={6} md={4} lg={4} >
            <Typography className="pb-5" variant="h6">{""} Company</Typography>
            <div> <Button>{""} authorship information</Button></div>
            <div><Button>{""} copyright information</Button></div>
            <div><Button>{""} contact information</Button></div>
            <div><Button>{""} back to top links</Button></div>
            </Grid>

            <Grid xs={12} sm={6} md={4} lg={4} >
            <Typography className="pb-5" variant="h6">{""} Company</Typography>
            <div> <Button>{""} authorship information</Button></div>
            <div><Button>{""} copyright information</Button></div>
            <div><Button>{""} contact information</Button></div>
            <div><Button>{""} back to top links</Button></div>
            </Grid>

            <Grid xs={12} sm={6} md={4} lg={4} >
            <Typography className="pb-5" variant="h6">{""} Company</Typography>
            <div> <Button>{""} authorship information</Button></div>
            <div><Button>{""} copyright information</Button></div>
            <div><Button>{""} contact information</Button></div>
            <div><Button>{""} back to top links</Button></div>
            </Grid>
            
        </Grid>

        <Grid className="pb-3">
        <Grid className="p-5">
            <Typography align="center" className="pb-5" variant="h6">&copy; 2023 All Rights Reserved</Typography>
            <Typography align="center" className="pb-5" variant="h6">English (United States)</Typography>
            <Typography align="center" className="pb-5" variant="h6">Agency based in Barcelona and specialized in SEO, SEA and SMA, supports companies of all sizes in their web visibility strategy.</Typography>
           
            </Grid>
            <hr style={{border:'1px solid grey'}} />
        </Grid>
    </div>
  )
}

export default Footer



