function generosData(sequelize, Datatypes) {
    let alias = 'generos';

    let cols = {
        id:{type:Datatypes.INTEGER,primaryKey:true,autoIncrement:true},
        Nombre:{type:Datatypes.STRING(20)},
        

    };
    
    let config = {timestamps:false,camelCase:false,tableName:'género'};

    const generos = sequelize.define(alias,cols,config);

    generos.associate = function(model) {

        
        generos.hasMany(model.peliculasoseries, {
            as:'peliculasoseries',
            foreignKey:'id_género'
        });
        

    }


    return generos;
}

module.exports = generosData;