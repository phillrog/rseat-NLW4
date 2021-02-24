import styles from "../styles/components/Profile.module.css";

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/phillrog.png" alt="Phill" />
            <div>
                <strong>Phillipe Roger Souza</strong>
                <p>Level 1</p>
            </div>
        </div>
    );
}