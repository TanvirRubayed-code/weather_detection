import { useEffect, useState } from "react";
import { TbUpload } from "react-icons/tb"
import { AiFillDelete } from "react-icons/ai"
import { useRouter } from 'next/router';

import style from '../styles/classify.module.css'
import * as tmImage from '@teachablemachine/image'
import fileimage from "../image/archive.png"
import Image from "next/image";
import axios from "axios";



const Classify = () => {

  const router = useRouter();
  const [previewshow, setPreviewshow] = useState(false)
  const [file, setFile] = useState(null);
  const [imageurl, setImageURl] = useState("");
  const [userID, setUserID] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    setUserID(sessionStorage.getItem("userid"));
    setUserName(sessionStorage.getItem("userid"));
  }, [])



  let model;
  const [puppy, setPuppy] = useState(null)
  const [predictions, setPredictions] = useState(null);
  const [predictBtn, setPredictBtn] = useState(false);
  const [updatetBtn, setUpdateBtn] = useState(false);
  const [mxName, setmxName] = useState('');


  const [showModal, setShowModal] = useState(false);

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

  let mx = 0;
  let clsname;

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

    for (const input of prediction) {
      const name = input.className;
      const value = input.probability;

      if (value >= mx) {
        clsname = name;
        mx = value;
      }
    }
    setmxName(clsname)

    // console.log(mxName);

    const lightening = prediction[0].probability;
    const snow = prediction[1].probability;
    const rainbow = prediction[2].probability;
    const drew = prediction[3].probability;
    const rain = prediction[4].probability;

    let data = { lightening, snow, rainbow, drew, rain }

    console.log(data);

    axios.post(`http://localhost:4000/post-prediction/${userID}`, data)
      .then(res => {
        if (res.data?.insertedId) {
          console.log(res.data);
        }
        else {
          alert("failed")
        }
      })


  }

  const handlePredict = () => {
    setPredictBtn(!predictBtn);
    setShowModal(true);
    setView(false)
    runmodel();
  }

  const handleClear = () => {
    setPuppy(null);
    setView(true)
  }

  return (
    <>

      <div className="bg-gray-200 py-32 flex items-center justify-center content-center">

        <div className="flex w-1/2 p-6 bg-white border border-gray-200 rounded-2xl shadow-xl dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <div className="flex flex-col items-center justify-center w-full h-80 border-2 border-blue-500 border-dashed transition-all rounded-lg cursor-pointer bg-gray-50 hover:border-solid dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">

            {
              !puppy && <div>
                <div className="flex justify-center items-center content-center">
                  <Image
                    className="w-20 py-4"
                    src={fileimage}
                  />
                </div>
                <div className="px-10 text-sm text-center">
                  <span className="text-navbar font-bold">Upload an image</span> to detect the current weather conditions.<br />
                  Our advanced image processing technology will analyze the uploaded image and provide you with accurate weather information.
                </div>
              </div>
            }
            <div className={style.imageContainer}>
              {
                puppy &&
                <img className=" w-64 h-56" src={puppy} alt="Puppy" />
              }
            </div>
            <div>
              {
                view ? <div className={style.uploadImage}>
                  <button className="bg-blue-700 text-white font-bold px-6 py-2 mt-4 rounded-2xl">Browse</button>
                  <input type="file" src="" alt="image input" className={style.imageInput} accept="image/*" onChange={handleImageUpload} />
                </div> :
                  <button className="bg-tred mr-3 text-white  px-6 py-2 mt-4 rounded-xl" onClick={handleClear}>Clear</button>
              }
              {
                puppy && <button className="ml-3 bg-blue-700 text-white px-6 py-2 mt-4 rounded-xl" onClick={handlePredict}>Predict</button>
              }
            </div>
          </div>

        </div>

      </div>





      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-2 mx-auto h-24 max-w-4xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl px-40 font-semibold">
                    Result
                  </h3>
                  {
                    predictions != null &&
                    <button
                      className="p-1 ml-auto border-1 text-red float-right text-3xl leading-none font-semibold outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="text-black h-6 w-6 text-2xl block outline-none hover:text-tred">
                        ×
                      </span>
                    </button>
                  }

                </div>
                {/*body*/}

                <div className="mx-6">

                  {predictions == null ?
                    <div class="text-center my-6">
                      <div role="status">
                        <svg aria-hidden="true" class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                        <span class="sr-only">Loading...</span>
                      </div>
                    </div> :
                    <div className="">
                      <div className="flex w-full mb-8 mt-4">
                        <div className="bg-blue-500 w-1/2 rounded-l-lg ml-2 py-3 pl-6 font-bold text-white">Predicted Class</div>
                        <div className="bg-skyblue rounded-r-lg pl-4 py-3 w-1/2 mr-2 font-bold text-black">{mxName}</div>
                      </div>
                      <div className="">

                        {
                          predictions.map(predicts => <div className="flex w-full">
                            <div className="bg-skyblue-500 font-bold ml-2 py-3 pl-6 rounded-l-lg w-1/2 my-2">{predicts.className}:</div>
                            <div className="bg-skyblue-200 mr-2 py-3 pl-6 rounded-r-lg w-1/2 my-2">{predicts.probability.toFixed(2) * 100}<span>%</span></div>
                          </div>)
                        }
                      </div>
                    </div>
                  }
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  {
                    predictions != null &&
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none hover:bg-gray-200 focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                  }

                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}


    </>
  );
};

export default Classify;