import { API_HOST } from '../../../constants'

const TRY_ME_URL = `${API_HOST}/users`
const bash = `\
curl ${TRY_ME_URL} \\
  --header "Accept: application/json"`

const javascript = `\
const axios = require('axios');
const users = axios.get('${TRY_ME_URL}');
console.log(users);`

const go = `\
package main

import (
  "fmt"
  "ioutil"
  "net/http"
)

func main() {
  res, err := http.Get("${TRY_ME_URL}")
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

const php = `\
$req = curl_init('${TRY_ME_URL}');
curl_setopt($req, CURLOPT_RETURNTRANSFER, true);
curl_setopt($req, CURLOPT_HTTPHEADER, array(
  'Accept: application/json',
));

$res = curl_exec($req);
print($res);`

const getAll = {
  endpoint: '/users',
  method: 'GET',
  tryMeUrl: TRY_ME_URL,
  description: 'List all the users',
  bash,
  javascript,
  go,
  php,
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
}

export default getAll
