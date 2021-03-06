const connection = require('../db/config');

const Answer = {};

Answer.create = (answerOption, questionId, callback) => {
  connection.query(
    `INSERT INTO answer (answer_option, question_id )
              VALUES (
                  ?,
                  ?
              )`,
    [
      answerOption,
      +questionId,
    ],
    (err, results, fields) => {
      callback(err, results, fields);
    },
  );
};

Answer.getAll = (callback) => {
  connection.query(
    'SELECT * from answer',
    (err, results, fields) => {
      callback(err, results, fields);
    },
  );
};

Answer.edit = (answer_option, question_id, id, callback) => {
  connection.query(
    `UPDATE answer 
    SET answer_option = ?, question_id = ? 
    WHERE id = ?`,
    [ answer_option,
      +question_id,
      +id,
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
