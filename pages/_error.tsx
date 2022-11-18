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
  const debug = JSON.stringify(rest, null, 2)
  console.log(debug)
  const statusCode = res ? res.statusCode : 404
  return { statusCode }
}

export default Error
