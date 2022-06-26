function usuariosData(sequelize, Datatypes) {
    let alias = 'usuarios';

    let cols = {
        id:{type:Datatypes.INTEGER,primaryKey:true,autoIncrement:true},
        password:{type:Datatypes.STRING(100)},
        nombre:{type:Datatypes.STRING(15)},
        email: {type:Datatypes.STRING(40)}

    };
    
    let config = {timestamps:false,camelCase:false,tableName:'usuario'};

    const usuarios = sequelize.define(alias,cols,config);

    
    return usuarios;
}

module.exports = usuariosData;