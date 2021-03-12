const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM user", (err, users) => {
      if (err) {
        res.json(error);
      }
      console.log(users);
      res.render("user/index.ejs", { users: users });
    });
  });
};

controller.create = (req, res) => {
  res.render("user/create.ejs");
};

controller.store = (req, res) => {
  const body = req.body;
  req.getConnection((err, conn) => {
    conn.query("INSERT INTO user set ?", [body], (err, row) => {
      console.log(row);
      if (err) {
        res.redirect("/create");
      }
      res.redirect("/");
    });
  });
};

controller.edit = (req,res) => {
  const {id} = req.params;
  req.getConnection((err,conn) => {
    if (err) res.redirect("/");
    conn.query("SELECT * FROM user WHERE id = ?",[id],(err,users) => {
      if(err) res.json(err);
      res.render("user/edit.ejs",{user:users[0]});
    });
  });
}

controller.update = (req,res) => {
  const {id} = req.params;
  const body = req.body;
  req.getConnection((err,conn) => {
    if (err) res.redirect("/");
    conn.query("UPDATE user SET ? WHERE id = ?",[body,id],(err,users) => {
      if(err) res.json(err);
      res.redirect('/');
    });
  });
}

controller.delete = (req, res) => {
  params = req.params;
  req.getConnection((err, conn) => {
    if (err) res.redirect("/");
    conn.query("DELETE FROM user WHERE id = ?", [params.id], (err, rows) => {
      res.redirect("/");
    });
  });
};

module.exports = controller;
