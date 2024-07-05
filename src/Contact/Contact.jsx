




const Contact = () => {
    return (
        <div className="  flex-col md:flex-row lg:flex-row mb-10 mt-32 flex justify-center  ml-10 mr-10 ">

            <div className=" flex-col md:flex-row lg:flex-row">
                 
                 <div className=" flex justify-center">
                 <div className=" flex-col md:flex-row lg:flex-row">
                   <h1 className=" text-2xl font-semibold  text-blue-600">Contact</h1>
                   <p className=" text-2xl mt-5 font-semibold">Don't be shy! Hit me up! 👇
                   </p>
                 </div>
                 </div>
                 
                 <hr className=" mt-5 mb-5"></hr>
              
                <div className=" flex-col md:flex-row lg:flex-row mt-10 flex items-center gap-10 ">


                  <div className=" flex-col md:flex-row lg:flex-row flex items-center gap-5">
                     <img  className=" h-[40px]" src="https://i.ibb.co/fQqxtLC/phone-1.png" alt="" />
                    <div>
                       <h1 className=" text-xl font-semibold">Number:</h1>
                       <p className=" text-xl  font-semibold">+880 1950374409</p>
                    </div>
                  </div>



                  <div className=" flex-col md:flex-row lg:flex-row flex items-center gap-5">
                     <img  className=" h-[40px]" src="https://i.ibb.co/p47vVYt/gmail.jpg" alt="" />
                    <div>
                       <h1 className=" text-xl font-semibold">Mail:</h1>
                       <p className=" text-xl  font-semibold">minhazaponcodingwarrior@gmail.com</p>
                    </div>
                  </div>
                  


                


                </div>




            </div>
                       
        </div>
    );
};

export default Contact;