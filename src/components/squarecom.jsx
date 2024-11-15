import React from 'react';

const Squarecom = ({onClick,value}) => {
  return (
    <div onClick={onClick} style={{width:"100px",height:"100px",border:"0.1px solid",display:"flex",alignItems:"center",justifyContent:"center"}}>
        <span>{value}</span>
    </div>
  )
};
export default Squarecom;