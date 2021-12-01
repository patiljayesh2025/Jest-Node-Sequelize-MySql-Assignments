module.exports = (sequelize, Sequelize) => {

    const emp = sequelize.define("emp", {

        Emp_ID: {
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        Name: Sequelize.STRING,
        Dept: Sequelize.STRING,
        Designation: Sequelize.STRING



    }, { timestamps: false, freezeTableName: true });


    return emp;

};