import React, { useState } from 'react';
const Listcom = ({value,id,onselect}) => {
    const [toog, settoog] = useState(false);

    const heandelChecks = () => {
        settoog(!toog);
    }
    return (
        <span style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
            
                <input onChange={heandelChecks} type='checkbox' />
                <li style={{ listStyle: "none", fontWeight: "bolder", fontStyle: "italic", marginLeft: "10px" }}>{value}</li>
            {toog ? <button onClick={()=>onselect(id)} style={{ marginLeft: "100px",marginTop: "15px" }} className='btn btn-success p-0 rounded-5'>❌</button> : null}
        </span>
    )
}

export default Listcom;