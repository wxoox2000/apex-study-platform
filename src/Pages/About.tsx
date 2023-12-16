import { Typography } from "@mui/material";
import GradientBox from "../Components/Reused styled components/GradientBox";

const About = () => {
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
      >About us</Typography>
    </GradientBox>
  );
};

export default About;
