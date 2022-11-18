function Error({ statusCode, errorMessage }) {
  return (
    <p style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <p>
        {statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}
      </p>
      <p>{errorMessage ?? false}</p>
    </p>
  )
}

Error.getInitialProps = ({ res, ...rest }) => {
  // console.log(Object.keys(rest.err))
  // console.log(Object.keys(rest.req), rest.req)
  console.log(Object.keys(res), res)
  const statusCode = res ? res.statusCode : 404
  return { statusCode }
}

export default Error
