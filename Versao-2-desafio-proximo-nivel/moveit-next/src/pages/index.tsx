import { ExperienceBar } from "../components/ExperienceBar";
import Head from 'next/head'
import { Profile } from "../components/Perfil";
import styles from '../styles/components/Home.module.css';
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ChallengeBox } from "../components/ChallengeBox";
import React from "react";
import { CountdownProvider } from "../contexts/CountdownContext";
import { GetServerSideProps } from 'next';
import { ChallengesProvider } from "../contexts/ChallengeContexts";
import { signIn, signOut, useSession } from 'next-auth/client';
import { Login } from "../components/Login";

import 'bootstrap/dist/css/bootstrap.min.css';

interface HomeProps {
  level: number,
  currentExperience: number,
  challengesCompleted: number
}

export default function Home(props: HomeProps) {
  const [session, loading] = useSession();

  return (
    <div>
      <>
        {!session && <>
          <Login />
          <button onClick={() => signIn('github')}>GitHub Login</button>
        </>}
        {session && <>
          Signed in as {session.user.email} <br />
          {session.user.image && <img src={session.user.image} style={{ borderRadius: '50%', width: '25px', height: '25px' }} />}
          <button onClick={() => signOut()}>Sign out</button>

          <ChallengesProvider level={props.level}
            currentExperience={props.currentExperience}
            challengesCompleted={props.challengesCompleted}
          >
            <div className={styles.container}>
              <Head>
                <title>Inicio | move.it</title>
              </Head>
              <ExperienceBar></ExperienceBar>
              <CountdownProvider>
                <section>
                  <div>
                    <Profile />
                    <CompletedChallenges />
                    <Countdown />
                  </div>
                  <div>
                    <ChallengeBox />
                  </div>
                </section>
              </CountdownProvider>
            </div>

          </ChallengesProvider>
        </>}
      </>
    </div>
  )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  };
}