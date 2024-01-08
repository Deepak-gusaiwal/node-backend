import express from "express";
// import cors from "cors";
const app = express();
// app.use(cors());
app.use(express.static("dist"));

app.get("/api/", (req, res) => {
  res.send("Hello this is the hello World 2");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
