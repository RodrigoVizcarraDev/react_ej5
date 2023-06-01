import { Button } from "react-bootstrap";

const Boton = ({ textButton, className, borrarColor, colorBorrar }) => {
    return (
        <>
            <Button
                type="submit"
                className={className}
                onClick={() =>{
                    if(textButton === "Borrar"){
                        borrarColor(colorBorrar);
                    }
                }}
            >
                {textButton}
            </Button>
        </>
    );
};

export default Boton;
