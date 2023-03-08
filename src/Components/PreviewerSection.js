import React from "react";
import "../App.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'

export const PreviewerSection = props => {
    return (
        <section id="preview">
            <nav className="previewer-nav"><i className="fa fa-free-code-camp"></i> Previewer <i className="fa fa-arrows-alt"></i></nav>
            <div className="markdown-section">
                <ReactMarkdown children={props.textareaValue} remarkPlugins={[remarkGfm]} />
            </div>
        </section>
    );
}