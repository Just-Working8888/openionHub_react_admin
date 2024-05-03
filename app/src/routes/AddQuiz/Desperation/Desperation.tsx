import React, { useState, useRef, useEffect } from 'react';
import { Typography, Input, Button } from 'antd';
//@ts-ignore
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
//@ts-ignore
import { Editor } from 'react-draft-wysiwyg';
//@ts-ignore
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
//@ts-ignore
import draftToHtml from 'draftjs-to-html';

const { Text } = Typography;

interface EditableEditorProps {
    defaultText?: string;
}

const EditableEditor: React.FC<EditableEditorProps> = ({ defaultText = '' }) => {
    const [editorState, setEditorState] = useState(() =>
        defaultText ? EditorState.createWithContent(convertFromRaw(JSON.parse(defaultText))) : EditorState.createEmpty()
    );
    const [isEditing, setIsEditing] = useState(!defaultText);
    const editorRef = useRef<Editor>(null);

    useEffect(() => {
        if (defaultText === '') {
            setIsEditing(true);
        }
    }, [defaultText]);

    const handleTextClick = () => {
        setIsEditing(true);
    };

    const handleEditorStateChange = (newEditorState: EditorState) => {
        setEditorState(newEditorState);
    };

    const handleInputBlur = () => {
        setIsEditing(false);
    };

    const handleInputClear = () => {
        setEditorState(EditorState.createEmpty());
        setIsEditing(true);
        if (editorRef.current) {
            editorRef.current.focusEditor();
        }
    };
    console.log(editorState);

    return (
        <div>
            {isEditing ? (
                <div>
                    <Editor
                        ref={editorRef}
                        editorState={editorState}
                        onEditorStateChange={handleEditorStateChange}
                        onBlur={handleInputBlur}
                        placeholder="Enter text here..."
                    />
                    <br />
                    <Button onClick={handleInputClear}>Clear</Button>
                </div>
            ) : (
                <div onClick={handleTextClick}>
                    <div dangerouslySetInnerHTML={{ __html: draftToHtml(convertToRaw(editorState.getCurrentContent())) }} />
                </div>
            )}
        </div>
    );
};

export default EditableEditor;
