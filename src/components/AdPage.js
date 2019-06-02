import React , {useState, useEffect} from 'react'
import { Row, Col, Card } from 'antd';


import SDK from 'apis/SDK';
import IconexConnect from 'apis/IconexConnect';

import ad1 from 'assets/images/ad1.png'
import ad2 from 'assets/images/ad2.png'
import ad3 from 'assets/images/ad3.png'
import ad4 from 'assets/images/ad4.png'

const { Meta } = Card;

function AdPage(props) {
  const [clickCnt, setClickCnt] = useState(0)
  const [myAddress] = useState(props.myAddress)
  const [myCnt, setMyCnt] = useState(0)
  useEffect(() => {
      getCntClick()
  },[]);
  useEffect(()=>{
    console.log(myAddress)
    getCntClick()
  })

  async function getCntClick() {
    const myCnt = await SDK.iconService.call(
      SDK.callBuild({
        from: myAddress,
        methodName: 'get_cnt_click',
        params: {},
        to: window.CONTRACT_ADDRESS,
      })
    ).execute()

    setMyCnt(Number(myCnt))
  }

  async function click() {
    const { sendTxBuild } = SDK
    const txObj = sendTxBuild({
      from: myAddress,
      to: window.CONTRACT_ADDRESS,
      methodName: 'click'
    })
    const tx = await IconexConnect.sendTransaction(txObj)
    console.log(tx)
    if (tx){
      getCntClick()
    }
  }
  return (
    <div>
      <Row gutter={50}>
        <Col span={12}>
          <Card title="click 누적횟수">
            {myCnt}
          </Card>
          
        </Col>
        <Col span={12}>
          <Card title="이번달 reward (단위:ICX)">
          {(myCnt*0.1).toFixed(1)}
          </Card>
        </Col>
      </Row>
      <Row gutter={30} className="ad-wrap">
        <Col span={6}>
          <Card
            hoverable
            onClick={()=>click()}
            cover={
              <div className="ad-image" style={{backgroundImage: `url(${ad1})`}} />
            }>
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>
        <Col span={6}>
          <Card
            hoverable
            onClick={()=>click()}
            cover={
              <div className="ad-image" style={{backgroundImage: `url(${ad2})`}} />
            }>
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>
        <Col span={6}>
          <Card
            hoverable
            onClick={()=>click()}
            cover={
              <div className="ad-image" style={{backgroundImage: `url(${ad3})`}} />
            }>
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>
        <Col span={6}>
          <Card
            hoverable
            onClick={()=>click()}
            cover={
              <div className="ad-image" style={{backgroundImage: `url(${ad4})`}} />
            }>
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default AdPage;