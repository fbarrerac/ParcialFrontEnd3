import Card from "./Card";
import { useState } from "react";
import { validateColor, validateName } from "../utils/validations";

function App() {

    const [data, setData] = useState({nom: '', color: ''});
    const [error, setError] = useState(false);
    const [valid, setValid] = useState(false);

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
        console.log(data)
    }

    const validations = () => {
        if (validateName(data.nom) && validateColor(data.color)) {
            setValid(true)
            setError(false)
        } else {
            setError(true)
            setValid(false)
        }
    }

  return (
    <div className="App">

        <h1>Formulario</h1>
        <form onSubmit={(e) => { 
            e.preventDefault() 
            validations()
            }}>

            <input type="text" name="nom" placeholder="Nombre" onChange={handleChange}/>
            <input type="text" name="color" placeholder="Color favorito" onChange={handleChange}/>
            
            <button>Submit</button>
        </form>

        {error && <p style={{ color: 'red' }}>Por favor chequea que la información sea correcta</p>}
        {valid && <Card data={data} />}

    </div>
  );
}

export default App;
