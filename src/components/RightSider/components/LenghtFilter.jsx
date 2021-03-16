import { Checkbox, FormControlLabel, Typography } from "@material-ui/core";
import React from "react";
import Button from "../../Button";
const LenghtFilter = () => {
  return (
    <div>
      <div
        style={{
          marginBottom: "25px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          style={{ color: "#1e2447", fontSize: "15px", fontWeight: "500" }}
        >
          Issues Filter
        </Typography>
        <Button
          icon="Reset"
          width="27px"
          height="15px"
          background="none"
          color="#1e2447"
        />
      </div>
      <FormControlLabel
        value="end"
        control={<Checkbox color="primary" />}
        label="<1 day"
        labelPlacement="end"
      />
      <FormControlLabel
        value="end"
        control={<Checkbox color="primary" />}
        label="<2 day"
        labelPlacement="end"
      />
      <FormControlLabel
        value="end"
        control={<Checkbox color="primary" />}
        label="<3 day"
        labelPlacement="end"
      />
      <FormControlLabel
        value="end"
        control={<Checkbox color="primary" />}
        label="<7 day"
        labelPlacement="end"
      />
      <FormControlLabel
        value="end"
        control={<Checkbox color="primary" />}
        label="<10 day"
        labelPlacement="end"
      />
      <FormControlLabel
        value="end"
        control={<Checkbox color="primary" />}
        label="<30 day"
        labelPlacement="end"
      />
      <FormControlLabel
        value="end"
        control={<Checkbox color="primary" />}
        label="<60 day"
        labelPlacement="end"
      />
    </div>
  );
};

export default LenghtFilter;
