import CardColor from "./CardColor";

const ListaDeCardsColor = ({listaDeColores, borrarColor}) => {
    return (
        <div className="row my-3">
        {listaDeColores.map((color, indice) => <CardColor borrarColor={borrarColor} tituloColor={color} key={indice}></CardColor>)}   
        </div>
    );
};

export default ListaDeCardsColor;