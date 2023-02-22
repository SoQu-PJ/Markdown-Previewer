import React, {useState} from "react";
import EditorValue from "./EditorDefaultText.json";
// import ReactMarkdown from "react-markdown";

export const EditorSection = props =>{
    const markdownParse = JSON.parse(JSON.stringify(EditorValue));
    const markdownDefaultText = markdownParse.DefaultValue.toString();

    console.log(markdownDefaultText);
    const [textareaValue, setTextareaValue] = useState(markdownDefaultText)
   

    return(
        <>
            <textarea id="editor" value={textareaValue} onChange={e => setTextareaValue(e.target.value)}>
            
            </textarea>
        </>
    );
}