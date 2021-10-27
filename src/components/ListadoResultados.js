import React from 'react';

const ListadoResultados = ({resultados}) => {
    return ( 
        <ul className="collection">
            {resultados.map(res => (        
                <li className="collection-item avatar" key={res.id}>
                    <img src={res.image} alt="" className="circle"></img>
                    <span className="title">{res.name}</span>
                    <p>Estado: {res.status}, especie: {res.species}, tipo: {res.type}, sexo: {res.gender}</p>
                    <p>Origen: {res.origin.name}, ubicación: {res.location.name}</p>
                </li>
            ))}
        </ul>
    );
}
 
export default ListadoResultados;