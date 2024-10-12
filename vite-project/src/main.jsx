import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Class from './class.jsx'
//import './index.css'

const array=[
  {Team:"Team A",Played:10,Won:6,Drawn:2,Lost:2,Points:20},
  {Team:"Team B",Played:10,Won:5,Drawn:3,Lost:2,Points:18},
  {Team:"Team C",Played:10,Won:4,Drawn:4,Lost:2,Points:16}
];
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Class teams={array}/>
  </StrictMode>,
)
