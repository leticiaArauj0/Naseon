import './styles.module.css'

interface ButtonProps {
  text: string
}

export function Button({ text }: ButtonProps) {
  return <button>{text}</button>
}
