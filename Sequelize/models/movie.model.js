module.exports = (sequelize, Sequelize) => {

    const movie = sequelize.define("movie", {

        Movie_ID: {
            primaryKey: true,
            type: Sequelize.INTEGER

        },
        MovieName: Sequelize.STRING,
        Type: Sequelize.STRING,
        Lang: Sequelize.STRING,
        Cast: Sequelize.STRING


    }, { timestamps: false, freezeTableName: true })

    return movie;

}