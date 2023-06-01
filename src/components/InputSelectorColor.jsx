import { FormControl } from "react-bootstrap";

const InputSelectorColor = ({onChange, value}) => {
    
    return (
        <div className="d-md-flex align-items-center">
            <div className="mb-3">
                <div
                    className="me-3"
                    style={{ width: "70px", height: "70px", background:value}}
                ></div>
            </div>

            <FormControl
                style={{height:"30px"}}
                type="text"
                placeholder="Ingrese un color ej: blue, red"
                onChange={onChange}
                value={value}
            ></FormControl>
        </div>
    );
};

export default InputSelectorColor;
