import React from "react";
function Home(props){
    return(
        <>
            <h2 id="homeTitle">Welcome to the Game !</h2>
            <li>Infinite questions</li>
            <li>Random generated numbers</li>
            <li>10 seconds to guess</li>
            <li>Earn 1 point per correct answer</li>
            <button id='playButton' onClick={props.openQuests}>Start Quiz</button>
        </>
    )
}
export default Home;