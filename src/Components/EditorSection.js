import React from "react";

export const EditorSection = props =>{
   

    return(
        <>
            <textarea id="editor" value={props.textareaValue} onChange={e => props.setTextareaValue(e.target.value)}>
            
            </textarea>
        </>
    );
}