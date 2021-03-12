(function() {
  const LINKER_DATA_TYPE = 'symbol'

  function runPreload() {
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
  }

  if (window.FSBL && FSBL.addEventListener) {
    FSBL.addEventListener('onReady', runPreload)
  } else {
    window.addEventListener('FSBLReady', runPreload)
  }
})()
