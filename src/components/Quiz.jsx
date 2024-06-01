import React from 'react'
import Home from './Home'
import Quest from './Quest'
function Quiz(){

    const [content,setContent] = React.useState(<Home/>)
    function openQuests(){
        setContent(<Quest/>)
    }
    return(
        <>
            <h1 id='quizTitle'>Math Quiz</h1>
            <div id='quizQuest'>
                <div>{content}</div>
                <button id='playButton' onClick={openQuests}>Start Quiz</button>
            </div>            
        </>
)
}
export default Quiz;