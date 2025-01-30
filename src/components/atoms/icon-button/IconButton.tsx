import { IconFactory } from '../icons/domain/use-cases/factoryIcon'
import { IconButtonProps } from './IconButtonProps'
import './icon-button.css'

const IconButton = ({ icon, onClick, iconColor }: IconButtonProps) => {
  return (
    <div className="icon-button" onClick={onClick}>
      <IconFactory
        color={iconColor ?? 'var(--icon-button)'}
        height={20}
        width={20}
        name={icon}
      />
    </div>
  )
}

export default IconButton
