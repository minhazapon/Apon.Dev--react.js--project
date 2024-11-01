

const About = () => {
    return (
        <div className=" mb-10 mt-40  ml-10 mr-10">

            <div className="  flex-col md:flex-row lg:flex-row flex justify-center items-center  gap-5 ml-10">


             <div>
               
                <img 
                className=" h-[250px] w-[400px] rounded-xl " 
                src="https://img.freepik.com/premium-photo/sleek-home-office-dark-room-featuring-laptop-resting-desk_850140-94.jpg?w=826" 
                alt="" />

             </div>
             


             <div>

               <h1 className=" text-2xl font-semibold text-black font-serif perfect  ">About Me</h1>
               <p className=" text-3xl text-black font-serif mt-4 perfect   ">Front-end Developer<br></br>
                based in Dhaka, Bangladesh.</p>

                <p className=" perfect mt-5 text-slate-500 text-xl">Hey, my name is Minhazul Abedin Apon, <br></br> and I'm a Frontend Developer. My <br></br> passion is to create and develop a<br></br> clean UI/UX for my users.</p>
                <p className=" perfect mt-5 text-slate-500 text-xl">  My main stack currently is React.js in combination with <br></br> Tailwind CSS and JavaScript.</p>


             </div>







            </div>
            
        </div>
    );
};

export default About;