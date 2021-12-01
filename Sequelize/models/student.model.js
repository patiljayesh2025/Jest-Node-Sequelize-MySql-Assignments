module.exports = (sequelize, Sequelize) => {

    const students = sequelize.define("students", {

        id: {
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        Student_ID: Sequelize.INTEGER,
        Name: Sequelize.STRING,
        Stream: Sequelize.STRING,
        Marks: Sequelize.INTEGER


    })

    return students;

}