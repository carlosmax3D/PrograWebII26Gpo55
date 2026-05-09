import {useState} from 'react';
export default function  ControlledComponent()  {
    const  [inputValue, setInputValue] =  useState('');
    const  handleChange = (event) => {
        let texto = event.target.value
        if (texto.includes('A') || texto.includes('a')){
            texto = texto.replaceAll('A','').replaceAll('a','');
        }
        setInputValue(texto);
    };
    const handleKeyDown = (event)=>{
        if(event.key == 'A' || event.key == 'a')
            event.preventDefault()
    }
return  (
<form>
    <label>Input Value:
    <input onKeyDown={handleKeyDown}  type="text"  value={inputValue} onChange={handleChange} />
    </label>
    <p>Input Value: {inputValue}</p>
</form>
)};