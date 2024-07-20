import { Grid } from "@mui/material";
import OrderCard from "./OrderCard";

const status = [
  { label: "Ontheway", value: "On the Way" },
  { label: "Delivered", value: "Delivered" },
  { label: "Cancelled", value: "Cancelled" },
  { label: "Return", value: "Return" },
];

const Order = () => {
  return (
    <div>
      <Grid container className="justify-between">
        <Grid item xs={12} sm={4} md={3}>
          <div className="p-5 border h-auto top-5 sticky rounded-md shadow-md bg-white">
            <h1 className="font-bold">FILTER</h1>
            <div className="mt-10 space-y-4">
              <h1 className="font-semibold">ORDER STATUS</h1>

              {status.map((option, index) => (
                <div key={index} className="flex text-sm">
                  <input
                    type="checkbox"
                    defaultValue={option.value}
                    className="focus:ring-indigo-600"
                  />
                  <label className="ml-2" htmlFor={option.value}>
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </Grid>

        <Grid item xs={12} sm={8} md={9}>
              {[1,1,1,1,1,1].map((item,index)=><div key={index} className="space-y-3">
            <OrderCard />
          </div>)}
        </Grid>
      </Grid>
    </div>
  );
};

export default Order;
