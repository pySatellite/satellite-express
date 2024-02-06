const express = require('express')
const myCommon = require('pysatellite-common-fun')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const a = 1
  const b = 10
  let myJson = { "Hello": "World", "ADD": myCommon.add(a, b) }
  
  res.json(myJson)
})

app.get('/artists/:id', function (req, res) {
  console.log("id는 " + req.params.id + " 입니다")
  res.send("id : " + req.params.id)
})

// 여러개도 가능
app.get('/artists/:id/company/:company', function (req, res) {
  res.send("id : " + req.params.id + " 회사 : " + req.params.company)
})

app.get('/artists', function (req, res) {
  console.log("이름은 " + req.query.name + " 입니다")
  res.send("name : " + req.query.name)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


