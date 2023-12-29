import { Editor, Monaco } from "@monaco-editor/react";
import { Box, Button, Typography } from "@mui/material";
import { useRef } from "react";
import { useLocation } from "react-router-dom";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";
import { useThemization } from "../Hooks/ThemizationHook";
import { toRGB } from "../Components/Reused styled components/HexToRGBA";

const defValue = `public Map<String,String> getContextUserInformation(){
    //code here
}`;
const Task = () => {
  const { secondary, primary, rounding, gradients, accent } = useThemization();
  const location = useLocation();
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);

  const handleEditorDidMount = (
    editor: monaco.editor.IStandaloneCodeEditor,
    _: Monaco
  ) => {
    editorRef.current = editor;
  };

  const showValue = () => {
    alert(editorRef.current?.getValue());
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
            boxShadow: `3px 3px 5px -1px ${toRGB(primary.dark,0.5)}, 7px 6px 8px 1px ${toRGB(primary.dark,0.3)}, 0px 0px 7px -1px ${toRGB(primary.dark,0.5)}`
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
              position: "absolute",
              top: "5px",
              left: "5px",
              bgcolor: secondary.light,
              borderRadius: rounding.md,
              boxShadow: `inset 3px 1px 5px 0px ${toRGB(primary.dark,0.6)}`
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              laudantium, iste porro atque similique voluptates veniam debitis
              voluptas aut officiis aspernatur autem eveniet esse consectetur
              necessitatibus quaerat nobis consequuntur quisquam. Accusamus unde
              quibusdam officiis perferendis quod mollitia, sed, fugiat error
              delectus itaque eum illum repellat tempore deleniti assumenda?
              Eius voluptas, nobis necessitatibus quasi incidunt amet hic
              voluptate corporis doloremque accusantium! Officiis ex id alias
              maxime vero unde hic iste repellat amet laudantium nisi impedit
              quas laborum aliquam neque odio eveniet, nam temporibus nemo
              commodi, tenetur numquam dicta repudiandae culpa? Aut! Beatae
              adipisci molestias, quis laborum, deserunt ullam assumenda omnis
              accusantium nulla excepturi in error nisi fuga, ipsa vel? In natus
              numquam nisi aliquid debitis eligendi. Iusto, accusantium nihil.
              Optio, molestiae? Hic quae non modi quidem? Modi nemo, eligendi
              tempora magni laboriosam quae ut. Debitis deserunt tempore
              cupiditate eius iste quibusdam ad voluptatem optio, repellat
              nostrum at ipsa iure pariatur suscipit. Nostrum labore doloribus
              velit officiis aliquam, voluptatum perferendis dolore harum hic
              perspiciatis laboriosam corporis nobis repellendus mollitia
              repudiandae dolorum ipsam quasi illum molestiae? Voluptas deserunt
              sunt voluptates pariatur iusto accusantium? Aliquid, corrupti sit
              adipisci laudantium explicabo dignissimos, harum aliquam incidunt
              delectus fugiat quam, inventore rem maiores natus. Obcaecati id,
              officiis distinctio aliquam nobis sunt est voluptatum? Rem
              adipisci ea vero? Odio, facilis reprehenderit possimus accusantium
              earum eligendi alias iusto asperiores architecto cupiditate
              aspernatur nesciunt odit totam, dignissimos aliquam incidunt saepe
              perspiciatis. Temporibus maxime expedita, neque reprehenderit iure
              cumque facilis quisquam! Accusamus quasi sit, rem architecto nobis
              veritatis facere ipsam, voluptatibus eius eveniet exercitationem
              numquam reprehenderit. Architecto minima, deleniti unde sapiente
              cumque quo perspiciatis. Deleniti veniam magnam doloribus soluta
              voluptatibus sint. Fugit suscipit consequuntur alias magnam
              obcaecati quos temporibus nostrum doloremque quia consectetur
              ipsum amet vel quidem voluptatibus, numquam harum beatae possimus
              est labore sapiente veritatis vero. Doloremque pariatur quasi
              maxime?
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box sx={{ borderRadius: rounding.lg, overflow: "hidden" }}>
            <Editor
              height="500px"
              width="700px"
              options={options}
              defaultLanguage="apex"
              defaultValue={defValue}
              theme="vs-dark"
              onMount={handleEditorDidMount}
            />
          </Box>
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
              boxShadow: `inset 3px 2px 7px 0px ${toRGB(primary.dark,0.5)}, inset 5px 4px 10px 2px ${toRGB(primary.dark,0.25)}, 3px 2px 4px -1px ${toRGB(primary.dark,0.6)}, 4px 5px 8px 0px ${toRGB(primary.dark,0.3)}, 0px 0px 8px -1px ${toRGB(primary.dark,0.5)}`,
              ":hover": {
                bgcolor: "transparent",
                boxShadow: `inset 3px 2px 7px 0px ${toRGB(
                  secondary.light,
                  0.6
                )}, inset 5px 4px 10px 2px ${toRGB(
                  secondary.light,
                  0.35
                )}, 3px 2px 4px -1px ${toRGB(primary.dark,0.6)}, 4px 5px 8px 0px ${toRGB(primary.dark,0.3)}, 0px 0px 8px -1px ${toRGB(primary.dark,0.5)}`,
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
