FSBL.addEventListener("onReady", function() {
	FSBL.Clients.DragAndDropClient.addReceivers({
		receivers: [
			{
				type: "symbol",
				handler: function(err, response) {
					console.log("resp", response);
					if (!err) {
						UIContext.changeSymbol({ symbol: response.data["symbol"] });
					}
				}
			}
		]
	});
});
