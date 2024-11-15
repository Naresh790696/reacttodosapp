import React, { useState } from 'react';

const Form = () => {
    const userInfo = {
        firstname: "",
        lastname: "",
        email: "",
    }
    const [state, setstate] = useState(userInfo);

    const inputEvent = (e) => {
        const { name, value } = e.target;
        setstate((preval) => {
            return { ...preval, [name]: value }
        })

    };

    const handelSubmit = (e) => {
        e.preventDefault();
        (isNaN(state.firstname) && isNaN(state.lastname) && isNaN(state.email)) ? alert(`Form submmit successfully \n${state.firstname} ${state.lastname}`):alert("use alfabets only")
    }


    return (
        <div className="container border border-1 my-3 rounded-1" style={{ maxWidth: "350px",backgroundColor:"#f2f2f2",opacity:"0.9",boxShadow:"5px 5px 5px 0px #2874f0"}}>
            <form onSubmit={handelSubmit} style={{ width: "100%" }}>
                <div className='d-flex flex-column fst-italic fw-bold gap-3 p-3'>
                    <span>Firstname:</span>
                    <input type='text'
                        onChange={inputEvent}
                        name="firstname"
                        value={state.firstname}
                        placeholder='Enter Firstname'
                        className='fst-italic  p-3'
                        style={{maxWidth:"300px",height:"50px",fontWeight:"lighter",outline:"none",textTransform:"lowercase",boxShadow:"5px 5px 5px 5px #2874f0",border:"none"}}
                        required
                    />
                    <span>Lastname:</span>
                    <input
                        type='text'
                        onChange={inputEvent}
                        name="lastname"
                        value={state.lastname}
                        placeholder='Enter Lastname'
                        className='fst-italic p-3'
                        style={{maxWidth:"300px",height:"50px",fontWeight:"lighter",outline:"none",textTransform:"lowercase",boxShadow:"5px 5px 5px 5px #2874f0",border:"none"}}
                        required

                    />
                    <span>Email:</span>
                    <input
                        type='email'
                        onChange={inputEvent}
                        name="email"
                        value={state.email}
                        placeholder='Enter Emailaddress'
                        className='fst-italic  p-3'
                        style={{maxWidth:"300px",height:"40px",fontWeight:"lighter",outline:"none",textTransform:"lowercase",boxShadow:"5px 5px 5px 5px #2874f0",border:"none"}}
                        required
                    />
                </div>

                <div className='fst-italic fw-bold  p-3'>
                    <input  className="btn btn-outline-primary fw-bold" type='submit' />
                </div>
            </form>
        </div>
    )
}

export default Form;