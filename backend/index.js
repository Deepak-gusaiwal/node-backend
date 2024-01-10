import express from "express";
const app = express();


app.get("/api/", (req, res) => {
  res.send("Hello this is the hello World 2");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
