import React from 'react';
import MainLayout from './components/MainLayout/MainLayout';
import MainContent from './components/MainContent/MainContent';

const App: React.FC = () => {
  return (
    <MainLayout>
      <MainContent/>
    </MainLayout>
  );
}

export default App;
