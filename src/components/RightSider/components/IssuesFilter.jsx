import { Checkbox, FormControlLabel, Typography } from "@material-ui/core";
import React from "react";
import Button from "../../Button";

const IssuesFilter = () => {
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
        label="Degradation"
        labelPlacement="end"
      />
      <FormControlLabel
        value="end"
        control={<Checkbox color="primary" />}
        label="Hi Vane Diff"
        labelPlacement="end"
      />
      <FormControlLabel
        value="end"
        control={<Checkbox color="primary" />}
        label="Erratic Data"
        labelPlacement="end"
      />
      <FormControlLabel
        value="end"
        control={<Checkbox color="primary" />}
        label="Missing Data"
        labelPlacement="end"
      />
      <FormControlLabel
        value="end"
        control={<Checkbox color="primary" />}
        label="Out of Range"
        labelPlacement="end"
      />
      <FormControlLabel
        value="end"
        control={<Checkbox color="primary" />}
        label="Flat Line"
        labelPlacement="end"
      />
      <FormControlLabel
        value="end"
        control={<Checkbox color="primary" />}
        label="Icing"
        labelPlacement="end"
      />
    </div>
  );
};

export default IssuesFilter;
