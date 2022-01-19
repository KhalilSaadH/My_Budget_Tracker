import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react';
import { Grid } from '@mui/material';

import { SpeechState, useSpeechContext } from "@speechly/react-client";
import { PushToTalkButton, PushToTalkButtonContainer } from '@speechly/react-ui';

// import   Main  from '../components/Main/Main';

// import   Details   from '../components/Details/Details.jsx';
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic';

const Main = dynamic(
  () => import('../components/Main/Main.jsx'),
  { ssr: false }
);
const Details = dynamic(
  () => import('../components/Details/Details.jsx'),
  { ssr: false }
);

const Home: NextPage = () => {
  
  const { speechState } = useSpeechContext();
  const mainRef = useRef<HTMLInputElement>(null);

  const executeScroll = () =>  window.scrollTo(0, 0);
  const executeScrollRef = () =>  {
    if (mainRef.current !== null)
      mainRef.current.scrollIntoView();
  };

  useEffect(() => {
    if (speechState === SpeechState.Recording) {
      executeScroll();
      console.log(mainRef);
    }
  }, [speechState]);

  return (
    <div className={styles.container}>
      <Head>
        <title>My budget tracker</title>
        <meta name="description" content="Track your expenses" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <main className={styles.main}> */}
        <h1 className={styles.title}>
           <a href="#">My budget Tracker</a>
        </h1>
        {/* <div className={styles.grid+' '+styles.card}>
          <Details title="Income" subheader="total"  />
        </div> */}
      <Grid ref={mainRef} className={styles.grid}>
        <Grid  item xs={12} sm={4} >
          <Main />
        </Grid>
        <Grid item xs={12} sm={4} >
          <Details title="Income" subheader="" />
        </Grid>
        <Grid item xs={12} sm={4} >
          <Details title="Expense" subheader="" />
        </Grid>
      </Grid>
        <PushToTalkButtonContainer>
          <PushToTalkButton />
        </PushToTalkButtonContainer>
     
        
       

        {/* <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a> */}

          
      {/* </main> */}

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
