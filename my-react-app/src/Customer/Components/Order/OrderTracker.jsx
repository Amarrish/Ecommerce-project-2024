import { Grid, Step, StepLabel, Stepper } from "@mui/material";

const steps = [
  "Placed",
  "Order Confirmed",
  "Shipped",
  "Out for Delivery",
  "Delivered",
];

const OrderTracker = ({ activeStep }) => {
  return (
    <div className="p-3 border py-10 rounded shadow-md">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={10}>
          <Stepper alternativeLabel activeStep={activeStep}>
            {steps.map((label, index) => (
              <Step key={index}>
                <StepLabel className="text-xs">{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Grid>

        <Grid item xs={12} sm={2} className="flex items-center justify-center sm:justify-end">
          <p className="font-semibold text-indigo-600 cursor-pointer">Cancel Order</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderTracker;
