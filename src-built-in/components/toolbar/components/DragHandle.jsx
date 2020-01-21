import React from "react";

const DragHandle = () => {
	return (
		<span className="cq-drag finsemble-toolbar-drag-handle">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="4"
				height="18"
				viewBox="0 0 4 18"
			>
				<g fill="#444C5F" fill-rule="evenodd">
					<circle cx="2" cy="2" r="2" />
					<circle cx="2" cy="9" r="2" />
					<circle cx="2" cy="16" r="2" />
				</g>
			</svg>

			{/* look */}
		</span>
	);
};

export default DragHandle;
