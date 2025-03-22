import GameList from "./GameList"

import styles from '../../assets/css/Tape.module.css'

function Tape() {
    const gamesObj = {
        game1: 'God Of War',
        game2: 'God Of War 2',
        game3: 'Resident Evil 4',
        game4: 'Grand Theft Auto: San Andreas',
        game5: 'Tony Hawk',
        game6: 'Need For Speed',
        game7: 'Tekken',
    }

    return (
        <>
            <section className={styles.tapeContainer}>
                <ul className={styles.listContainer}>
                    <GameList 
                    game1={gamesObj.game1} 
                    game2={gamesObj.game2} 
                    game3={gamesObj.game3} 
                    game4={gamesObj.game4} 
                    game5={gamesObj.game5} 
                    game6={gamesObj.game6} 
                    game7={gamesObj.game7} />
                </ul>
            </section>
        </>
    )
}

export default Tape
