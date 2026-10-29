import { ViteSSG } from 'vite-ssg'
import App from './App.jsx'
import './index.css'

export const createApp = ViteSSG(App)
