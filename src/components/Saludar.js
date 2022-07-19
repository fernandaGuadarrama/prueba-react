function Saludar(props) {
    const{ nombre, residencia, estilo } = props
    return(
        <div>
            <h2 className={estilo}>Hello {props.nombre} te voy a visitar en {props.residencia}</h2>
        </div>
    )
}

export default Saludar;