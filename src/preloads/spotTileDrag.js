FSBL.addEventListener('onReady', function() {
	const window = FSBL.Clients.WindowClient.getWindowIdentifier()
	const symbol = window.componentType
	FSBL.Clients.DragAndDropClient.setEmitters({
		emitters: [
			{
				type: 'symbol',
				data: symbol,
			},
		],
	})
})
