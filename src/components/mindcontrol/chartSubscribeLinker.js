(function() {
  const LINKER_DATA_TYPE = 'symbol'
  const interval = 5

  function runPreload() {
    let symbol
    FSBL.Clients.LinkerClient.subscribe(LINKER_DATA_TYPE, data => {
      if (data !== symbol) {
        symbol = data
        configureChart(interval, symbol)
      }
    })
  }

  if (window.FSBL && FSBL.addEventListener) {
    FSBL.addEventListener('onReady', runPreload)
  } else {
    window.addEventListener('FSBLReady', runPreload)
  }
})()
