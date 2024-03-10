import express from "express";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.get("/cookie", async (req, res) => {
  const username = "mohamed-msila";
  res.cookie("session", username, {
    // domain: "www.example.com",
    // secure: true,
    // httpOnly: true,
    // path: "/login",
    // expires: new Date(Date.now() + 1000 * 60 * 5),
    // maxAge: 0,
  });
  res.send("Cookie Sent.");
});

const PORT = 2000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
