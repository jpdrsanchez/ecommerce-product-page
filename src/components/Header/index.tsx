import { ReactNode } from 'react'

import * as S from './styles'

type HeaderProps = {
  leftArea: ReactNode
  rightArea: ReactNode
}

const Header = ({ leftArea, rightArea }: HeaderProps) => {
  return (
    <S.Header>
      <S.HeaderContainer>
        <S.HeaderLeft>{leftArea}</S.HeaderLeft>
        <S.HeaderRight>{rightArea}</S.HeaderRight>
      </S.HeaderContainer>
    </S.Header>
  )
}

export default Header
