import React from "react";
import ReactDOM from "react-dom";

const logoStyles = {
	alignContent: "center",
	whiteSpace: "nowrap",
	position: "relative",
    width: "24px",
    padding: "0px 6px 2px 6px",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "content-box !important"
};

export const AdaptiveLogo = () => (
	<div style={logoStyles}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="14"
			height="15"
			viewBox="0 0 15 17"
		>
			<g fill="#FFF" fillRule="evenodd">
				<path d="M.047 3.029h3.146v12.88H.047zM3.812 4.065h3.145v12.879H3.812zM7.474 2.432h3.145v12.879H7.474zM11.136.153h3.146v12.879h-3.146z" />
			</g>
		</svg>
	</div>
);
