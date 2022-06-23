function peliculasoseries_personajesData(sequelize, Datatypes) {
    let alias = 'peliculasoseries_personajes';

    let cols = {
        id:{type:Datatypes.INTEGER,primaryKey:true,autoIncrement:true},
        Imagen:{type:Datatypes.STRING(50)},
        Título:{type:Datatypes.STRING(20)},
        fecha_creación:{type:Datatypes.DATE},
        Calificación:{type:Datatypes.INTEGER},
        id_género:{type:Datatypes.INTEGER},

    };
    
    let config = {timestamps:false,camelCase:false,tableName:'peliculaoserie_personaje'};

    const peliculasoseries_personajes = sequelize.define(alias,cols,config);


    return peliculasoseries_personajes;
}

module.exports = peliculasoseries_personajesData;