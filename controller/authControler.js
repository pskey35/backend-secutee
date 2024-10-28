import xss from "xss"
import {User} from "../models/authModel.js"

export const registerControler = async (req, res) => {
   // const { user, password, telefono, address, edad} = req.body
    //const userSano = xss(req.body.user.trim())



    /*CALL registrar_usuario('Juan', 
    'Pérez', 'juan@example.com', 'contraseñaSegura',
     '123456789', 30);
*/


    const nombreSano = xss(req.body.name.trim())
    const emailSano = xss(req.body.email.trim())
    const passwordSano = xss(req.body.password.trim())
    const telefonoSano = xss(req.body.telefono.trim())
    const edadSano = xss(req.body.edad.trim())

    //si existe el user en la databse mandarle un error porque 
    //no debe de haber mas de un usuario con el mismo nombre

    
    if (false) {
        return res.status(401).json({
            error: true,
            message: "Este usuario ya existe en la database prueba con otro nombre de usuario",
        })
    }


    let message;
    let token;
    let error;
    //quiero validar el campo user para que no inyecten nada
    if (userSano.length >= 100) {
        //en el front tambien se tiene que validar lo de trim()
        message = "Error su nombre de usuario no debe contener mas de 100 caracteres"
        token = null
        error = true
    }
    
    /*else if (!(/.\w+\d\W.+/.test(passwordSano))) {
        //"Si la cadena no coincide con el patrón definido por la expresión regular"
        message = "La contrasena no es segura pruebe con otro"
        token = null
        error = true
    }else if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test()){
        //aqui tengo que ver si todo
    }
*/
    //falta hacer validacion con REGEX en password
    if(password){
        //si la password 
     
    }

    if (error) {
        return res.status(400).json({
            error,
            token,
            message
        })
    }



    //si no hay error entra aqui
    //hacer consulta de sql para recibir el id de tal usuario
    token = jwt.sign({ id: 12, usuario: "juanito" }, "secretKey")
    return res.status(200).json({
        error: false,
        token,
        message: "Se ha creado su cuenta exitosamente",
    })
}

const loginControler = (req, res) => {
    const { username, password } = req.body;

    const inputSanoUser = xss(req.body.username)
    const inputSanoPass = xss(req.body.password)


    //si el usuario coincide con la password entonces
    //devolvemos el jwt caso contrario no
    if (true) {
        //el id se genera de database 
        const token = jwt.sign({ id: 3, username: inputSanoUser }, "secretKey")

        return res.status(200).json({
            token: token,
            message: "Se ha logeado con exito",//llega esto y se hace redireccion en el frontend
            error: false
        })
    }

    res.json({ error: "usuario o password incorrecto" })
}


export default {registerControler,loginControler}