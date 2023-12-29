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
import { toRGB } from "../Components/Reused styled components/HexToRGBA";

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
    <GradientBox bgColor={secondary.light} styles={{ pt: "72px",}}>
      <Box sx={{ display: "flex" }}>
        <Box id="under" sx={{ width: "328px", height: "100px" }}></Box>
        <Box
          component={"aside"}
          sx={{
            position: "fixed",
            width: "270px",
            height: "100%",
            zIndex: 100,
            top: "68px",
            padding: "24px 24px 100px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
            overflowY: "scroll",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            "::-webkit-scrollbar": {
              display: "none",
            },
            borderRight: `2px solid transparent`,
            // backgroundImage: gradients.lime_skyBlue,
            // bgcolor: primary.main,
            // backgroundBlendMode: "overlay",
            boxShadow: ` 4px -2px 5px -2px ${toRGB(primary.dark,0.9)}, inset -1px 0px 5px -2px ${toRGB(primary.dark,0.5)} , inset -3px 0px 6px -1px ${toRGB(primary.dark,0.2)},inset 5px 4px 6px -2px ${toRGB(primary.dark,0.8)}`,
          }}
        >
          {/* <Box sx={{position: "absolute"}}></Box> */}
          {dataBlocks.map((_, index) => {
            return (
              <Accordion key={nanoid()} sx={{ fontFamily: "orbitron",}}>
                <AccordionSummary>
                  <Typography sx={{ fontSize: 20, fontWeight: 500, color: primary.dark }}>
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
                      color: primary.dark,
                      fontSize: 16,
                      fontWeight: 300,
                      transition: "all 150ms ease",
                      p: 1,
                      border: "3px solid transparent",
                      borderRadius: rounding.md,
                      ":hover": {
                        border: "3px solid transparent",
                        // backgroundImage: gradients.lime_skyBlue,
                        boxShadow: `inset 2px 2px 7px 0px ${toRGB(primary.dark,0.5)}, inset 3px 3px 10px 2px ${toRGB(primary.dark,0.25)}, 2px 2px 3px -1px ${toRGB(primary.dark,0.6)}, 7px 3px 8px 0px ${toRGB(primary.dark,0.3)}, 0px 0px 8px -1px ${toRGB(primary.dark,0.5)}`,
                        borderRadius: rounding.md,
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
