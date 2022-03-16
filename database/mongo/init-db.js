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
    image: "https:://image.com/image.png",
    description: "its good",
    rating: 4.5,
  },
]);
