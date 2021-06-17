const express = require('express');
const app = express();
const cors = require('cors');
var mysql = require('mysql');
const bodyParser = require('body-parser');

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "contactscrud"
});

db.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");


});
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));




//code for searching a particular entry in the table

var searchvalue = "xxx";
var sqlSearch = 'SELECT * from contact_main where firstname like xxx';
var Res = "Nothing to say";
app.post("/api/search", (req, res) => {
  searchvalue = req.body.Searchname;

  sqlSearch = 'SELECT * from contactscrud.contact_main left JOIN address_work on address_work.contact_id = ID  left JOIN date_main on date_main.con_id= ID left join address_home on  address_home.con_id=ID left join phone_main on phone_main.contact_id=ID  where firstname like (?) or lastname like (?) or miidle_initial like (?) ';
  db.query(sqlSearch, ["%" + searchvalue + "%", "%" + searchvalue + "%", "%" + searchvalue + "%"], (err, result) => {
    if (err) console.log(err);
    console.log(result);
    res.send(result);
    Res = result;
    app.get("/api/search", (req, res) => {

      res.send(Res);
    });

  });
});





app.post("/api/insert", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const middleInitial = req.body.middleInitial;
  const cellPhone = req.body.cellPhone;
  const homePhone = req.body.homePhone;
  const homeAdddress = req.body.homeAdddress;
  const homeCity = req.body.homeCity;
  const homeState = req.body.homeState;
  const homeZip = req.body.homeZip;
  const workPhone = req.body.workPhone;
  const workAddress = req.body.workAddress;
  const workCity = req.body.workCity;
  const workState = req.body.workState;
  const workZip = req.body.workZip;
  const birthDate = req.body.birthDate;


  
  const sqlInsert = "INSERT INTO contact_main (firstname,lastname,miidle_initial) VALUES ((?),(?),(?));"
  const sqlInsert3 = "INSERT INTO address_work (contact_id, work_address,work_city,work_state,work_zip) values ((?),(?),(?),(?),(?));"
  const sqlInsert4 = " INSERT INTO phone_main (contact_id, home_phone, cell_phone, work_phone) values ((?), (?), (?), (?));"
  const sqlInsert5 = "INSERT INTO date_main (con_id, birth_date) values ((?), (?)); "
  const sqlInsert6 = " INSERT INTO address_home (con_id, home_address,home_city,home_state,home_zip) values ((?),(?),(?),(?),(?));"
  
  db.query(sqlInsert, [firstName, lastName, middleInitial], (err, result) => {
    // homeAdddress,homeCity,homeState,homeZip,workAddress,workCity,workState,workZip,homePhone,cellPhone,workPhone,birthDate  
    console.log(err)
   const ID_dynamic= result.insertId;
   db.query(sqlInsert3, [ID_dynamic, workAddress, workCity, workState, workZip], (err, result) => {
    if (err) console.log(err);


  })
  db.query(sqlInsert3, [ID_dynamic, workAddress, workCity, workState, workZip], (err, result) => {
    if (err) console.log(err);


  })
  db.query(sqlInsert4, [ID_dynamic, homePhone, cellPhone, workPhone], (err, result) => {
    if (err) console.log(err);

  })
  db.query(sqlInsert5, [ID_dynamic, birthDate], (err, result) => {
    if (err) console.log(err);

  })
  db.query(sqlInsert6, [ID_dynamic, homeAdddress, homeCity, homeState, homeZip], (err, result) => {
    if (err) console.log(err);
    res.send("INSERTED")

  })
   })




 
 

});





app.post("/api/delete", (req, res) => {
  var deleteValue = req.body.deleteID;
  var sqlDelete = 'DELETE FROM contact_main WHERE ID=(?)'



  db.query(sqlDelete, [deleteValue], (err, result) => {
    if (err) console.log(err);
    console.log(result);
    res.send(deleteValue + "deleted");
  })
})


app.post("/api/update", (req, res) => {
  const ID = req.body.ID;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const middleInitial = req.body.middleInitial;
  const cellPhone = req.body.cellPhone;
  const homePhone = req.body.homePhone;
  const homeAdddress = req.body.homeAdddress;
  const homeCity = req.body.homeCity;
  const homeState = req.body.homeState;
  const homeZip = req.body.homeZip;
  const workPhone = req.body.workPhone;
  const workAddress = req.body.workAddress;
  const workCity = req.body.workCity;
  const workState = req.body.workState;
  const workZip = req.body.workZip;
  const birthDate = req.body.birthDate;

console.log("MIDDLENAME"+middleInitial)
  var sqlUpdate = "UPDATE contact_main SET firstname=(?),lastname=(?),miidle_initial=(?) WHERE ID=(?)";
  var sqlUpdate2 = "UPDATE address_home SET home_address=(?),home_city=(?),home_state=(?),home_zip=(?) where con_id=(?)";
  var sqlUpdate3 = "UPDATE address_work SET work_address=(?),work_city=(?),work_state=(?),work_zip=(?) where contact_id=(?)";
  var sqlUpdate4 = "UPDATE phone_main SET home_phone=(?),cell_phone=(?) ,work_phone=(?) where contact_id=(?)";
  var sqlUpdate5 = "UPDATE date_main SET birth_date=(?) where con_id=(?)";
  console.log(firstName);
  db.query(sqlUpdate, [firstName, lastName, middleInitial, ID], (err, result) => {
    console.log(err);
    console.log(result);
  })
  db.query(sqlUpdate2, [homeAdddress, homeCity, homeState, homeZip, ID], (err, result) => {

    console.log(result);
  })
  db.query(sqlUpdate4, [homePhone, cellPhone, workPhone, ID], (err, result) => {

    console.log(result);
  })
  db.query(sqlUpdate3, [workAddress, workCity, workState, workZip, ID], (err, result) => {

    console.log(result);
  })
  db.query(sqlUpdate5, [birthDate, ID], (err, result) => {

    res.send("THE VALUE HAS BEEN UPDATED IN THE DATABASE");
    console.log(result);
  })
});

//code for retieving and sending all the rows in the table. 
app.get('/api/get', (req, res) => {
  const sqlSelect = 'SELECT * from contactscrud.contact_main left JOIN address_work on address_work.contact_id = ID  left JOIN date_main on date_main.con_id= ID left join address_home on  address_home.con_id=ID left join phone_main on phone_main.contact_id=ID ';
  db.query(sqlSelect, (err, result) => {
    if (err) console.log(err);
    res.send(result);
  })
})

app.listen(3002, () => {
  console.log("running on port 3002");
});


