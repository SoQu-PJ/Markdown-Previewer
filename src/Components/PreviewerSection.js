import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'

export const PreviewerSection = props => {
    return (
        <section id="preview">
            <ReactMarkdown children={props.textareaValue} remarkPlugins={[remarkGfm]} />
        </section>
    );
}