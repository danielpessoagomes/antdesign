import { Col, Row, Typography } from 'antd';
import { useState } from 'react';
import './index.css';

const { Title, Paragraph } = Typography;

function App() {
  const [editableStr, setEditableStr] = useState(
    'This is an editable text.'
  );

  return (
    <div>
      <Row gutter={8} justify={'center'}>
        <Col span={12}>
          <Title>Título de nível 1</Title>
          <Title level={2}>Título de nível 2</Title>
          <Title level={3}>Título de nível 3</Title>
          <Title level={4}>Título de nível 4</Title>
          <Title level={5}>Título de nível 5</Title>
        </Col>
        <Col span={12}>
          <Paragraph
            editable={{ onChange: setEditableStr }}
          >
            {editableStr}
          </Paragraph>
          <Paragraph ellipsis={{ rows: 3 }}>
            Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Perferendis iste odio qui
            voluptas temporibus neque ex modi vero corrupti
            totam dolorem consectetur dolores porro saepe
            cumque velit ad commodi fuga ipsam, rerum dolor
            sunt laborum? Temporibus, saepe unde ratione,
            laudantium a nihil dolor id architecto
            consequuntur atque, voluptas labore. Eaque
            repudiandae repellendus dolores impedit magni
            cupiditate velit eligendi quaerat. Nemo,
            delectus maiores dicta ex fugit soluta beatae
            praesentium porro voluptates molestiae nobis
            voluptate impedit quibusdam temporibus.
            Exercitationem tempora nulla molestiae possimus
            explicabo nesciunt culpa esse, aliquam
            necessitatibus quae error cum eius reiciendis,
            est asperiores beatae porro eveniet dolores.
            Officia, nostrum!
          </Paragraph>
        </Col>
      </Row>
    </div>
  );
}

export default App;
