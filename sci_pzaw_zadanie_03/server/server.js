const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: '*',
  }));

const data = {
    "users": [
        { firstName: "John", lastName: "Doe", password:'password1', token:"1234567891" },
        { firstName: "Anna", lastName: "Smith", password:'password2', token:"1234567892" },
        { firstName: "Peter", lastName: "Jones", password:'password3', token:"1234567893" },
    ],
};

function generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
  
    return result;
  }

  
app.post('/pzaw_zadanie_03/auth', (req, res) => {
    const { firstName, password } = req.body;
    const user = data.users.find(
        (u) => u.firstName === firstName && u.password === password
    );

    if (user) {
        res.json({  token: user.token  });
    } else {
        res.status(401).send('Invalid credentials');
    }
});

app.use('/pzaw_zadanie_03', (req, res, next) => {
    if (req.method !== 'GET' && req.method !== 'POST' && req.method !== 'DELETE' && req.method !== 'PUT') {
      res.status(405).send('Method Not Allowed');
    } else {
      const token = req.headers.authorization;
        
      if (token && isValidToken(token)) {
        next();
      } else {
        res.status(401).send('Unauthorized');
      }
    }
  });
  
function isValidToken(token) {
    return data.users.some(user => user.token === token);
}


app.get('/pzaw_zadanie_03', (req, res) => {
    res.json(data.users);
});

app.post('/pzaw_zadanie_03', (req, res) => {
    const newUser = req.body;
    if (newUser && newUser.firstName && newUser.lastName && newUser.password) {
        data.users.push({...newUser, token:generateRandomString(10)});
        res.json(newUser);
    } else {
        res.status(400).send('Invalid user format');
    }
});

app.delete('/pzaw_zadanie_03/:id', (req, res) => {
    const userId = parseInt(req.params.id);

    if (isNaN(userId) || userId < 0 || userId >= data.users.length) {
        res.status(404).send('User Not Found');
        return;
    }

    const token = req.headers.authorization;

    if (data.users[userId].token === token) {
        res.status(403).send('You cannot delete yourself');
        return;
    }

    const deletedUser = data.users.splice(userId, 1)[0];
    res.json(deletedUser);
});
app.put('/pzaw_zadanie_03/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    if (isNaN(userId) || userId < 0 || userId >= data.users.length) {
        res.status(404).send('User Not Found');
    } else {
        const updatedUser = req.body;
        const token = req.headers.authorization;
        let newToken = "";
      
        if (updatedUser && updatedUser.firstName && updatedUser.lastName) {
            if (data.users[userId].token === token) {
                newToken=token;
            }else{

                newToken=generateRandomString(10)
            }
            data.users[userId] = {...updatedUser, password:data.users[userId].password, token:newToken };
            res.json(updatedUser);
        } else {
            res.status(400).send('Invalid user format');
        }
}
});

app.put('/pzaw_zadanie_03/:id/password', (req, res) => {
    const {password} = req.body
    const userId = parseInt(req.params.id);
    if (isNaN(userId) || userId < 0 || userId >= data.users.length) {
        res.status(404).send('User Not Found');
    } else {
        if(!password){
            res.status(400).send('New password cant be empty!');
        }
      
        if (data.users[userId]) {
            data.users[userId].password = password;
            res.json("Password updated!");
        } else {
            res.status(400).send('This user do not exist!');
        }
}
});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
