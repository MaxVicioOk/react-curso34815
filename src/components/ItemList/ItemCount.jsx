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
        <div className='d-flex mx-auto col-sm-7'>
            <div className="btn btn-outline-dark mt-auto" onClick={() => modContador("-")}>{"<"}</div>
            <div className="form-control text-center mx-1">
                {contador}
            </div>
            <div className="btn btn-outline-dark mt-auto" onClick={() => modContador("+")}>{">"}</div>
        </div>
    );
}

export default ItemCount;
