
import 'animate.css';





const Banner = () => {
    return (
        <div className=" mb-10  mt-24 ml-10 mr-10">


            <div className=" flex-col md:flex-row lg:flex-row flex justify-center  gap-24">
                <div>
                  <h1 className=" text-6xl font-bold">Front-End <span className=" text-[#00D5FF]">React</span><br></br> Developer
                  </h1>
                  <p className=" mt-5 text-xl text-slate-600 ">Hi, I'm Minhazul Abedin Apon. A passionate Front-end React <br></br> Developer based in Jhenaidah, Dhaka, Bangladesh. </p>
                  <div className=" flex items-center gap-3 mt-5">
                    <a href=" https://github.com/minhazapon" ><img className="  h-[30px] " src="https://i.ibb.co/1Kt0NDr/github-1.png" alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/minhazul-abedin-apon-346b52297/" ><img className="  h-[30px] " src="https://i.ibb.co/T1gFXQn/linkedin-1.png" alt="" />
                    </a>
                  </div>
                </div>
                <div>
                    <img className=" animate__animated animate__backInDown animate__repeat-2 h-[200px] w-[200px] rounded-full border-[5px] border-[#00D5FF]" src="https://scontent.fjsr17-1.fna.fbcdn.net/v/t39.30808-6/279336089_1981534982234380_2190436952041281487_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=e_F8cZMqnCEQ7kNvgE9EdQf&_nc_ht=scontent.fjsr17-1.fna&oh=00_AYAZwfrc3d17QWkWHi3NQ4rCceue3yp1bDrn7VktnEioWA&oe=6652AB91" alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default Banner;