import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className='app-wrap'>
     <header className='header'>
      <img src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/travel-logo-design-template-41cfc36d5668d1afeb99a5e973fdc358_screen.jpg?ts=1624985122' alt='ligo'/>
     </header>
    <nav className='nav'>
      <div>
        <a href='#'>Profile</a>
      </div>
      <div>
        <a href='#'>Messages</a>
      </div>
      <div>
        <a href='#'>News</a>
      </div>
      <div>
        <a href='#'>Music</a>
      </div>
      <div>
        <a href='#'>Settings</a>
      </div>
    </nav>
    <main className='content'>
      <div>
        <img src='https://preview.redd.it/v1fvin01ynv51.jpg?auto=webp&s=dc5339071eb58f278ba14aab615b24b8ddbfd2dc' alt='image'/>
      </div>
      <div>
        ava+description
      </div>
      <div>
        my posts
        <div>
          new post
        </div>
      </div>
      <div>
        <div>
          post 1
        </div>
        <div>
          post 2
        </div>
        <div>
          post 3
        </div>
      </div>
    </main>
    </div>
  )
};

export default App;
