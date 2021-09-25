const request = require('supertest');
const app = require('../index')

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const id = getRandomIntInclusive(3, 50);
const email = `test14${getRandomIntInclusive(3, 999)}@daube.com`
const phone_number = `0610171${getRandomIntInclusive(100, 200)}`
//==================== user API test ====================
/**
 * Testing get all user endpoint
 */
describe('GET v1/users', function () {
    it('should respond with json containing a list of all users (with a limit of 10)', function (done) {
        request(app)
            .get('/v1/users')
            .query({ limit: 10 })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    });
});

/**
 * Testing get a user endpoint by giving an existing user
 */
describe('GET v1/user/:id', function () {
    it('should respond with json containing a single user', function (done) {
        request(app)
            .get('/v1/users/5')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});


/**
 * Testing get a user endpoint by giving a non-existing user
 */
describe('GET /v1/user/:id', function () {
    it('should respond with json user not found', function (done) {
        request(app)
            .get('/v1/users/176877')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(404)
            .expect('"user not found"') // expecting content value
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});

/**
 * Testing post user endpoint
 */
describe('POST /users', function () {
    let data = {
        "firstname": "test-first-name",
        "lastname": "test_last_name",
        "email": email,
        "password": "fvzefgzefzerf",
        "confirmPassword": "fvzefgzefzerf",
        "gender": "male",
        "phone_number": "04546574984"
    }
    it('respond with 201 created', function (done) {
        request(app)
            .post('/v1/users')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});

/**
 * Testing post user endpoint
 */
describe('POST /users', function () {
    let data = {
        //no id
        "name": "dummy",
        "contact": "dummy",
        "address": "dummy"
    }
    it('respond with 400 not created', function (done) {
        request(app)
            .post('/v1/users')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});

/**
 * Testing patch user endpoint
 */
describe('PATCH /users', function () {
    let data = {
        "id": id,
        "phone_number": phone_number,
    }
    it('Update the profil of a user, and return 200 and the profil updated', function (done) {
        request(app)
            .patch('/v1/users')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});

describe('PATCH /users', function () {
    let data = {
        "id": id,
        "phone_number": phone_number,
        "fakedata": "Riendutous"
    }
    it('should be refused, return 400, and the data that has not been allowed', function (done) {
        request(app)
            .patch('/v1/users')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400)
            .expect('"\\"fakedata\\" is not allowed"')
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});

/**
 * Testing DELETE user endpoint
 */
describe('DELETE /users', function () {
    let data = {
        id: id,
    }
    it('Delete one user by ID', function (done) {
        request(app)
            .delete('/v1/users')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect(`"DELETE user with id ${id} : ok"`)
            .end(done)
    });
});

/**
 * Testing bad login user 
 */
describe('GET /users/login bad login', function () {
    let data = {
        "email": "test89@gmail.com",
        "password": "1234"
    }
    it('should be refused, return 401 and a message', function (done) {
        request(app)
            .get('/v1/users/login')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(401)
            .expect('"email or password not correct"')
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});
/**
 * Testing good login user 
 */
describe('GET /users/login', function () {
    let data = {
        "email": "test89@gmail.com",
        "password": "fvzefgzefzerf"
    }
    it('should be accepted, return 200 and user', function (done) {
        request(app)
            .get('/v1/users/login')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    });
});
//TODO test with good login



//==================== event API test ====================