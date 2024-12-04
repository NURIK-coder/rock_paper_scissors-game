import { useEffect, useState } from "react";


function Game({sign}){
    const [win, setWin] = useState(0);   
    const [lose, setLose] = useState(0);   
    const [draw, setDraw] = useState(0);   
    const s = ['rock', 'scissors', 'paper'];
    const [status, setStatus] = useState(false);
    const [randomSign, setRandomSign ] = useState(null);
    // const [signs, setSigns] = useState([
    //     'https://img.icons8.com/?size=100&id=t6RLlzNz6dd3&format=png&color=000000', 
    //     'https://img.icons8.com/?size=100&id=eO6D6TQcH38U&format=png&color=000000', 
    //     'https://img.icons8.com/?size=100&id=IpIXzjhGkLjI&format=png&color=000000'
    // ])
    // useEffect(()=>{
    //     if (sign === null){
    //         const warn= document.getElementById('warning');
    //         warn.innerText = 'Please Choose one sign!'
    //     }else{
    //         const warn= document.getElementById('warning');
    //         warn.innerText = '';
    //     }
    // }, [sign])
    const images = {
        rock: 'https://img.icons8.com/?size=100&id=t6RLlzNz6dd3&format=png&color=000000',
        scissors: 'https://img.icons8.com/?size=100&id=eO6D6TQcH38U&format=png&color=000000',
        paper: 'https://img.icons8.com/?size=100&id=IpIXzjhGkLjI&format=png&color=000000'
    }
    
    function startGame(){
        if (sign === null){
            const warn= document.getElementById('warning');
            warn.innerText = 'Please Choose one sign!'
            return
        }else{
            const warn= document.getElementById('warning');
            warn.innerText = '';
            
        }
        setRandomSign(null);
        const leftHand = document.getElementById('leftHand');
        const rightHand = document.getElementById('rightHand');
        

        leftHand.classList.add('animate-left'); 
        rightHand.classList.add('animate-right');

        setStatus(true);
        

        
        
        setTimeout(() => {

            leftHand.classList.remove('animate-left');
            rightHand.classList.remove('animate-right');
            setRandomSign(s[Math.floor(Math.random() * s.length)])
            
            setStatus(false);
        }, 1500);
    }
    // [0, 0.33], (0.33, 0.66], [0.66, 1] 
    useEffect(() => {
        if (randomSign !== null){

        if (sign==='paper' && randomSign==='rock'){ 
            setWin(win+1);
        }else if(sign==='paper' && randomSign==='paper'){
            setDraw(draw+1);
        }else if(sign==='rock' && randomSign==='scissors'){
            setWin(win+1);
        }else if(sign==='rock' && randomSign === 'rock'){
            setDraw(draw+1);
        }else if(sign==='scissors' && randomSign === 'paper'){
            setWin(win+1);
        }else if (sign === 'scissors' && randomSign === 'scissors'){
            setDraw(draw+1);
        }else if (randomSign == 'paper' && sign == 'rock'){
            setLose(lose+1);
        }else if (randomSign === 'scissors' && sign === 'paper'){
            setLose(lose+1);
        }else if (randomSign === 'rock' && sign === 'scissors'){
            setLose(lose+1);
        }
    }
    }, [randomSign])
    return(
        <div className="cont">
            <p className="winLoseDrawP">Win: {win},  Draw: {draw},  Lose: {lose}</p>
            <h1 className="wrn" id="warning"></h1>
            <div className="game">
                <img className="img1" id="leftHand"  src={sign==null ?'rightHand.png' : images[sign]} alt="" />
                <img className="img2" id="rightHand" src={randomSign==null ? "leftHand.png" : images[randomSign]} alt="" />
            </div>  
            <button className="start" onClick={startGame}>Play</button>
        </div>
    )
}
export default Game;