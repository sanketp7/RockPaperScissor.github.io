// import { useState } from "react";
// import "./Game.css"
// function Game(){

//     const [computerChoice,setComputer] = useState("")
//     // const [Computer,] = useState("")
//     const [choice,setChoice] = useState("- ")
//     const [yourScore,setYourScore] = useState(0)
//     const [computerScore,setComputerScore] = useState(0)
//     const[rock,setRock]=useState("Rock");
//     const[paper,setPaper]=useState("Paper");
//     const[scissor,setScissor]=useState("Scissor");
//     const [message,setMessage] = useState("Click something");

//     function checkWinner(e){
//         // console.log(e.target.value)
//         setChoice(e.target.value);
//         let computerChoices = parseInt(Math.random() * 3).toString();
//         if (computerChoices === "0") {
//             setComputer("Rock")
            
//         }
//         else if(computerChoices === "1"){
//             setComputer("Paper");
           
//         }
//         else if(computerChoices === "2"){
//             setComputer("Scissor");
            
//         }

//         checkResult(computerChoice,choice);

        
//     }

//     function checkResult(Computer , user){
//         // console.log(user == Computer);
//         // console.log(user );
//         // console.log(Computer);
//         if (user == Computer) {
//             setMessage("Match TI");
//         }
//         else if(user == "Rock"){
//             if (Computer == "Paper") {
//                 setMessage("Computer Woon !!!");
//                 setComputerScore((c)=>c+1);
//             }
//             else{
//                 setMessage("You Woon !!!");
//                 setYourScore((c)=>c+1);
//             }
//         }
//         else if(user == "Scissor"){
//             if (Computer == "Rock") {
//                 setMessage("Computer Woon !!!");
//                 setComputerScore((c)=>c+1);
//             }
//             else{
//                 setMessage("You Woon !!!");
//                 setYourScore((c)=>c+1);
//             }
//         }
//         else if(user == "Paper"){
//             if (Computer == "Scissor") {
//                 setMessage("Computer Woon !!!");
//                 setComputerScore((c)=>c+1);
//             }
//             else{
//                 setMessage("You Woon !!!");
//                 setYourScore((c)=>c+1);
//             }
//         }
//         // else if(user =="Rock"&& Computer == "Scissor"){
//         //     setMessage("You Wooonnn !!!!!");
//         //     setYourScore((c)=>c+1);
//         // }
//         // else if(user =="Paper"&& Computer == "Rock"){
//         //     setMessage("You Wooonnn !!!!!");
//         //     setYourScore((c)=>c+1);
//         // }
//         // else if(user =="Scissor"&& Computer == "Paper"){
//         //     setMessage("You Wooonnn !!!!!");
//         //     setYourScore((c)=>c+1);
//         // }

//         // else if(user =="Rock" && Computer == "Scissor"){
//         //     setMessage("Computer Wooonnn !!!!!");
//         //     setYourScore((c)=>c+1);
//         // }
//         // else if(user =="Paper"&& Computer == "Rock"){
//         //     setMessage("You Wooonnn !!!!!");
//         //     setYourScore((c)=>c+1);
//         // }
//         // else if(user =="Scissor"&& Computer == "Paper"){
//         //     setMessage("You Wooonnn !!!!!");
//         //     setYourScore((c)=>c+1);
//         // }
        
//         // else if(){}
//     }

//     return<div className="mainDiv">
//        <div className="input">
//        <button onClick={checkWinner} value={rock} className="button" type="button">Rock</button>
//         <button onClick={checkWinner} value={paper} className="button" type="button">Paper</button>
//         <button onClick={checkWinner} value={scissor}className="button" type="button">Scissor</button>
//        </div>

//        <div>
//             <p>{message}</p>
//        </div>

//     <div className="choice">
//     <h2>Your Choice: {choice}</h2>
//     <h2>Computer Choice: {computerChoice}</h2>
//     </div>

//    <div className="score">
//    <h1>Your Score: {yourScore}</h1>
//    <h1>Computer Score: {computerScore}</h1>
//    </div>

//     </div>
// }
// export default Game;

// import { useState } from "react";
// import "./Game.css";

// function Game() {
//     const [computerChoice, setComputerChoice] = useState("");
//     const [choice, setChoice] = useState("");
//     const [yourScore, setYourScore] = useState(0);
//     const [computerScore, setComputerScore] = useState(0);
//     const [message, setMessage] = useState("Click something");

//     function checkWinner(e) {
//         const userChoice = e.target.value;
//         setChoice(userChoice);
        
//         const computerChoices = ["Rock", "Paper", "Scissor"];
//         const randomChoice = computerChoices[Math.floor(Math.random() * 3)];
//         setComputerChoice(randomChoice);

//         checkResult(randomChoice, userChoice);
//     }

