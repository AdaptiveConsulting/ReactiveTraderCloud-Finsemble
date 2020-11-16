const LINKER_DATA_TYPE = 'symbol'
const interaval = 5

FSBL.addEventListener('onReady', function() {
	let symbol
	FSBL.Clients.LinkerClient.subscribe(LINKER_DATA_TYPE, data => {
		if (data !== symbol) {
			symbol = data
			configureChart(5, symbol)
		}
	})
})
