module.exports = (sequelize, Sequelize) => {

    const product = sequelize.define("product", {

        Product_ID: {
            primaryKey: true,
            type: Sequelize.INTEGER

        },
        ProductName: Sequelize.STRING,
        Description: Sequelize.STRING,
        Cast: Sequelize.INTEGER


    }, { timestamps: false, freezeTableName: true })

    return product;

}