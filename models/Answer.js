const connection = require('../db/config');

const Answer = {};

Answer.create = (answerInfo, callback) => {
  connection.query(
    `INSERT INTO answer (answer_option, question_id )
              VALUES (
                  ?,
                  ?
              )`,
    [
      answerInfo.answer_option,
      +answerInfo.question_id,
    ],
    (err, results, fields) => {
      callback(err, results, fields);
    },
  );
};

Answer.edit = (answerInfo, callback) => {
  connection.query(
    `UPDATE answer 
    SET (answer_option, question_id ) = ? 
    WHERE id = ?`,
    [
      answerInfo.answer_option,
      +answerInfo.question_id,
      +answerInfo.id,
    ],
    (err, results, fields) => {
      callback(err, results, fields);
    },
  );
};

Answer.delete = (answerInfo, callback) => {
  connection.query(
    `DELETE FROM answer 
     WHERE id = ?`,
    [
      +answerInfo.id,
    ],
    (err, results, fields) => {
      callback(err, results, fields);
    },
  );
};

module.exports = Answer;
