import imagedemo from "../image/autumn.jpg";
import styles from "../styles/Blog.module.css";

function blogSideSection() {
  return (
    <div className={styles.categories_section}>
      <form className="flex">
        <input className="h-10 rounded-l border-2 border-white bg-white pl-5 outline-none focus:border-gray-400" type="text" placeholder="search..."></input>
        <button className="px-3 h-10 text-gray-800 rounded-r transition bg-gray-400 hover:text-white hover:bg-gray-600 " type="submit">Submit</button>
      </form>
      <div className="mt-10 rounded bg-white">
        <h3 className="pl-10 py-3 shadow rounded-t bg-gray-400 text-gray-800">Categories</h3>
        <ul>
          <li className="py-3 pl-10 shadow hover:bg-gray-200 hover:cursor-pointer">Culture</li>
          <li className="py-3 pl-10 shadow hover:bg-gray-200 hover:cursor-pointer">Creativity</li>
          <li className="py-3 pl-10 shadow hover:bg-gray-200 hover:cursor-pointer">Food</li>
          <li className="py-3 pl-10 shadow hover:bg-gray-200 hover:cursor-pointer">Travel</li>
          <li className="py-3 pl-10 shadow hover:bg-gray-200 hover:cursor-pointer">Humor</li>
          <li className="py-3 pl-10 shadow hover:bg-gray-200 hover:cursor-pointer">Music</li>
        </ul>
      </div>

      <div className="mt-10 bg-white rounded">
        <h3 className="py-3 pl-5 shadow text-gray-600">Top posts</h3>

        <div className="mx-2 my-4 shadow-xl">
          <div className="shadow flex h-20 mb-1 items-center justify-center">
            <h3 className="text-5xl bg-gray-100 h-full w-14 flex border border-gray-400 rounded items-center justify-center">1</h3>

            <div className="pl-2 h-full flex flex-col justify-center hover:cursor-pointer hover:bg-gray-200">
              <h2 className="text-sm"> Aenean mattisg tortor ac sapen congue molestie.</h2>
              <div>
                <small>Food</small>
                <small className={styles.caterogy_small}>-</small>
                <small>NOV 17, 2022</small>
              </div>
            </div>
          </div>
          <div className="shadow flex h-20 mb-1 items-center justify-center">
            <h3 className="text-5xl bg-gray-100 h-full w-14 flex border border-gray-400 rounded items-center justify-center">2</h3>

            <div className="pl-2 h-full flex flex-col justify-center hover:cursor-pointer hover:bg-gray-200">
              <h2 className="text-sm"> Aenean mattisg tortor ac sapen congue molestie.</h2>
              <div>
                <small>Food</small>
                <small className={styles.caterogy_small}>-</small>
                <small>NOV 17, 2022</small>
              </div>
            </div>
          </div>
          <div className="shadow flex h-20 mb-1 items-center justify-center">
            <h3 className="text-5xl bg-gray-100 h-full w-14 flex border border-gray-400 rounded items-center justify-center">3</h3>

            <div className="pl-2 h-full flex flex-col justify-center hover:cursor-pointer hover:bg-gray-200">
              <h2 className="text-sm"> Aenean mattisg tortor ac sapen congue molestie.</h2>
              <div>
                <small>Food</small>
                <small className={styles.caterogy_small}>-</small>
                <small>NOV 17, 2022</small>
              </div>
            </div>
          </div>
          <div className="shadow flex h-20 mb-1 items-center justify-center">
            <h3 className="text-5xl bg-gray-100 h-full w-14 flex border border-gray-400 rounded items-center justify-center">4</h3>

            <div className="pl-2 h-full flex flex-col justify-center hover:cursor-pointer hover:bg-gray-200">
              <h2 className="text-sm"> Aenean mattisg tortor ac sapen congue molestie.</h2>
              <div>
                <small>Food</small>
                <small className={styles.caterogy_small}>-</small>
                <small>NOV 17, 2022</small>
              </div>
            </div>
          </div>


          <div className="shadow flex h-20 items-center justify-center">
            <h3 className="text-5xl bg-gray-100 h-full w-14 flex border border-gray-400 rounded items-center justify-center">5</h3>

            <div className="pl-2 h-full flex flex-col justify-center hover:cursor-pointer hover:bg-gray-200">
              <h2 className="text-sm"> Aenean mattisg tortor ac sapen congue molestie.</h2>
              <div>
                <small>Food</small>
                <small className={styles.caterogy_small}>-</small>
                <small>NOV 17, 2022</small>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}
export default blogSideSection;
