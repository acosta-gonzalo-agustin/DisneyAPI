function peliculasoseriesData(sequelize, Datatypes) {
    let alias = 'peliculasoseries';

    let cols = {
        id:{type:Datatypes.INTEGER,primaryKey:true,autoIncrement:true},
        Imagen:{type:Datatypes.STRING(50)},
        Título:{type:Datatypes.STRING(20)},
        fecha_creación:{type:Datatypes.DATE},
        Calificación:{type:Datatypes.INTEGER},
        id_género:{type:Datatypes.INTEGER},

    };
    
    let config = {timestamps:false,camelCase:false,tableName:'peliculaoserie'};

    const peliculasoseries = sequelize.define(alias,cols,config);

    peliculasoseries.associate = function(model) {

        peliculasoseries.belongsToMany(model.personajes, {
            as:"personajes",
            through: "peliculaoserie_personaje",
            foreignKey:"id_PeliculaoSerie",
            otherKey:"id_Personaje",
            timestamps:false
        });

        peliculasoseries.belongsTo(model.generos, {
            as:'genero',
            foreignKey:'id_género'
        });
        

    }


    return peliculasoseries;
}

module.exports = peliculasoseriesData;