import { handleBreakpoints } from "@mui/system";
import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface TextEditorProps {
  onChange: (newValue: string) => void;
  value?: string;
}

const TextEditor = (props: TextEditorProps) => {
  const { value = "", onChange } = props;
  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={onChange}
      placeholder="Write something..."
      className="body"
      id="body"
    />
  );
};

export default TextEditor;
