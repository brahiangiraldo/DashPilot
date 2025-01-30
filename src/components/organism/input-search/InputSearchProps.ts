export interface InputSearchProps {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  iconPosition?: 'left' | 'right'
  placeholder?: string
  handleEnter?: () => void
  handleClear: () => void
}
