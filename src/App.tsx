import React from 'react';
import MainLayout from './components/MainLayout/MainLayout';
import MainContent from './components/MainContent/MainContent';
import { setupStore } from './store';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/Styles';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

const store = setupStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <MainLayout>
            <MainContent/>
          </MainLayout>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
