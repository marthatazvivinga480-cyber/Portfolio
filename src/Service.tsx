

function Service(props: { name: string , description: string}) {
  return (
     <div className="service">

            <h2>{props.name}</h2>
            <p>{props.description}</p>

        </div>
  )
}

export default Service