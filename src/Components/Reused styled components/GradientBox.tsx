import { Box, SxProps } from "@mui/material";
import { useThemization } from "../../Hooks/ThemizationHook";
import { Theme } from "@emotion/react";

const GradientBox = ({ children, styles }: { children: React.ReactElement, styles?: SxProps<Theme> }) => {
  const { primary, accent } = useThemization();
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        pt: 14,
        fontFamily: "ubuntu",
        backgroundImage: `linear-gradient(
            180deg,
            ${primary.dark} 0%,
            ${primary.light} 45%,
            ${accent.light} 100%
          );`,
          ...styles,
      }}
    >
      {children}
    </Box>
  );
};

export default GradientBox;
