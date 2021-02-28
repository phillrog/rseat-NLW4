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
import { useState } from "react";
import { LeaderBoard } from "../components/LeaderBoard";

interface HomeProps {
  level: number,
  currentExperience: number,
  challengesCompleted: number
}

export default function Home(props: HomeProps) {
  const [session, loading] = useSession();
  const [isToShowRanking, setIsToShowRanking] = useState(false);

  function mostrarRanking() {
    setIsToShowRanking(true)
  }

  function mostrarHome() {
    setIsToShowRanking(false)
  }

  return (
    <div>

      <>
        {!session && <>
          <Login />
        </>}
        {session && <>
          <div className={styles.logado}>
            <p>Logado como {session.user.email}<button onClick={() => signOut()}>Sair</button></p>
          </div>
          <ChallengesProvider level={props.level}
            currentExperience={props.currentExperience}
            challengesCompleted={props.challengesCompleted}
          >
            <div className={styles.container}>
              <Head>
                <title>Inicio | move.it</title>
              </Head>
              <div style={{
                position: 'fixed',
                width: '112px',
                height: '100%',
                left: '0px',
                top: '0px',
                backgroundColor: '#f7f7f8'
              }}>
                <p><img style={{
                  position: 'absolute',
                  left: '28.57%',
                  right: '28.57%',
                  top: '3.9%',
                  bottom: '90.98%'
                }}
                  src="icons/logo-min.svg" onClick={() => mostrarRanking()} /> </p>

                <div style={{
                  position: 'absolute',
                  width: '72px',
                  height: '56px',
                  left: '0px',
                  top: '422px',
                  cursor: 'pointer',
                  textAlign: 'end',
                }}>
                  <img src="icons/awards.svg" onClick={() => mostrarRanking()} />
                </div>
                <div style={{
                  position: 'absolute',
                  width: '72px',
                  height: '56px',
                  left: '0px',
                  top: '350px',
                  textAlign: 'end',
                  cursor: 'pointer'
                }}>
                  <img src="icons/casa.svg" />
                </div>
              </div>
              {!isToShowRanking && (
                <>
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
                </>
              )}
              {isToShowRanking &&
                <LeaderBoard />
              }
            </div>

          </ChallengesProvider>
        </>}
      </>
    </div >
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