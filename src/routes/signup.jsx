import { createFileRoute } from '@tanstack/react-router'
import SignUp from '../pages/SignUp'

export const Route = createFileRoute('/signup')({
  component: RouteComponent,
})

function RouteComponent() {
  return <SignUp/>
}
