import React from "react";

const Personajes = ({personajes}) => {
    return (
        <>
            <div className="row">
                {personajes.map((item, index) => (
                    <div key={index} className="col">
                        <div className="card" style={{minWidth :'200px', marginBottom : '15px', borderRadius: '8px'}}>
                            <img src={item.image} alt="" style={{borderRadius : '8px'}} />   
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <hr />
                                <p>location: {item.location.name}</p>
                                <p>Especia: {item.species}</p>
                            </div> 
                        </div> 
                    </div>
                ))}
            </div>
        </>
    )
}

export default Personajes