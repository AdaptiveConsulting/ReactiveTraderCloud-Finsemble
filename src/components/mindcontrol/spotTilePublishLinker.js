const LINKER_DATA_TYPE = 'symbol'

FSBL.addEventListener('onReady', function() {
	const finWindow = FSBL.Clients.WindowClient.getWindowIdentifier()
	const symbol = finWindow.componentType
	setInterval(
		() =>
			FSBL.Clients.LinkerClient.publish(
				{
					dataType: LINKER_DATA_TYPE,
					data: symbol,
				},
				() => console.log('sent', symbol),
			),
		2000,
	)
})
