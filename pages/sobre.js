import { useState } from "react"

function sobre (){
    return (
        <div>
            <h1>sobre</h1>
            <Contador/>
            <a href="/Home">Acessar página Home</a>
        </div>
    )
}
function Contador(){
    const [Contador, setContador] = useState(1);

    function adicionarContador(){
        setContador (Contador + 1);
    }
    return(
        <div>
            <div>{Contador}</div>
            <button onClick={adicionarContador} >Adicionar</button>
        </div>
    )
}

export default sobre