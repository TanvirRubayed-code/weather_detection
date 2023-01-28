import { useRef, useState } from "react";
import RichTextEditor from "../../components/RichTextEditor";
import { Autocomplete, TextField } from "@mui/material";

function PostBlog() {

    const myRef = useRef(null);

    const [value, setValue] = useState('')

    const options = ['Season', 'Prediction', 'Others'];

    const [category, setCategiries] = useState([])

    const executeScroll = () => myRef.current.scrollIntoView();




    return (
        <div className="px-36 py-12 w-full">

            <div className="flex flex-col rounded shadow-xl bg-gray-100 px-20 py-10">
                <div className="text-3xl mb-5">Add New Post</div>
                <input className=" border-2 w-full h-16 rounded pl-8 bg-white border-gray-200 outline-none transition focus:border-gray-400" type="text" placeholder="Enter title here" />


                <RichTextEditor value={value} setValue={setValue}></RichTextEditor>



                <Autocomplete
                    className="mt-10"
                    multiple
                    id="section"
                    options={options}
                    getOptionLabel={(option) => option}
                    onChange={(event, newValue) => {
                        setCategiries(newValue);
                    }}
                    onFocus={executeScroll}
                    filterSelectedOptions
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Add category"
                        />
                    )}



                />
                <div className="flex flex-row justify-end w-full mb-10   ">
                    <div className="mt-20 px-4 py-4 bg-navbar rounded text-white font-semibold" ref={myRef}>Publish Post</div>
                </div>




            </div>

        </div >
    );
}
export default PostBlog;
