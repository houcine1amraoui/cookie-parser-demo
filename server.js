import express from "express";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser());

// app.get("/", (req, res) => {
//   res.set("Set-Cookie", `sessionId=${123456}`);
//   res.send("Vanilla Cookie");
// });

// Route to set a cookie
app.get("/set-cookie", (req, res) => {
  res.cookie("sessionId", "123456", {
    // httpOnly: true, // Security: +prevents JS access
    // secure: true, // Set to true in HTTPS
    // expires: new Date(Date.now() + 60 * 1000), // 1 min from now
    // maxAge: 5 * 60 * 1000, // 5 mins
    sameSite: "strict",
    path: "/set-cookie", // will not sent to /protected
  });
  res.json({ message: "Cookie has been set!" });
});

// Route to check if cookie is received
app.get("/protected", (req, res) => {
  const sessionId = req.cookies.sessionId;
  if (sessionId) {
    res.json({ message: "Cookie received!", token });
  } else {
    res.status(403).json({ message: "No cookie found!" });
  }
});

const PORT = 1000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
