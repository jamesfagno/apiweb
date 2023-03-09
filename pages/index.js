import { useState } from "react"
import Link from "next/link";
function home (){
    return (
        <div>
            <h1>Home</h1>
            <Contador/>
            <Link href="/sobre">
            <a>Acessar página sobre</a>
            </Link>
            
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

export default home