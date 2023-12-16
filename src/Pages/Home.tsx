import { Box, Typography } from "@mui/material";
import { useThemization } from "../Hooks/ThemizationHook";
import GradientBox from "../Components/Reused styled components/GradientBox";

const Home = () => {
  const { secondary } = useThemization();

  return (
    <GradientBox styles={{ "h1, h2, p": { fontFamily: "ubuntu" } }}>
      <Typography
        component={"h1"}
        sx={{
          margin: "0 auto",
          fontSize: 56,
          color: "white",
          textAlign: "center",
        }}
      >
        Become
        <Typography
          sx={{ fontSize: 56, color: secondary.main, display: "inline", mx: 1 }}
        >
          salesforce developer
        </Typography>
        today!
      </Typography>
    </GradientBox>
  );
};

export default Home;
