import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import TextField from "@material-ui/core/TextField";
import React from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";

import Button from "../Button";
import CalenderIcon from "../../assets/icons/CalenderIcon";

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  header: {
    background: "#ffffff",
    width: "100%",
    height: "42px",
    margin: "48px 0",
    padding: "7px 20px",
    color: "#000",
    position: "fixed",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  headerShift: {
    marginRight: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  kicon: {
    padding: "6px",
    border: "0.8px solid #e6e6e9",
    borderRadius: "2px",
  },
}));

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

const Header = ({ open }) => {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState("EUR");
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  return (
    <div
      className={clsx(classes.header, {
        [classes.headerShift]: open,
      })}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          margin: "auto 0",
        }}
      >
        <div className={classes.grow} />
        <div
          style={{
            display: "flex",
          }}
        >
          <div style={{ display: "flex", margin: "0 20px" }}>
            <div style={{ marginRight: "14px", width: "200px" }}>
              <KeyboardDatePicker
                fullWidth
                disableToolbar
                inputVariant="filled"
                variant="filled"
                format="MM-dd-yyyy"
                margin="normal"
                id="date-picker-inline"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
                InputProps={{
                  disableUnderline: true,
                }}
                keyboardIcon={<CalenderIcon />}
                KeyboardButtonProps={{
                  className: classes.kicon,
                }}
              />
            </div>
            <div style={{ width: "129px" }}>
              <TextField
                fullWidth
                id="standard-select-currency-native"
                select
                value={currency}
                onChange={handleChange}
                SelectProps={{
                  native: true,
                }}
                InputProps={{
                  disableUnderline: true,
                }}
                variant="filled"
              >
                {currencies.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </div>
          </div>
          <Button
            icon="Timeline"
            width="91px"
            height="28px"
            background="#00c48c"
            borderRadius="14px"
            margin="0 -25px 0 0"
          />
          <Button
            icon="List View"
            width="91px"
            height="28px"
            background="#e6e6e9"
            borderRadius="14px"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
