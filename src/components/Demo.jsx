import React from 'react';
import { Badge, Space } from 'antd';

const App = () => (
  <>
    <Space direction="vertical">
      <Badge color="green" text="Completed" />
      <Badge color="yellow" text="Pending" />
      <Badge color="blue" text="Preparing" />
    </Space>
  </>
);

export default App;
