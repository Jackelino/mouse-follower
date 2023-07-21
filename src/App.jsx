import './App.css';
import {useEffect, useState} from "react";
function App() {
    const [enable, setEnable] = useState(false);
    useEffect(() => {
        console.log('useEffect')
    }, [enable]);
    return (
        <main>
            <div className="circle-mouse"/>
            <button onClick={() => setEnable(!enable)}>
                {enable ? 'Desactivar' : 'Activar'} Seguir puntero
            </button>
        </main>
    )
}

export default App
