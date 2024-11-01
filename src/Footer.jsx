


const Footer = () => {
    return (
        <div>

            <div>

              <div>
                <hr></hr>
              </div>    
            
              <footer className="footer p-10 bg-white text-base-content">
              <aside>
                <img className=" h-[50px]" src="https://i.ibb.co/Twwhq9J/coding.png" alt="" />
                <p className=" the text-2xl">Full Name: Minahzul abedin Apon<br/>  <span className=" text-2xl font-bold">Front End <span className=" text-[#61DBFB] ">React</span> Developer</span></p>
              </aside> 
              <nav>
                <h6 className="footer-title">Social</h6> 
                <div className=' flex items-center gap-2'>
              <img className=' h-[30px]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/800px-Facebook_logo_%28square%29.png" alt="" /> 
              <a href="https://www.facebook.com/profile.php?id=100011336918123" className="link link-hover">Facebook</a>
              </div>
              <div className=' flex items-center gap-2'>
                <img className=' h-[30px]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png?20140125013055" alt="" />
              <a href="https://www.linkedin.com/in/minhazul-abedin-apon-346b52297/" className="link link-hover">Linkedin</a>
              </div>
              <div className=' flex items-center gap-2'>
                <img className=' h-[30px]' src="https://i.ibb.co/1Kt0NDr/github-1.png" alt="" />
              <a href="https://github.com/minhazapon" className="link link-hover">GitHub</a>
              </div>
              </nav> 
              <nav>
                <h6 className="footer-title">Conatct With Me</h6> 
                <a className="link link-hover font-serif text-xl ">Email: <span className=" universe   ">minhazaponcodingwarrior@gmail.com</span>
                </a>
                <a className="link link-hover text-xl  ">Call Me: <span className="  ">+8801950374409</span></a>
              </nav> 
              </footer>
            
            </div>
            
        </div>
    );
};

export default Footer;