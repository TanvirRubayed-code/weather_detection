
import { FileUploader } from "react-drag-drop-files";
import { useState } from "react";
import styles from "../styles/Home.module.css"


const fileTypes = ["JPEG", "PNG", "JPG"];

export default function App() {

  const [file, setFile] = useState(null);

  const handleChange = (file) => {
    setFile(file);
    console.log(file);
  };

  return (
    <div className={styles.uploader_frame}>
      <FileUploader
        classes={styles.uploader}
        multiple={true}
        handleChange={handleChange}
        name="file"
        types={fileTypes}
      />
      <p>{file ? `File name: ${file[0].name}` : "No files uploaded yet"}</p>
    </div>
  )
}
