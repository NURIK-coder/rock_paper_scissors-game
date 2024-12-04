import { useState } from "react";

function Signs ({setSigns}){
    function saveSign(e){
        e.preventDefault();
        const sign = e.target.value;
        console.log(sign);
        
        setSigns(sign);

    }
    
    return(
        <div className="container">
            <div className="signs">
                <div >
                    <img className="rock" src="https://img.icons8.com/?size=100&id=t6RLlzNz6dd3&format=png&color=000000" alt="" />
                    <h1>Rock</h1>
                    <button onClick={saveSign} className="btn" value={'rock'}>Выбрать</button>
                </div>
                <div >
                    <img className="scissors" src="https://img.icons8.com/?size=100&id=eO6D6TQcH38U&format=png&color=000000" alt="" />
                    <h1>Scissors</h1>
                    <button onClick={saveSign} className="btn" value={'scissors'}>Выбрать</button>
                </div >
                <div>
                    <img className="paper" src="https://img.icons8.com/?size=100&id=IpIXzjhGkLjI&format=png&color=000000" alt="" />
                    <h1>Paper</h1>
                    <button onClick={saveSign} className="btn" value={'paper'}>Выбрать</button>
                </div>
            </div>
        </div>
    )
}

export default Signs;