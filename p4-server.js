/*
    CIT 281 Project 4
    Name: Jeremy Meltzer
*/

/* Here are some websites I used:
https://stackoverflow.com/questions/135448/how-do-i-check-if-an-object-has-a-specific-property-in-javascript
https://www.w3schools.com/jsref/jsref_isnan.asp
https://www.w3schools.com/jsref/jsref_object_keys.asp
https://www.w3schools.com/jsref/jsref_substr.asp
*/

const fastify = require("fastify")();
const {
  getQuestions,
  getAnswers,
  getQuestionsAnswers,
  getQuestion,
  getAnswer,
  getQuestionAnswer,
  addQuestionAnswer,
  updateQuestionAnswer,
} = require("./p4-module");

fastify.get("/cit/question", (request, reply) => {
  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send({ error: "", "Status Code": 200, questions: getQuestions() });
});

fastify.get("/cit/answer", (request, reply) => {
  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send({ error: "", "Status Code": 200, answers: getAnswers() });
});

fastify.get("/cit/questionanswer", (request, reply) => {
  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send({
      error: "",
      "Status Code": 200,
      questions_answers: getQuestionsAnswers(),
    });
});

fastify.get("/cit/question/:number", (request, reply) => {
  const { number } = request.params;
  if (number > 0 && number <= 3) {
    code = 200;
  } else {
    code = 404;
  }
  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send({
      error: getQuestion(number).error,
      "Status Code": code,
      question: getQuestion(number).question,
      number: getQuestion(number).number,
    });
});

fastify.get("/cit/answer/:number", (request, reply) => {
  const { number } = request.params;
  if (number > 0 && number <= 3) {
    code = 200;
  } else {
    code = 404;
  }
  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send({
      error: getAnswer(number).error,
      "Status Code": code,
      answer: getAnswer(number).answer,
      number: getAnswer(number).number,
    });
});

fastify.get("/cit/questionanswer/:number", (request, reply) => {
  const { number } = request.params;
  if (number > 0 && number <= 3) {
    code = 200;
  } else {
    code = 404;
  }
  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send({
      error: getQuestionAnswer(number).error,
      "Status Code": code,
      question: getQuestionAnswer(number).question,
      answer: getQuestionAnswer(number).answer,
      number: getQuestionAnswer(number).number,
    });
});

fastify.get("*", (request, reply) => {
  reply
    .code(404)
    .header("Content-Type", "text/html; charset=utf-8")
    .send("<h1>Route not found</h1>");
});

fastify.post("/cit/question", (request, reply) => {
  const { question, answer } = request.body;
  const newEntry = { question: question, answer: answer };
  getQuestionsAnswers().push(newEntry);
  reply
    .code(201)
    .header("Content-Type", "application/json; charset=utf-8")
    .send({
      error: "",
      "Status Code": 201,
      number: addQuestionAnswer({ question: "Q4", answer: "A4" }).number,
    });
});

// Start server and listen to requests using Fastify
const listenIP = "localhost";
const listenPort = 8082;
fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});
