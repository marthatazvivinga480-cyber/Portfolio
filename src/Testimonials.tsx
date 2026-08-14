import Testimonial from './Testimonial'

function Testimonials() {
    
  return (
<>
    <div className="Testimonials">

        <div className="testimonials-header">
            <h1> Our Testimonials</h1>
        </div>
        <div className="testimonials-services">


            <div className="testimonials-content">
                <Testimonial name="Testimony 1" description = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores ducimus accusamus debitis!"/>
                <Testimonial name="Testimony 2" description = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores ducimus accusamus debitis!"/>
                <Testimonial name="Testimony 3" description = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores ducimus accusamus debitis!"/>


            </div>
        </div>

    </div>

    </>
  )
}

export default Testimonials