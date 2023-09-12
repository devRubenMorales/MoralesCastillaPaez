import { useNavigate } from "react-router-dom"
import "./Formulario.css"
import { useState } from "react"
export function Formulario (){
    const [nombre,setNombre]= useState("")
    const [contraseña,setContraseña]= useState("")
    const [error,setError]=useState(false)
    const Navigate= useNavigate()


    const handleSubmit = (e) =>{
        e.preventDefault()

        if(nombre === "" || contraseña === ""){
          setError(true)
          return  
        }
        console.log('nombre:', nombre,'contraseña:', contraseña)
        setError(false)
        Navigate('/')
    }

    return(
        <section className="form-section">
        <div class="form-container">
	<p class="title">Login</p>
	<form class="form"
     onSubmit={handleSubmit}>
        
		<div class="input-group">
			<label for="username">Nombre</label>
			<input type="text" name="username" id="username" placeholder=""
            value={nombre}
                    onChange={e => setNombre(e.target.value)}/>
		</div>
		<div class="input-group">
			<label for="password">Contraseña</label>
			<input type="password" name="password" id="password" placeholder=""value={contraseña}
                onChange={e => setContraseña(e.target.value)}/>
			
		</div>
		<button class="sign">Ingresar</button>
	</form>
	
	{error && <p>Todos los campos son obligatorios</p>}
</div>
</section>
    )
}
