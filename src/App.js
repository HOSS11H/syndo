import { Route } from 'react-router';
import styled from 'styled-components';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';


const AppWrapper = styled.div`
  background-color: ${props => props.theme.palette.background.default};
  min-height: 100vh;
`

function App() {

  const routes = (
      <Route path='/' component={Home} />
    )

  return (
    <AppWrapper>
      <Layout>
        { routes }
      </Layout>
    </AppWrapper>
  );
}

export default App;
