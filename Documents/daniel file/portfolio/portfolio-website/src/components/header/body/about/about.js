import './about.css'
const About = ()=>{
    return (
      <section>
        <h2>ABOUT ME</h2>

        <p>
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
        <div className='aboutMe'>
          <div>
            <span>Get to know me </span>
            <p>
              I'm a Frontend Web Developer building the Front-end of Websites
              and Web Applications that leads to the success of the overall
              product. Check out some of my work in the Projects section. I also
              like sharing content related to the stuff that I have learned over
              the years in Web Development so it can help other people of the
              Dev Community. Feel free to Connect or Follow me on my Linkedin
              where I post useful content related to Web Development and
              Programming I'm open to Job opportunities where I can contribute,
              learn and grow. If you have a good opportunity that matches my
              skills and experience then don't hesitate to contact me.
            </p>
          </div>
          <div className="myskills">
            <div className="skill">HTML</div>
            <div className="skill">CSS</div>
            <div className="skill">JAVASCRIPT</div>
            <div className="skill">REACT JS</div>
            <div className="skill">REACT.NATIVE</div>
            <div className="skill">NODE.JS</div>
            <div className="skill">MONGO.DB</div>
          </div>
        </div>
      </section>
    );
}
export default About