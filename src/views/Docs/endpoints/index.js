const HOST = 'https://api.userapi.io'

const endpoints = [
  {
    endpoint: '/users',
    method: 'GET',
    description: 'List all the users',
    bash: {
      example: `curl ${HOST}/users`
    },
    javascript: {
      example: `\
const axios = require('axios');
const users = axios.get('${HOST}/users');
console.log(users);`
    },
    go: {
      example: `\
package main

import (
  "fmt"
  "ioutil"
  "net/http"
)

func main() {
  res, err := http.Get("${HOST}/users")
  if err != nil {
      panic(err)
  }
  defer res.Body.Close()

  bodyBytes, err := ioutil.ReadAll(res.Body)
  if err != nil {
      panic(err)
  }

  bodyString := string(bodyBytes)
  fmt.Println(bodyString)
}`
    },
    php: {
      example: `\
$req = curl_init('${HOST}/users');
curl_setopt($req, CURLOPT_RETURNTRANSFER, true);

$res = curl_exec($req);
print($res);`
    },
    exampleResponse: {
      data: [
        {
          id: 1,
          name: 'Stephen Smart',
          email: 'ssmart007@example.com',
          phone: '801-555-1234'
        },
        {
          id: 2,
          name: 'Austin Lee',
          email: 'alee@example.com',
          phone: '904-890-5555'
        },
        {
          id: 3,
          name: 'Alexa Gates',
          email: 'agates@example.com',
          phone: '201-555-6789'
        }
      ]
    }
  },
  {
    endpoint: '/users/:id',
    method: 'GET',
    description: 'Retrieve a single user',
    bash: {
      example: `\
curl ${HOST}/users/3 \\
   -H "Content-Type: application/json"`
    },
    javascript: {
      example: `\
const axios = require('axios');
const user = axios.get('${HOST}/users3');
console.log(user);`
    },
    go: {
      example: `\
package main

import (
  "fmt"
  "ioutil"
  "net/http"
)

func main() {
  res, err := http.Get("${HOST}/users/3")
  if err != nil {
      panic(err)
  }
  defer res.Body.Close()

  bodyBytes, err := ioutil.ReadAll(res.Body)
  if err != nil {
      panic(err)
  }

  bodyString := string(bodyBytes)
  fmt.Println(bodyString)
}`
    },
    php: {
      example: `\
$req = curl_init('${HOST}/users/3');
curl_setopt($req, CURLOPT_RETURNTRANSFER, true);

$res = curl_exec($req);
print($res);`
    },
    exampleResponse: {
      id: 3,
      name: 'Alexa Gates',
      email: 'agates@example.com',
      phone: '201-555-6789'
    }
  },
  {
    endpoint: '/users',
    method: 'POST',
    description: 'Create a user',
    bash: {
      example: `\
curl ${HOST}/users \\
   -H "Content-Type: application/json" \\
   -X POST \\
   -d '{"name": "James Brown","email":"jbrown45@example.com", "phone": "224-555-6798"}'`,
    },
    javascript: {
      example: `\
const axios = require('axios');
const user = axios.post('${HOST}/users', {
  name: 'James Brown',
  email: 'jbrown45@example.com',
  phone: '224-555-6798'
});
console.log(user);`
    },
    go: {
      example: `\
package main

import (
    "bytes"
    "fmt"
    "ioutil"
)

func main() {
  body := []byte("{\\"name\\": \\"James Brown\\", \\"email\\": \\"jbrown45@example.com\\", \\"phone\\": \\"224-555-6798\\"}")

  res, err := http.Post("${HOST}/users", "application/json", bytes.NewBuffer(body))
  if err != nil {
    panic(err)
  }
  defer res.Body.Close()

  bodyBytes, err := ioutil.ReadAll(res.Body)
  if err != nil {
      panic(err)
  }

  bodyString := string(bodyBytes)
  fmt.Println(bodyString)
}`
    },
    php: {
      example: `$data = array(
  'name' => 'James Brown',
  'email' => 'jbrown45@example.com',
  'phone' => '224-555-6798'
);
$data_string = json_encode($data);

$req = curl_init('${HOST}/users');
curl_setopt($req, CURLOPT_CUSTOMREQUEST, 'POST');
curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
curl_setopt($req, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Content-Type: application/json',
    'Content-Length: ' . strlen($data_string))
);

$res = curl_exec($req);
print($res);`
    },
    exampleResponse: {
      id: 21,
      name: 'James Brown',
      email: 'jbrown45@example.com',
      phone: '224-555-6798'
    }
  }
]

export default endpoints
