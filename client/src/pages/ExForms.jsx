import { useState } from 'react';
import Counter from '../components/Event1';
import Counter1 from '../components/Event2';
import CheckLogin from '../components/Event3';
import Menu from '../components/Menu'
import ControlledComponent from '../components/Form1';
import Multiple from '../components/Form2';
import Uncontrolled from '../components/Form3';
import LoginForm from '../components/Form4';
function ExForms(props){
    const [sesion, setSesion] = useState('')
    return<>
    <Menu/>
    <h1>Ejemplo 7</h1>
    <LoginForm usuario={sesion} funcion={setSesion}/>
    <h1>Ejemplo 6</h1>
    <Uncontrolled usuario={sesion} funcion={setSesion}/>
    <h1>Ejemplo 5</h1>
    <Multiple usuario={sesion} funcion={setSesion}/>
    <h1>Ejemplo 4</h1>
    <ControlledComponent usuario={sesion} funcion={setSesion}/>
    <h1>Ejemplo 3</h1>
    <CheckLogin usuario={sesion} funcion={setSesion}/>
    <h1>Ejemplo 2</h1>
    <Counter1 usuario={sesion}/>
    <h1>Ejemplo 1</h1>
    <Counter/>
    </>
}
export default ExForms;