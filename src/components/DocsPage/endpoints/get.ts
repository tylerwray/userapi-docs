const TRY_ME_URL = 'https://api.userapi.io/v1/users/3'

const request = `\
curl ${TRY_ME_URL} \\
  --header "Accept: application/json"`

const get = {
  endpoint: '/users/:id',
  method: 'GET',
  tryMeUrl: TRY_ME_URL,
  description: 'Retrieve a single user',
  request,
  response: {
    data: {
      id: 3,
      name: 'Alexa Gates',
      email: 'agates@example.com',
      phone: '201-555-6789'
    }
  }
}

export default get
