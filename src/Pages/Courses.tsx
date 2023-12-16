import { AccordionDetails, Box, Typography } from "@mui/material";
import GradientBox from "../Components/Reused styled components/GradientBox";
import { useThemization } from "../Hooks/ThemizationHook";
import {
  Accordion,
  AccordionSummary,
} from "../Components/Reused styled components/Accordions";
import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

const defaultData = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const Courses = () => {
  const [dataBlocks, setDataBlocks] = useState<Array<number>>([]);
  const [dataTasks, setDataTasks] = useState<Array<number>>(
    []
  );
  useEffect(() => {
    setDataBlocks(defaultData)
    setDataTasks(defaultData.slice(0, 5))
  }, []);
  const { primary, secondary, rounding } = useThemization();
  return (
    <GradientBox styles={{ pt: "72px" }}>
      <Box sx={{ display: "flex" }}>
        <Box id="under" sx={{ width: "328px", height: "100px" }}></Box>
        <Box
          component={"aside"}
          sx={{
            position: "fixed",
            width: "270px",
            height: "100%",
            zIndex: 100,
            top: "72px",
            p: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            overflowY: "scroll",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            "::-webkit-scrollbar": {
              display: "none",
            },
            bgcolor: "rgba(121, 135, 203, 0.543)",
            borderRight: `1px solid ${secondary.light}`,
            boxShadow: `2px 6px 8px -1px rgba(255, 171, 145, 0.3), 14px 8px 11px 0px rgba(255, 171, 145, 0.2), 1px 6px 5px -5px rgba(255, 171, 145, 0.6)`,
          }}
        >
          {/* <Box sx={{position: "absolute"}}></Box> */}
          {dataBlocks.map((_, index) => {
            return (
              <Accordion key={nanoid()} sx={{ fontFamily: "orbitron" }}>
                <AccordionSummary>
                  <Typography sx={{ fontSize: 20, fontWeight: 500 }}>
                    {`Block ${index + 1}`}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    a: {
                      textDecoration: "none",
                      color: "white",
                      fontSize: 16,
                      fontWeight: 300,
                      transition: "all 150ms ease",
                      p: 1,
                      ":hover": {
                        color: secondary.light,
                        bgcolor: primary.light,
                        boxShadow: "1px 6px 5px -5px rgba(255, 171, 145, 1)",
                        borderRadius: rounding.sm,
                      },
                    },
                  }}
                >
                  {dataTasks.map((_, idx) => {
                    const id = nanoid();
                    return <Link key={id} state={{from: `Block ${index +1} / Task ${idx + 1}`}} to={id}>{`Task ${idx + 1}`}</Link>;
                  })}
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Box>
        <Outlet />
      </Box>
    </GradientBox>
  );
};

export default Courses;
