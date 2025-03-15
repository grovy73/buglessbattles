'use client'
import { Editor } from "@monaco-editor/react"
import { useEffect, useState } from "react"


export default function Home() {
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

  return <div className="h-screen bg-gray-800">
    <nav className="border-b-2 bg-gray-500">
      <ol>
        <h1 className="inline-block">Bug Battles</h1>
        <li className="inline-block pl-100">Home</li>
        <li className="inline-block pl-100">About</li>
        <li className="inline-block pl-100">Contact</li>
      </ol>
    </nav>
    <div className="flex">
      <div className="w-[80%] h-[90vh] p-2">
        <Editor
          defaultLanguage="javascript"
          defaultValue={editorValue}
          theme="vs-dark"
          onChange={handleEditorChange}
        />
      </div>
      <div className="flex flex-col">
        <button className="border-2 border-green-800 bg-green-700 text-gray-300 h-[5%]" onClick={onRunButtonClick}>Run</button>
        <textarea className="bg-gray-900 border-2 border-gray-600 text-gray-300 h-[50%]" readOnly value={codeRunRes}></textarea>
      </div>
    </div>
  </div>
}
