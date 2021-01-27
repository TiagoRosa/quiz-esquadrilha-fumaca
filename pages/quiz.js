import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

export const QuizContainer = styled.div`
width: 100%;
max-width: 350px;
padding-top: 45px;
margin: auto 10%;
@media screen and (max-width: 500px) {
margin: auto;
padding: 15px;
}
`;

export default function QuizPage() {
  const router = useRouter();
  const { name } = router.query;

  return (
    <>
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <QuizLogo />
          <Widget>
            <Widget.Content>
              <h1>
                Seja Bem Vindo
                {' '}
                {name}
              </h1>
              <p>lorem ipsum dolor sit amet...</p>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/TiagoRosa" />
      </QuizBackground>
    </>
  );
}
