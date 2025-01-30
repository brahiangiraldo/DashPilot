import { IconProps } from '../domain/models/IconProps'

const DownArrow = ({ height, width, color}: IconProps) => {
	return (
<svg width={width} height={ height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_432_3652" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
<rect width="24" height="24" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_432_3652)">
<path d="M12 15.3751L6 9.3751L7.4 7.9751L12 12.5751L16.6 7.9751L18 9.3751L12 15.3751Z" fill={color}/>
</g>
</svg>

	)
}

export default DownArrow;
