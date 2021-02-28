import { useSession } from 'next-auth/client';
import { api } from '../lib/fetcher';
import styles from '../styles/components/LeaderBoard.module.css';

export function LeaderBoard() {
    const [session] = useSession();
    let users = {};

    api.get(`/api/challenges`, {
    }).then((response) => {
        users = response;
    });

    return (
        <div className={styles.container}>
            <h1>Leaderboard</h1>
            <div className={styles.grid}>
                <span>
                    <strong>Posição</strong>
                </span>
                <span>
                    <strong>Usuário</strong>
                </span>
                <span>
                    <strong>Desafios</strong>
                </span>
                <span>
                    <strong>Experiência</strong>
                </span>
            </div>
            {
                <div className={styles.gridLinha}>
                    <span>
                        <strong>1</strong>
                    </span>
                    <span>
                        <img />
                        <p> Phillipe
                    <strong>Level 1</strong>
                        </p>
                    </span>
                    <span>
                        <strong>127</strong> desafios
                </span>
                    <span>
                        <strong>154000</strong> xp
                </span>
                </div>
            }
        </div>
    )
}