import styled from 'styled-components';
import sam1 from './assets/sam1.jpg';

function App() {
  return (
    <AppBackground green_logo="#53ad6f" background_color="#171717">
      <IntroText>
        OnlySams
      </IntroText>
    </AppBackground>
  )
}


interface AppBackgroundProps {
  green_logo?: string;
  background_color?: string;
}

const IntroText = styled.h1`
  color: var(--green_logo);
  font-family: "Fira Code", monospace;
  font-size: 70px;
  font-weight: <weight>;
  font-style: normal;
`;

const Logo = styled.img`
  height: 100%;
  width: 50%;
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
