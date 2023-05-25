const {app} = require("./libraries");
const Person = require("./person_model");

//creating required routes
app.route("/api/persons")
    .get(async (req, res) => {
        //find if there any person exist if exist send the json of person else show the error message
        try {
            let persons = await Person.find();
            res.json(persons);
        } catch (err) {
            res.status(500).json({ error: 'Failed to retrieve persons' });
        }
    })
    .post(async (req, res) => {
        //create person with all the details received from form. If not able to create show the error message.
        const newPerson = new Person(req.body);
        try {
            await newPerson.save();
            res.status(201).json({ message: 'Person created successfully' });
        } catch (err) {
            res.status(400).json({ error: 'Failed to create person' });
        }
    })
app.route("/api/person/:id")
    .put(async (req, res) => {
        //update the person information received from form.
        try {
            const thisId = req.params.id;
            await Person.findByIdAndUpdate(thisId, req.body);
            res.json({ message: 'Person updated successfully' });
        } catch (err) {
            res.status(400).json({ error: 'Failed to update person' });
        }
    })
    .delete(async (req, res) => {
        //find if there any person exist if exist delete person else show the error message
        const thisId = req.params.id;
        try {
            await Person.findByIdAndDelete(thisId);
            res.json({ message: 'Person deleted successfully' });
        } catch (err) {
            res.status(400).json({ error: 'Failed to delete person' });
        }
    })

module.exports = {app};