import { Checkbox, FormControlLabel } from "@material-ui/core";
import React from "react";

const ChannelFilter = () => {
  return (
    <div>
      <FormControlLabel
        value="end"
        control={<Checkbox color="primary" />}
        label="Wind Speed"
        labelPlacement="end"
      />
      <FormControlLabel
        value="end"
        control={<Checkbox color="primary" />}
        label="Wind Direction"
        labelPlacement="end"
      />
      <FormControlLabel
        value="end"
        control={<Checkbox color="primary" />}
        label="Temperature"
        labelPlacement="end"
      />
      <FormControlLabel
        value="end"
        control={<Checkbox color="primary" />}
        label="Pressure"
        labelPlacement="end"
      />
    </div>
  );
};

export default ChannelFilter;
