/*
    CIT 281 Project 4
    Name: Jeremy Meltzer
*/

const { data } = require("./p4-data");

const getQuestions = () => data.map((item) => item.question);

const getAnswers = () => data.map((item) => item.answer);

const getQuestionsAnswers = () => {
  const newData = JSON.parse(JSON.stringify(data));
  return newData;
};

const getQuestion = (number = "") => {
  if (isNaN(number) || number.length === 0) {
    error = "Question number must be an integer";
    question = "";
    number = "";
  } else if (number > data.length) {
    error = "Question number must be less than the number of questions (3)";
    question = "";
    number = "";
  } else if (number <= 0) {
    error = "Question number must be >= 1";
    question = "";
    number = "";
  } else {
    error = "";
    question = data[number - 1].question;
    number = parseInt(number);
  }
  returnObj = { question: question, number: number, error: error };
  return returnObj;
};

const getAnswer = (number = "") => {
  if (isNaN(number) || number.length === 0) {
    error = "Answer number must be an integer";
    answer = "";
    number = "";
  } else if (number > data.length) {
    error = "Answer number must be less than the number of questions (3)";
    answer = "";
    number = "";
  } else if (number <= 0) {
    error = "Answer number must be >= 1";
    answer = "";
    number = "";
  } else {
    error = "";
    answer = data[number - 1].answer;
    number = parseInt(number);
  }
  returnObj = { answer: answer, number: number, error: error };
  return returnObj;
};

const getQuestionAnswer = (number = "") => {
  if (isNaN(number) || number.length === 0) {
    error = "Question and Answer number must be an integer";
    question = "";
    answer = "";
    number = "";
  } else if (number > data.length) {
    error =
      "Question and Answer number must be less than the number of questions (3)";
    question = "";
    answer = "";
    number = "";
  } else if (number <= 0) {
    error = "Question and Answer number must be >= 1";
    question = "";
    answer = "";
    number = "";
  } else {
    error = "";
    question = data[number - 1].question;
    answer = data[number - 1].answer;
    number = parseInt(number);
  }
  returnObj = {
    question: question,
    answer: answer,
    number: number,
    error: error,
  };
  return returnObj;
};

const addQuestionAnswer = (info = {}) => {
  if (Object.keys(info).length === 0) {
    error = "Object question property required";
    message = "";
    number = -1;
  } else if (
    Object.keys(info).length === 1 &&
    info.hasOwnProperty("question")
  ) {
    error = "Object answer property required";
    message = "";
    number = -1;
  } else if (Object.keys(info).length === 1 && info.hasOwnProperty("answer")) {
    error = "Object question property required";
    message = "";
    number = -1;
  } else {
    error = "";
    message = "Question added";
    number = info.question.substr(-1);
  }
  returnObj = { error: error, message: message, number: number };
  return returnObj;
};

const updateQuestionAnswer = (info = {}) => {
  if (Object.keys(info).length === 0) {
    error = "Object question property required";
    message = "";
    number = "";
  } else if (
    Object.keys(info).length < 3 &&
    (info.hasOwnProperty("question") || info.hasOwnProperty("answer"))
  ) {
    error = "Object number property must be a valid integer";
    message = "";
    number = "";
  } else {
    error = "";
    message = "Question added";
    number = info.number;
  }
  returnObj = { error: error, message: message, number: number };
  index = number - 1;
  data[0].question = info.question;
  data[0].answer = info.answer;
  return returnObj;
};

/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
  console.log(`\n** Testing ${category} **`);
  console.log("-------------------------------");
  for (const o of args) {
    console.log(`-> ${category}${o.d}:`);
    console.log(o.f);
  }
}

// Set a constant to true to test the appropriate function
const testGetQs = false;
const testGetAs = false;
const testGetQsAs = false;
const testGetQ = false;
const testGetA = false;
const testGetQA = false;
const testAdd = false; // Extra credit
const testUpdate = false; // Extra credit
const testDelete = false; // Extra credit

// getQuestions()
if (testGetQs) {
  testing("getQuestions", { d: "()", f: getQuestions() });
}

// getAnswers()
if (testGetAs) {
  testing("getAnswers", { d: "()", f: getAnswers() });
}

// getQuestionsAnswers()
if (testGetQsAs) {
  testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
}

// getQuestion()
if (testGetQ) {
  testing(
    "getQuestion",
    { d: "()", f: getQuestion() }, // Extra credit: +1
    { d: "(0)", f: getQuestion(0) }, // Extra credit: +1
    { d: "(1)", f: getQuestion(1) },
    { d: "(4)", f: getQuestion(4) } // Extra credit: +1
  );
}

// getAnswer()
if (testGetA) {
  testing(
    "getAnswer",
    { d: "()", f: getAnswer() }, // Extra credit: +1
    { d: "(0)", f: getAnswer(0) }, // Extra credit: +1
    { d: "(1)", f: getAnswer(1) },
    { d: "(4)", f: getAnswer(4) } // Extra credit: +1
  );
}

// getQuestionAnswer()
if (testGetQA) {
  testing(
    "getQuestionAnswer",
    { d: "()", f: getQuestionAnswer() }, // Extra credit: +1
    { d: "(0)", f: getQuestionAnswer(0) }, // Extra credit: +1
    { d: "(1)", f: getQuestionAnswer(1) },
    { d: "(4)", f: getQuestionAnswer(4) } // Extra credit: +1
  );
}

// addQuestionAnswer()
if (testAdd) {
  testing(
    "addQuestionAnswer",
    { d: "()", f: addQuestionAnswer() },
    { d: "({})", f: addQuestionAnswer({}) },
    { d: '(question: "Q4")', f: addQuestionAnswer({ question: "Q4" }) },
    { d: '(answer: "A4")', f: addQuestionAnswer({ answer: "A4" }) },
    {
      d: '(question: "Q4", answer: "A4")',
      f: addQuestionAnswer({ question: "Q4", answer: "A4" }),
    }
  );
}

// updateQuestionAnswer()
if (testUpdate) {
  testing(
    "updateQuestionAnswer",
    { d: "()", f: updateQuestionAnswer() },
    { d: "({})", f: updateQuestionAnswer({}) },
    { d: '(question: "Q1U")', f: updateQuestionAnswer({ question: "Q1U" }) },
    { d: '(answer: "A1U")', f: updateQuestionAnswer({ answer: "A1U" }) },
    {
      d: '(question: "Q1U", answer: "A1U")',
      f: updateQuestionAnswer({ question: "Q1U", answer: "A1U" }),
    },
    {
      d: '(number: 1, question: "Q1U", answer: "A1U")',
      f: updateQuestionAnswer({ number: 1, question: "Q1U", answer: "A1U" }),
    }
  );
  console.log(data);
}

module.exports = {
  getQuestions,
  getAnswers,
  getQuestionsAnswers,
  getQuestion,
  getAnswer,
  getQuestionAnswer,
  addQuestionAnswer,
  updateQuestionAnswer,
};
