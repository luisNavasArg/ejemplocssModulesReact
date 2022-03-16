
const Lista =(props)=>{
   console.log(props.datos)
   return(
      <div>
         <h1 className="title">Películas</h1>
         <ul>
         {props.datos.listaPeli.map((pelicula,i)=>{
            let src=pelicula.img
            console.log(pelicula.img)
         return (<li key={pelicula.name + i}><p 
         >{pelicula.name} 
         
         </p>
         <img src={src}/></li>)
      }
         )
         }
         </ul>
      </div>
   )
}
export default Lista