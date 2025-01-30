import { IconsType } from '../icons/domain/models/IconsType';

export interface IconButtonProps {
  icon: IconsType
  onClick: (event: React.MouseEvent<HTMLElement>) => void
  iconColor?: string
}
