import { API_HOST } from '../../../constants'

const bash = `\
curl ${API_HOST}/users/3 \\
  --request PATCH \\
  --header "Content-Type: application/json" \\
  --header "Accept: application/json" \\
  --data '{"name": "Billy Gates","email":"bgates@example.com", "phone": "543-555-0011"}'`

const javascript = `\
const axios = require('axios');
const user = axios.PATCH('${API_HOST}/users/3', {
  name: 'Billy Gates',
  email: 'bgates@example.com',
  phone: '543-555-0011'
});
console.log(user);`

const go = `\
package main

import (
    "bytes"
    "fmt"
    "ioutil"
)

func main() {
  body := []byte("{\\"name\\": \\"Billy Gates\\", \\"email\\": \\"bgates@example.com\\", \\"phone\\": \\"543-555-0011\\"}")

  res, err := http.Patch("${API_HOST}/users/3", "application/json", bytes.NewBuffer(body))
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

const php = `$data = array(
  'name' => 'Billy Gates',
  'email' => 'bgates@example.com',
  'phone' => '543-555-0011'
);
$data_string = json_encode($data);

$req = curl_init('${API_HOST}/users/3');
curl_setopt($req, CURLOPT_CUSTOMREQUEST, 'PATCH');
curl_setopt($ch, CURLOPT_PATCHFIELDS, $data_string);
curl_setopt($req, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
  'Content-Type: application/json',
  'Accept: application/json',
  'Content-Length: ' . strlen($data_string))
);

$res = curl_exec($req);
print($res);`

const patcn = {
  endpoint: '/users/:id',
  method: 'PATCH',
  description: 'Update a user',
  bash,
  javascript,
  go,
  php,
  exampleStatus: '200 OK',
  exampleResponse: {
    id: 3,
    name: 'Billy Gates',
    email: 'bgates@example.com',
    phone: '543-555-0011'
  }
}

export default patcn
