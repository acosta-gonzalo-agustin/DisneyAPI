function personajesData(sequelize, Datatypes) {
    let alias = 'personajes';

    let cols = {
        id:{type:Datatypes.INTEGER,primaryKey:true,autoIncrement:true},
        Imagen:{type:Datatypes.STRING(50)},
        Nombre:{type:Datatypes.STRING(20)},
        Edad:{type:Datatypes.INTEGER},
        Peso:{type:Datatypes.FLOAT},
        Historia:{type:Datatypes.TEXT},

    };
    
    let config = {timestamps:false,camelCase:false,tableName:'personaje'};

    const personajes = sequelize.define(alias,cols,config);

    personajes.associate = function(model) {

        personajes.belongsToMany(model.peliculasoseries, {
            as:"peliculasoseries",
            through: "peliculaoserie_personaje",
            foreignKey:"id_Personaje",
            otherKey:"id_PeliculaoSerie",
            timestamps:false
        });
        

    }


    return personajes;
}

module.exports = personajesData;