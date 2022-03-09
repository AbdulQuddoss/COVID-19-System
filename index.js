const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const session = require("express-session");
const http = require("http");
const path = require("path")
 const bodyParser = require('body-parser')
 const cookieParser = require('cookie-parser')
const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["get", "post"],
  credentials: true
}));

 app.use(cookieParser())
 app.use(bodyParser.urlencoded({extended: true}))
//http.createServer(app);

const db = mysql.createConnection({
  user: "root",
  password: "",
  host: "localhost",
  database: "registration",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("db connected");
});

app.use(
  session({
    secret: "secret key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    }
  })
);

app.listen(PORT, () => {
  console.log("server run on 3001");
});

//create table of contact
app.get("/contactTableCreated", (req, res) => {
  let q =
    "CREATE TABLE contact (id int AUTO_INCREMENT, userID int, username VARCHAR(255), email VARCHAR(255), subject VARCHAR(255), message VARCHAR(255), PRIMARY KEY (id),  FOREIGN KEY (userID) REFERENCES signup(signupID))";
  db.query(q, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("table are created");
  });
});

// signin checking
app.post("/check", (req, res) => {
  const userName = req.body.userName;
  const password = req.body.password;
  sass = req.session;
  
  db.query(
    "SELECT * FROM signup WHERE userName = ? AND password = ?",
    [userName, password],
    (err, result) => {
      if (err) throw err;

      if (result.length > 0) {
        sass.logIn = true;
        sass.userName = userName;
        sass.password = password;
        console.log(sass.userName, sass.password);
        res.send({ msg: "You successfully signIn", cond: true });
        //console.log("user exist");
      } else {
        res.send({ msg: "go signUp page and register your self!", cond: false });
        //sconsole.log("go signUp page and register your self!");
      }
    }
  );
});

// signup inserting and duplication
app.post("/register", (req, res) => {
  const fname = req.body.Fname;
  const lname = req.body.Lname;
  const uname = req.body.Uname;
  const password = req.body.password;
  sass = req.session;

  db.query(
    "SELECT * FROM signup WHERE userName = ?",
    [uname],
    (err, result) => {
      if (err) throw err;
      if (result.length > 0) {
        console.log(result);
        console.log("user already exist!");
        res.send({ message: "User already exist!", cond: false });
      } else {
        db.query(
          "INSERT INTO `signup` (`firstName`, `lastName`, `userName`, `password`) value(?, ?, ?, ?)",
          [fname, lname, uname, password],
          (err, result) => {
            if (err) throw err;
            console.log(result);
            sass.signUp = true;
            sass.name = fname + lname;
            sass.userName = uname;
            sass.password = password;
            
            if (result) {
              res.send({ message: "You successfully register", cond: true });
            }
          }
        );
      }
    }
  );
});

//add data into contact
app.post("/addContact", (req, res) => {
  const userID = 1;
  const name = req.body.Name;
  const email = req.body.Email;
  const subject = req.body.Subject;
  const message = req.body.Message;

  db.query("INSERT INTO `contact` (`userID`, `username`, `email`, `subject`, `message`) value(?, ?, ?, ?, ?)",
  [userID, name, email, subject, message],
  (err, result) => {
    if(err) throw err;
    if(result){
    res.send({contactMsg: "You successfully Submit"})
    } else {
      res.send({contactMsg: "Fail to Submit"})
    }
  }
  )
})