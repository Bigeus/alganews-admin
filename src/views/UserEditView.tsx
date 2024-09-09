import { useCallback, useEffect } from "react";
import UserForm from "../app/features/UserForm";
import useUser from "../core/hooks/useUser";
import { Card, notification, Skeleton } from "antd";
import { User, UserService } from "danielbonifacio-sdk";
import moment from "moment";
import { Redirect, useHistory, useParams } from "react-router-dom";
import NotFoundError from "../app/Components/NotFoundError";
import usePageTitle from "../core/hooks/usePageTitle";
import useBreadcrumb from "../core/hooks/useBreadcrumb";

export default function UserEditView() {
    usePageTitle('Edição de usuário');
    useBreadcrumb('Usuários/Edição')

    const { user, fetchUser, notFound } = useUser()
    const params = useParams<{ id: string }>()
    const history = useHistory();

    useEffect(() => {
        if (!isNaN(Number(params.id)))
            fetchUser(Number(params.id));
    }, [fetchUser, params.id])

    const transformUserData = useCallback((user: User.Detailed) => {
        return {
            ...user,
            createdAt: moment(user.createdAt),
            updatedAt: moment(user.updatedAt),
            birthdate: moment(user.birthdate),
        };
    }, []);

    if (isNaN(Number(params.id)))
        return <Redirect to={'/usuarios'} />

    if (notFound)
        return <Card>
            <NotFoundError actionDestination="/usuarios"
                actionTitle="Voltar para lista de usuários" title="Usuário não encontrado" />;
        </Card>

    async function handleUserUpdate(user: User.Input) {
        await UserService.updateExistingUser(Number(params.id), user).then(() => {
            history.push('/usuarios');
            notification.success({
                message: 'Usuário atualizado com sucesso'
            })
        })
    }

    if (!user) {
        return <Skeleton />
    }

    return (
        <>
            <UserForm onUpdate={handleUserUpdate} user={transformUserData(user)} />
        </>
    )
}