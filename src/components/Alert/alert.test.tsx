import { describe, expect, vi } from 'vitest'
import { config } from 'react-transition-group'
import { fireEvent, render, screen } from '@/utils/test-utils'
import Alert from './alert.tsx'
import type { AlertProps } from './alert.tsx'

config.disabled = true

const testProps: AlertProps = {
  title: 'title',
  onClose: vi.fn()
}

const typeProps: AlertProps = {
  ...testProps,
  type: 'success',
  description: 'hello',
  closable: false
}
describe('test Alert Component', () => {
  it('should render the correct default Alert', () => {
    render(<Alert {...testProps} />)
    const element = screen.getByRole('alert')
    const closeElement = screen.getByRole('alert-close-button')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('alert-default')
    fireEvent.click(closeElement)
    expect(testProps.onClose).toHaveBeenCalled()
    expect(element).not.toBeInTheDocument()
  })
  it('should render the correct Alert based on different type and description', () => {
    render(<Alert {...typeProps} />)
    const element = screen.getByRole('alert')
    expect(element.querySelector('.bold-title')).toBeInTheDocument()
    expect(element).toHaveClass('alert-success')
    expect(screen.queryByText('hello')).toBeInTheDocument()
    expect(screen.queryByText('times')).not.toBeInTheDocument()
  })
})
