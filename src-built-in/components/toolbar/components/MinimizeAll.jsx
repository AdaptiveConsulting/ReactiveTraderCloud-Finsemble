import React from "react";
import { FinsembleButton } from "@chartiq/finsemble-react-controls";
import MinimizeAllIcon from "./assets/minimize-all-icon"

export default class MinimizeAll extends React.Component {
	constructor(props) {
		super(props);
	}
	MinimizeAll() {
		FSBL.Clients.WorkspaceClient.minimizeAll();
	}
	render() {
		//console.log('rendero')
		let tooltip = "Minimize Workspace";
		let buttonClass = "ff-minimize-all finsemble-toolbar-button-icon";
		return (<FinsembleButton className={this.props.classes + " icon-only"} buttonType={["Toolbar"]} title={tooltip} onClick={this.MinimizeAll}>
			<MinimizeAllIcon/>
		</FinsembleButton>);
	}
}