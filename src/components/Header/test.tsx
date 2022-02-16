import { render, screen } from '@testing-library/react'
import Header from '.'

describe('<Header />', () => {
  it('Renders children correctly', () => {
    render(
      <Header
        leftArea={
          <>
            <div data-testid="children">Left Child</div>
          </>
        }
        rightArea={
          <>
            <div data-testid="children">Right Child</div>
          </>
        }
      />
    )
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getAllByTestId('children')).toHaveLength(2)
    expect(screen.getByText(/left child/i)).toBeInTheDocument()
    expect(screen.getByText(/right child/i)).toBeInTheDocument()
  })

  it('Renders styles correctly', () => {
    render(<Header leftArea={<></>} rightArea={<></>} />)

    const header = screen.getByRole('banner')

    expect(header).toHaveStyleRule(
      'border-bottom',
      'var(--light-gray) 0.0625rem solid',
      {
        media: '(max-width: 35.9375em)'
      }
    )
    expect(header.firstChild).toHaveStyleRule(
      'background',
      'var(--light-gray)',
      {
        media: '(min-width: 35em)',
        modifier: '&::after'
      }
    )
  })
})
