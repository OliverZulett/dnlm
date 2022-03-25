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
]);
