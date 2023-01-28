
import dynamic from "next/dynamic";
import { useRef, useMemo } from "react";
const RichTextEditor = ({ value, setValue }) => {


    const JoditEditor = dynamic(
        () => import('jodit-react'),
        { ssr: false }
    )



    const editor = useRef(null);

    const config = useMemo(
        () => ({
            readonly: false,
            minHeight: 500,
            placeholder: "Start writing your post..."
        }),
        []
    )




    return (
        <div className=" mt-10 " >
            <JoditEditor
                ref={editor}
                value={value}
                config={config}
                onBlur={newContent => setValue(newContent)}></JoditEditor>

        </div>
    );
}
export default RichTextEditor;
