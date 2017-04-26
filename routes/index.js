var signup = require('./signup');
var sheets = require('./sheets');

var routes = {
  'signup': function(req, res) {
    var transaction = {
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName
    };

    signup(transaction, function(err, payload) {
      if (err) {
        return res.status(500).send({error: err});
      }
      res.json(payload);
    });
  },
  'sheets': function(req, res) {
    var transaction = {
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      signup: req.body.signup
    };

    sheets(transaction, function(err, payload) {
      if (err) {
        return res.status(500).send({error: err});
      }
      res.json({});
    });
  }
};

module.exports = routes;
