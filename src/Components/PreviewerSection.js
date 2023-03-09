import React, {useState} from "react";
import "../App.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'

const PreviewerSection = props => {
    const [scale, setScale] = useState(false);

    const scaleHandler = () =>{
        setScale(!scale);
        document.querySelector(".editor-section").style.display = `${!scale ? "none" : "block"}`;
            
    }  

    return (
        <section id="preview">
            <nav className="previewer-nav">
                <i className="fa fa-free-code-camp"></i> 
                Previewer 
                <i className={`fa ${!scale ? "fa-arrows-alt" : "fa-compress"}`} onClick={scaleHandler}></i>
            </nav>
            <div className={`markdown-section ${scale ? "scale" : ""}`}>
                <ReactMarkdown children={props.textareaValue} remarkPlugins={[remarkGfm]} />
            </div>
        </section>
    );
}

export default PreviewerSection;