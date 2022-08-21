import React from 'react';
import { Provider } from 'react-redux';
import Header from './components/Header';
import { setupStore } from './store';

const store = setupStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header/>
      </Provider>
    </div>
  );
}

export default App;
