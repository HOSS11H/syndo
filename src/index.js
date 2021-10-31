import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ThemeContextProvider } from './store/theme-context';
import { AuthContextProvider } from './store/auth-context';
import { PostsContextProvider } from './store/posts-context';
import GlobalStyle from './styles/globalStyles';

const app = (
  <React.StrictMode>
      <BrowserRouter>
        <PostsContextProvider>
          <AuthContextProvider>
            <ThemeContextProvider>
              <GlobalStyle />
              <App />
            </ThemeContextProvider >
          </AuthContextProvider>
        </PostsContextProvider>
      </BrowserRouter>
  </React.StrictMode>
)

ReactDOM.render( app, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
