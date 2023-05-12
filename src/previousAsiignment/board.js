import { useState } from 'react'
import './board.css'
export default function Board(){
    
    const [board,setBoard] = useState(Array(9).fill(" "))
    const [value,setValue] = useState("O")
    
    const handleClick = (n) => {
        
        if(board[n]!==" "){
            alert('Already clicked')
            return
         }

        let square = [...board]
        square[n] = value
        setBoard(square)
      
        if(value==="X"){
            setValue("O")
        } else{
            setValue("X")
           }
           
           if(checkWin(square)){
            alert('winner')
      }
    
    }


      const checkWin = (board) => {
        const conditions = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        let flag = false
        conditions.forEach(ele=>{
            if(board[ele[0]] != " "&& board[ele[1]] != " " && board[ele[2]] != " "){
                if(board[ele[0]] == board[ele[1]] && board[ele[1]] == board[ele[2]] ){
                           flag = true
                }
         } 
    })
    return flag
 
}

const refresh = () => {
    setBoard(" ")
}   


    return (
        <div className="head">
        <h1 className="heading">Tic Tac Toe</h1>
            <table>
                <tbody>
                    <tr>
                        <td onClick={()=>{handleClick(0)}}>{board[0]}</td>
                        <td onClick={()=>{handleClick(1)}}>{board[1]}</td>
                        <td onClick={()=>{handleClick(2)}}>{board[2]}</td>
                    </tr>
                    <tr>
                        <td onClick={()=>{handleClick(3)}}>{board[3]}</td>
                        <td onClick={()=>{handleClick(4)}}>{board[4]}</td>
                        <td onClick={()=>{handleClick(5)}}>{board[5]}</td>
                    </tr>
                    <tr>
                        <td onClick={()=>{handleClick(6)}}>{board[6]}</td>
                        <td onClick={()=>{handleClick(7)}}>{board[7]}</td>
                        <td onClick={()=>{handleClick(8)}}>{board[8]}</td>
                    </tr>
                </tbody>
            </table>
            <button className='button' onClick={refresh}>Start again</button>
        </div>
    )
}