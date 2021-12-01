const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const { where } = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
sequelize.authenticate().then(() => { console.log("Connected to the database") }).catch((err) => { console.log("unable to connect to database" + err) })
db.emp = require("./employee.model.js")(sequelize, Sequelize);
db.product = require('./products.model.js')(sequelize, Sequelize);
db.students = require('./student.model.js')(sequelize, Sequelize);
db.movie = require('./movie.model.js')(sequelize, Sequelize);
const product = db.product;
const students = db.students;
const movie = db.movie;
const emp = db.emp;


/**************** Student Table ***************** */

/* Multiple recods inserted 

students.bulkCreate([{ id: 1, Student_ID: 1, Name: "Jayesh", Stream: "Computer", Marks: 70 }, { id: 2, Student_ID: 2, Name: "Rahul", Stream: "EXE", Marks: 84 }, { id: 3, Student_ID: 3, Name: "Raj", Stream: "IT", Marks: 90 }, { id: 4, Student_ID: 4, Name: "Ram", Stream: "Computer", Marks: 99 }]).then((data) => console.log("Data inserted succesfully" + data)).catch((err) => console.log("Error Occured " + err))

*/
/* drop Student 
students.drop().then(() => console.log('Student Table Deleted')).catch(err => console.log("Error Occured" + err))
*/
/*  Write the script to  display all the students whose are in CS Stream and have got more 75%. (Use Op.and) 
const op = Sequelize.Op;
product.findAll({
    where: {
        [op.and]: [{ Stream: "Computer" }, {
            where: {
                Marks: {
                    [op.gte]: 75
                }
            }
        }]
    },
    raw: true
}).then((data) => { console.log(data) }).catch((err) => console.log(err));
*/

/* ****************** Movie Table **************** */

/* Multiple recods inserted 

movie.bulkCreate([{
    Movie_ID: 1,
    MovieName: "Singham",
    Type: "Action",
    Lang: "Hindi",
    Cast: "Ajay Devagan , Kajal Agarwal "
}, {
    Movie_ID: 2,
    MovieName: "Hera Pheri",
    Type: "Comedy",
    Lang: "English",
    Cast: " Sunil Shetty , Akshay Kumar , Paresh Rawal "
}]).then(data => console.log("Data Inserted Successfully" + data)).catch((err) => console.log("Error Occured" + err));
*/

/* Find All Method 

movie.findAll({

    raw: true
}).then((data) => {
    console.log(data)
}).catch(err => {
    console.log(err)
});
*/

/*  ******************* Employee Table ****************** */
/* Find All 
emp.bulkCreate([{ Emp_ID: 1, Name: "Jayesh", Dept: "IT", Designation: "Developer" },
    { Emp_ID: 2, Name: "Ramesh", Dept: "HR", Designation: "Sr. Manager" }
]).then(data => console.log(data)).catch(err => console.log(err));

emp.findAll({ raw: true }).then(data => console.log(data)).catch((err) => console.log(err));
*/

/* Find By Primary Key 

emp.findByPk(1200).then(data => console.log(data)).catch(err => console.log(err))

*/

/* Use Where Clause 

emp.findAll({ where: { Name: "Jayesh" }, raw: true }).then(data => console.log(data)).catch(err => console.log(err));

*/
/* employees with only fields Name and their department.
 
emp.findAll({
    attributes: ["Name", "Dept"],
    raw: true
}).then(data => console.log(data)).catch(err => console.log(err));

*/
/*  display all the employees who are working in IT department.
 
emp.findAll({
    where: { Dept: "IT" },
    raw: true
}).then(data => console.log(data)).catch(err => console.log(err));
*/
/*  Count the number of rows in the employee table using findAndCountAll(). 


emp.findAndCountAll({
    raw: true
}).then(data => console.log("Number of records" +
    data.count)).catch(err => console.log(err));
*/
/* Display all the records sorted on employee names. 

emp.findAll({
    order: ['Name'],
    raw: true
}).then(data => console.log(data)).catch(err => console.log(err));
*/
/*Like Operator 
let op = Sequelize.Op
emp.findAll({
    where: {
        Name: {
            [op.like]: "J%"
        }
    },
    raw: true
}).then(data => console.log(data)).catch(err => console.log(err));
*/
/* Buidl and Save 

let empRecord = emp.build({ Emp_ID: 1000, Name: "Viany", Dept: "IT", Designation: "Developer" });
empRecord.save();
*/

