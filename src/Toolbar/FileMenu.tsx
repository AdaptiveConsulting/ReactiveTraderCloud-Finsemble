import React from "react";
import {
	Preferences,
	SystemLog,
	CentralLogger,
	Documentation,
	Restart,
	Reset,
	Quit,
	Menu,
} from "@finsemble/finsemble-core";

export const FileMenu = () => (
	<Menu
		id="fileMenu"
		title={
			<img
				className="finsemble-toolbar-brand-logo"
				src="../../assets/img/adaptive-logo.png"
			/>
		}
	>
		<Preferences />
		<SystemLog />
		<CentralLogger />
		<Documentation />
		<Restart />
		<Reset />
		<Quit />
		{/* To add your own items to the menu, import MenuItem from
		 * "@finsemble/finsemble-ui/react/components" and add the following:
		 * <MenuItem onClick={...}>Your Item</MenuItem>
		 */}
	</Menu>
);