//     function checkResult(computer, user) {
//         if (user === computer) {
//             setMessage("It's a Tie!");
//         } else if (user === "Rock") {
//             if (computer === "Paper") {
//                 setMessage("Computer Won !!!");
//                 setComputerScore(c => c + 1);
//             } else {
//                 setMessage("You Won !!!");
//                 setYourScore(c => c + 1);
//             }
//         } else if (user === "Scissor") {
//             if (computer === "Rock") {
//                 setMessage("Computer Won !!!");
//                 setComputerScore(c => c + 1);
//             } else {
//                 setMessage("You Won !!!");
//                 setYourScore(c => c + 1);
//             }
//         } else if (user === "Paper") {
//             if (computer === "Scissor") {
//                 setMessage("Computer Won !!!");
//                 setComputerScore(c => c + 1);
//             } else {
//                 setMessage("You Won !!!");
//                 setYourScore(c => c + 1);
//             }
//         }
//     }

//     return (
//         <div className="mainDiv">
//             <div className="input">
//                 <button onClick={checkWinner} value="Rock" className="button" type="button">Rock</button>
//                 <button onClick={checkWinner} value="Paper" className="button" type="button">Paper</button>
//                 <button onClick={checkWinner} value="Scissor" className="button" type="button">Scissor</button>
//             </div>

//             <div>
//                 <p>{message}</p>
//             </div>

//             <div className="choice">
//                 <h2>Your Choice: {choice}</h2>
//                 <h2>Computer Choice: {computerChoice}</h2>
//             </div>

//             <div className="score">
//                 <h1>Your Score: {yourScore}</h1>
//                 <h1>Computer Score: {computerScore}</h1>
//             </div>
//         </div>
//     );
// }

// export default Game;

import { useState } from "react";
import "./Game.css";

function Game() {
    const [computerChoice, setComputerChoice] = useState("");
    const [choice, setChoice] = useState("");
    const [yourScore, setYourScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const [message, setMessage] = useState("Click something");
    const [showModal, setShowModal] = useState(false);
    const [winner, setWinner] = useState("");

    function checkWinner(e) {
        const userChoice = e.target.value;
        setChoice(userChoice);

        const computerChoices = ["Rock", "Paper", "Scissor"];
        const randomChoice = computerChoices[Math.floor(Math.random() * 3)];
        setComputerChoice(randomChoice);

        checkResult(randomChoice, userChoice);
    }

    function checkResult(computer, user) {
        if (user === computer) {
            setMessage("It's a Tie!");
        } 
        else if (user === "Rock") {
            if (computer === "Paper") {
                setMessage("Computer Won !!!");
                setComputerScore(c => {
                    const newScore = c + 1;
                    if (newScore === 5) {
                        setWinner("Computer");
                        setShowModal(true);
                    }
                    return newScore;
                });
            } else {
                setMessage("You Won !!!");
                setYourScore(c => {
                    const newScore = c + 1;
                    if (newScore === 5) {
                        setWinner("You");
                        setShowModal(true);
                    }
                    return newScore;
                });
            }
        } else if (user === "Scissor") {
            if (computer === "Rock") {
                setMessage("Computer Won !!!");
                setComputerScore(c => {
                    const newScore = c + 1;
                    if (newScore === 5) {
                        setWinner("Computer");
                        setShowModal(true);
                    }
                    return newScore;
                });
            } else {
                setMessage("You Won !!!");
                setYourScore(c => {
                    const newScore = c + 1;
                    if (newScore === 5) {
                        setWinner("You");
                        setShowModal(true);
                    }
                    return newScore;
                });
            }
        } else if (user === "Paper") {
            if (computer === "Scissor") {
                setMessage("Computer Won !!!");
                setComputerScore(c => {
                    const newScore = c + 1;
                    if (newScore === 5) {
                        setWinner("Computer");
                        setShowModal(true);
                    }
                    return newScore;
                });
                
            } else {
                setMessage("You Won !!!");
                setYourScore(c => {
                    const newScore = c + 1;
                    if (newScore === 5) {
                        setWinner("You");
                        setShowModal(true);
                    }
                    return newScore;
                });
            }
        }
    }

    function resetGame() {
        setYourScore(0);
        setComputerScore(0);
        setMessage("Click something");
        setChoice("");
        setComputerChoice("");
        setShowModal(false);
    }

    return (
        <div className="mainDiv">
            <div className="input">
                <button onClick={checkWinner} value="Rock" className="button" type="button">Rock</button>
                <button onClick={checkWinner} value="Paper" className="button" type="button">Paper</button>
                <button onClick={checkWinner} value="Scissor" className="button" type="button">Scissor</button>
            </div>

            <div>
                <p>{message}</p>
            </div>

            <div className="choice">
                <h2>Your Choice: {choice}</h2>
                <h2>Computer Choice: {computerChoice}</h2>
            </div>

            <div className="score">
                <h1>Your Score: {yourScore}</h1>
                <h1>Computer Score: {computerScore}</h1>
            </div>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>{winner} won the game!</h2>
                        <button onClick={resetGame} className="button">Play Again</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Game;