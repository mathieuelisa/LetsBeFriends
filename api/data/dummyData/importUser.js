require('dotenv').config;
const bcrypt = require('bcrypt')
const db = require('../../app/database');

console.log('Script d\'import user');



(async () => {
    await db.query('TRUNCATE TABLE user RESTART IDENTITY');
    
    await db.query(`INSERT INTO user (firstname, lastname, gender, email, password, description, age, city, phone_number, img_url) VALUES('Emmanuel', 'Martin', 'Male', 'gnutley0@nature.com', ${await bcrypt.hash('1234', 10)}, 'je vis à bordeaux.', 43, 'Bordeaux', '0123456789', 'https://robohash.org/deseruntmollitiarepudiandae.png?size=50x50&set=set1'`)

    db.end()
})()
console.log('Fin de script')

// await db.query(`${await mafonction()}`);
// await bcrypt.hash(this.password, 10)

// ('Emmanuel', 'Martin', 'Male', 'gnutley0@nature.com', 'guyD3bhJUXf', 'je vis à bordeaux.', 43, 'Bordeaux', '0123456789', 'https://robohash.org/deseruntmollitiarepudiandae.png?size=50x50&set=set1'),
