import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Tran2b} from './tran2b.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Tran2b />
  </StrictMode>,
)
