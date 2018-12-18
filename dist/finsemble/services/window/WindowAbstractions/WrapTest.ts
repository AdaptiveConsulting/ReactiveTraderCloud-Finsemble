import * as RouterClient from "../../../clients/routerClientInstance";

const BaseWindow = require("./BaseWindow");
const OpenfinWindow = require("./openfinWindowWrapper");

function testWraps() {
  let myWrap = BaseWindow.getInstance({ windowName: "wrap1" });
  myWrap.onReady(() => {
    console.log("Wrap is ready.");
    console.log("Has private get bounds", myWrap.hasOwnProperty('_getBounds'));
    console.log(myWrap instanceof OpenfinWindow)
  });
  RouterClient.publish("Finsemble.Component.State.wrap1", { state: "ready" });
}

export = testWraps;