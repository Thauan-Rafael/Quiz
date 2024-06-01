import React from 'react'
function Quest(){
    let questNumber = 1;
    let timer = 10;
    return(
        <>
            <div id='questPage'>
                <header id='questHeader'>
                    <h2>Quest {questNumber}</h2>
                    <h3>{timer}</h3>
                </header>
                <div id='mathQuest'>5 x 10</div>
                <input id='userInput' placeholder='Answer'></input>
                <button id='confirmButton'>Confirm</button>
            </div>
        </>
    )
}
export default Quest;