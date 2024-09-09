import { Col, Row } from "antd";
import UserList from "../app/features/UserList";

export default function UserListView() {
    return <Row>
        <Col xs={24}>
            <UserList />
        </Col>
    </Row>
}