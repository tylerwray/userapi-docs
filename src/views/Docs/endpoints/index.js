const endpoints = [
  {
    endpoint: '/users',
    method: 'GET',
    description: 'List all the users',
    example: {
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
  },
  {
    endpoint: '/users/:id',
    method: 'GET',
    description: 'Retrieve a single user',
    example: {
      id: 3,
      name: 'Alexa Gates',
      email: 'agates@example.com',
      phone: '201-555-6789'
    }
  }
]

export default endpoints
