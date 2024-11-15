import React, { useState } from 'react';
import Listcom from './listcom';

const Todoapp = () => {
    const [state, setstate] = useState("");
    const [val, setval] = useState([]);

    const inputEvent = (e) => {
        setstate(e.target.value);
    };

    const handleClicks = () => {
        setval((preval) => {
            return [...preval, state];
        })
        setstate("");
    };

    const deleteItems = (id) => {
        setval((preval) => {
           return preval.filter((e, ind) => {
                return ind !== id;
            })
        })
    };


    return (
        <div className='container border border-1 bg-body-secondary' style={{ maxWidth: "450px", margin: "50px auto" }}>
            <div className="d-flex flex-column gap-3 justify-content-center align-items-center" style={{ width: "100%", padding: "5px" }}>
                <h3 className='fw-bolder fst-italic fs-1 text-center mt-3 mb-0 text-success'>Todoapp</h3>
                <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
                    <input onChange={inputEvent} value={state || ""} className='rounded-0' placeholder='Enter your todos' style={{ padding: "5px", width: "60%", outline: "none", backgroundColor: "#fafafa", border: "none" }} />
                    <button onClick={handleClicks} className='btn btn-success rounded-0' style={{ padding: "5px", width: "30%", border: "none" }}>Addtodos</button>
                </div>

                <div>
                    <p className='fst-italic'>Add you daily todos with remarks</p>
                </div>
            </div>
            <div>
                {val.map((e, i) => {
                    return <ul key={i} style={{ display: "flex", flexDirection: "column" }}>
                        <Listcom value={e} id={i} onselect={deleteItems} />
                    </ul>
                })}
            </div>
        </div>
    )
}

export default Todoapp;