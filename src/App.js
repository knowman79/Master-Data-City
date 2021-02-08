import './App.css';
import React from 'react';
import { Button } from 'antd';
import { Layout, Row, Col, Input, Table, Tag, Space } from 'antd';
import {
  DeploymentUnitOutlined,
  AudioOutlined,
  QuestionCircleOutlined,
  CaretDownOutlined,
  CommentOutlined,
  NotificationOutlined
} from '@ant-design/icons';
const { Header, Content } = Layout;
const { Search } = Input;
const onSearch = value => console.log(value);
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'City',
    dataIndex: 'city',
    key: 'city',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    name: 'Arima',
    age: 30,
    city: 'New York',
    tags: ['nice', 'teacher'],
  },
  {
    key: '2',
    name: 'Touka',
    age: 22,
    city: 'London',
    tags: ['Good', 'developer'],
  },
  {
    key: '3',
    name: 'Kaneki',
    age: 23,
    city: 'Madrid',
    tags: ['cool', 'developer'],
  },
  {
    key: '4',
    name: 'Hinami',
    age: 25,
    city: 'Sidney',
    tags: ['loser'],
  },
];

function App() {
  return (
    <div className="App">
        <Header>
          <Row>
            <Col span={1}>
              <DeploymentUnitOutlined
              style={{
                fontSize: 30,
                color: '#ffffff',
              }}/>
            </Col>
            <Col span={1}>
              <QuestionCircleOutlined
              style={{
                fontSize: 24,
                color: '#ffffff',
                marginLeft: 969
              }}/>
            </Col>
            <Col span={1}
            style={{
              fontSize: 16,
              color: '#ffffff',
              marginTop: -4,
              marginLeft: 949
            }}>
              Cheese
            </Col>
            <Col span={1}>
              <CaretDownOutlined
              style={{
                fontSize: 18,
                color: '#ffffff',
              }}/>
            </Col>
            <Col span={1}>
              <CommentOutlined
              style={{
                fontSize: 24,
                color: '#ffffff',
              }}/>
            </Col>
            <Col span={1}>
              <NotificationOutlined
              style={{
                fontSize: 24,
                color: '#ffffff',
              }}/>
            </Col>
          </Row>
        </Header>
          <Row style={{ paddingTop: 5, paddingBottom: 5, background: 'cadetblue' }}>
            <Col span={2}>Dashboard</Col>
            <Col span={2}>Monitoring</Col>
            <Col span={2}>Schedule</Col>
            <Col span={2}>Master Data</Col>
          </Row>
      <Content  style={{ marginTop: 10 }}>
        <Row style={{ marginLeft: 60 }}>
          <Col span={1} style={{ marginTop: 5, fontStyle: 'bold' }}>
            <div>
              City
            </div>
          </Col>
          <Col span={1}>
            <Button type="primary">+ Create</Button>
          </Col>
          <Col span={22}>
          <Search
            placeholder="search"
            enterButton="Search"
            suffix={suffix}
            onSearch={onSearch}
            style={{ width: 200, marginLeft: 850 }}
          />
          </Col>
        </Row>
      </Content>
      <Table columns={columns} dataSource={data} style={{ marginTop: 20, marginLeft: 75, marginRight: 75 }}/>
    </div>
  );
}

export default App;
