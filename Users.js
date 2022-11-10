db.Users.insertMany([
  {
    user: "Mario",
    email: "mario@gmail.com",
    age: 37,
  },
  {
    user: "Alfred",
    email: "Alfred@gmail.com",
    age: 28,
  },
  {
    user: "Fiji",
    email: "fiji@gmail.com",
    age: 26,
  },
  {
    user: "Paco",
    email: "aco@gmail.com",
    age: 62,
  },
  {
    user: "Moh",
    email: "moh@gmail.com",
    age: 45,
  },
  {
    user: "Anna",
    email: "anna@gmail.com",
    age: 27,
  },
  {
    user: "Geronimo",
    email: "ger@gmail.com",
    age: 18,
  },
  {
    user: "Usman",
    email: "usman@gmail.com",
    age: 33,
  },
  {
    user: "Jon",
    email: "jones@gmail.com",
    age: 31,
  },
  {
    user: "Kamaru",
    email: "kamaru@gmail.com",
    age: 26,
  },
]);

//? ACTUALIZA TODOS LOS CAMPOS DE UN USUARIO
db.Users.updateMany(
    { user: "Geronimo" },
  
    {
      $set: {
        user: "Ger",
        email: "german@gmail.com",
        age: 25
      },
    }
  );

//? ACTUALIZA EL GMAIL DE DOS USUARIOS
db.Users.updateMany(
    { user: "Ger" },
  
    {
      $set: {
        email: "ger25@gmail.com"
      },
    }
  );

  db.Users.updateMany(
    { user: "Usman" },
  
    {
      $set: {
        email: "kamarusman@gmail.com"
      },
    }
  );

  db.Users.updateMany(
    { user: "Ger" },
  
    {
      $set: {
        email: "ger25@gmail.com"
      },
    }
  );

  //? SUMALE 5 AÑOS A UN USUARIO
  db.Users.updateMany(
    { user: "Usman" },
  
    {
      $inc: {
        age: 5
      },
    }
  );
 //* TENGO QUE PASAR SU EDAD A NUMBER PORQUE A UNA STRING NO SE LE PUEDE SUMAR
  db.Users.updateMany(
    { user: "Usman" },
  
    {
      $set: {
        age: 31
      },
    }
  );

  //? Seleccione todos los usuarios con una edad mayor a 20
  db.Users.find({age:{$gte:20}})
 
 
  //? Seleccione todos los usuarios con una edad inferior a 23
  db.Users.find({age:{$lt:23}})

 
  //? Seleccione todos los usuarios que tengan una edad entre 25 y 30 años
  
  db.Users.find({$and:[
    {age:{$gt:25}},{age:{$lt:30}}
    ]});


  //? Muestra los usuarios de edad menor a mayor y viceversa
  db.Users.find().sort({age: -1})

  //? Seleccione el número total de usuarios

  db.Users.find().count()

  //? Selecciona solo 2 usuarios
  db.Users.find().limit(2)

  