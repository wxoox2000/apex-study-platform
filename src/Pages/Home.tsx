import { Typography } from "@mui/material";
import { useThemization } from "../Hooks/ThemizationHook";
import GradientBox from "../Components/Reused styled components/GradientBox";

const Home = () => {
  const { secondary, gradients, primary } = useThemization();

  return (
    <GradientBox bgColor={secondary.light} styles={{ "h1, h2, p": { fontFamily: "ubuntu" } }}>
      <Typography
        component={"h1"}
        sx={{
          margin: "0 auto",
          fontSize: 56,
          textAlign: "center",
        }}
      >
        Become
        <Typography
          sx={{ fontSize: 56, color: primary.dark, display: "inline", mx: 1 }}
        >
          salesforce developer
        </Typography>
        today!
      </Typography>
    </GradientBox>
  );
};

export default Home;
