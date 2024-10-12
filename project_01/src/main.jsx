// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'


// function MyApp() {
  
//     const a='Kumail';
//     return (
//       <h1>Hello React {a}</h1>
//     )
//   }

// const AnotherApp=(
//     <p>hello kumail </p>
// )

const test=' kumail';

const ReactElement=React.createElement(
    'a',
    {href:'https://google.com',
    target:'_blank'
    },
    'Click me visit Google',
    test


)
  
ReactDOM.createRoot(document.getElementById('root')).render(
  
    //MyApp()  or <MyApp />
   // AnotherApp
    ReactElement
)
