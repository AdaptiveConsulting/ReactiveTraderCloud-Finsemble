# Workspace Internal Technicals

## How Workspaces are Saved

Note, the JSON structure of workspaces is not a published specification. We anticipate refactoring workspaces in an upcoming release. When the refactoring is complete, the JSON spec will be published and maintained. If you choose to work directly with the JSON, please be aware that you may need to refactor your code at a future date.

This is the basic structure of a Workspace

```
{
	"name": "Workspace Name",
	"windows": [],
	"groups": {}
}
```

All saved workspace information is stored in storage using the topic: `finsemble.workspace`
They key `fsblWorkspaces` contains a list of workspaces. So if we had "Workspace1" and "Workspace2" this would have

```
[{
	"name": "Workspace1",
	"windows": [],
	"groups": {}
},
{
	"name": "Workspace1",
	"windows": [],
	"groups": {}
}]
```

There is also storage key for each workspace with their workspace name, that contains the workspace data for that workspace. So the `Workspace1` key would contain:

```
{
	"name": "Workspace1",
	"windows": [],
	"groups": {}
}
```

Note: This data is currently duplicated and is likely to change in the future.

### Windows

In the workspace data above, the `windows` list is just a list of Window Names. So if Workspace1 contained two windows "Welcome Component-1" and "Welcome Component-2", it would have:

```
{
	"name": "Workspace1",
	"windows": ["Welcome Component-1", "Welcome Component-2"],
	"groups": {}
}
```

A window descriptor for each of those Windows is stored with the key "Workspace Name" + "Window Name". So the descriptor for "Welcome Component-1" in "Workspace1" would be stored with the key `Workspace1Welcome Component-1`. Currently Finsemble stores almost every property on our internal representation of a Window to the descriptor. We are working on identifying and storing the minimum required.

### Groups

When windows are snapped or grouped together, that information is stored in the `groups` object. Every window can be a part of upto two groups. When windows are snapped, they join a group with the `isMovable` property `false`. When they are Grouped, they are part of a group with the `isMovable` property `true`. When two windows are grouped they are part of both a movable and a non movable group. So if in our above Workspace if the two Welcome Component's were grouped, the workspace would look like this:

```
{
	"name": "Workspace1",
	"windows": ["Welcome Component-1", "Welcome Component-2"],
	"groups": {
		"6533ebe7-8b06-4105-a317-1add95da904c": {
			"windowNames": ["Welcome Component-1", "Welcome Component-2"],
			"isMovable": true
		},
		"7be79940-9213-4094-b363-44f97cd1c7e3": {
			"windowNames": ["Welcome Component-1", "Welcome Component-2"],
			"isMovable": false
		}
	}
}
```

The names of groups are randomly generated GUIDs. The only requirement is they be unique.

## Exporting and Importing

### Data Format

The format for an exported workspace looks like this

```
{
	"name": "Workspace1",
	"windows": ["window1", "window2"],
	"groups": {},
	"workspaceDefinitionFlag": true,
	"windowData": [
		{
			... descriptor for window 1 ...
		},
		{
			... descriptor for window 2 ...
		}
	]
}
```

the `workspaceDefinitionFlag` tells the workspaceService that this is a workspace. Alternately setting, `templateDefinitionFlag` to true would tell Finsemble that this is a workspace Template. Templates are currently not supported.

### File Format
When Workspaces are exported to a file, the file is formatted as:
```
{
	"workspaceTemplates": {
		"Workspace1": {
			"name": "Workspace1",
			"windows": [],
			"groups": {},
			"workspaceDefinitionFlag": true,
			"windowData": []
		},
		"Workspace2": {
			"name": "Workspace2",
			"windows": [],
			"groups": {},
			"workspaceDefinitionFlag": true,
			"windowData": []
		}
	}
}
```
