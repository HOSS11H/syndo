import { Redirect, Route , Switch} from 'react-router-dom';
import styled from 'styled-components';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Posts from './pages/Posts/Posts';
import SinglePost from './pages/SinglePost/SinglePost';


const AppWrapper = styled.div`
  background-color: ${props => props.theme.palette.background.default};
  min-height: 100vh;
`

function App() {

  const routes = (
      <Switch>
        <Route path='/posts/:postId' component={SinglePost} />
        <Route path='/posts' component={Posts} exact />
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
