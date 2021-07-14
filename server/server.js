const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({
    path: './server/.env',
});

mongoose
    .connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_NAME}.u53ya.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
        {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        }
    )
    .then(() => console.log('DB connection successful!'))
    .catch(() => console.log('DB connection fail'));

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server running on ${port} port`);
});
