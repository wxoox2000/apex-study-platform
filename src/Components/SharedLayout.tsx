import { DataObject } from "@mui/icons-material";
import { Box, Button, Container, Typography } from "@mui/material";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useThemization } from "../Hooks/ThemizationHook";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAccessToken,
  selectInstance,
  selectIsLoggedIn,
  selectSF_Logging,
} from "../Redux/Auth/selectors";
import { logout } from "../API's/auth";
import { resetUserData, setLoggingToSf } from "../Redux/Auth/AuthSlice";
import { PropagateLoader } from "react-spinners";

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
  const { primary, secondary, rounding, gradients } = useThemization();
  const loggedIn = useSelector(selectIsLoggedIn);
  const instance = useSelector(selectInstance);
  const token = useSelector(selectAccessToken);
  const logging = useSelector(selectSF_Logging);
  const dispatch = useDispatch();
  const onClick = async () => {
    try {
      const reset = await logout(instance!, token!);
      if (reset.status !== 200) {
        throw new Error("An error occured, please reload the page and try again")
      }
      dispatch(resetUserData());
    } catch (error) {
      console.log(error);
    }
  };
  const SF_logging = () => {
    dispatch(setLoggingToSf());
  };
  return (
    <Container
      disableGutters
      maxWidth="xl"
      sx={{
        bgcolor: primary.light,
        height: "fit-content",
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
          backgroundImage: gradients.blue_steel,
          position: "fixed",
          zIndex: 1000,
          width: "100%",
          // boxShadow: `0px 2px 8px -1px ${toRGB(
          //   primary.dark,
          //   0.3
          // )}, 0px 14px 11px 0px ${toRGB(
          //   primary.dark,
          //   0.2
          // )}, 0px 1px 5px -5px ${toRGB(primary.dark, 0.6)}`,
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
            " .active": {
              color: secondary.main,
              " :after": {
                transform: "scaleX(1)",
                opacity: 1,
                bgcolor: secondary.main,
              },
            },
            " a": {
              position: "relative",
              color: "white",
              transition: "150ms ease",
              ":after": {
                content: "''",
                position: "absolute",
                left: 0,
                bottom: -6,
                width: "100%",
                height: "3px",
                bgcolor: "white",
                borderRadius: rounding.sm,
                opacity: 0,
                transform: "scaleX(0)",
                transformOrigin: "center",
                transition: "all 300ms ease",
                boxShadow: "0 2px 3px -1px #ffffff",
              },
              ":hover": {
                color: secondary.main,
                " :after": {
                  transform: "scaleX(1)",
                  opacity: 1,
                },
              },
            },
          }}
        >
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/courses">Courses</StyledLink>
          <StyledLink to="/about">About</StyledLink>
        </Box>
        {loggedIn ? (
          <>
            <Typography
              sx={{
                letterSpacing: "0.05em",
                fontWeight: 500,
                fontSize: 18,
                mt: "2px",
                ml: "auto",
                color: "white",
              }}
            >
              {instance}
            </Typography>
            <Button
              sx={{
                ml: 2,
                bgcolor: primary.dark,
                backgroundImage: gradients.blue_purple,
                color: "white",
                border: `2px solid ${secondary.main}`,
                borderRadius: rounding.md,
                fontWeight: 700,
                ":hover": {
                  bgcolor: secondary.main,
                  color: "black",
                  border: `2px solid ${primary.dark}`,
                },
              }}
              onClick={onClick}
            >
              Logout
            </Button>
          </>
        ) : (
          <Link
            to="https://learn-apex-backend.onrender.com/oauth2"
            style={{ marginLeft: "auto" }}
            onClick={SF_logging}
          >
            <Button
              sx={{
                bgcolor: primary.dark,
                backgroundImage: gradients.blue_purple,
                color: "white",
                border: `2px solid ${secondary.main}`,
                borderRadius: rounding.md,
                fontWeight: 700,
                minWidth: "200px",
                minHeight: "40px",
                position: "relative",
                ":hover": {
                  bgcolor: secondary.main,
                  color: "black",
                  border: `2px solid ${primary.dark}`,
                },
              }}
            >
              {logging && (
                <PropagateLoader
                  color={secondary.main}
                  cssOverride={{
                    position: "absolute",
                    top: "calc(50% - 7px)",
                    left: "88px",
                  }}
                />
              )}
              {!logging && "Login to Salesforce"}
            </Button>
          </Link>
        )}
      </Box>
      <Outlet />
    </Container>
  );
};

export default SharedLayout;
