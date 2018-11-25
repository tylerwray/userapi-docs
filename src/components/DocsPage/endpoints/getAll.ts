const TRY_ME_URL = 'https://api.userapi.io/v1/users'

const request = `\
curl ${TRY_ME_URL} \\
  --header "Accept: application/json"`

const getAll = {
  endpoint: '/users',
  method: 'GET',
  tryMeUrl: TRY_ME_URL,
  description: 'List all the users',
  request,
  response: {
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
