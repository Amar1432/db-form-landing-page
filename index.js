const express = require("express");
const morgan = require("morgan");
const createHttpError = require("http-errors");
const errorHandler = require("./middlewares/errorHandler");
const cors = require("cors");
require("./helpers/init_mongodb");
const LandingRoute = require("./routes/landingRoute");
const UserRoute = require("./routes/userRoute");
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Define routes
app.use("/api/", LandingRoute);
app.use("/api/", UserRoute);

app.use((req, res, next) => {
  next(createHttpError.NotFound());
});

app.use(errorHandler);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
