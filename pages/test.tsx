import { GetServerSideProps } from 'next'

const Page = () => {
  return <div>This is test page rendered</div>
}

export const getServerSideProps: GetServerSideProps = async ({ res, req }) => {
  try {
    // make an API call
    throw new Error('The API is down at the moment')
  } catch (error) {
    // if (case 1) redirect to /login
    // if (case 2) redirect to /sign-up
    // else rethrow the error so it can be handled by the error page
    throw error
  }
}

export default Page
