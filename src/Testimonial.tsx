function Testimonial(props:{name: string , description: string}) {
  return (
<div className="testimonials">

    <h2>{props.name}</h2>
    <p>{props.description}</p>
</div>
  )
}

export default Testimonial