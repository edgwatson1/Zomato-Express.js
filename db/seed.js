const connection = require('./config');


connection.query(`
  INSERT INTO user_type(user_type) 
  VALUES (1), (2), (3)`,
(err) => {
  console.log(err);
  console.log('user_type table seeded');
});

connection.query(`
INSERT INTO region(name) 
VALUES ('Lisbon'), ('Porto'), ('Algarve')`,
(err) => {
  console.log(err);
  console.log('region table seeded');
});

connection.query(`
  INSERT INTO restaurant
  (name, region_id) 
  VALUES 
  ('restaurant 1', 2), 
  ('restaurant 2', 1), 
  ('restaurant 3', 3)
`,
(err) => {
  console.log(err);
  console.log('restaurant table seeded');
});

connection.query(`
  INSERT INTO user 
  (first_name, last_name, email, passwordHash, phone_number, user_type_id, restaurant_id) 
  VALUES 
  ('Edward', 'Watson', 'e@edwardwatson.com', SHA2('password1', 256), '00447478236403', 2, 1), 
  ('Victoria', 'Zimmermann', 'tzimms7@gmail.com', SHA2('password2', 256), '0031653702130', 3, 1),
  ('Angelina', 'Riet', 'angelina.riet@yahoo.com', SHA2('password3', 256), '0033762850707', 2, 2),
  ('Alexandra', 'Santos', 'alexandraps17@gmail.com', SHA2('password4', 256), '00351919772881', 3, 2),
  ('Elena', 'Ortega', 'elenabaura56@gmail.com', SHA2('password5', 256), '0034622223767', 3, 2)
`,
(err) => {
  console.log(err);
  console.log('user table seeded');
});


connection.query(`
  INSERT INTO language(name) 
  VALUES ('English'), ('Portuguese')`,
(err) => {
  console.log(err);
  console.log('language table seeded');
});
connection.query(`
INSERT INTO product(name, description) 
VALUES ('Gold', 'amazing'), ('Book', 'revolutionary'), ('product 3', 'outstanding')`,
(err) => {
  console.log(err);
  console.log('product table seeded');
  connection.query(`
  INSERT INTO documentation 
  (title, content, language_id, product_id)
  VALUES 
  ('Test titl', 'Test content: Lorem ipsum dolor sit amet, consectetur ad', 1, 1)`,
  (err) => {
    console.log(err);
    console.log('documentation table seeded');
  });
});


connection.query(`
INSERT INTO quiz 
(name, user_type_id, language_id, product_id) 
VALUES ('Discounts ', 2, 1, 1), ('Quiz 2', 1, 2, 1)`,
(err) => {
  console.log(err);
  console.log('quiz table seeded');
  connection.query(`
    INSERT INTO question (question, quiz_id, correct_answer_id) 
    VALUES 
    ('Question 1', 1, 1), 
    ('Question 2', 1, 2), 
    ('Question 3', 1, 3), 
    ('Question 4', 1, 4), 
    ('Question 5', 1, 1), 
    ('Question 6', 1, 2), 
    ('Question 7', 1, 3), 
    ('Question 8', 1, 4), 
    ('Question 9', 1, 1), 
    ('Question 10', 1, 2) 
  `,
  (err) => {
    console.log(err);
    console.log('question table seeded');
    connection.query(`
      INSERT INTO answer
      (answer_option, question_id) 
      VALUES 
      ('option 1', 1), 
      ('option 2', 1), 
      ('option 3', 1), 
      ('option 4', 1)`,
    (err) => {
      console.log(err);
      console.log('answer table seeded');
      connection.end();
    });
  });
});


// connection.query(`
// INSERT INTO result(user_id, time_to_complete, time_of_day, )
// VALUES (5, 3.25, "15.00" )`,
// (err) => {
//   console.log(err);
//   console.log('question_result table seeded');
// });
