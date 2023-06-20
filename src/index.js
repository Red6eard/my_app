import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
  {id: 1, name: "Name 1"},
  {id: 2, name: "Name 2"},
  {id: 3, name: "Name 3"},
  {id: 4, name: "Name 4"},
  {id: 5, name: "Name 5"},
  {id: 6, name: "Name 6"}
];

let posts = [
  { id: 1, message: "Hello, World!", likesCount: 1000 },
  { id: 2, message: "How are you?", likesCount: 150 },
  { id: 3, message: "This is my first React project!", likesCount: 100 },
  { id: 4, message: "Yo!", likesCount: 1150 },
];

let messages = [
  {id: 1, message: "Hi!"},
  {id: 2, message: "How are you?"},
  {id: 3, message: "I'm ok!"},
  {id: 4, message: "Yooo!"},
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} messages={messages} dialogs={dialogs} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
