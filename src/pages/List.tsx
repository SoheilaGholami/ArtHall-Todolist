import {
  Stack,
  Tab,
  TablePagination,
  Tabs,
  Typography,
  colors,
} from "@mui/material";
import TodoItem from "../components/TodoItem";
import TodoSearch from "../components/TodoSearch";
import { useEffect, useState } from "react";
import { theme } from "../theme/Theme";

import { TodoType } from "../Types/TodoType";
import { getAsyncTodos } from "../features/todo/TodoSlice";
import { useAppDispatch, useAppSelector } from "../hooks/hook";

export default function List() {
  const [TabValue, setTabValue] = useState("default");
  const [searchTerm, setSearchterm] = useState<string>("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [pagedTodo, setPagedTodo] = useState<TodoType[]>([]);
  const { todos } = useAppSelector((state) => state.todos);

  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    console.log("page  dsvsv", page, rowsPerPage, pagedTodo);

    setPagedTodo(
      todos.filter((todo, index) => {
        if (page === 0) {
          if (index < rowsPerPage) {
            return todo as TodoType;
          }
        } else {
          if (index >= rowsPerPage * page && index < rowsPerPage * (page + 1)) {
            return todo as TodoType;
          }
        }
      })
    );
  }, [page, rowsPerPage, todos]);

  console.log("pagedTodo", pagedTodo, page);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAsyncTodos());
  }, []);

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };
  const handleSearch = (searchValue: string) => {
    setSearchterm(searchValue);
  };

  return (
    <Stack flex={1}>
      <Stack width={"100%"} alignItems="flex-end">
        <Typography variant="h1">لیست</Typography>
      </Stack>
      <Stack width={"100%"} alignItems="center" justifyContent={"center"}>
        <Stack width={"60%"}>
          <Stack
            width={"100%"}
            flex={1}
            alignItems="flex-end"
            marginBottom={theme.spacing(1)}
          >
            <Tabs
              value={TabValue}
              onChange={handleChange}
              textColor="secondary"
              indicatorColor="secondary"
              aria-label="secondary tabs example"
              sx={{ button: { color: "white", fontWeight: "600" } }}
            >
              <Tab value="category" label="دسته بندی" />
              <Tab value="default" label="پیش فرض" />
            </Tabs>
          </Stack>
          <Stack width={"100%"} flex={1} alignItems="flex-end">
            <TodoSearch handleSearch={handleSearch} />
          </Stack>

          {searchTerm.length === 0 && (
            <Stack
              width={"100%"}
              flex={1}
              alignItems="flex-end"
              gap={theme.spacing(1)}
            >
              {pagedTodo.map((todo: TodoType) => (
                <TodoItem {...todo} />
              ))}
              <TablePagination
                sx={{ color: "white", ["& > p"]: { direction: "ltr" } }}
                dir="rtl"
                component="div"
                count={todos.length}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Stack>
          )}
          {searchTerm.length > 0 && (
            <Stack
              width={"100%"}
              flex={1}
              alignItems="flex-end"
              gap={theme.spacing(1)}
            >
              {todos
                .filter((todo) => todo.title.includes(searchTerm))
                .map((todo: TodoType) => (
                  <TodoItem {...todo} />
                ))}
            </Stack>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
}
