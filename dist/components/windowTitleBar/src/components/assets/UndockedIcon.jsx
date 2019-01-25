import React from "react"

export const UndockedIcon = shade => {
	const hex = shade === "dark" ? "#d3d3d3" : "#FFF";
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="13"
			height="12"
			viewBox="0 0 13 12"
		>
			<g fill="none" fillRule="nonzero">
				<path stroke={hex} d="M6.5.5h6v6h-6zM.5 5.5h6v6h-6z" />
				<path fill={hex} stroke="#3D4455" d="M2.5 2.5h8v8h-8z" />
			</g>
		</svg>
	);
};