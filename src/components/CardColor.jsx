import Boton from "./Boton";

const CardColor = ({ tituloColor, borrarColor }) => {
    const formatedColor = `${tituloColor}`;
    return (
        <div className="col-sm-6 col-md-4 border shadow bg-light">
            <h3 className="text-center mt-3">{tituloColor}</h3>
            <div className="d-flex flex-column align-items-center">
                <div
                    style={{
                        width: "70px",
                        height: "70px",
                        background: formatedColor,
                    }}
                ></div>
                <Boton
                    colorBorrar={formatedColor}
                    borrarColor={borrarColor}
                    textButton={"Borrar"}
                    className={"bg-danger border-0 my-4"}
                ></Boton>
            </div>
        </div>
    );
};

export default CardColor;
