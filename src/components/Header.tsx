import { Container, Stack, styled, useTheme } from "@mui/material";

import { NavLink } from "react-router-dom";

const Wrapper = styled(Stack)(({ theme }) => ({
  flexGrow: 0,
  backgroundColor: theme.palette.info.main,
  padding: theme.spacing(2, 0),
}));

const CustomNavLink = styled(NavLink)(() => ({
  all: "unset",
  cursor: "pointer",
  fontWeight: "700",
  fontSize: "16px",
}));
function Header() {
  const theme = useTheme();
  return (
    <Wrapper>
      <Container>
        <Stack sx={{ direction: "ltr" }} flexDirection={"row"} gap={3}>
          <CustomNavLink
            end
            to={"/"}
            style={({ isActive }) => ({
              color: isActive
                ? theme.palette.secondary.main
                : theme.palette.common.white,
            })}
          >
            لیست کارها
          </CustomNavLink>
          <CustomNavLink
            to={"/add"}
            style={({ isActive }) => ({
              color: isActive
                ? theme.palette.secondary.main
                : theme.palette.common.white,
            })}
          >
            افزون کار
          </CustomNavLink>
        </Stack>
      </Container>
    </Wrapper>
  );
}

export default Header;
