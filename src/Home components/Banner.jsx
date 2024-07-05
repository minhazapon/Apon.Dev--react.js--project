
import 'animate.css';



import me from "../../image/me.jpg"



const Banner = () => {
    return (
        <div className=" flex-col md:flex-row lg:flex-row mb-10  mt-24 ml-10 mr-10">


            <div className=" flex-col md:flex-row lg:flex-row flex justify-center  gap-24">
                <div>
                  <h1 className=" text-6xl font-bold">Front-End <span className=" text-[#61DBFB]  ">React</span><br></br> Developer
                  </h1>
                  <p className=" mt-5 text-xl text-slate-600 ">Hi, I'm Minhazul Abedin Apon. A passionate Front-end React <br></br> Developer based in Jhenaidah, Dhaka, Bangladesh. </p>

                  <div className=" flex items-center gap-3 mt-5">
                    <a href=" https://github.com/minhazapon" ><img className="  h-[30px] " src="https://i.ibb.co/1Kt0NDr/github-1.png" alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/minhazul-abedin-apon-346b52297/" ><img className="  h-[30px] " src="https://i.ibb.co/T1gFXQn/linkedin-1.png" alt="" />
                    </a>
                  </div>



                  <div className=" mt-5   mr-14  flex-col md:flex-row lg:flex-row flex justify-center items-center gap-10 ">
                  <div className="">
                     <h1 className="  text-2xl font-semibold">Tech Stack |</h1>
                  </div>
                  <div  className=" flex  items-center gap-10">
                      <div className=" flex items-center gap-1">
                         <img  className=" animate__animated animate__flip animate__repeat-2 h-[50px]"  src="https://i.ibb.co/cwPDjrN/html-5.png" alt="" />
                         <img  className=" animate__animated animate__flip animate__repeat-2 h-[50px]" src="https://i.ibb.co/G97fcbb/css-3.png" alt="" />
                         <img  className=" animate__animated animate__flip animate__repeat-2 h-[50px]" src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-dsc/events/Tailwind_CSS_Logo.svg_GkNDLAs.png" alt="" />
                      </div>
                     <div className=" flex items-center gap-1">
                       <img className=" animate__animated animate__flip animate__repeat-2 h-[50px]" src="https://i.ibb.co/6X8dm8z/js.jpg" alt="" />
                       <img className=" animate__animated animate__flip animate__repeat-2 h-[50px]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1200px-React_Logo_SVG.svg.png" alt="" />
      
                     </div>
                  </div>

                  
                </div>


                
                </div>
                <div>
                    <img className=" animate__animated animate__backInDown animate__repeat-2 h-[200px] w-[200px] rounded-full border-[5px] border-[#61DBFB] "
                    
                    src={me} alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default Banner;