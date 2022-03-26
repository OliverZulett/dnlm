db.createUser({
  user: "admin",
  pwd: "adminPassword123",
  roles: [
    {
      role: "readWrite",
      db: "DNLM_DB",
    },
  ],
});

db = db.getSiblingDB("DNLM_DB");

db.createCollection("MOVIES");

db.MOVIES.insertMany([
  {
    name: "avatar",
    image:
      "https://cdn.pixabay.com/photo/2019/12/17/15/04/photographic-equipment-4701836_960_720.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut repudiandae minus dolores qui error pariatur nostrum doloremque repellat repellendus atque? Incidunt sed facilis possimus asperiores inventore cupiditate. Rem iure molestias voluptates tenetur ullam numquam. Voluptatum quos at veritatis beatae laboriosam aperiam ratione facilis non unde? Itaque repellendus unde illo nihil?",
    rating: 4.5,
  },
  {
    name: "crepusculo",
    image:
      "https://cdn.pixabay.com/photo/2019/10/16/21/19/mens-4555477_960_720.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut repudiandae minus dolores qui error pariatur nostrum doloremque repellat repellendus atque? Incidunt sed facilis possimus asperiores inventore cupiditate. Rem iure molestias voluptates tenetur ullam numquam. Voluptatum quos at veritatis beatae laboriosam aperiam ratione facilis non unde? Itaque repellendus unde illo nihil?",
    rating: 4.5,
  },
  {
    name: "harry potter",
    image:
      "https://cdn.pixabay.com/photo/2013/05/15/00/44/hedy-lamarr-111272_960_720.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut repudiandae minus dolores qui error pariatur nostrum doloremque repellat repellendus atque? Incidunt sed facilis possimus asperiores inventore cupiditate. Rem iure molestias voluptates tenetur ullam numquam. Voluptatum quos at veritatis beatae laboriosam aperiam ratione facilis non unde? Itaque repellendus unde illo nihil?",
    rating: 4.5,
  },
  {
    name: "jumanji",
    image:
      "https://cdn.pixabay.com/photo/2017/07/26/06/31/road-2540632_960_720.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut repudiandae minus dolores qui error pariatur nostrum doloremque repellat repellendus atque? Incidunt sed facilis possimus asperiores inventore cupiditate. Rem iure molestias voluptates tenetur ullam numquam. Voluptatum quos at veritatis beatae laboriosam aperiam ratione facilis non unde? Itaque repellendus unde illo nihil?",
    rating: 4.5,
  },
  {
    "rating" : 5,
    "description" : "Arthur Fleck adora hacer reír a la gente, pero su carrera como comediante es un fracaso. El repudio social, la marginación y una serie de trágicos acontecimientos lo conducen por el sendero de la locura y, finalmente, cae en el mundo del crimen.",
    "image" : "https://cdn.pixabay.com/photo/2019/10/17/21/17/joker-4557864_960_720.jpg",
  },
  {
    "rating" : 1,
    "description" : "Con tal de salir de una prisión infernal, los supervillanos más peligrosos del mundo aceptan una misión del Gobierno: viajar a una remota isla, enemiga de los Estados Unidos y repleta de soldados, para destruir un laboratorio de alta tecnología.",
    "image" : "https://cdn.pixabay.com/photo/2017/02/07/08/39/woman-2045327_960_720.jpg",
    "name" : "suicide squad",
    "createdAt" : ISODate("2022-03-26T11:41:34.795Z"),
    "updatedAt" : ISODate("2022-03-26T11:41:34.795Z"),
  }
]);
