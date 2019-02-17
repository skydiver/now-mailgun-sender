const app = require('express')();
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator/check');

const mailgun = require('mailgun-js')({
  apiKey: process.env.API_KEY,
  domain: process.env.DOMAIN
});

const template = require('./lib/template');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', [
  check('name').exists(),
  check('email').isEmail(),
  check('message').exists(),
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const data = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: process.env.SUBJECT,
    html: template({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
      ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
      datetime: new Date()
    })
  };

  try {
    mailgun.messages().send(data, (error, body) => {
      if (error) {
        res.send({ status: 'error' });
      } else {
        res.send({ status: 'ok' });
      }
    });
  } catch (error) {
    console.log({ error });
    res.send({ status: 'error' });
  }
});

app.listen();