import {getHtml as getMenuHtml} from "../js/menu";

function init (app) {
  app.get('/module1', (req, res) => {
    res.send(`
<html>
<head>
  <title>Module 1</title>
</head>
<body>
  <nav>
  ${getMenuHtml()}
  </nav>
  <h1>Module 1</h1>
  <div id="slider"></div>
  <script src="./js/index.js"></script>
</body>
</html>
`)
  })
}

export default {
  init
}
