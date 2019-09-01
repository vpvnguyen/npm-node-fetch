const fetch = require('node-fetch');
const fs = require('fs');

// Plain text or HTML
fetch('https://github.com/')
    .then(res => res.text())
    .then((body) => {
        console.log('==================== PLAIN TXT / HTML =================');
        // console.log(body);
        console.log('WRITEFILE: ./plain-txt-html.log');
        fs.writeFile('./plain-txt-html.log', body, function (err) {
            if (err) throw err;
        });
    });

// json
fetch('https://api.github.com/users/github')
    .then(res => res.json())
    .then((json) => {
        console.log('==================== JSON =================');
        console.log(json);
        console.log('==================== JSON - json.key=================');
        console.log(json.login);
        console.log(json.id);
        console.log(json.url);
        console.log(json.location);
        console.log(json.email);
        console.log(json.bio);
    });

// simple post
fetch('https://httpbin.org/post', { method: 'POST', body: 'a=1' })
    .then(res => res.json()) // expecting a json response
    .then((json) => {
        console.log('==================== SIMPLE POST - json =================');
        console.log(json);
        console.log('==================== SIMPLE POST - json.key =================');
        console.log(json.data);
        console.log(json.url)
    });

// post with json
const body = { a: 1 };

fetch('https://httpbin.org/post', {
    method: 'post',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
})
    .then(res => res.json())
    .then((json) => {
        console.log('==================== POST W/ JSON - =================');
        console.log(json);
        console.log('==================== POST W/ JSON - json.key =================');
        console.log(json.url);
    });