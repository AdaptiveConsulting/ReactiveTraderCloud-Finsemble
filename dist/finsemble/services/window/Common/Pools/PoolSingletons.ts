import { ObjectPool } from "./ObjectPool";
import { WindowPool } from "./WindowPool";

const GroupPoolSingleton = new ObjectPool("GroupPoolSingleton");
const MonitorPoolSingleton = new ObjectPool("MonitorPoolSingleton");
//Generic list of all windows that the windowService knows about. Contains finsemble windows
const WindowPoolSingleton = new ObjectPool("WindowPoolSingleton");

//Specific pool of dockable windows.
const DockingPoolSingleton = new WindowPool("DockingPoolSingleton");
export {
	GroupPoolSingleton,
	WindowPoolSingleton,
	MonitorPoolSingleton,
	DockingPoolSingleton
}