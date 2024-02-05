import { NavLink } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import styles from './styles.module.css'

export function Cadastro() {
  return (
    <div className={styles.container}>
      <div className={styles.cadastroContainer}>
        <img className={styles.logo} src="\src\assets\logo.svg" alt="" />
        <form action="">
          <Input type="text" placeholder="Nome de usuário" />
          <Input type="email" placeholder="E-mail" />
          <Input type="password" placeholder="Senha" />
          <Button text="Cadastrar" />

          <span className={styles.criarConta}>
            Já possui uma conta?
            <NavLink to="/login">
              <strong> Clique aqui!</strong>
            </NavLink>
          </span>
        </form>
      </div>
      <img
        className={styles.imgRight}
        src="\src\assets\cientista2.jpg"
        alt=""
      />
    </div>
  )
}
