import { NavLink } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import styles from './styles.module.css'

export function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.loginContainer}>
        <img className={styles.logo} src="\src\assets\logo.svg" alt="" />
        <form action="">
          <Input type="email" placeholder="E-mail" />
          <Input type="password" placeholder="Senha" />
          <span>
            Esqueceu a senha? <strong>Clique aqui!</strong>
          </span>
          <Button text="Entrar" />
          <span className={styles.criarConta}>
            Não possui uma conta?{' '}
            <NavLink to="/cadastro">
              <strong>Cadastre-se!</strong>
            </NavLink>
          </span>
        </form>
      </div>
      <img className={styles.imgRight} src="\src\assets\cientista.jpg" alt="" />
    </div>
  )
}
