import { ButtonContainer, ButtonLink } from './styles'

export type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
  variant?: 'primary' | 'secondary'
}

const Button = ({ type, children, title, onClick, to, variant }: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer
        variant={variant}
        onClick={onClick}
        title={title}
        type="button"
      >
        {children}
      </ButtonContainer>
    )
  }

  return (
    <ButtonLink to={to as string} title={title}>
      {children}
    </ButtonLink>
  )
}

export default Button
