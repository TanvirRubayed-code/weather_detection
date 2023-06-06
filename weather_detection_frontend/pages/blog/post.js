import { useRef, useState } from "react";
import RichTextEditor from "../../components/RichTextEditor";
import { Autocomplete, TextField } from "@mui/material";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function PostBlog() {

    const myRef = useRef(null);

    const [mainPost, setMainPost] = useState('')
    const [coverPhoto, setCoverPhoto] = useState(null);
    const [title, setTitle] = useState(null);
    const [category, setCategiries] = useState([]);
    const [submit, setsubmit] = useState({
        postTitle: "",
        post: ""
    });

    const notify = () => toast.success("Data stroed successfully.", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,

        theme: "light",
    });


    const options = ['Season', 'Prediction', 'Others'];

    const convertImagetoBase64 = (e) => {

        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            // console.log(reader.result);
            setCoverPhoto(reader.result);
        }
        reader.onerror = (e) => {
            console.log("error", e);
        }

    }


    const executeScroll = () => myRef.current.scrollIntoView();

    const submitPost = () => {

        setsubmit({
            postTitle: title,
            post: mainPost,
            image: coverPhoto
        });

        // console.log(submit);
        axios.post(`http://localhost:4000/post-data`, submit)
            .then(res => {
                console.log(res);
                if (res.data == "success") {
                    notify();
                }
            });

        // fetch("http://localhost:4000/post-data", {
        //     method: "POST",
        //     crossDomain: true,
        //     headers: {
        //         "Content-type": "application/json",
        //         Accept: "application/json",
        //         "Access-Control-Allow-Origin": "*",
        //     },
        //     body: JSON.stringify({
        //         data: submit
        //     })
        // }).then((res) => res.json()).then((data) => console.log(data))
    }




    return (
        <div className="px-36 py-12 w-full">

            <div className="flex flex-col rounded shadow-xl bg-gray-100 px-20 py-10">
                <div className="text-3xl mb-5">Add New Post</div>





                <input onChange={(e) => {
                    setTitle(e.target.value);
                }} className=" border-2 w-full h-16 rounded pl-8 bg-white border-gray-200 outline-none transition focus:border-gray-400" type="text" placeholder="Enter title here" />


                {
                    coverPhoto == "" || coverPhoto == null ? "" : <img class="h-auto max-w-xs mt-4" src={coverPhoto} alt="image description"></img>
                }

                <label class="block mb-2 text-sm font-medium mt-8 text-gray-900 dark:text-white" for="file_input">Upload cover photo</label>
                <input
                    onChange={convertImagetoBase64}
                    class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" accept="image/*"></input>

                <RichTextEditor value={mainPost} setValue={setMainPost}></RichTextEditor>



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
                <div onClick={submitPost} className="flex flex-row justify-end w-full mb-10 cursor-pointer">
                    <div className="mt-20 px-4 py-4 bg-navbar rounded text-white font-semibold" ref={myRef}>Publish Post</div>
                </div>



                <ToastContainer
                    position="top-center"
                    autoClose={1000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />

            </div>

        </div >
    );
}
export default PostBlog;
