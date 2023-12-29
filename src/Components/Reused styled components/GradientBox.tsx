import { Box, SxProps } from "@mui/material";
import { Theme } from "@emotion/react";

type GradBoxProps = {
  children: React.ReactElement;
  styles?: SxProps<Theme>;
  gradient?: string;
  bgColor?: string;
};
const GradientBox = ({ children, styles, gradient, bgColor }: GradBoxProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        pt: 14,
        fontFamily: "ubuntu",
        bgcolor: bgColor,
        backgroundImage: gradient,
        ...styles,
      }}
    >
      {children}
    </Box>
  );
};

export default GradientBox;
