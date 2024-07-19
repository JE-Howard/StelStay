import { Navigate } from 'react-router-dom'

//Redirects the user to the welcome screen if the path they select is not routed to anything.
export function NotFound () {
  return (
    <Navigate to='/' />
  )
}
