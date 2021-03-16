import React from "react";
import { makeStyles, Button } from "@material-ui/core";
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "auto",
    padding: "0px",
    boxShadow: "none",
    "&:focus": {
      outline: "none",
    },
  },
}));

const CustomButton = ({
  icon,
  background,
  width,
  height,
  margin,
  color,
  border,
  borderRadius,
  size,
}) => {
  const classes = useStyles();
  return (
    <Wrapper
      width={width}
      height={height}
      margin={margin}
      color={color}
      background={background}
      border={border}
      borderRadius={borderRadius}
      size={size}
    >
      <Button variant="contained" className={`${classes.root} btn`}>
        {icon}
      </Button>
    </Wrapper>
  );
};

export default CustomButton;
const Wrapper = styled.div.attrs((props) => ({
  background: props.background || "#383838",
  width: props.width || "32px",
  height: props.height || "24px",
  margin: props.margin || "0px 0px",
  color: props.color || "#ffffff",
  border: props.border || "none",
  borderRadius: props.borderRadius || "none",
  size: props.size || "12px",
}))`
  .btn {
    background: ${(props) => props.background};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    margin: ${(props) => props.margin};
    color: ${(props) => props.color};
    border: ${(props) => props.border};
    border-radius: ${(props) => props.borderRadius};
    font-size: ${(props) => props.size};
    text-transform: capitalize;
    opacity: 0.6;
  }
`;
