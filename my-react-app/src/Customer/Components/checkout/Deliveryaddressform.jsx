import { Box, Button, Grid, TextField } from "@mui/material";
import Addresscard from "../AddressCard/Addresscard";

const Deliveryaddressform = () => {
    const handlesubmit =(e)=>{
        e.preventDefault();
        const data = new FormData(e.currentTarget)
        const address = {
            FirstName:data.get('FirstName'),
            LastName:data.get('LastName'),
            Address:data.get('Address'),
            City:data.get('City'),
            State:data.get('State'),
            postalcode:data.get('postalcode'),
            phonenumber:data.get('phonenumber'),
        }

        console.log('address', address);
    }
  return (
    <div>
      <Grid className="p-5" container spacing={4}>
        <Grid
          item
          xs={12}
          lg={5}
          className="border rounded-e-md shadow-md h-[30rem] overflow-y-scroll"
        >
          <div className="p-5 py-7 cursor-pointer border-b">
            <Addresscard />
          </div>
          <Button
            size="large"
            variant="contained"
            sx={{ mt: 2, bgcolor: "#673DE6" }}
          >
            {" "}
            Deliver Here
          </Button>
        </Grid>

        <Grid item xs={12} lg={7}>
          <Box className="rounded-s-md p-5 border shadow-md">
            <form onSubmit={handlesubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="FirstName"
                    name="FirstName"
                    label="First name"
                    autoComplete="given-name"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="LastName"
                    name="LastName"
                    label="Last name"
                    autoComplete="given-name"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    id="Address"
                    name="Address"
                    label="Address"
                    autoComplete="given-Address"
                    fullWidth
                    multiline
                    rows={6}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="City"
                    name="City"
                    label="City"
                    autoComplete="given-City"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="Stateprovinceregion"
                    name="State"
                    label="State Province Region"
                    autoComplete="given-Stateprovinceregion"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="postalcode"
                    name="postalcode"
                    label="Zip/Postal code"
                    autoComplete="postalcode"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="phonenumber"
                    name="phonenumber"
                    label="Phone number"
                    autoComplete="given-phonenumber"
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Button
                  sx={{
                    py: ".5rem",
                    px: "2rem",
                    backgroundColor: "#824BE2",
                    mt: "2rem",
                  }}
                  variant="contained"
                  type="submit"
                >
                  DELIVERD HERE
                </Button>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Deliveryaddressform;
