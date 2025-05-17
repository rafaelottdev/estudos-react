import styles from "./Home.module.css"

import Tabs from "./Tabs/Tabs"
import Panel from "./Panel/Panel"

const Home = () => {
    return (
        <section className={styles.home_container}>
            <Tabs />

            <Panel />
        </section>
    )
}

export default Home
