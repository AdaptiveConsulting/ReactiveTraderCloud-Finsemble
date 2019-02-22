FSBL.addEventListener("onReady", function() {
	FSBL.Clients.DragAndDropClient.addReceivers({
		receivers: [
			{
				type: "symbol",
				handler: function(err, response) {
					if (!err) {
						console.log(response.data.symbol)
						configureChart(5, response.data.symbol)
					}
				}
			}
		]
	});
});
