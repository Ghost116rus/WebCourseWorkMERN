import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './store/UserStore';
import BookStore from './store/BookStore';

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));



if (localStorage.getItem("userRole") === null) {
    localStorage.setItem('userRole', 1);
}

root.render(
  <Context.Provider value={{
    user: new UserStore(),
    book: new BookStore()
  }}>
      <App/>
  </Context.Provider>

);

