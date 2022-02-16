import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  @media (min-width: 36em) {
    padding-right: 1.875rem;
    padding-left: 1.875rem;
    max-width: 33.75rem;
  }

  @media (min-width: 48em) {
    max-width: 45rem;
  }

  @media (min-width: 62em) {
    max-width: 60rem;
  }

  @media (min-width: 75em) {
    max-width: 73.125rem;
  }
`
