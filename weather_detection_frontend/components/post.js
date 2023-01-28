import styles from "../styles/single_blog_post.module.css";
import imagedemo from "../image/spring.jpg";
import Image from "next/image";

function Post() {
  return (
    <div className={styles.main_container}>
      <div className={styles.main}>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, quae?
        </h1>
        <div className={styles.profile_sec}>
          <Image
            className={styles.prof_img}
            src={imagedemo}
            alt="Picture of the author"
          ></Image>
          <small>By Jordan Mirchev</small>
          <small>|</small>
          <small>Published on November 20, 2020</small>
        </div>
        <Image
          className={styles.title_image}
          src={imagedemo}
          alt="Picture of the author"
        ></Image>
        <div className={styles.post}>
          <div className={styles.main_post}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
            accusamus ullam consequatur porro nam eligendi quod at placeat
            tempora debitis nisi, ab temporibus in molestias consequuntur ad
            fuga ipsum nostrum saepe magni a odio culpa rerum vel. Quisquam
            atque ea fugit quo iure, qui distinctio nostrum repudiandae quas
            nulla delectus harum recusandae veniam iusto culpa ut autem ad
            necessitatibus temporibus eos laboriosam quos? Dolorem magnam in,
            <br /> <br />
            <p>
              {" "}
              tempore deleniti ipsam repellendus saepe odit esse officiis
              possimus eligendi eveniet quidem libero asperiores qui. Animi,
              pariatur. Tempora eligendi mollitia delectus laudantium earum
              vitae eum quo, accusantium illo iusto nam aut similique
              perferendis explicabo, corporis possimus, id perspiciatis
              consequuntur quis neque ipsam placeat sed? Voluptatibus eum
              voluptatem voluptatum in iure doloremque sunt vel? Repellendus
              culpa animi neque, quibusdam debitis illo qui,
            </p>
            molestias nostrum error blanditiis soluta! Dignissimos beatae ex
            excepturi ipsum, assumenda tempore corrupti eum omnis officia nisi
            quos obcaecati doloribus totam perspiciatis itaque temporibus
            doloremque hic ullam magni facere tenetur eveniet suscipit. Et
            temporibus necessitatibus deserunt sit natus nostrum quis tempore
            <p>
              fugit, eligendi, quo unde possimus! Nihil corrupti, tenetur
              eveniet in debitis doloremque unde, dolor porro eius, id
              dignissimos? Consectetur beatae recusandae qui molestiae cum
              repellat. Quia quod numquam, consectetur nulla ex iusto.
            </p>
            <h2>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
              dolorum sunt rerum.
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
              natus sint in quaerat corrupti soluta consequatur maiores,
              molestiae ratione harum tempora a excepturi, quibusdam unde
              aperiam itaque id recusandae dolore!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
              laudantium! Tempore neque sit corrupti itaque nostrum veritatis
              expedita eaque, adipisci debitis cum ea enim obcaecati laudantium
              libero nulla sed sapiente dicta animi consequatur unde magni.
              Quibusdam exercitationem repudiandae blanditiis minima expedita
              voluptate libero dolorum amet earum accusantium, culpa nihil
              necessitatibus?
            </p>
          </div>
          <div className={styles.popular_post}>
            <h3>POPULAR POSTS</h3>
            <div className={styles.popular_post_des}>
              <Image
                className={styles.pop_image}
                src={imagedemo}
                alt="Picture of the author"
              ></Image>
              <h2>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Magnam, nulla!
              </h2>
            </div>
            <div className={styles.popular_post_des}>
              <Image
                className={styles.pop_image}
                src={imagedemo}
                alt="Picture of the author"
              ></Image>
              <h2>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Magnam, nulla!
              </h2>
            </div>
            <div className={styles.popular_post_des}>
              <Image
                className={styles.pop_image}
                src={imagedemo}
                alt="Picture of the author"
              ></Image>
              <h2>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Magnam, nulla!
              </h2>
            </div>
            <div className={styles.popular_post_des}>
              <Image
                className={styles.pop_image}
                src={imagedemo}
                alt="Picture of the author"
              ></Image>
              <h2>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Magnam, nulla!
              </h2>
            </div>
            
            <div className={styles.embededVideos}>
            <h2> 
         <center> <iframe width="560" height="315" src="https://www.youtube.com/embed/668nUCeBHyY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/AGcTCvn-a6g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </center> 
         </h2>
            </div>
            

          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
