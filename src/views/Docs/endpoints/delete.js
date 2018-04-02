import { API_HOST } from '../../../constants'

const bash = `\
curl ${API_HOST}/users/3 \\
  --request DELETE`

const javascript = `\
const axios = require('axios');
const res = axios.delete('${API_HOST}/users/3');
console.log(res);`

const go = `\
package main

import (
  "fmt"
  "ioutil"
  "net/http"
)

func main() {
  res, err := http.Delete("${API_HOST}/users/3")
  if err != nil {
      panic(err)
  }

  fmt.Println(res)
}`

const php = `\
$req = curl_init('${API_HOST}/users/3');
curl_setopt($req, CURLOPT_RETURNTRANSFER, true);
curl_setopt($req, CURLOPT_CUSTOMREQUEST, 'DELETE');

$res = curl_exec($req);
print($res);`

const get = {
  endpoint: '/users/:id',
  method: 'DELETE',
  description: 'Remove a single user',
  bash,
  javascript,
  go,
  php,
  exampleStatus: '204 No Content',
  exampleResponse: ''
}

export default get
