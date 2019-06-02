import React, {useState} from 'react';
import { Button, message, Layout, Row, Col } from 'antd'
import SDK from 'apis/SDK';
import IconexConnect from 'apis/IconexConnect';
import CONST from './constants';
import { AdPage } from 'components'
import './App.css';

//define
const { Content } = Layout;

function App() {
  const [ mode, setMode ] = useState( CONST.MODE['LOG_OUT'])
  const [ myAddress, setMyAddress ] = useState('')

  async function getAddress  ()  { // 로그인
    const { iconService, callBuild } = SDK
    const myAddress = await IconexConnect.getAddress()
    setMyAddress(myAddress)
    setMode(CONST.MODE['LOG_IN'])
    message.success(`Hello, ${myAddress}.`)
  }
  return (
    <Layout>
      <Content>
        <Row type="flex" justify="center" align="middle" className={`page-wrap ${mode === CONST.MODE['LOG_OUT'] ? 'cow-bg' : 'cow-bg'} `}>
          <Col>
          {mode === CONST.MODE['LOG_IN'] ? <AdPage myAddress={myAddress}/> :  
            <>
              <h1 style={{color: '#ffffff',fontSize:40, marginBottom:2, fontFamily: 'cursive'}}>Cash Cow</h1>
              <h2 style={{color: '#ffffff', fontSize:20, fontFamily: 'cursive'}}> Click & Get Coin</h2>
              <Button size="large" onClick={getAddress} style={{fontFamily: 'initial'}}>ICONex 연동하기</Button>
            </>
          }
          </Col>
        </Row>
    </Content>
    </Layout>
  );
}

export default App;
