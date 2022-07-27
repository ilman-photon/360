import AuthLayout from '../../../components/templates/authLayout'
import Register from "../../../components/organisms/Register/register";

export default function CreateAccountPage() {
  return (
    <section>
      <Register />
    </section>
  )
}

CreateAccountPage.getLayout = function getLayout(page) {
  return (
    <AuthLayout>
      {page}
    </AuthLayout>
  )
}