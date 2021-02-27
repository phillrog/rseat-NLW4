import styles from '../styles/components/Login.module.css';

export function Login() {
    return (
        <section className={styles.containerLogin}>
            <section >
                <div className={styles.simbolo}></div>
            </section>
            <section >
                <img src="/logo-full.svg" />
                <p>Bem  vindo</p>
            </section>
        </section>
    );
}