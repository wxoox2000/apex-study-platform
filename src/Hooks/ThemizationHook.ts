import { useTheme } from "@mui/material/styles";

export const useThemization = () => {
    const primary = useTheme().palette.primary;
    const secondary = useTheme().palette.secondary;
    const accent = useTheme().palette.accent;
    const rounding = useTheme().borderRadius;
    const breakpoints = useTheme().breakpoints;
  return { primary, secondary, accent, rounding, breakpoints };
};