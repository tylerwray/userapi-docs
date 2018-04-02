import { API_HOST } from '../../../constants'

const bash = `\
curl ${API_HOST}/users/search/james \\
  --header "Accept: application/json"`

const javascript = `\
const axios = require('axios');
const users = axios.get('${API_HOST}/users/search/james');
console.log(users);`

const go = `\
package main

import (
    "fmt"
    "ioutil"
)

func main() {
  res, err := http.Get("${API_HOST}/users/search/james")
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
$req = curl_init('${API_HOST}/users/search/james');
curl_setopt($req, CURLOPT_RETURNTRANSFER, true);
curl_setopt($req, CURLOPT_HTTPHEADER, array(
  'Accept: application/json',
));

$res = curl_exec($req);
print($res);`

const search = {
  endpoint: '/users/search/:keyword',
  method: 'GET',
  description: 'Search for a user',
  bash,
  javascript,
  go,
  php,
  exampleStatus: '200 OK',
  exampleResponse: {
    id: 21,
    name: 'James Brown',
    email: 'jbrown45@example.com',
    phone: '224-555-6798'
  }
}

export default search
