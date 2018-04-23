import { API_HOST } from '../../../constants'

const bash = `\
curl ${API_HOST}/users \\
  --request POST \\
  --header "Accept: application/json" \\
  --header "Content-Type: application/json" \\
  --data '{"name": "James Brown","email":"jbrown45@example.com", "phone": "224-555-6798"}'`

const javascript = `\
const axios = require('axios');
const user = axios.post('${API_HOST}/users', {
  name: 'James Brown',
  email: 'jbrown45@example.com',
  phone: '224-555-6798'
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
  body := []byte("{\\"name\\": \\"James Brown\\", \\"email\\": \\"jbrown45@example.com\\", \\"phone\\": \\"224-555-6798\\"}")

  res, err := http.Post("${API_HOST}/users", "application/json", bytes.NewBuffer(body))
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
  'name' => 'James Brown',
  'email' => 'jbrown45@example.com',
  'phone' => '224-555-6798'
);
$data_string = json_encode($data);

$req = curl_init('${API_HOST}/users');
curl_setopt($req, CURLOPT_CUSTOMREQUEST, 'POST');
curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
curl_setopt($req, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
  'Content-Type: application/json',
  'Accept: application/json',
  'Content-Length: ' . strlen($data_string))
);

$res = curl_exec($req);
print($res);`

const post = {
  endpoint: '/users',
  method: 'POST',
  description: 'Create a user',
  bash,
  javascript,
  go,
  php,
  exampleStatus: '201 Created',
  exampleResponse: {
    id: 21,
    name: 'James Brown',
    email: 'jbrown45@example.com',
    phone: '224-555-6798'
  }
}

export default post
