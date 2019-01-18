FSBL.addEventListener('onReady', function () {
	FSBL.Clients.WindowClient.injectHeader({
		component: "windowTitleBar",
		bumpElements: {
			absoluteS: "0Positioned",
			fixed: "0Positioned",
			bumpBy: "0px"
		}, 
		bodyMarginTop: "5px",
		forceHeaderHeight: true
	})
});