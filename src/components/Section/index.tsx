import { Cointainer, Title } from './styles'

export type Props = {
  title: string
  background: 'black' | 'gray'
  children: JSX.Element
}

const Section = ({ title, background, children }: Props) => (
  <Cointainer background={background}>
    <div className="container">
      <Title>{title}</Title>
      {children}
    </div>
  </Cointainer>
)

export default Section
