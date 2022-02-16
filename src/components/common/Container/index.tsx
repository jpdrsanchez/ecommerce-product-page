import { ReactNode } from 'react'
import * as S from './styles'

type ContainerProps = {
  children: ReactNode
  className?: string
}

const Container = ({ children, className }: ContainerProps) => {
  return <S.Wrapper className={className}>{children}</S.Wrapper>
}

export default Container
