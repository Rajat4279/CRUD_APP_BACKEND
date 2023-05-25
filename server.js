const {app} = require('./routes');

//listening to port 5000
app.listen(5000, () => {
    console.log("Successfully Listening to port 5000");
})