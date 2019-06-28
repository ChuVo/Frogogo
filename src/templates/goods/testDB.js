function test() {
  console.log('testings');

  let url = 'scripts/db.json';

  fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(jsonResponse) {
    // do something with jsonResponse
    console.log(jsonResponse);
  });
};

test();