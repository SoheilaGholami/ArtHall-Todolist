import { Search } from "@mui/icons-material";
import { Box, IconButton, InputBase, styled } from "@mui/material";

const SearchBox = styled(Box)(({ theme }) => ({
  width: "50%",
  backgroundColor: theme.palette.info.main,
  borderRadius: theme.spacing(1),
  color: theme.palette.common.white,
  display: "flex",
  justifyContent: "space-between",
  padding: theme.spacing(0, 2),
  marginBottom: theme.spacing(2),
}));

type TodoSearchPropsType = {
  handleSearch: (data: string) => void;
};
function TodoSearch({ handleSearch }: TodoSearchPropsType) {
  return (
    <SearchBox>
      <IconButton type="button" aria-label="search">
        <Search sx={{ color: "white" }} />
      </IconButton>
      <InputBase
        inputProps={{ dir: "rtl" }}
        placeholder="جستجو"
        className="mir"
        sx={{ color: "white" }}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </SearchBox>
  );
}

export default TodoSearch;
