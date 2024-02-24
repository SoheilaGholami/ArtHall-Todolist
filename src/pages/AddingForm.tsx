import { Stack, Typography } from "@mui/material";
import TodoForm from "../components/TodoForm";

function AddingForm() {
  return (
    <>
      <Stack width={"100%"} alignItems="flex-end">
        <Typography variant="h1">افزودن</Typography>
      </Stack>
      <TodoForm />
    </>
  );
}

export default AddingForm;
