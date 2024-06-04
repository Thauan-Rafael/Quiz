import React from 'react'
function Quest(){
    const [questNumber,setQuestNumber] = React.useState(1);
    const [timer, setTimer] = React.useState(10)
    const [quest, setQuest] = React.useState('')
    React.useEffect(() => {
        setQuest(generateQuest());
    }, []);
    const formatTime = (time) => {return time < 10 ? `0${time}` : time};
    React.useEffect(() => {
        if(timer > 0){
            const countdown = setTimeout(() => {setTimer(timer - 1)}, 1000);
            return () => clearTimeout(countdown);
        }
    },[timer])
    function generateQuest(){
        function generateNumber(){return `${Math.floor(Math.random()*100)+1}`}
        function generateOperation(){
            let operatorNumber = Math.floor(Math.random()*4)
            switch (operatorNumber) {
                case 0:
                    return '+'
                    break;
                case 1:
                    return '-'
                    break;
                case 2:
                    return '*'
                    break;
                case 3:
                    return '/'
                    break;
                default:
                    break;
            }
        }
        let operation = `${generateNumber()} ${generateOperation()} ${generateNumber()}`; 
        return operation; 
    }
    function enterValues(){
        let answer = document.getElementById('userInput').value
        let result = eval(quest);
        if(answer == result){
            setQuestNumber(2)
            console.log("It's right")
        }
    }
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
                <button id='confirmButton' onClick={enterValues}>Confirm</button>
            </div>
        </>
    )
}
export default Quest;