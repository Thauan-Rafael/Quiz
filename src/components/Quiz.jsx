import React from 'react'
import Home from './Home'
import Quest from './Quest'
function Quiz(){

    const [content,setContent] = React.useState(<Home openQuests={openQuests}/>)
    function openQuests(){setContent(<Quest openHome={openHome}/>)}
    function openHome(){setContent(<Home openQuests={openQuests}/>)}
    return(
        <>
            <h1 id='quizTitle'>RNG Math Quiz</h1>
            <div id='quizQuest'>
                <div id='quizContent'>{content}</div>
            </div>            
        </>
)
}
export default Quiz;