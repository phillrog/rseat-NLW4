import { signIn, useSession } from 'next-auth/client';
import styles from '../styles/components/Login.module.css';
import { useForm } from "react-hook-form";
import { Alert } from 'react-bootstrap';

export function Login() {
    const [session, loading] = useSession();
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = formData => {
        signIn('github');
    }
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
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.boxUsername}>
                    <span className={styles.username}>
                        <input type="text"
                            placeholder="Digite seu username"
                            className={styles.username}
                            ref={register({ required: true, maxLength: 30 })}
                            name="username"
                            id="username"
                        />

                    </span>

                </div>
                <div className={styles.logar}>
                    <button type="submit"
                        className={styles.flecha}
                    >
                        <img src="icons/flecha.svg" />
                    </button>
                </div>
                <div className="erro">
                    {errors.username &&
                        // if errors then display alert
                        <Alert variant="danger">
                            {errors.username?.type === "required" && <p>Username é obrigatório</p>}
                            {errors.username?.type === "maxLength" && <p>S[o é permitidoum username de nomáximo 30 caracteres!</p>}
                        </Alert>
                    }
                </div>
            </form>
        </div>
    );
}