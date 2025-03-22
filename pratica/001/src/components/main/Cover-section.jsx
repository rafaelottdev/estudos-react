import styles from '../../assets/css/Cover.module.css'

function CoverSection() {
    return (
        <>
            <section className={styles.coverContainer}>
                <div className={styles.videoContainer}>
                    <figure>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/cnVwEdJwFLs?si=1oZMPkxqCMur_zYr" title="YouTube video player"></iframe>
                    </figure>
                </div>

                <article className={styles.coverText}>
                    <h2>PlayStation 2: Um Marco na História dos Videogames</h2>

                    <p>O PlayStation 2, lançado pela Sony em 2000, é um dos consoles de videogame mais icônicos e bem-sucedidos da história. Ele se destacou por sua poderosa capacidade gráfica para a época, suporte a DVDs e uma vasta biblioteca de jogos, com títulos populares como Grand Theft Auto: San Andreas, Final Fantasy X e God of War. O PS2 vendeu mais de 155 milhões de unidades, tornando-se o console mais vendido de todos os tempos. Seu legado persiste até hoje, sendo lembrado com carinho por jogadores em todo o mundo por sua influência e pelo impacto duradouro na cultura dos games.</p>
                </article>
            </section>
        </>
    )
}

export default CoverSection
