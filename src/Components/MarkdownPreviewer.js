import React, {useState} from "react"
import "../App.css";
import { EditorSection } from "./EditorSection";
import { PreviewerSection } from "./PreviewerSection";

export const MarkdownPreviewer = () => {
    const [textareaValue, setTextareaValue] = useState("");

    return (
    <header className="markdown-previewer-section">
        <EditorSection setTextareaValue={setTextareaValue} textareaValue={textareaValue}/>
        <PreviewerSection textareaValue={textareaValue} />
    </header>
    );
}