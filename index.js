const { Sequelize, DataTypes  } = require('sequelize');

const sequelize = new Sequelize('peoples', 'root', 'mysql', {
    host: 'localhost',
    dialect: 'mysql'
});




const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    surname: {
        type: DataTypes.STRING,
        allowNull: false
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false
      },
      age: {
        type: DataTypes.TINYINT,
        allowNull: true
      },
  }, {
    tableName: 'people',
    timestamps: false
  });



;(async () => {
    try {
        await User.sync({
            alter: true,
            force: false
        });

        // const user = await User.create({
        //     name: 'Вася',
        //     surname: 'Васильев',
        //     city: 'Санкт-Петербург',
        //     age: 25
        // });
        // console.log(user);

        // const user = await User.findAll({
        //     where:{
        //     }
        // });
        // console.log(user);


        // const user = await User.findByPk(2)
        // console.log(user);

        // const user = await User.findAll({
        //     where: {
        //         name: 'Алексей'
        //     }
        // });
        // console.log(user);

        // const user = await User.findOne({
        //   where: {
        //     city: 'Санкт-Петербург',
        //   }
        // });
        // user.name = 'Жека';
        // user.save();
        // console.log(user);


        const user = await User.findOne({
          where: {
            name: 'Иван'
          }
        });
        user.destroy();
        console.log(user);




      } catch (error) {
        console.error(error);
      }
}) ();