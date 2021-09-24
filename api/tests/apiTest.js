const request = require('supertest');
const app = require('../index')


const id = 45;
const email = "test1456@daube.com"
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
            .get('/v1/users/3')
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
 * Testing DELETE user endpoint
 */
describe('DELETE /users', function () {
    let data = {
        id: id,
    }
    it('200', function (done) {
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



