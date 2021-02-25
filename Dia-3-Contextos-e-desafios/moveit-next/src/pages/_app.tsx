
import React from 'react';
import {
  ChallengesProvider,
} from '../contexts/ChallengeContexts';

import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />;
    </ChallengesProvider>
  );
}

export default MyApp
