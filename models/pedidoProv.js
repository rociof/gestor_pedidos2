const { Sequelize, DataTypes, Model } = require("sequelize");
/**
 * Define la estructura y tipo de datos de la clase PedidoProv
 */
class PedidoProv extends Model {
static init(sequelize) {
super.init(
  {
    
    IdPedidoProv: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey:true
  
    },
    Fecha: {
      type: DataTypes.DATE,
      allowNull: false
      // allowNull defaults to true
    },
    //La clave foránea sería DNI(tabla proveedor)
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "PedidoProv", // We need to choose the model name
    tableName:"PedidoP",
    timestamps:false,
  }
);
}
// the defined model is the class itself
}
//console.log(Articulos === sequelize.models.Articulos); // true
module.exports = PedidoProv;
