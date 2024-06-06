import React from "react";
function Home(props){
    const startingGame = (event) => {if(event.key === 'Enter'){props.openQuests();}}
    React.useEffect(() => {
        window.addEventListener('keydown', startingGame);
        return () => {window.removeEventListener('keydown', startingGame);};
    }, []);
    return(
        <>
            <div id="homeContent">
                <h2 id="homeTitle">Welcome to the Game</h2>
                <li>Infinite questions</li>
                <li>Random generated numbers</li>
                <li>15 seconds to guess</li>
                <li>Earn 1 point per correct answer</li>
                <button id='playButton' onClick={props.openQuests}>Start Quiz</button>
            </div>
        </>
    )
}
export default Home;