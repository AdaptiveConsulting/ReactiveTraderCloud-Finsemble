/*!
 * Copyright 2017 by ChartIQ, Inc.
 * All rights reserved.
 */

import {
  AppLauncherMenu,
  AutoArrange,
  BloombergStatus,
  Dashbar,
  DragHandle,
  FavoritesShell,
  FinsembleCSS,
  FinsembleProvider,
  MinimizeAll,
  NotificationControl,
  RevealAll,
  Search,
  ToolbarSection,
  ToolbarShell,
  WorkspaceManagementMenu,
} from "@finsemble/finsemble-core"
import * as React from "react"
import { createRoot } from "react-dom/client"

import { FileMenu } from "./FileMenu"

/**
 * Note: Set `FSBL.debug = true` if you need to reload the toolbar during development.
 * By default, it prevents the system from closing it so that users aren't lost without
 * a main window into finsemble functionality.
 */
const Toolbar = () => {
  return (
    <ToolbarShell
      hotkeyShow={["ctrl", "alt", "t"]}
      hotkeyHide={["ctrl", "alt", "h"]}
      hotkeyDock={["ctrl", "shift", "alt", "t"]}
      hotkeyMinimizeAll={["ctrl", "alt", "down"]}
      hotkeyBringWindowsToFront={["ctrl", "alt", "up"]}
      hotkeyRestartApplication={["ctrl", "alt", "shift", "r"]}
    >
      <ToolbarSection className="left">
        <DragHandle />
        <FileMenu />
        <Search openHotkey={["ctrl", "alt", "f"]} />
        <WorkspaceManagementMenu />
        {/* Uncomment the following to enable the AdvancedAppLauncherMenu*/}
        {/* <AdvancedAppLauncherMenu /> */}
        <AppLauncherMenu />
      </ToolbarSection>
      <ToolbarSection className="center" hideBelowWidth={115}>
        <div className="divider" />
        <FavoritesShell />
      </ToolbarSection>
      <BloombergStatus />
      <ToolbarSection className="right">
        <div className="divider"></div>
        <AutoArrange />
        <MinimizeAll />
        <RevealAll />
        <NotificationControl />
      </ToolbarSection>
      <div className="resize-area"></div>
    </ToolbarShell>
  )
}

const container = document.getElementsByTagName("div")[0]
createRoot(container).render(
  <FinsembleProvider>
    <FinsembleCSS />
    <Toolbar />
    <Dashbar />
  </FinsembleProvider>,
)
