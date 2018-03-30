import React from 'react'
import endpoints from '../endpoints'
import Endpoint from '../../../shared/Endpoint'

const Docs = () => (
  <div>
    {endpoints.map((ep, key) => (
      <Endpoint
        key={key}
        endpoint={ep.endpoint}
        method={ep.method}
        description={ep.description}
        code={JSON.stringify(ep.example, null, '  ')} />
    ))}
  </div>
)

export default Docs
