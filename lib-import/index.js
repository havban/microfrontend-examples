import express from 'express'

import module1 from './module1'
import module2 from './module2'
import {getHtml as getMenuHtml} from './js/menu.js'

const app = express()
const port = 10080

app.get('/', (req, res) => {
  res.send(`
<html>
<head>
  <title>Home page</title>
</head>
<body>
  <nav>
  ${getMenuHtml()}
  </nav>
  <h1>Home Page</h1>
  <div>This is a home page</div>
</body>
</html>
`)
})

module2.init(app)
module1.init(app)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
