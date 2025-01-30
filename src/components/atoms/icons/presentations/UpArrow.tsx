import { IconProps } from '../domain/models/IconProps'

const UpArrow = ({ height, width, color }: IconProps) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<mask
				id="mask0_432_3651"
				maskUnits="userSpaceOnUse"
				x="0"
				y="0"
				width="24"
				height="24"
			>
				<rect width="24" height="24" fill="#D9D9D9" />
			</mask>
			<g mask="url(#mask0_432_3651)">
				<path
					d="M7.4 15.3751L6 13.9751L12 7.9751L18 13.9751L16.6 15.3751L12 10.7751L7.4 15.3751Z"
					fill={color}
				/>
			</g>
		</svg>
	)
}

export default UpArrow
