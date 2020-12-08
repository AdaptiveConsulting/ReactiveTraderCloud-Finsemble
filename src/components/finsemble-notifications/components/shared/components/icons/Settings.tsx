import * as React from "react";
import SVGBase, { SVGProps } from "./SVGBase";

export default function SettingsIcon(props: SVGProps) {
	return (
		<SVGBase
			{...props}
			width="16"
			height="16"
			viewBox="0 0 16 16"
			opacity="0.4"
			fill="var(--notification-font-color)"
			d="M12.96 8.66L12.9533 8.67333C12.98 8.45333 13.0067 8.22667 13.0067 8C13.0067 7.77333 12.9867 7.56 12.96 7.34L12.9667 7.35333L14.5933 6.07333L12.9733 3.26L11.06 4.03333L11.0667 4.04C10.72 3.77333 10.34 3.54667 9.92666 3.37333H9.93333L9.62666 1.33333H6.38L6.08666 3.38H6.09333C5.68 3.55333 5.3 3.78 4.95333 4.04667L4.96 4.04L3.04 3.26L1.41333 6.07333L3.04 7.35333L3.04666 7.34C3.02 7.56 3 7.77333 3 8C3 8.22667 3.02 8.45333 3.05333 8.67333L3.04666 8.66L1.64666 9.76L1.42666 9.93333L3.04666 12.7333L4.96666 11.9667L4.95333 11.94C5.30666 12.2133 5.68666 12.44 6.10666 12.6133H6.08666L6.38666 14.6667H9.62C9.62 14.6667 9.64 14.5467 9.66 14.3867L9.91333 12.62H9.90666C10.32 12.4467 10.7067 12.22 11.06 11.9467L11.0467 11.9733L12.9667 12.74L14.5867 9.94C14.5867 9.94 14.4933 9.86 14.3667 9.76667L12.96 8.66V8.66ZM8 10.3333C6.71333 10.3333 5.66666 9.28667 5.66666 8C5.66666 6.71333 6.71333 5.66667 8 5.66667C9.28666 5.66667 10.3333 6.71333 10.3333 8C10.3333 9.28667 9.28666 10.3333 8 10.3333Z"
		/>
	);
}
