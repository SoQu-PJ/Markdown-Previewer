import React, {useState} from "react"
import { EditorSection } from "./EditorSection";
import { PreviewerSection } from "./PreviewerSection";

export const MarkdownPreviewer = () => {
    const [textareaValue, setTextareaValue] = useState(null);

    return (
    <>
        <EditorSection setTextareaValue={setTextareaValue} textareaValue={textareaValue}/>
        <PreviewerSection textareaValue={textareaValue} />
    </>
    );
}