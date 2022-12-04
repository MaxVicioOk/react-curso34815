import React, { useState } from "react";

export default function CartForm(props) {
    const [data, setData] = useState({ 
        name: "",
        email: "",
        phone: ""
    });

    function onInputChange(evt) {
        let nameInput = evt.target.name;
        let value = evt.target.value;
        let newData = {...data}
        newData[nameInput] = value;
        setData(newData)
    }

    function onSubmit(evt) {
        evt.preventDefault();
    }
    const estilosDiv = { display: "flex", marginBottom: 8, justifyContent: "center" }
    const estilosLabel = {  width: "100px",marginRight: 4 }
    return (
        <form onSubmit={onSubmit}>
            <div style={estilosDiv}>
                <label htmlFor="name" style={estilosLabel}>Nombre</label>
                <input value={data.name} name="name" type="text" onChange={onInputChange}/>
            </div>
            <div style={estilosDiv}>
                <label htmlFor="email" style={estilosLabel}>Email</label>
                <input value={data.email} name="email" type="email" onChange={onInputChange}/>
            </div>
            <div style={estilosDiv}>
                <label htmlFor="phone" style={estilosLabel}>Teléfono</label>
                <input value={data.phone} name="phone" type="phone" onChange={onInputChange}/>
            </div>
            <div className='row col-2 mx-auto'>
                <button className='btn btn-danger my-3' onClick={props.clear}>Vaciar Carrito</button>
                <button disabled={(data.name === "" || data.email === "" || data.phone === "")} className='btn btn-primary my-3' onClick={() => props.finalizarCompra(data)} type="submit">
                    Finalizar Compra
                </button>
            </div>
        </form>
    );
}