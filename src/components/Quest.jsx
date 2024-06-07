import React from 'react'
import {toast} from 'react-toastify'
function Quest(props){
    const [questNumber,setQuestNumber] = React.useState(1);
    const [timer, setTimer] = React.useState(15)
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
        else{
            props.openHome()
            toast(`Answer: ${eval(quest).toFixed(2)}, Points: ${questNumber-1}`, {position: "bottom-right",autoClose: 5000,hideProgressBar: true,
                closeOnClick: true,pauseOnHover: true,theme: "light",closeButton:false,
            });
        }
    },[timer])
    function generateQuest(){
        function generateNumber(){return `${Math.ceil(Math.random()*10)}`}
        function generateOperation(){
            let operatorNumber = Math.floor(Math.random()*4)
            switch (operatorNumber) {
                case 0: return '+'
                case 1: return '-'
                case 2: return '*'
                case 3: return '/'
                default: break;
            }
        }
        let questItens = [generateNumber(),generateOperation(),generateNumber()]
        let questAdditions = Math.floor(questNumber/5)
        if(questAdditions>=3){questAdditions=3;}
        while(questAdditions > 0){
            questItens.push(generateOperation())
            questItens.push(generateNumber())
            questAdditions--;
        }
        return `${questItens.join(' ')}`; 
    }
    const formatQuest = (mathQuest) => {return mathQuest.replace('*','x')}
    function enterValues(){
        if(document.getElementById('userInput').value != undefined && eval(quest)!=undefined){
            let answer = parseFloat(document.getElementById('userInput').value).toFixed(2)
            let result = eval(quest).toFixed(2);
            let difference = answer - result;
            if(difference < 0.1 && difference > -0.1){
                setQuestNumber((prevQuestNumber) => prevQuestNumber+1)
                setQuest(generateQuest())
                document.getElementById('userInput').value='';
                setTimer(15)
            }
        }
    }
     React.useEffect(() => {
        const pressEnter = (event) => {
            if (event.key === 'Enter') {
                enterValues();
            }
        };
        window.addEventListener('keydown', pressEnter);
        return () => {
            window.removeEventListener('keydown', pressEnter);
        };
    }, [enterValues]);
    return(
        <>
            <div id='questPage'>
                <header id='questHeader'>
                    <h3 id='points'>Points: {questNumber-1}</h3>
                    <h2>Quest {questNumber}</h2>
                    <h3 id='questTimer'>{formatTime(timer)}</h3>
                </header>
                <div id='mathQuest'>{formatQuest(quest)}</div>
                <input id='userInput' placeholder='Answer' type='number' autoFocus={true}></input>
                <button id='confirmButton' onClick={enterValues}>Confirm</button>
            </div>
        </>
    )
}
export default Quest;