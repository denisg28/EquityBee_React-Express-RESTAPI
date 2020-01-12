const express = require('express');

const app = express();

// const mongoose = require('mongoose');
// const dotenv = require('dotenv');

// dotenv.config();

//connect to DB
// mongoose.connect(
//     process.env.DB_CONNECT,
//     { useNewUrlParser: true },
// () => console.log('connected to DB')
// );


// const userSchema = new mongoose.Schema(
// {
// name: {
//     type: String,
//     required: true,
//     min: 6
// },
// email: {
//     type: String,
//     required: true,
//     max: 255,
//     min: 6
// },
// password: {
//     type: String,
//     required: true,
//     max:1024,
//     min: 6

// },

// date: {
//     type: Date,
//     default: Date.now
// }
// }

// );

//module.exports = mongoose.model('User', userSchema);
//

app.use(express.json());

const customers = [
    {id: 1, firstName: 'Denis', lastName: 'Ganzhi'},
    {id: 2, firstName: 'Shai', lastName: 'Ber'},
    {id: 3, firstName: 'Victor', lastName: 'Isarov'},
    {id: 4, firstName: 'Oded', lastName: 'Golan'}
    ];

// app.post('/api/customers/register', async (req,res) =>
// {
//     const user = new userSchema({
//         name: req.body.name,
//         email: req.body.email,
//         password: req.body.password
//     });
//     try{
//         const savedUser = await user.save();
//         res.send(savedUser);
//     }catch(err){
//         res.status(400).send(err);
//     }
// });

app.get('/api/customers', (req,res) =>
{
res.send(customers);
}
);    


app.get('/api/customers/:id', (req,res) =>
{
    const customer = customers.find(customers => customers.id === parseInt(req.params.id));
    if(!customer) res.status(404).send('BAD ID. Id not found!');
    res.send(customer);

}
);

app.post('/api/customers', (req,res) => {
    if(!req.body.firstName || req.body.firstName.length < 3)
    {
        res.status(400).send('Didnt receive name or should be minimun 3 symbols!');
        return;
    }
    if(!req.body.lastName || req.body.lastName.length < 3)
    {
        res.status(400).send('Didnt receive name or should be minimun 3 symbols!');
        return;
    }
const customer = {
    id: customers.length + 1,
    firstName: req.body.firstName,
    lastName: req.body.lastName
};
  customers.push(customer);
  res.send(customer);  
});

app.delete('/api/customers/:id', (req, res) => {
    const customer = customers.find(customers => customers.id === parseInt(req.params.id));
    if(!customer) res.status(404).send('BAD ID. Id not found!');

    const index = customers.indexOf(customer);
    customers.splice(index, 1);

    res.send(customer);

});




const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

