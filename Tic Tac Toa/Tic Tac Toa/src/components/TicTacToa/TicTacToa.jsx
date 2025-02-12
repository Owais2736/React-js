import React, { useRef } from 'react'
import { useState } from 'react'
import './TicTacToa.css'
import cross from '../Assests/cross.webp'
import check from '../Assests/check.webp'


let data = ["", "", "", "", "", "", "", "", ""]


const TicTacToa = () => {
    let [count, setcount] = useState(0)
    let [lock, setlock] = useState(false)
    let titleRef = useRef(null)

    const toggle = (e, num) => {
        if (lock) {
            return 0;
        }
        if (count % 2 === 0) {
            e.target.innerHTML = `<img src='${cross}'>`;
            data[num] = "x";
            setcount(++count);
        }
        else {
            e.target.innerHTML = `<img src='${check}'>`;
            data[num] = "o";
            setcount(++count);
        }
        checkWinner()
    }


    const checkWinner = () => {
        if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
            won(data[2])
        }

        else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
            won(data[5])
        }
        else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
            won(data[8])
        }

        else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
            won(data[6])
        }
        else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
            won(data[7])
        }
        else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
            won(data[8])
        }

        else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
            won(data[8])
        }
        else if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
            won(data[2])
        }
        else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
            won(data[6])
        }
    }


    const won = (winner) => {
        setlock(true)
        if (winner === "x") {
            titleRef.current.innerHTML = `Congragulations: Winner is <img src='${cross}'>  `
        }

        else {
            titleRef.current.innerHTML = `Congragulations: Winner is <img src='${check}'> `

        }

    }

    const handleResest = () => {
        setlock(false);
        data = ["", "", "", "", "", "", "", "", ""];
        setcount(0);
        titleRef.current.innerHTML = `Tic Tac Toe Game`;
        document.querySelectorAll(".boxes").forEach(box => {
            box.innerHTML = "";
        });
    };

    return (
        <>
        <center>
            <div className="container">
                <h1 className='title' ref={titleRef}>Tic Tac Toa Game</h1>

                <div className='board'>
                    <div className="row1">
                        <div className="boxes" onClick={(e) => { toggle(e, 0) }}></div>
                        <div className="boxes" onClick={(e) => { toggle(e, 1) }}></div>
                        <div className="boxes" onClick={(e) => { toggle(e, 2) }}></div>
                    </div>
                    <div className="row2">
                        <div className="boxes" onClick={(e) => { toggle(e, 3) }}></div>
                        <div className="boxes" onClick={(e) => { toggle(e, 4) }}></div>
                        <div className="boxes" onClick={(e) => { toggle(e, 5) }}></div>
                    </div>
                    <div className="row3">
                        <div className="boxes" onClick={(e) => { toggle(e, 6) }}></div>
                        <div className="boxes" onClick={(e) => { toggle(e, 7) }}></div>
                        <div className="boxes" onClick={(e) => { toggle(e, 8) }}></div>
                    </div>
                </div>


                <button className='reset' onClick={handleResest}>Reset</button>


            </div>
            </center>
        </>
    )
}

export default TicTacToa
