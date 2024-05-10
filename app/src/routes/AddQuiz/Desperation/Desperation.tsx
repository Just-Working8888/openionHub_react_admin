import React, { useState, useRef, useEffect } from 'react';
import { Typography, Input, Button } from 'antd';
//@ts-ignore
import { EditorState, convertToRaw, convertFromRaw, convertFromHTML, ContentState } from 'draft-js';
//@ts-ignore
import { Editor } from 'react-draft-wysiwyg';
//@ts-ignore
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
//@ts-ignore
import draftToHtml from 'draftjs-to-html';
import { useAppDispatch, useAppSelector } from 'store/hook';
import { useParams } from 'react-router-dom';
import { fetchUpdateQuetionById } from 'store/reducers/quetionReduser';


interface EditableEditorProps {
    defaultText?: string;
    setDescription: Function
}

const EditableEditor: React.FC<EditableEditorProps> = ({ defaultText = '', setDescription }) => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [isEditing, setIsEditing] = useState(!defaultText);
    const { singleProduct } = useAppSelector((state) => state.quetions)
    const editorRef = useRef<Editor>(null);
    const dispatch = useAppDispatch()
    const { id } = useParams()
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
        setDescription(draftToHtml(convertToRaw(editorState.getCurrentContent())))
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

    useEffect(() => {
        if (defaultText) {
            const blocksFromHTML = convertFromHTML(defaultText);
            const contentState = ContentState.createFromBlockArray(blocksFromHTML.contentBlocks, blocksFromHTML.entityMap);
            setEditorState(EditorState.createWithContent(contentState));
        }
    }, [defaultText]);


    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(fetchUpdateQuetionById({ id: id, data: { ...singleProduct, description: draftToHtml(convertToRaw(editorState.getCurrentContent())) } } as any))
        }, 1000);

        return () => clearTimeout(timer);
    }, [editorState])


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
