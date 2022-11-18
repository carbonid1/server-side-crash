export default function Custom500(props) {
  console.log(Object.keys(props))
  return <h1>500 - Server-side error occurred</h1>
}
