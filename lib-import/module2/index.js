import {getHtml as getMenuHtml} from "../js/menu";

function init (app) {
  app.get('/module2', (req, res) => {
    res.send(`
<html>
<head>
  <title>Module 2</title>
</head>
<body>
  <nav>
  ${getMenuHtml()}
  </nav>
  <h1>Module 2</h1>
  <div>Please fill data for module 2</div>
  <div>
    <div>
      <label>
        Name
        <input type="text" id="input-name">
      </label>
    </div>
    <div>
      <label>
        Age
        <input type="number" id="input-age">
      </label>
    </div>
    <div>
      <label>
        Phone
        <input type="tel" id="input-phone">
      </label>
    </div>
    <div>
      <button onclick="submit()">Submit</button>
    </div>
  </div>
  <script src="./js/index.js"></script>
</body>
</html>
`)
  })
}

export default {
  init
}
