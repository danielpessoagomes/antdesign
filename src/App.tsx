import { Col, Row, Table } from 'antd';
import { useEffect, useState } from 'react';
import './index.css';
import { User } from './../sdk/@types/User';
import UserService from './../sdk/services/User.service';

function App(): JSX.Element {
  const [users, setUsers] = useState<User.Summary[]>([]);

  useEffect(() => {
    UserService.getAllUsers().then(setUsers);
  }, []);

  return (
    <div>
      <Row gutter={8} justify={'center'}>
        <Col span={24}>
          <Table
            dataSource={users}
            columns={[
              {
                dataIndex: 'name',
                title: 'Nome',
              },
              {
                dataIndex: 'email',
                title: 'E-mail',
              },
            ]}
          />
        </Col>
      </Row>
    </div>
  );
}

export default App;
