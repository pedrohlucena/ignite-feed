import { Post } from './Post'
import { Header } from "./components/Header"

import './global.css'

export function App() {

  return (
    <div>
      <Header />

      <Post
        author="Pedro H. Lucena"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nulla ex facilis magnam vel molestias, quod incidunt obcaecati aperiam iure. Aliquid enim itaque laudantium, corrupti libero provident cum? Sed, hic."
      />
      <Post
        author="Lucas Silva"
        content="Hoje eu almocei uma banana"
      />
    </div>
  )
}