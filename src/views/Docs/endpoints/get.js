import { API_HOST } from '../../../constants'

const bash = `\
curl ${API_HOST}/users/3 \\
  --header "Accept: application/json"`

const javascript = `\
const axios = require('axios');
const user = axios.get('${API_HOST}/users3');
console.log(user);`

const go = `\
package main

import (
  "fmt"
  "ioutil"
  "net/http"
)

func main() {
  res, err := http.Get("${API_HOST}/users/3")
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
$req = curl_init('${API_HOST}/users/3');
curl_setopt($req, CURLOPT_RETURNTRANSFER, true);
curl_setopt($req, CURLOPT_HTTPHEADER, array(
  'Accept: application/json',
));

$res = curl_exec($req);
print($res);`

const get = {
  endpoint: '/users/:id',
  method: 'GET',
  description: 'Retrieve a single user',
  bash,
  javascript,
  go,
  php,
  exampleStatus: '200 OK',
  exampleResponse: {
    id: 3,
    name: 'Alexa Gates',
    email: 'agates@example.com',
    phone: '201-555-6789'
  }
}

export default get
