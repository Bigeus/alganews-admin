import EntryCRUD from '../app/features/EntryCRUD';
import useBreadcrumb from '../core/hooks/useBreadcrumb';

export default function CashFlowExpensesView() {
  useBreadcrumb('Fluxo de Caixa/Despesas')
  return <EntryCRUD type={'EXPENSE'} />;
}