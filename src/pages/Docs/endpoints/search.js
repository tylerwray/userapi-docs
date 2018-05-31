import { API_HOST } from '../../../constants'

const TRY_ME_URL = `${API_HOST}/users/search/gates`

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

const php = `
$req = curl_init('${TRY_ME_URL}');
curl_setopt($req, CURLOPT_RETURNTRANSFER, true);
curl_setopt($req, CURLOPT_HTTPHEADER, array(
  'Accept: application/json',
));

$res = curl_exec($req);
print($res);`

const search = {
  endpoint: '/users/search/:keyword',
  method: 'GET',
  tryMeUrl: TRY_ME_URL,
  description: 'Search for a user',
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

export default search
