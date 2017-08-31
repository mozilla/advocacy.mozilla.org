var signup = require('./signup');
var sheets = require('./sheets');

var routes = {
  'signup': function(req, res) {
    var transaction = {
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      locale: req.body.locale
    };

    signup(req.body.url, transaction, function(err, payload) {
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

    var url = "https://docs.google.com/a/mozillafoundation.org/forms/d/e/1FAIpQLSePp6pDW6lFErkI1sQGakk2pkP33NQm8A8Nwr9adlWCEmmfdA/formResponse";

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

    var url = "https://docs.google.com/a/mozillafoundation.org/forms/d/e/1FAIpQLSd9f8HuInrPfBiBLMnA7i1BOBPFGvAO-pJMcMulL5u3esvaHQ/formResponse";

    sheets(url, formData, 'https://advocacy.mozilla.org/net-neutrality-comments/', {email: transaction.email, firstName: transaction.name}, transaction.signup, function(err, payload) {
      if (err) {
        return res.status(500).send({error: err});
      }
      res.json({});
    });
  }
};

module.exports = routes;
