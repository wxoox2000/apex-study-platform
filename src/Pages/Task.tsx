import { Editor, Monaco } from "@monaco-editor/react";
import { Box, Button, List, ListItem, Typography } from "@mui/material";
import { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";
import { useThemization } from "../Hooks/ThemizationHook";
import { toRGB } from "../Components/Reused styled components/HexToRGBA";
import { RingLoader } from "react-spinners";
import { nanoid } from "nanoid";
import { Done, Error } from "@mui/icons-material";
import { runTests } from "../API's/auth";
import { useSelector } from "react-redux";
import {
  selectAccessToken,
  selectInstance,
  selectRefreshToken,
} from "../Redux/Auth/selectors";

const defValue = `
    //code here`;
type defResult = {
  line: number;
  column: number;
  compiled: boolean;
  success: boolean;
  compileProblem: string | null;
  exceptionStackTrace: string | null;
  exceptionMessage: string | null;
};
const defResult: defResult[] = [
  {
    line: -1,
    column: -1,
    compiled: true,
    success: true,
    compileProblem: null,
    exceptionStackTrace: null,
    exceptionMessage: null,
  },
  {
    line: 30,
    column: 1,
    compiled: true,
    success: false,
    compileProblem: null,
    exceptionStackTrace:
      "Class.CarTest.car_values: line 13, column 1\nAnonymousBlock: line 17, column 1\nAnonymousBlock: line 17, column 1",
    exceptionMessage:
      "System.AssertException: Assertion Failed: Expected: 200, Actual: 20000",
  },
  {
    line: -1,
    column: -1,
    compiled: true,
    success: true,
    compileProblem: null,
    exceptionStackTrace: null,
    exceptionMessage: null,
  },
  {
    line: -1,
    column: -1,
    compiled: true,
    success: true,
    compileProblem: null,
    exceptionStackTrace: null,
    exceptionMessage: null,
  },
  {
    line: -1,
    column: -1,
    compiled: true,
    success: true,
    compileProblem: null,
    exceptionStackTrace: null,
    exceptionMessage: null,
  },
];
const Task = () => {
  const { secondary, primary, rounding, gradients, accent } = useThemization();
  const location = useLocation();
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  const [testResults, setTestResults] = useState<Array<defResult> | null>(null);
  const [loading, setLoading] = useState<Boolean>(false);
  const access = useSelector(selectAccessToken);
  const refresh = useSelector(selectRefreshToken);
  const instance = useSelector(selectInstance);

  const handleEditorDidMount = (
    editor: monaco.editor.IStandaloneCodeEditor,
    _: Monaco
  ) => {
    editorRef.current = editor;
  };

  const showValue = async () => {
    // alert(editorRef.current?.getValue());
    setLoading(true);
    try {
      const res = await runTests(
        access!,
        refresh!,
        instance!,
        editorRef.current?.getValue()!
      );
      console.log(res.result);
      setTestResults(res.result);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const options: monaco.editor.IStandaloneEditorConstructionOptions = {
    fontSize: 16,
    codeLens: false,
    minimap: {
      enabled: true,
    },
  };

  return (
    <Box sx={{ width: "100%", height: "100%", py: 2, px: 3 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "start",
          gap: "40px",
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: "460px",
            height: "600px",
            position: "relative",
            zIndex: 10,
            backgroundImage: "inherit",
            borderRadius: rounding.lg,
            boxShadow: `3px 3px 5px -1px ${toRGB(
              primary.dark,
              0.5
            )}, 7px 6px 8px 1px ${toRGB(
              primary.dark,
              0.3
            )}, 0px 0px 7px -1px ${toRGB(primary.dark, 0.5)}`,
          }}
        >
          <Box
            sx={{
              width: "434px",
              height: "16px",
              position: "absolute",
              bottom: "5px",
              left: "18px",
              bgcolor: secondary.light,
              borderBottomLeftRadius: rounding.sm,
              borderBottomRightRadius: rounding.lg,
              zIndex: 15,
            }}
          ></Box>
          <Box
            sx={{
              width: "460px",
              height: "600px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: rounding.lg,
              position: "absolute",
              top: 0,
              left: 0,
              bgcolor: secondary.main,
              // backgroundImage: gradients.darkBlue_purple,
            }}
          ></Box>
          <Box
            sx={{
              width: "450px",
              height: "590px",
              overflowY: "scroll",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              px: 2,
              py: 2,
              "::-webkit-scrollbar": {
                display: "none",
              },
              "h3, p": {
                fontFamily: "ubuntu",
              },
              code: {
                fontFamily: "orbitron",
                fontWeight: 600,
                bgcolor: secondary.main,
              },
              position: "absolute",
              top: "5px",
              left: "5px",
              bgcolor: secondary.light,
              borderRadius: rounding.md,
              boxShadow: `inset 3px 1px 5px 0px ${toRGB(primary.dark, 0.6)}`,
            }}
          >
            <Typography
              component={"h3"}
              sx={{ fontSize: 26, fontWeight: 600, color: accent.black, mb: 1 }}
            >
              {location.state?.from ? location.state.from : "Task"}
            </Typography>
            <Typography
              component={"p"}
              sx={{ fontSize: 18, fontWeight: 300, color: accent.black }}
            >
              Create a class called <code>Car</code>.
            </Typography>
            <Typography
              component={"p"}
              sx={{ fontSize: 18, fontWeight: 300, color: accent.black }}
            >
              Create the following variables within the class:
            </Typography>
            <List>
              <ListItem>
                <Typography
                  component={"p"}
                  sx={{ fontSize: 18, fontWeight: 300, color: accent.black }}
                >
                  <code>motor</code> String
                </Typography>
              </ListItem>
              <ListItem>
                <Typography
                  component={"p"}
                  sx={{ fontSize: 18, fontWeight: 300, color: accent.black }}
                >
                  <code>maximumSpeed</code> Integer
                </Typography>
              </ListItem>
              <ListItem>
                <Typography
                  component={"p"}
                  sx={{ fontSize: 18, fontWeight: 300, color: accent.black }}
                >
                  <code>passengers</code> Integer
                </Typography>
              </ListItem>
              <ListItem>
                <Typography
                  component={"p"}
                  sx={{ fontSize: 18, fontWeight: 300, color: accent.black }}
                >
                  <code>color</code> String
                </Typography>
              </ListItem>
            </List>
          </Box>
        </Box>
        <Box>
          <Box sx={{ borderRadius: rounding.lg, overflow: "hidden", mb: 5 }}>
            <Editor
              loading={<RingLoader color={primary.dark} size={200} />}
              height="500px"
              width="700px"
              options={options}
              defaultLanguage="apex"
              defaultValue={defValue}
              theme="vs-dark"
              onMount={handleEditorDidMount}
            />
          </Box>
          {loading && (
            <Box sx={{ margin: "0 auto", width: "fit-content" }}>
              <RingLoader color={primary.dark} size={200} />
            </Box>
          )}
          {testResults && (
            <List>
              {testResults.map((res, idx) => {
                if (res.compiled && res.success) {
                  return (
                    <ListItem
                      key={nanoid()}
                      sx={{
                        width: "100%",
                        border: "2px solid green",
                        padding: "8px, 12px",
                        borderRadius: rounding.md,
                        ":not(:last-of-type)": {
                          mb: 3,
                        },
                        gap: 2,
                      }}
                    >
                      <Done color="success" />
                      <Typography>
                        Test{idx + 1} successfully passed!
                      </Typography>
                    </ListItem>
                  );
                }
                return (
                  <ListItem
                    key={nanoid()}
                    sx={{
                      width: "700px",
                      border: "2px solid red",
                      padding: "8px, 12px",
                      borderRadius: rounding.md,
                      ":not(:last-of-type)": {
                        mb: 3,
                      },
                      gap: 2,
                    }}
                  >
                    <Error color="error" />
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                        "& p": {
                          fontFamily: "ubuntu",
                        },
                      }}
                    >
                      <Typography component="h3">
                        Test{idx + 1}{" "}
                        {!res.compiled ? "failed to compile" : "failed"}
                      </Typography>
                      <Typography component="p">
                        {res.compileProblem}
                      </Typography>
                      <Typography component="p">
                        {res.exceptionStackTrace}
                      </Typography>
                      <Typography component="p">
                        {res.exceptionMessage}
                      </Typography>
                    </Box>
                  </ListItem>
                );
              })}
            </List>
          )}
          <Button
            sx={{
              margin: "0 auto",
              display: "block",
              mt: 5,
              px: 3,
              py: 2,
              color: primary.dark,
              ml: "auto",
              border: `2px solid transparent`,
              borderRadius: rounding.md,
              fontWeight: 700,
              backgroundBlendMode: "overlay",
              backgroundImage: gradients.blue_steel,
              bgcolor: secondary.light,
              boxShadow: `inset 3px 2px 7px 0px ${toRGB(
                primary.dark,
                0.5
              )}, inset 5px 4px 10px 2px ${toRGB(
                primary.dark,
                0.25
              )}, 3px 2px 4px -1px ${toRGB(
                primary.dark,
                0.6
              )}, 4px 5px 8px 0px ${toRGB(
                primary.dark,
                0.3
              )}, 0px 0px 8px -1px ${toRGB(primary.dark, 0.5)}`,
              ":hover": {
                bgcolor: "transparent",
                boxShadow: `inset 3px 2px 7px 0px ${toRGB(
                  secondary.light,
                  0.6
                )}, inset 5px 4px 10px 2px ${toRGB(
                  secondary.light,
                  0.35
                )}, 3px 2px 4px -1px ${toRGB(
                  primary.dark,
                  0.6
                )}, 4px 5px 8px 0px ${toRGB(
                  primary.dark,
                  0.3
                )}, 0px 0px 8px -1px ${toRGB(primary.dark, 0.5)}`,
                color: "white",
              },
            }}
            onClick={showValue}
          >
            Run code
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Task;
