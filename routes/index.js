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
  'petitionSheets': function(req, res) {
    var transaction = {
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      signup: req.body.signup
    };

    var formData = {
      "entry.825163439": transaction.firstName,
      "entry.129687116": transaction.lastName,
      "entry.329351653": transaction.email,
      "entry.1319525634": 'en-US'
    };

    var url = "https://docs.google.com/a/mozillafoundation.org/forms/d/e/1FAIpQLSfMxhSq-KqhWHQn5efvL-mgr4M_a0nOpV_kiFfwLLkesYM6vw/formResponse";

    sheets(url, formData, 'https://advocacy.mozilla.org/net-neutrality/', transaction, transaction.signup, function(err, payload) {
      if (err) {
        return res.status(500).send({error: err});
      }
      res.json({});
    });
  },
  'fccCommentSheets': function(req, res) {
    var transaction = {
      comment: req.body.comment,
      name: req.body.name,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip,
      email: req.body.email,
      signup: req.body.signup
    };

    var formData = {
      "entry.1788543202": transaction.comment,
      "entry.1017670790": transaction.name,
      "entry.623318390": transaction.address,
      "entry.1807205438": transaction.city,
      "entry.1075192818": transaction.state,
      "entry.2039624465": transaction.zip
    };

    var url = "https://docs.google.com/a/mozillafoundation.org/forms/d/e/1FAIpQLSfLFZ_PYeEuW7n6CaJ_1vxlKtoE_yqA2css-rrtfThi8nJGEA/formResponse";

    sheets(url, formData, 'https://advocacy.mozilla.org/net-neutrality-comments/', {email: transaction.email, firstName: transaction.name}, transaction.signup, function(err, payload) {
      if (err) {
        return res.status(500).send({error: err});
      }
      res.json({});
    });
  }
};

module.exports = routes;
