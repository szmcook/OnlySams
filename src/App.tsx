import styled from 'styled-components';
import viteLogo from '/vite.svg'

function App() {
  return (
    <>
      <AppBackground green_logo="#53ad6f" background_color="#171717">
            <IntroText>
                Welcome to OnlySams
            </IntroText>
            <Logo src={ 'https://photos.app.goo.gl/ZN7dT22QaJYbUqcu7' } />
        </AppBackground>
    </>
  )
}


interface AppBackgroundProps {
  green_logo?: string;
  background_color?: string;
}

const IntroText = styled.h1`
  color: var(--green_logo);
  font-family: "Fira Code", monospace;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
`;

const Logo = styled.img`
  width: 150px;
  height: 150px;
`

const AppBackground = styled.div<AppBackgroundProps>`
  --green_logo: ${props => props.green_logo};
  --background-color: ${props => props.background_color};

  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: var(--background-color);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default App
