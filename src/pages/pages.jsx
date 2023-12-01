import { FormLogin } from "../components/fragments/formLogin"
import { AuthLayout } from "../components/layouts/authLayout"

export const LoginPage = ({}) => {
    return(
        <AuthLayout>
            <FormLogin />
        </AuthLayout>
    )
}