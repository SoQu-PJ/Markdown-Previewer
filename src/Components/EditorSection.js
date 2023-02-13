import React from "react";
import { useState } from "react";
import { marked } from "marked";
// import ReactMarkdown from "react-markdown";
// import remarkGfm from 'remark-gfm'

export const EditorSection = props =>{
    const readmePathTDV = require("./textareaDefaultValue.md");
    let markdownParse;
    
    fetch(readmePathTDV)
        .then(response => response.blob())  
        .then(blob => blob.text())          
        .then(markdown => {                 
            markdownParse = marked.parse(markdown);
        });

    console.log(readmePathTDV)

    const [textareaValue, setTextareaValue] = useState(markdownParse)
   

    return(
        <>
            <textarea id="editor" value={textareaValue} onChange={e => setTextareaValue(e.target.value)}>
                
            </textarea>
        </>
    );
}