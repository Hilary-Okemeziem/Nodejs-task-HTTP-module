const { log } = require('console');
const https = require('https')
// console.log(https);

//get Request
// https.get('https://jsonplaceholder.typicode.com/posts', (res) => {
//     let data = '';
//     res.on('data', (chunk) => {
//         data += chunk;
//     });

//     res.on('end', () => {
//         let url = JSON.parse(data)
//         console.log(url);
//     });
// })
// .on('error', (error) => {
//     console.log(error);
// });

// Post Request
// const data = JSON.stringify({
//     id: 101,
//     title: 'foo',
//     body: 'bar',
//     userId: 1  
// })

// const options = {
//     hostname: 'jsonplaceholder.typicode.com',
//     path: '/posts',
//     method: 'POST',
//     header: {
//         'Content-Type': 'application/json'
//     }
// }

// const req = https.request(options, (res) => {
//     let data = [];
//     console.log("Status Code:", res.statusCode);

//     res.on('data', (chunk) => {
//         data += chunk;
//     })

//     res.on('end', () => {
//         console.log("Body:", JSON.parse(data));
//     })
// })

// req.write(data)
// req.end()

// Put Request
// const data = JSON.stringify({
//     id: 101,
//     title: 'foo',
//     body: 'bar',
//     userId: 1  
// })

// const options2 = {
//     hostname: 'jsonplaceholder.typicode.com',
//     path: '/posts',
//     method: 'PUT',
//     header: {
//         'Content-Type': 'application/json'
//     }
// }

// const req = https.request(options2, (res) => {
//     let data = '';
//     console.log("Status Code:", res.statusCode);

//     res.on('data', (chunk) => {
//         data += chunk;
//     })

//     res.on('end', () => {
//         console.log("Body:", JSON.parse(data));
//     })
// })

// req.write(data)
// req.end()

// Delete Request 
const data = JSON.stringify({
    id: 101,
    title: 'foo',
    body: 'bar',
    userId: 1  
})

const options2 = {
    hostname: 'jsonplaceholder.typicode.com',
    path: '/posts',
    method: 'PUT',
    header: {
        'Content-Type': 'application/json'
    }
}

const req = https.request(options2, (res) => {
    let data = '';
    console.log("Status Code:", res.statusCode);

    res.on('data', (chunk) => {
        data += chunk;
    })

    res.on('end', () => {
        console.log("Body:", JSON.parse(data));
    })
})

req.write(data)
req.end()

