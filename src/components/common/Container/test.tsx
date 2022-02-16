import { render, screen } from '@testing-library/react'
import Container from '.'

describe('<Container />', () => {
  it('Renders children correctly', () => {
    render(
      <Container>
        <div data-testid="children">Child 1</div>
        <div data-testid="children">Child 2</div>
      </Container>
    )

    expect(screen.getAllByTestId('children')).toHaveLength(2)
    expect(screen.getByText(/child 1/i)).toBeInTheDocument()
    expect(screen.getByText(/child 2/i)).toBeInTheDocument()
  })
})
