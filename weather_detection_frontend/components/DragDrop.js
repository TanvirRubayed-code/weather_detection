import { useEffect, useState } from "react";
import { TbUpload } from "react-icons/tb"
import { AiFillDelete } from "react-icons/ai"
import { useRouter } from 'next/router';

import style from '../styles/classify.module.css'
import * as tmImage from '@teachablemachine/image'
import fileimage from "../image/archive.png"
import Image from "next/image";

const Classify = () => {

  const router = useRouter();
  const [previewshow, setPreviewshow] = useState(false)
  const [file, setFile] = useState(null);
  const [imageurl, setImageURl] = useState("");

  let model;
  const [puppy, setPuppy] = useState(null)
  const [predictions, setPredictions] = useState(null);
  const [predictBtn, setPredictBtn] = useState(false);
  const [updatetBtn, setUpdateBtn] = useState(false);

  const [view, setView] = useState(true)
  useEffect(() => {
    const item = sessionStorage.getItem('userid')
    if (!item) {
      router.push('/login')
    }
  }, [])


  const handleImageUpload = (e) => {
    if (e.target.files[0]) {
      console.log(e.target.files[0])
      setPuppy(URL.createObjectURL(e.target.files[0]))
      setPredictions(null)
      setPredictBtn(false)
      setUpdateBtn(false)
      setView(false)
    }
    else {
      setPuppy(null)
    }
  }

  async function runmodel() {
    const url = "https://teachablemachine.withgoogle.com/models/IerQIOPqD/";
    const modelUrl = url + "model.json"
    const metaDataUrl = url + "metadata.json"
    model = await tmImage.load(modelUrl, metaDataUrl);
    const classCount = model.getTotalClasses();

    const img = document.createElement("img");
    img.src = puppy;
    const prediction = await model.predict(img);
    setPredictions(prediction);
    console.log(prediction);
  }

  const handlePredict = () => {
    setPredictBtn(!predictBtn);
    setView(false)
    runmodel();
  }

  const handleClear = () => {
    setPuppy(null);
    setView(true)
  }

  return (
    <>

      <div className="bg-gray-100 flex items-center justify-center content-center">

        <div className={style.classifyContainer}>
          <div>
            <div className="w-20 flex ">
              <Image
                src={fileimage}
              />
            </div>
            <div className={style.message}>
              Upload an image to detect the current weather conditions. Our advanced image processing technology will analyze the uploaded image and provide you with accurate weather information.
            </div>
            <div className={style.imageContainer}>
              {
                puppy &&
                <img src={puppy} alt="Puppy" />
              }
            </div>
            {
              view ? <div className={style.uploadImage}>
                <button className="bg-blue-800 text-white font-bold px-6 py-2 mt-4 rounded-2xl">Browse</button>
                <input type="file" src="" alt="image input" className={style.imageInput} accept="image/*" onChange={handleImageUpload} />
              </div> :
                <button className="bg-blue-800 text-white font-bold px-6 py-2 mt-4 rounded-2xl" onClick={handleClear}>Clear</button>
            }
            {
              puppy && <button className={style.predictButton} onClick={handlePredict}>Predict</button>
            }
          </div>

        </div>

      </div>
      {predictions &&
        <div className={style.container}>
          <div className={style.classifyContainer}>
            <div className={style.pageTitle}>
              <span>Result</span>
            </div>
            {
              predictions.map(predicts => <div className={style.predict_class}>{predicts.className}: <span>{predicts.probability.toFixed(2)}</span></div>)
            }
          </div>
        </div>
      }
    </>
  );
};

export default Classify;