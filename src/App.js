import { Redirect, Route , Switch} from 'react-router-dom';
import styled from 'styled-components';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';


const AppWrapper = styled.div`
  background-color: ${props => props.theme.palette.background.default};
  min-height: 100vh;
`

function App() {

  const routes = (
      <Switch>
        <Route path='/' component={Home} exact />
        <Redirect to='/' />
      </Switch>
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
