const connectDB = require('./startup/db')
const boats = require('./routes/boats')

connectDB()

app.use(express.json());
app.use('/api/boats', boats);


const port = process.env.PORT || 5000;
app.listen(port,() => {
  console.log(`Server started on port: ${port}`)

});

