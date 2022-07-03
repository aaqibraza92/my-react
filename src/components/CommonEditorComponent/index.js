import { useRef } from 'react';
import 'jodit';
import 'jodit/build/jodit.min.css';
import JoditEditor from "jodit-react";

export const CommonEditorComponent = (props) => {
    const editor = useRef(null)
    return (
        <JoditEditor
            ref={editor}
            value={props.value}
            onChange={props.onChange}
        />
    )
}