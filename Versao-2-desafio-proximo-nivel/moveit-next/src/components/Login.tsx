import styles from '../styles/components/Login.module.css';

export function Login() {
    return (
        <div className={styles.container}>
            <div className={styles.marcadagua}>
                <div className={styles.linha1}></div>
                <div className={styles.linha2}></div>
                <div className={styles.linha3}></div>
            </div>
            <div className={styles.logo}>

                <img src="icons/logo.svg" />

            </div>
            <span className={styles.bemvindo}>Bem-vindo</span>
            <div className={styles.github}>
                <img src="icons/github.svg" />
                <span className={styles.facalogin}>Faça login com seu Github
            para começar</span>
            </div>
            <div className={styles.boxUsername}>
                <span className={styles.username}>
                    <input type="text" placeholder="Digite seu username" className={styles.username} />
                </span>
            </div>
            <div className={styles.logar}>
                <button type="button" className={styles.flecha}>
                    <img src="icons/flecha.svg" />
                </button>
            </div>
        </div>
    );
}