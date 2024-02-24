import { TextField, inputLabelClasses, styled } from "@mui/material";
import { theme } from "../theme/Theme";
import { useFormContext } from "react-hook-form";

type CustomInputPropsType = {
  label: string;
  rows?: number;
  title: string;
};

export const CustomTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.palette.info.main,
  color: theme.palette.common.white,
  "& fieldset": { border: "none" },
  borderRadius: theme.spacing(1),
  margin: theme.spacing(1),
}));

export function CustomInput({ label, rows, title }: CustomInputPropsType) {
  const { register } = useFormContext();
  return (
    <CustomTextField
      {...register(title)}
      label={label}
      variant="outlined"
      rows={rows ?? 1}
      multiline={rows ?? 1 > 1 ? true : false}
      InputProps={{ sx: { color: theme.palette.common.white, border: "none" } }}
      InputLabelProps={{
        sx: {
          color: theme.palette.info.light,

          [`&.${inputLabelClasses.shrink}`]: {
            // set the color of the label when shrinked (usually when the TextField is focused)
            color: theme.palette.info.light,
          },
        },
      }}
    />
  );
}
