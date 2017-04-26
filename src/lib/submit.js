function submit(action, props, success, error) {
  fetch(action, {
    method: 'post',
    credentials: 'same-origin',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(props)
  }).then(function(response) {
    var responseContent;
    var callback = success;
    if (!response.headers.get("content-type")) {
      responseContent = response.text();
    } else {
      responseContent = response.json();
    }
    if (!response.ok) {
      callback = error;
    }
    responseContent.then(function(result) {
      if (callback) {
        callback(result);
      }
    });
  });
}

module.exports = submit;
