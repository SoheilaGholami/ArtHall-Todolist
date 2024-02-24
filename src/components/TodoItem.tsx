import { Checkbox, ListItem, Typography, styled } from "@mui/material";
import { TodoType } from "../Types/TodoType";
import { useAppDispatch } from "../hooks/hook";
import { toggleAsyncTodo } from "../features/todo/TodoSlice";

const CustomeListItem = styled(ListItem)(({ theme }) => ({
  width: "100%",
  justifyContent: "space-between",
  backgroundColor: theme.palette.info.main,
  borderRadius: theme.spacing(1),
  color: theme.palette.common.white,
}));

function TodoItem(todo: TodoType) {
  const dispatch = useAppDispatch();
  return (
    <CustomeListItem>
      <Typography>{new Date(todo.date).toLocaleDateString("fa-IR")}</Typography>
      <Typography>{todo.excerpt}</Typography>
      <Typography>{todo.title}</Typography>
      <Checkbox
        onClick={() => dispatch(toggleAsyncTodo(todo))}
        checked={todo.isCompleted}
        sx={{
          color: "white",
          "&.Mui-checked": {
            color: "white",
          },
        }}
      />
    </CustomeListItem>
  );
}

export default TodoItem;
