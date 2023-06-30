import './body.css'
import About from './about/about';
function Body(){
    return (
      <section className='body'>
        <h1 className="name"> HEY I'M DANIEL OJINGWA</h1>
        <p className='introduction'>
          A Frontend focused Web Developer building the Frontend of Websites and
          Web Applications that leads to the success of the overall product
        </p>
        <button type="button">Project</button>
        <About/>
      </section>
      
    );
}
export default Body