import { Container, Stack, styled } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import { theme } from "../../theme/Theme";

const Wrapper = styled(Stack)(({ theme }) => ({
  width: "100vw",
  minHeight: "100vh",
  overflowY: "auto",
  flex: 1,
  backgroundColor: theme.palette.primary.main,
  direction: "rtl",
}));

const MyContainer = styled(Container)(() => ({
  paddingTop: theme.spacing(7),
  direction: "rtl",
  display: "flex",
}));
function AppLayout() {
  return (
    <Wrapper>
      <Header />
      <MyContainer>
        <Stack sx={{ direction: "rtl" }} flex={1} paddingX={theme.spacing(4)}>
          <Outlet />
        </Stack>
      </MyContainer>
    </Wrapper>
  );
}

export default AppLayout;
