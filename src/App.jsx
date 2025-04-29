// src/App.jsx
import React from "react";
import ProfileCard from "./components/ProfileCard";
import BlockTailwind from "./components/BlockTailwind";
import Card from "./components/Card";
import Container from "./components/layout/Container";
import Row from "./components/layout/Row";
import Col from "./components/layout/Col";
import BreakpointDetector from "./components/layout/BreakpointDetector";

function App() {
  return (
    <>
      <Container maxWidth="full" className="border border-red-500">
            <Container maxWidth="5xl" className="border border-red-800 p-1">
                  <Row className="flex items-center justify-center" alignItems="center" justifyContent="center" direction="row">
                      
                    <Col cols={6}>
                          Children
                    </Col>
                    <Col cols={6}>
                        <div className="p-1 bg-blue-100">2</div>
                    </Col>
                    <Col cols={6}>
                        <div className="p-1 bg-blue-100">3</div>
                    </Col>
                    <Col cols={6}>
                        <div className="p-1 bg-blue-100">4</div>
                    </Col>
                    <Col cols={12}>
                        <div className="p-1 bg-blue-100">Full</div>
                    </Col>
                      
                      <Col cols={3}>
                        <div className="p-1 bg-blue-100">4</div>
                    </Col>
                      <Col cols={3}>
                        <div className="p-1 bg-blue-100">4</div>
                    </Col>
                      <Col cols={3}>
                        <div className="p-1 bg-blue-100">4</div>
                    </Col>
                      <Col cols={3}>
                        <div className="p-3 bg-blue-100">4</div>
                    </Col>
                    <Col cols={'auto'}>
                        <div className="p-3 ">Autooo000 width a lo que de</div>
                      </Col>
                    {/* <Col>Col no props</Col> */}
                    {/* <Col>
                        <BlockTailwind nombre="Francisco" />
                        <ProfileCard nombre="Francisco" />
                      </Col> */}
                  </Row>
                  <Row>
                      <h3>EEOO__56</h3>
                  </Row>
                  
                <Row>
                    <Col cols={{  xs:'12', sm: '6', md: '12', lg: '12', xl : '1', '2xl' : '12' }} className="p-4">
                        { "xs:12, sm: '6', md: '12', lg: '12', 'xl' : '1', '2xl' : '12' " }
                    </Col>
                    <Col cols={{ xs:'12', sm: '6', md: '4', lg: '12' }} className="p-4">
                        { "xs:12, sm: '6', md: '4', lg: '12'" }
                        {/* Generará las clases literales "sm:w-6/12 md:w-4/12 lg:w-3/12" */}
                    </Col>
                </Row>
            </Container>
        </Container>
        <BreakpointDetector></BreakpointDetector>
    </>
  );
}

export default App;
