import React from 'react'
function Quest(){
    let numbers = []
    let operators = []
    const [questNumber,setQuestNumber] = React.useState(1);
    const [timer, setTimer] = React.useState(10)
    const [quest, setQuest] = React.useState(generateQuest())
    const formatTime = (time) => {
        return time < 10 ? `0${time}` : time
    };
    React.useEffect(() => {
        if(timer > 0){
            const countdown = setTimeout(() => {setTimer(timer - 1)}, 1000);
            return () => clearTimeout(countdown);
        }
    },[timer])
    function generateQuest(){
        return `${Math.floor(Math.random()*100)} + ${Math.floor(Math.random()*100)}`
    }
    generateQuest()
    return(
        <>
            <div id='questPage'>
                <header id='questHeader'>
                    <h3 id='points'>Points: {questNumber-1}</h3>
                    <h2>Quest {questNumber}</h2>
                    <h3 id='questTimer'>{formatTime(timer)}</h3>
                </header>
                <div id='mathQuest'>{quest}</div>
                <input id='userInput' placeholder='Answer' type='number'></input>
                <button id='confirmButton'>Confirm</button>
            </div>
        </>
    )
}
export default Quest;