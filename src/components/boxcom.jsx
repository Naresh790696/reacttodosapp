import React,{useState} from 'react';
import Squarecom from './squarecom';
const Boxcom = () => {
  const [state,setstate] = useState(Array(9).fill(""));
  const [toogval,settoogval] = useState(true);
  console.log(state);

  const handelClick = (ind)=>{
    const copyArray = [...state];
    copyArray[ind] = toogval ? "X":"O";
    setstate(copyArray);
    settoogval(!toogval);
    console.log(ind);
  };

  const winLogic = ()=>{
    const winningPattern = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [6,4,2],
    ];
    for (let elements of winningPattern) {
      const [a,b,c] = elements;
      if(state[a]===state[b] && state[b]===state[c]){
        return state[a];
      }
    }
  };

  const isWinner = winLogic();
  
  return (
    <div className='container' style={{width:"500px",margin:"50px auto",textAlign:"center"}}>
      <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
      <span className='text-center fw-bolder fst-italic fs-4 text-success'>TICTACKTOE</span>
      {isWinner ? <><h1 className='text-center fw-bolder fst-italic fs-4 text-success' >Player {isWinner} Won</h1></>:<>
      <span className='text-center fw-bolder fst-italic fs-4 text-success'>{toogval ? "Player X Turn":"Player O Turn"}</span>
        <div className='row'>
            <Squarecom onClick={()=>handelClick(0)} value={state[0]}/>
            <Squarecom onClick={()=>handelClick(1)} value={state[1]}/>
            <Squarecom onClick={()=>handelClick(2)} value={state[2]}/>
        </div>
        <div className='row'>
            <Squarecom onClick={()=>handelClick(3)} value={state[3]}/>
            <Squarecom onClick={()=>handelClick(4)} value={state[4]}/>
            <Squarecom onClick={()=>handelClick(5)} value={state[5]}/>
        </div>
        <div className='row'>
            <Squarecom onClick={()=>handelClick(6)} value={state[6]}/>
            <Squarecom onClick={()=>handelClick(7)} value={state[7]}/>
            <Squarecom onClick={()=>handelClick(8)} value={state[8]}/>
        </div>
      </>}
      <button className='btn btn-success my-2' onClick={()=>setstate(Array(9).fill(""))}>Rematch</button>
      </div>
    </div>
  )
}

export default Boxcom;