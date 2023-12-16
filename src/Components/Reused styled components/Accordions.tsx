import styled from "@emotion/styled";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { useThemization } from "../../Hooks/ThemizationHook";

export const Accordion = styled((props: AccordionProps) => (
  // const {secondary} = useThemization();
  <MuiAccordion disableGutters elevation={0} {...props} />
))(({ theme }) => ({
  backgroundColor: "transparent",
  borderRadius: "8px",
  border: "1px solid",
  borderBottom: "3px solid",
  borderColor: "#ffab91",
  color: "white",
  ".MuiAccordionSummary-expandIconWrapper": {
    color:  "white",
  },
  ":hover .MuiAccordionSummary-expandIconWrapper": {
    color: "#ffab91",
  }
}));

export const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon
        sx={{
          fontSize: 18,
          transition: "color 150ms ease"
        }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
},
  "& .MuiAccordionSummary-content": {},
}));
