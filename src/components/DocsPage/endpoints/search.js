const TRY_ME_URL = 'https://api.userapi.io/v1/users/search/gates'

const request = `\
curl ${TRY_ME_URL} \\
  --header "Accept: application/json"`

const search = {
  endpoint: '/users/search/:keyword',
  method: 'GET',
  tryMeUrl: TRY_ME_URL,
  description: 'Search for a user',
  request,
  response: {
    id: 3,
    name: 'Alexa Gates',
    email: 'agates@example.com',
    phone: '201-555-6789'
  }
}

export default search
