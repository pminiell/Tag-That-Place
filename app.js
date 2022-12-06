const fs = require('fs');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const HttpError = require('./models/http-error');
const placesRoutes = require('./routes/places-routes');
const usersRouter = require('./routes/users-routes');

const app = express();
const dotenv = require('dotenv');

dotenv.config();

app.use(cors());
app.use(bodyParser.json());

app.use('/tmp/images', express.static(path.join('tmp', 'images')));
app.use(express.static(path.join('public')));

app.use('/api/places', placesRoutes);
app.use('/api/users', usersRouter);

app.use((req, res, next) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.use((req, res, next) => {
  const error = new HttpError('Page not found', 404);
  throw error;
});

// app.use((error, req, res, next) => {
//   if (req.file) {
//     fs.unlink(req.file.path, (error) => {
//       console.log(` HERE? (1) ${error}`);
//     });
//   }
//   if (res.headerSent) {
//     return next(error);
//   }
//   res.status(error.code || 500);
//   res.json({ message: error.message || 'An unknown error occured!' });
// });

const PORT = process.env.PORT || 3001;

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.iczlc.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
  .then(() => {
    app.listen(PORT);
  })
  .catch((err) => {
    console.log(err);
  });
console.log(`Server is running on PORT: ${PORT}`);
