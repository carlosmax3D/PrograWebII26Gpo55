import { Link } from "react-router-dom";

function Menu(props){
    return <>
        <Link to='/'>Home </Link>
        <Link to='/material'>Material </Link>
        <Link to='/forms'>Formularios </Link>
        <Link to='/montaje'>Montaje </Link>
        <Link to='/actualiza'>Actualizacion </Link>
        <Link to='/desmonta'>Desmontaje </Link>
        <Link to='/funcional'>Funcional </Link>
    </>
}

export default Menu;