import { CaretRight } from '@phosphor-icons/react'
import styles from './styles.module.css'
import { NavLink } from 'react-router-dom'

export function Home() {
  return (
    <div className={styles.Presentation}>
      <header>
        <div className={styles.header}>
          <img className={styles.logo} src=".\src\assets\logo.svg" alt="" />
          <NavLink to="/login">
            <img className={styles.user} src=".\src\assets\User.jpg" alt="" />
          </NavLink>
        </div>
        <div className={styles.line}></div>
      </header>
      <main>
        <img src=".\src\assets\logo.svg" alt="" />
        <strong>Automatização do processo de contagem de bactérias</strong>
        <NavLink to="/cadastro">
          <button>
            Criar uma conta <CaretRight size={20} />
          </button>
        </NavLink>
      </main>
      <footer>
        <strong>
          O que é o projeto <span>NASEON?</span>
        </strong>
        <p>
          O Naseon é um projeto de conclusão de curso, com a missão de
          simplificar e aprimorar o rastreamento de amostras e o controle de
          estufas de bactérias. Ao oferecer uma plataforma digital intuitiva,
          nosso objetivo é proporcionar aos pesquisadores, cientistas e
          profissionais da área um ambiente eficiente para monitorar, analisar e
          documentar suas investigações microbiológicas.
        </p>
      </footer>
    </div>
  )
}
