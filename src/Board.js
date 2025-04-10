import { useState } from "react";
import Square from "./Square"

function Board(){
  const [square, setSquare] = useState(Array(9).fill(null));

/** 
   * Array(n).fill(0,2,4) 구문설명
   * n개 배열에 2번배열부터 4번배열까지 0값을 배열에 넣어라
   * Array(9).fill(null)
   * 9개배열에 모든 값을 null로 하여라
  */

    function handleClick(){
        const nextSquare = square.slice();
        nextSquare[0] = 'X';
        setSquare(nextSquare);
    }
    return(
        <>
            <div className='border-row'>
                <Square value={square[0]} onSquareClick={handleClick}/>
                <Square value={square[1]} onSquareClick={handleClick}/>
                <Square value={square[2]} onSquareClick={handleClick}/>
            </div>
            <div className='border-row'>
                <Square value={square[3]} onSquareClick={handleClick}/>
                <Square value={square[4]} onSquareClick={handleClick}/>
                <Square value={square[5]} onSquareClick={handleClick}/>
            </div>
            <div className='border-row'>
                <Square value={square[6]} onSquareClick={handleClick}/>
                <Square value={square[7]} onSquareClick={handleClick}/>
                <Square value={square[8]} onSquareClick={handleClick}/>
            </div>
        </>
    )
}

export default Board;