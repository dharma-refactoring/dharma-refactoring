require("material-components-web/dist/material-components-web.js")
require("material-components-web/dist/material-components-web.css")
require("../css/style.scss")

const { Elm } = require("../src/Main.elm")

const app = Elm.Main.init({
  node: document.getElementById("elm"),
})
