(function() {
  function runPreload() {
    FSBL.Clients.DragAndDropClient.addReceivers({
      receivers: [
        {
          type: 'symbol',
          handler: function(err, response) {
            if (!err && window.stxx) {
              window.stxx.loadChart({ symbol: response.data['symbol'] })
            }
          },
        },
      ],
    })
  }

  if (window.FSBL && FSBL.addEventListener) {
    FSBL.addEventListener('onReady', runPreload)
  } else {
    window.addEventListener('FSBLReady', runPreload)
  }
})()
