import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [enable, setEnable] = useState(false);
    const [position, setPosition] = useState({x: 0, y: 0});
    // pointer move
    useEffect(() => {
        const handleMove = (event) => {
            const {clientX, clientY} = event;
            setPosition({x: clientX, y: clientY});
        }
        if (enable) {
            window.addEventListener('pointermove', handleMove)
        }
        //cleanup (return)
        // -> cuando el componente se desmonta
        // -> cuando cambia las dependencias. antes de ejecutar el efecto nuevo.
        return () => {
            window.removeEventListener('pointermove', handleMove)
        }
    }, [enable]);
    // change cursor pointer
    useEffect(() => {
        document.body.classList.toggle('no-cursor', enable)
        return () => {
            document.body.classList.remove('no-cursor')
        }
    }, [enable])
    return (
        <main>
            <div className="circle-mouse" style={{
                transform: `translate(${position.x}px, ${position.y}px)`
            }}/>
            <button onClick={() => setEnable(!enable)}>
                {enable ? 'Desactivar' : 'Activar'} Seguir puntero
            </button>
        </main>
    )
}

export default App
