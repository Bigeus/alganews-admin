import EntryCRUD from '../app/features/EntryCRUD';
import useBreadcrumb from '../core/hooks/useBreadcrumb';

export default function CashFlowRevenuesView() {
  useBreadcrumb('Fluxo de Caixa/Receitas')
  return <EntryCRUD type={'REVENUE'} />;
}