import PaymentForm from "../app/features/PaymentForm";
import useBreadcrumb from "../core/hooks/useBreadcrumb";

export default function PaymentCreateView(){
    useBreadcrumb('Pagamentos/Cadastro')
    return <>
        <PaymentForm />
    </>
}