import { Editor, type EditorProps } from "@monaco-editor/react";

export default function CodeEditor(props: EditorProps) {
  return (
    <Editor
      defaultLanguage="html"
      height="50vh"
      options={{
        minimap: {
          enabled: false,
        },
        wordWrap: "on",
        fontSize: 16,
      }}
      theme="vs-dark"
      {...props}
    />
  );
}
