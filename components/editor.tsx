"use client"; // this registers <Editor> as a Client Component
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import {
  darkDefaultTheme,
  lightDefaultTheme,
  Theme,
  BlockNoteView
} from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useEffect } from "react";
import { useTheme } from "next-themes";


// Base theme
const lightTheme = {
  colors: {
    editor: {
      text: "#000000",
      background: "#f7fafc",
    },
    highlights: lightDefaultTheme.colors!.highlights,
  },
  borderRadius: 4,
} satisfies Theme;

// The theme for dark mode,
// users the light theme defined above with a few changes
const darkTheme = {
  colors: {
    editor: {
      text: "#ffffff",
      background: "#0e1729",
    },
    highlights: darkDefaultTheme.colors!.highlights,
  },
} satisfies Theme;

// Our <Editor> component we can reuse later
export function Editor({
  id,
  defaultValue,
  onChange,
}: {
  id: string
  defaultValue: string
  onChange: (value: any) => void
}) {
  // Creates a new editor instance.
  const editor = useCreateBlockNote()

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    async function loadInitialHTML() {
      console.log("Loading initial HTML into editor:", defaultValue)
      const blocks = await editor.tryParseHTMLToBlocks(defaultValue)
      editor.replaceBlocks(editor.document, blocks)
    }
    loadInitialHTML()
  }, [defaultValue, editor])

  // Renders the editor instance using a React component.
  return <BlockNoteView
    theme={theme === "dark" ? darkTheme : lightTheme}
    editor={editor}
    id={id}
    onChange={async () => {
      const html = await editor.blocksToHTMLLossy(editor.document)
      console.log("Editor content changed:", html)
      onChange(html == "<p></p>" ? "" : html) // Convert empty paragraphs to empty string
    }} />;
}