const {sequelize, DataTypes, Model} = require('./db')

//create model for musicians in our database
class Musician extends Model {
    //add custom query methods here
}

//create attributes for model using init method
Musician.init({
    name: DataTypes.STRING,
    instrument: DataTypes.STRING,
    albums: DataTypes.INTEGER,
    isVocalist: DataTypes.BOOLEAN,
}, {
    sequelize, //specifies what database our model is stored in
    timestamps: false
})

module.exports = {Musician}