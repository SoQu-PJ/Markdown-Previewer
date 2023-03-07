import React from "react";
import "../App.css";

export const EditorSection = props =>{
   

    return(
        <section className="editor-section">
            <nav className="editor-nav"><i className="fa fa-free-code-camp"></i> Editor <i className="fa fa-arrows-alt"></i></nav>
            <textarea id="editor" value={props.textareaValue} onChange={e => props.setTextareaValue(e.target.value)}>
            
            </textarea>
        </section>
    );
}