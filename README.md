# Zomato-Express.js

## Hosted on Heroku at: 

https://zomato-quiz-app.herokuapp.com'

## Run the app locally (in development):
```
yarn dev
```
note: there's a `yarn start` but that is for **production**

## Add your MySQL credentials
Create a file in the root of the project called `keys.js` with the following:

```
const keys = {
    MYSQL_USER:  'my_username',
    MYSQL_PASSWORD:  'super_secret_password'
    MYSQL_DATABASE:  'database'
}

module.exports = keys;
```
