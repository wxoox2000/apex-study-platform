import styled from "@emotion/styled";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
export const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} {...props} />
))(() => ({
  backgroundColor: "transparent",
  backdropFilter: "blur(4px)",
  borderRadius: "8px",
  border: "2px solid",
  borderBottom: "3px solid",
  borderColor: "transparent",
  boxShadow: `inset 3px 2px 7px 0px rgba(122,90,248,0.5), inset 5px 4px 10px 2px rgba(122,90,248,0.25), 3px 2px 4px -1px rgba(122,90,248,0.6), 4px 5px 8px 0px rgba(122,90,248,0.3), 0px 0px 8px -1px rgba(122,90,248,0.5)`,
  color: "white",
  ".MuiAccordionSummary-expandIconWrapper": {
    color: "#7a5af8",
  },
  ":hover .MuiAccordionSummary-expandIconWrapper": {
    color: "#ff22e9",
  },
  ":before": {
    backgroundColor: "transparent",
  },
}));

export const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon
        sx={{
          fontSize: 18,
          transition: "color 150ms ease",
        }}
      />
    }
    {...props}
  />
))(() => ({
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {},
}));
