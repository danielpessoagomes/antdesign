import { Form, Col, Row, Input, Button, Table } from 'antd';
import { User, UserService } from 'dginfope-sdk';
import { useEffect, useState } from 'react';
import './index.css';

function App(): JSX.Element {
  const [users, setUsers] = useState<User.Summary[]>([]);

  useEffect(() => {
    UserService.getAllUsers().then(setUsers);
  }, []);

  return (
    <>
      <Row gutter={8}>
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
                title: 'Email',
              },
            ]}
          />
        </Col>
      </Row>
      <div>
        <Form
          onFinish={(form) => {
            console.log(form);
          }}
          layout={'vertical'}
          autoComplete={'off'}
        >
          <Row gutter={8}>
            <Col span={8}>
              <Form.Item
                label={'Primeiro Nome'}
                name={'primeiroNome'}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label={'Ultimo Nome'}
                name={'ultimoNome'}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={16}>
              <Form.Item
                label={'Email'}
                name={'email'}
                rules={[
                  {
                    required: true,
                    message: 'E-mail é obrigatório',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Button type={'primary'} htmlType={'submit'}>
                Enviar dados
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
}

export default App;
