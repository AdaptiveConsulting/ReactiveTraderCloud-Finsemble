FSBL.addEventListener('onReady', function() {
	FSBL.Clients.DragAndDropClient.addReceivers({
		receivers: [
			{
				type: 'symbol',
				handler: function(err, response) {
					if (!err) {
						stxx.loadChart({ symbol: response.data['symbol'] })
					}
				},
			},
		],
	})
})
