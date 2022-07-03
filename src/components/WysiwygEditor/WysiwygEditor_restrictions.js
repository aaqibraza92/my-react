import React, { useState } from "react";
import { EditorState,ContentState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import { useForm } from "react-hook-form";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { WysiwygEditorStyle } from "./WysiwygEditorStyle";

const WysiwygEditor = (props) => {
  const {setData}=props;
  console.log("setData",setData);
  let _contentState = ContentState.createFromText('Sample content state');
  const raw = convertToRaw(_contentState)
  const [contentState, setContentState] = useState(raw);
  console.log("contentState",contentState.blocks[0].text);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [inserted, setinserted] = useState(false);
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };
  const { handleSubmit } = useForm({
    mode: "onChange",
  });

  const handleSubmitOnClick = () => {
    props.callback(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    if (draftToHtml(convertToRaw(editorState.getCurrentContent()))) {
      setinserted(true);
    }
  };

  const content = {
    entityMap: {},
    blocks: [
      {
        key: "637gr",
        text: "Initialized from content state.",
        type: "unstyled",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
    ],
  }
  

  return (
    <>
        <WysiwygEditorStyle />
      <div className="editor">
        <Editor
        initialContentState={content}
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          value={props.dataState.restrictions}
          onEditorStateChange={(e) => {onEditorStateChange(e)}}
        />
       
        <div className="d-flex align-items-center">
          {inserted && <p className="ml10 mb0">Inserted!</p>}
        </div>
      </div>
    </>
  );
};

export default WysiwygEditor;
