import React, {useState} from "react";
import "../App.css";

const EditorSection = props =>{

    const [scale, setScale] = useState(false);

    const scaleHandler = () =>{
        setScale(!scale);
        document.querySelector("#preview").style.display = `${!scale ? "none" : "block"}`;
            
    }   

    return(
        <section className="editor-section">
            <nav className="editor-nav">
                <i className="fa fa-free-code-camp"></i> 
                Editor 
                <i className={`fa ${!scale ? "fa-arrows-alt" : "fa-compress"}`} onClick={scaleHandler}></i>
            </nav>
            <textarea id="editor" className={`${scale ? "scale" : ""}`} value={props.textareaValue} onChange={e => props.setTextareaValue(e.target.value)}>
            
            </textarea>
        </section>
    );
}

export default EditorSection;