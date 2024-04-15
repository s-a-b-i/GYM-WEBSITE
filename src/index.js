var express = require("express");
var session = require("express-session");
var app = express();
var con = require("./connection");
const path = require('path');
const ejs = require('ejs');
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");


const staticpath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "views");

app.use(express.static(staticpath));
app.set('view engine', 'ejs');
app.set('views', viewsPath);

app.use(session({
  secret: 'your-secret-key',
  resave: true,
  saveUninitialized: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Middleware to check if the user is logged in
const isAuthenticated = (req, res, next) => {
  if (req.session && req.session.user) {
    return next();
  } else {
    res.redirect("/login");
  }
};

app.get("/", isAuthenticated, function (req, res) {
  res.sendFile(path.join(staticpath, "home.html"));
});

app.get("/register", function (req, res) {
  res.render('register', { message: req.query.message });
});

app.post("/register", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  // Hash the password before storing it in the database
  bcrypt.hash(password, 10, function (err, hashedPassword) {
    if (err) {
      console.log(err);
      res.redirect("/register?message=Error%20registering%20user");
    } else {
      var sql = "INSERT INTO users (username, password) VALUES (?, ?)";
      con.query(sql, [username, hashedPassword], function (error, result) {
        if (error) {
          console.log(error);
          res.redirect("/register?message=Error%20registering%20user");
        } else {
          res.redirect("/login");
        }
      });
    }
  });
});

app.get("/login", function (req, res) {
  res.render('login', { message: req.query.message });
});

app.post("/login", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  var sql = "SELECT * FROM users WHERE username = ?";
  con.query(sql, [username], function (error, result) {
    if (error) {
      console.log(error);
      res.redirect("/login?message=Error%20logging%20in");
    } else {
      if (result.length > 0) {
        const hashedPassword = result[0].password;

        // Compare the provided password with the hashed password in the database
        bcrypt.compare(password, hashedPassword, function (err, passwordMatch) {
          if (passwordMatch) {
            req.session.user = username;
            res.redirect("/");
          } else {
            res.redirect("/login?message=Invalid%20credentials");
          }
        });
      } else {
        res.redirect("/login?message=Invalid%20credentials");
      }
    }
  });
});

app.get("/logout", function (req, res) {
  req.session.destroy(function (err) {
    if (err) {
      console.log(err);
    }
    res.redirect("/login");
  });
});






app.post("/", function (req, res) {
  var name = req.body.name;
  var email = req.body.email;
  var address = req.body.address;
  var contactno = req.body.contactno;

  if (!name || !email || !address || !contactno) {
    res.redirect("/?message=Please%20fill%20all%20fields");
    return;
  }

  var contactRegex = /^(\+92|0)(\d{10})$/;
  if (!contactRegex.test(contactno)) {
    res.redirect("/?message=Please%20fill%20all%20fields");
    return;
  }

  var sql = "INSERT INTO member_info (name, email, address, contactno) VALUES (?, ?, ?, ?)";
  con.query(sql, [name, email, address, contactno], function (error, result) {
    if (error) {
      console.log(error);
    } else {
      res.redirect("/");
    }
  });
});

app.get("/read", function (req, res) {
  var sql = "SELECT * FROM member_info";
  con.query(sql, function (error, result) {
    if (error) {
      console.log(error);
    } else {
      res.render('read', { members: result });
    }
  });
});

app.get("/delete", function (req, res) {
  const memberId = req.query.id;

  var sql = "DELETE FROM member_info WHERE id = ?";
  con.query(sql, [memberId], function (error, result) {
    if (error) {
      console.log(error);
    } else {
      res.redirect("/read");
    }
  });
});

app.get("/update", function (req, res) {
  const memberId = req.query.id;

  var sql = "SELECT * FROM member_info WHERE id = ?";
  con.query(sql, [memberId], function (error, result) {
    if (error) {
      console.log(error);
    } else {
      res.render('update', { member: result[0] });
    }
  });
});

app.post("/update", function (req, res) {
  const id = req.body.id;
  const name = req.body.name;
  const email = req.body.email;
  const address = req.body.address;
  const contactno = req.body.contactno;

  var sql = "UPDATE member_info SET name = ?, email = ?, address = ?, contactno = ? WHERE id = ?";
  con.query(sql, [name, email, address, contactno, id], function (error, result) {
    if (error) {
      console.log(error);
    } else {
      res.redirect("/read");
    }
  });
});

app.listen(7000, function () {
  console.log("Server is running on port 7000");
});
