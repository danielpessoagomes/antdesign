import { Col, Row, Input } from 'antd';
import { useState } from 'react';
import './index.css';

function App(): JSX.Element {
  const [name, setName] = useState('');

  return (
    <div>
      <Row gutter={8} justify={'center'}>
        <Col span={4}>
          <Input
            placeholder={'E.g.: Julio Costa'}
            size={'large'}
            onChange={(e) => {
              setName(e.currentTarget.value);
            }}
          />
        </Col>
        <Col span={4}>{name}</Col>
      </Row>
    </div>
  );
}

export default App;
