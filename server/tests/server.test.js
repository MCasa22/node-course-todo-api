const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server.js');
const {Todo} = require('./../models/todo.js');

//wipes the database begore the tests run;
beforeEach((done) => {
  Todo.remove({})
    .then(() => done());
})

describe('POST /todos', () => {
  it('should create a new Todo', (done) => {
    var text = 'test text';

    request(app)
      .post('/todos')
      .send({text})
      .expect(200)
      .expect((res) => {
        expect(res.body.text).toBe(text);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        Todo.find()
          .then((todos) => {
            expect(todos.length).toBe(1);
            expect(todos[0].text).toBe(text);
            done();
          })
          .catch((e) => done(e));
      })
  });

  it('should not create todo without the text field populated', () => {

    request(app)
      .post('/todos')
      .send({})
      .expect(400)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        Todo.find()
          .then((todos) => {
            expect(todos.length).toBe(0);
            done();
          })
          .catch((e) => done(e));
      })
  });

});
