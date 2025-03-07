import express from "express";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser());

// app.get("/", (req, res) => {
//   const username = "mohamed-msila";
//   res.set("Set-Cookie", `session=${username}`);
//   res.send("Vanilla Cookie");
// });

// Route to set a cookie
app.get("/set-cookie", (req, res) => {
  res.cookie("userToken", "123456", {
    httpOnly: true, // Security: prevents JS access
    secure: false, // Set to true in HTTPS
  });
  res.json({ message: "Cookie has been set!" });
});

// Route to check if cookie is received
app.get("/protected", (req, res) => {
  const token = req.cookies.userToken;
  if (token) {
    res.json({ message: "Cookie received!", token });
  } else {
    res.status(403).json({ message: "No cookie found!" });
  }
});

const PORT = 1000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
