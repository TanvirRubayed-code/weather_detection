import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import Link from "next/link";

export default function IndexPage() {
  const root = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".page_404", { rotation: "+=360" });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div className="page" ref={root}>

      <div class="page_404">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 ">
              <div class="col-sm-10 col-sm-offset-1  text-center">
                <div class="four_zero_four_bg">
                  <h1 class="text-center ">404</h1>

                </div>

                <div class="contant_box_404">
                  <h3 class="h2">
                    Look like you're lost
                  </h3>

                  <p>the page you are looking for not avaible!</p>

                  <Link href="/" class="link_404">Go to Home</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      <style jsx global>{`
        .page {
          font-family: Avenir, Helvetica, Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-align: center;
          color: #2c3e50;
          margin-top: 60px;
        }

        // .box {
        //   width: 100px;
        //   height: 100px;
        //   border-radius: 12px;
        //   display: flex;
        //   align-items: center;
        //   justify-content: center;
        //   text-align: center;
        //   background-color: #28a92b;
        //   font-weight: 600;
        //   color: #fff;
        //   margin: 0 auto;
        // }


        /*======================
        404 page
    =======================*/
    
    
    .page_404{ padding:40px 0; background:#fff; font-family: 'Arvo', serif;
    }
    
    .page_404  img{ width:100%;}
    
    .four_zero_four_bg{
     
     background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
        height: 400px;
        background-position: center;
     }
     
     
     .four_zero_four_bg h1{
     font-size:80px;
     }
     
      .four_zero_four_bg h3{
           font-size:80px;
           }
           
           .link_404{			 
      color: #fff!important;
        padding: 10px 20px;
        background: #39ac31;
        margin: 20px 0;
        display: inline-block;}
      .contant_box_404{ margin-top:-50px;}

      .box {
        width: 100px;
        height: 100px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        background-color: #28a92b;
        font-weight: 600;
        color: #fff;
        margin: 0 auto;
      }

      `}</style>
    </div>
  );
}