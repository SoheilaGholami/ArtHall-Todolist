import { Autocomplete, Stack, Typography } from "@mui/material";
import { CustomButton, CustomInput } from ".";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { FormProvider, useForm } from "react-hook-form";
import { TodoType } from "../Types/TodoType";
import { useAppDispatch } from "../hooks/hook";
import { addAsyncTodo } from "../features/todo/TodoSlice";
import toast, { Toaster } from "react-hot-toast";
import { CustomTextField } from "./CustomInput";
import { theme } from "../theme/Theme";
import { useNavigate } from "react-router-dom";

const category = [{ label: "پیشفرض", value: 1 }];
function TodoForm() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const methods = useForm<TodoType>({
    defaultValues: { isCompleted: false },
  });
  const submit = (data: TodoType) => {
    if (!data.title) {
      toast.error("عنوان را وارد کنید.");
      return;
    }
    if (!data.date) {
      data.date = new Date();
    }
    dispatch(addAsyncTodo(data)).then((res) => {
      navigate("/");
    });
    methods.reset();
  };
  return (
    <FormProvider {...methods}>
      <Toaster position="top-center" reverseOrder={false} />
      <Stack flex={1} justifyContent={"center"} alignItems={"center"}>
        <form onSubmit={methods.handleSubmit(submit)}>
          <Typography variant="body1" sx={{ color: "white", margin: "10px" }}>
            Personal
          </Typography>
          <Stack flexDirection={"column"}>
            <Stack flexDirection={"row"} justifyContent={"space-between"}>
              <Stack flex={1}>
                <CustomInput label="توضیح کوتاه" title="excerpt" />
              </Stack>
              <Stack flex={1}>
                <CustomInput label="عنوان" title="title" />
              </Stack>
            </Stack>
            <Stack flexDirection={"row"} justifyContent={"space-between"}>
              <Stack sx={{ direction: "rtl" }} flex={1}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    format="DD/MM/YYYY"
                    views={["year", "month", "day"]}
                    onChange={(date: any) => {
                      console.log("date date", date);

                      methods.setValue("date", date as Date);
                    }}
                    value={methods.watch("date")}
                    slots={{
                      textField: (params) => (
                        <CustomTextField
                          {...params}
                          sx={{
                            svg: { color: "white" },
                            input: {
                              color: `${theme.palette.common.white} !important`,
                            },
                          }}
                          value={
                            methods.watch("date")
                              ? new Date(
                                  methods.watch("date")
                                ).toLocaleDateString()
                              : undefined
                          }
                          placeholder=""
                        />
                      ),
                    }}
                  />
                </LocalizationProvider>
              </Stack>
              <Stack sx={{ direction: "rtl" }} flex={1}>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={category}
                  sx={{
                    width: "94%",

                    svg: { color: "white" },
                    input: { color: "white" },
                    label: {
                      color: `${theme.palette.info.light} !important`,
                    },
                  }}
                  renderInput={(params) => (
                    <CustomTextField
                      {...params}
                      color="error"
                      label="دسته بندی"
                    />
                  )}
                />
              </Stack>
            </Stack>
            <CustomInput label="شرح" title="description" rows={5} />
            <CustomButton type="submit" text="ذخیره" />
          </Stack>
        </form>
      </Stack>
    </FormProvider>
  );
}

export default TodoForm;
