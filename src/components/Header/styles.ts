import Container from 'components/common/Container'
import styled from 'styled-components'

export const Header = styled.header`
  position: relative;

  @media (max-width: 35.9375em) {
    border-bottom: var(--light-gray) 0.0625rem solid;
  }
`

export const HeaderContainer = styled(Container)`
  padding-top: 1.25rem;
  padding-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &::after {
    @media (min-width: 35em) {
      content: '';
      display: block;
      width: calc(100% - 3.75rem);
      height: 0.0625rem;
      background: var(--light-gray);
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  padding-top: 1.25rem;
  padding-bottom: 1.5rem;
`

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (min-width: 48em) {
    gap: 3.625rem;
  }
`

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1.375rem;

  @media (min-width: 48em) {
    gap: 2.875rem;
  }
`
