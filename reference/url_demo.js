const url = require('url')

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

//serialized URL
console.log(myUrl.href);
console.log(myUrl.toString())

//host (root domain)
console.log(myUrl.host)
console.log(myUrl.hostname)

//path
console.log(myUrl.pathname)

//serialized query 
console.log(myUrl.search)
console.log(myUrl.searchParams)
