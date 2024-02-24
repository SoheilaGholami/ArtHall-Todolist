import { Button, styled } from "@mui/material";

type CustomButtonPropsType = {
  text: string;
  type: "submit" | "button";
};
const MyButton = styled(Button)(({ theme }) => ({
  background: theme.palette.secondary.main,
  color: theme.palette.common.white,
  width: "fit-content",
  margin: "10px",
}));

export function CustomButton({ text, type }: CustomButtonPropsType) {
  return <MyButton type={type}>{text}</MyButton>;
}
