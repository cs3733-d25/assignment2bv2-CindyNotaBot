import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Hobby1} from './components/hobby1.tsx'
import {Title} from './components/title.tsx'
import {App} from './app'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Title />
      <App />
      <Hobby1 />
  </StrictMode>,
)
