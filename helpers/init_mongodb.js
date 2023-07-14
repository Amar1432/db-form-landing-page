const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017", {
    dbName: "form-db",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB successfully connected");
  })
  .catch((error) => {
    console.log(error);
  });

mongoose.connection.on("connected", () => {
  console.log("Mongoose connected to db");
});

mongoose.connection.on("error", (error) => {
  console.log(error.message);
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected");
});
