import {
	CentralLogger,
	Documentation,
	Menu,
	Preferences,
	Quit,
	Reset,
	Restart,
	SystemLog,
} from '@finsemble/finsemble-core'
import React from 'react'

export const FileMenu = () => (
	<Menu
		id="fileMenu"
		title={
			<img className="finsemble-toolbar-brand-logo" src="../../assets/img/adaptive-logo.png" />
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
)
