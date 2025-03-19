'use client'
import { Editor } from "@monaco-editor/react"
import { useEffect, useState } from "react"
import styles from "./page.module.css"


export default function CodeEditor() {
  let [editorValue, setEditorValue] = useState("// Some Comment");
  let [codeRunRes, setCodeRunRes] = useState("Output here");

  const handleEditorChange = (value, event) => {
    setEditorValue(value);
  }

  const onRunButtonClick = async (e) => {
    e.preventDefault();

    const opts = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: editorValue
      })
    }
    const response = await fetch("http://localhost:9000/execute", opts);
    const res_json = await response.json();

    setCodeRunRes(res_json.output);
  }

  return (
    <>
      <div className={styles.editor}>
        <Editor
          defaultLanguage="javascript"
          defaultValue={editorValue}
          theme="vs-dark"
          onChange={handleEditorChange}
        />
      </div>
      <div className={styles.run_container}>
        <button onClick={onRunButtonClick}>Run</button>
        <textarea readOnly value={codeRunRes}></textarea>
      </div>
  </>
  );
}
