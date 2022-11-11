import React, {useState} from 'react';

const ItemCount = () => {

    const [contador, setContador] = useState(1)
    function modContador(operacion) {
        if(operacion === "+"){
            setContador(contador + 1)
        }else{
            if(contador > 1){
                setContador(contador - 1)
            }
        }
    }
    return (
        <div className='d-flex col-sm-6'>
            <div className="btn btn-outline-dark mt-auto" onClick={() => modContador("-")}>{"<"}</div>
            <div className="form-control text-center mx-0" style={{maxWidth: '3rem'}}>
                {contador}
            </div>
            <div className="btn btn-outline-dark mt-auto" onClick={() => modContador("+")}>{">"}</div>
            <button className="btn btn-outline-dark flex-shrink-0 mx-3" type="button">
                <i className="bi-cart-fill me-1" />
                Agregar
            </button>
        </div>
    );
}

export default ItemCount;
