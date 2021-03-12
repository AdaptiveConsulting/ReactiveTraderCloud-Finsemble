(function() {
  function runPreload() {
    const window = FSBL.Clients.WindowClient.getWindowIdentifier()
    const symbol = window.componentType?.split(' ')[0]

    FSBL.Clients.DragAndDropClient.setEmitters({
      emitters: [
        {
          type: 'symbol',
          data: symbol,
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
