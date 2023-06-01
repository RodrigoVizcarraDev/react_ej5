import Form from "react-bootstrap/Form";
import InputSelectorColor from "./InputSelectorColor";
import Boton from "./Boton";
import { useState, useEffect } from "react";
import ListaDeCardsColor from "./ListaDeCardsColor";
const FormularioInputColor = () => {
    // trayendo las listaColores del local storage
    const listaColoresLocalStorage = JSON.parse(localStorage.getItem("listaColores")) || [];
    
    // 1 crear los state para color como listaColor
    const [color, setColor] = useState("");
    const [listaColores, setListaColores] = useState(listaColoresLocalStorage);
    
    useEffect(()=>{
        localStorage.setItem("listaColores",JSON.stringify(listaColores));
    }, [listaColores])
    function handleSubmit(e) {
        e.preventDefault();
        setListaColores([...listaColores, color]);
        setColor("");
    }

    function borrarColor(colorEliminado){
        let copiaListaColores = listaColores.filter((color) => color != colorEliminado);
        setListaColores(copiaListaColores);
    }
    return (
        <>
        <Form className="text-center" onSubmit={handleSubmit}> {/* 4 creamos la funcion handleSubmir con la cual evitamos que la pagina se recargue y actualizamos la lista color del state con setListaColores al final con setColor("") limpiamos el input */}
            <Form.Group
                className="mb-3 bg-light py-4"
                controlId="formBasicEmail"
            >
                <InputSelectorColor
                    onChange={(e) => setColor(e.target.value)} // 2 capturamos el value del input
                    // y lo guardamos en el state color con setColor
                    value={color} // 3 asignamos ese color al value del input
                ></InputSelectorColor>
            </Form.Group>
            <Boton textButton={"Guardar"} className={"bg-primary b-0"}></Boton>
        </Form>

        <ListaDeCardsColor listaDeColores={listaColores} borrarColor={borrarColor}></ListaDeCardsColor>
        </>
    );
};

export default FormularioInputColor;
