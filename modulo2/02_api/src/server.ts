import express from 'express';

const app = express();
const port = 5000;
const host = 'localhost';

app.get("/", (req, res) => {
  console.log("Teste")
  return res.send("Teste2")
})
app.listen(port, () => {
  console.log(`Server online em http://${host}:${port}/`);
})