/* Update the record 
emp.update({ Name: "Jayesh Patil" }, { where: { Name: "Jayesh" } }).then(data => console.log(data)).catch(err => console.log(err))

*/
/*Delete Record 
emp.destroy({ where: { Name: "Raj" }, raw: true }).then((data) => console.log(data)).catch(err => console.log(err));
*/

/* Sql Queries  
sequelize.query("select * from `emp` ", { type: sequelize.QueryTypes.SELECT }).then((data) => console.log(data));
sequelize.query("select * from `emp` where `Emp_ID=2`", { type: sequelize.QueryTypes.SELECT }).then((data) => console.log(data));
sequelize.query("select `Emp_ID` , `Name`  from `emp`  ", { type: sequelize.QueryTypes.SELECT }).then((data) => console.log(data));
sequelize.query("select `Emp_ID` , `Name`  from `emp`  ", { type: sequelize.QueryTypes.SELECT }).then((data) => console.log(data));
sequelize.query("select `Name` , Count(*)  from `emp`  ", { type: sequelize.QueryTypes.SELECT }).then((data) => console.log(data));
sequelize.query("update `emp` set `Name=`Kunal``where `Name=`Jayesh Patil`` ", { type: sequelize.QueryTypes.UPDATE }).then((data) => console.log(data));
sequelize.query("delete from `emp` ", { type: sequelize.QueryTypes.DELETE }).then((data) => console.log(data));
*/





/* ************** Product Table *****************/

// // product.findByPk(1).then((data) => console.log(data)).catch(error => console.log(error));
// // product.findAll({ where: { ProductName: "AC" } ,  raw: true }).then((data) => { console.log(data) }).catch((err) => console.log(err));
// product.findAll({
//     attributes: ['ProductName', 'Description'],
//     where: {
//         ProductName: "AC"
//     },
//     raw: true
// }).then((data) => console.log(data)).catch(error => console.log(error));
// product.findAndCountAll().then((data) => console.log("Number of records are " + data.count)).catch(error => console.log(error));

// product.findAndCountAll({ where: { ProductName: "TV" } }).then((data) => console.log("Number of TVs " + data.count)).catch(error => console.log(error));

//Sorting the recods in Ascending

// product.findAll({
//             //     order: [
//         'ProductName'
//     ],
//     raw: true
// }).then((data) => { console.log(data) }).catch((err) => console.log(err));

//Sorting the records in Descending

// product.findAll({
//     order: [
//         ['ProductName', 'DESC']
//     ],
//     raw: true
// }).then((data) => { console.log(data) }).catch((err) => console.log(err));


/* Using 'like' operator 

const op = Sequelize.Op;


product.findAll({
    where: {
        ProductName: {
            [op.like]: '%V'
        }
    },
    raw: true
}).then((data) => { console.log(data) }).catch((err) => console.log(err)); *
/

/* 
Executing  sql query inside sequelize
sequelize.query("select * from `product` ", { type: sequelize.QueryTypes.SELECT }).then((data) => console.log(data));
*/


/* Adding OR Condition to SELECT
const op = Sequelize.Op;
product.findAll({
    where: {
        [op.or]: [{ ProductName: "TV" }, { Cost: 70000 }]
    },
    raw: true
}).then((data) => { console.log(data) }).catch((err) => console.log(err));
*/


/* Addig record to the table 

product.create({ Product_ID: 4, ProductName: "Mobile", Description: "Phone with excellent camera", Cost: 8000 }).then((data) => console.log("Record submitted successfully")).catch(err => console.log("Erro Occured " + err));

*/
/*Inserting record in the db using build() and save()

let productRecord = product.build({ Product_ID: 5, ProductName: "Cooler", Description: "Cooler with no noice", Cost: 5000 });
productRecord.save();

*/


/* Inserting more than one record into the table at a time. 
product.bulkCreate([{
    Product_ID: 6,
    ProductName: "Refrigerator",
    Description: "Refrigerator",
    Cost: 33000
}, {
    Product_ID: 7,
    ProductName: "Refrigerator",
    Description: "Hair Dryer",
    Cost: 2000
}]).then((data) => console.log("records submitted " + data)).catch((err) => console.log(err))

/* Update the records  

product.update({ ProductName: "Hair Dryer" }, {
    where: { Product_ID: 7 }
}).then(data => console.log("Records updated successfully " + data)).catch(err => console.log(err))

*/

/* Deleting the records 


product.destroy({ where: { ProductName: "Mobile" } }).then(data => console.log("Records deleted succesfully" + data)).catch(error => console.log("Error while deleting the records " + error))


*/

/* Drop the table 

product.drop().then(() => console.log("Table Dropped....")).catch(err => console.log("Error while dropping the table " + err));

*/










module.exports = db;