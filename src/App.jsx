import { Post } from './Post'
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import './global.css'
import styles from './App.module.css'

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Pedro H. Lucena"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nulla ex facilis magnam vel molestias, quod incidunt obcaecati aperiam iure. Aliquid enim itaque laudantium, corrupti libero provident cum? Sed, hic."
          />
          <Post
            author="Lucas Silva"
            content="Hoje eu almocei uma banana"
          />
        </main>
      </div>
    </div>
  )
}