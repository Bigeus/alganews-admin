import UserForm from "../app/features/UserForm";
import useBreadcrumb from "../core/hooks/useBreadcrumb";
import usePageTitle from "../core/hooks/usePageTitle";

export default function UserCreateView(){
   usePageTitle('Cadastro de usuário');
   useBreadcrumb('Usuários/Cadastro')
   return <>
        <UserForm />
    </>
}