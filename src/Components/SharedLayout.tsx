import { DataObject } from "@mui/icons-material";
import { Box, Button, Container, Typography } from "@mui/material";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useThemization } from "../Hooks/ThemizationHook";

export const StyledLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactElement | string;
}) => {
  return (
    <NavLink to={to} style={{ textDecoration: "none", fontSize: 22 }}>
      {children}
    </NavLink>
  );
};
const SharedLayout = () => {
  const { primary, secondary, rounding } = useThemization();
  return (
    <Container
      disableGutters
      maxWidth="xl"
      sx={{
        bgcolor: primary.light,
        height: "fit-content"
      }}
    >
      <Box
        component={"header"}
        sx={{
          px: 5,
          py: 2,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          bgcolor: primary.main,
          position: "fixed",
          zIndex: 10,
          width: "100%",
          borderBottom: `1px solid ${secondary.light}`,
          boxShadow: `0px 2px 8px -1px rgba(255, 171, 145, 0.3), 0px 14px 11px 0px rgba(255, 171, 145, 0.2), 0px 1px 5px -5px rgba(255, 171, 145, 0.6)`,
        }}
      >
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <DataObject fontSize="large" color="secondary" />
          <Typography
            component={"h2"}
            sx={{
              letterSpacing: "0.05em",
              fontWeight: 700,
              fontSize: 24,
              color: "white",
              ml: 1,
            }}
          >
            Learn Apex
          </Typography>
        </Link>
        <Box
          sx={{
            fontFamily: "orbitron",
            ml: 5,
            display: "flex",
            alignItems: "center",
            mt: "2px",
            gap: 2,
            " .active": { color: secondary.main },
            " a": {
              color: "white",
              transition: "150ms ease",
              ":hover": {
                color: secondary.light,
              },
            },
          }}
        >
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/courses">Courses</StyledLink>
          <StyledLink to="/about">About</StyledLink>
        </Box>
        <Button
          sx={{
            bgcolor: primary.dark,
            color: "white",
            ml: "auto",
            border: `2px solid ${secondary.main}`,
            borderRadius: rounding.md,
            fontWeight: 700,
            ":hover": {
              bgcolor: secondary.main,
              color: "black",
            },
          }}
        >
          Login to Salesforce
        </Button>
      </Box>
      <Outlet />
    </Container>
  );
};

export default SharedLayout;
