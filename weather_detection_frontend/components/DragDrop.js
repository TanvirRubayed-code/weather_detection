
import { FileUploader } from "react-drag-drop-files";
import { useState } from "react";
import styles from "../styles/Home.module.css"
import { TbUpload } from "react-icons/tb"
import { AiFillDelete } from "react-icons/ai"


const fileTypes = ["JPEG", "PNG", "JPG"];

export default function App() {

  const [previewshow, setPreviewshow] = useState(false)
  const [file, setFile] = useState(null);
  const [imageurl, setImageURl] = useState("");

  const handleChange = (file) => {
    setFile(file);
    console.log(file);

  };


  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  // onDragOver sets inDropZone to true
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // set dropEffect to copy i.e copy of the source item
    e.dataTransfer.dropEffect = "copy";
  };

  // onDragLeave sets inDropZone to false
  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();

  };

  const handlePreviewDelete = () => {
    setPreviewshow(false)
    setFile(null)
  }

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // get files from event on the dataTransfer object as an array
    let files = [...e.dataTransfer.files];

    // ensure a file or files are dropped
    if (files && files.length > 0) {
      setFile(files[0]);
      console.log(files[0]);
      setImageURl(URL.createObjectURL(files[0]))
      setPreviewshow(true)
    }
  };

  const handleChange2 = (e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
    setImageURl(URL.createObjectURL(e.target.files[0]))
    setPreviewshow(true)
  };

  return (
    <>
      <div
        onDragEnter={(e) => handleDragEnter(e)}
        onDragOver={(e) => handleDragOver(e)}
        onDragLeave={(e) => handleDragLeave(e)}
        onDrop={(e) => handleDrop(e)}

        className="flex justify-center items-center py-40 bg-gray-200">

        <div className="flex w-1/2 p-6 bg-white border border-gray-200 rounded-2xl shadow-xl dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

          <div className="w-1/2 pr-2">
            <label class="flex flex-col items-center justify-center w-full h-80 border-2 border-blue-500 border-dashed transition-all rounded-lg cursor-pointer bg-gray-50 hover:border-solid dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <TbUpload size={60} color="blue"></TbUpload>
                <p class="font-semibold text-3xl text-center">Drag and Drop files to upload</p>
                <div className="bg-blue-800 text-white font-bold px-6 py-2 mt-4 rounded-2xl" id="dropzone-file">Browse</div>

                <div className=" text-sm text-gray-400 mt-6">Supported files: JPG, JPEG, PNG</div>
              </div>
              <input className=" hidden" accept=".jpg, .png, .jpeg" onChange={handleChange2} id="dropzone-file" type="file" />



            </label>
          </div>
          {
            previewshow ?
              <div className="flex flex-col bg-gray-200 rounded shadow-lg w-1/2 pl-2 justify-around ">

                <div className="flex justify-between items-center px-8 pt-4">
                  <div div className="text-lg bg-gray-700 text-white px-2 rounded font-semibold text-center">Preview</div>
                  <div className="hover:cursor-pointer"><AiFillDelete onClick={handlePreviewDelete} color="#dc2626" size="22px"></AiFillDelete></div>
                </div>



                <div className="flex justify-center items-center">
                  <img className="h-40 p-4 " src={imageurl}></img>

                </div>
                <div className="text-center">
                  <p>File: {file.name}</p>
                  <p>Size: {file.size}</p>
                </div>
              </div>
              :
              <div></div>
          }

        </div>

      </div>






      {/* <input onChange={handleChange2} type="file"></input> */}

    </>
  )
}
