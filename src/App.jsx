// src/App.jsx
import React from "react";
// import Saludo from "./components/Saludo";
// import BlockTailwind from "./components/BlockTailwind";
import Card from "./components/Card";
import Container from "./components/layout/Container";
import Row from "./components/layout/Row";
import Col from "./components/layout/Col";

function App() {
  return (
    <>
      <Container maxWidth="full" className="border border-red-500">
            <Container maxWidth="5xl" className="border border-red-800 p-1">
                  <Row className="flex items-center justify-center" alignItems="center" justifyContent="center" direction="row">
                      
                    {/* <BlockTailwind nombre="Francisco" /> */}
                    {/* <Saludo nombre="Francisco" /> */}
                      
                    <Col cols={6}>
                          Children
                    </Col>
                    <Col cols={6}>
                        <div className="p-1 border-blue-300 border bg-blue-100">2</div>
                    </Col>
                    <Col cols={6}>
                        <div className="p-1 border-blue-300 border bg-blue-100">3</div>
                    </Col>
                    <Col cols={6}>
                        <div className="p-1 border-blue-300 border bg-blue-100">4</div>
                    </Col>
                    <Col cols={12}>
                        <div className="p-1 border-blue-300 border bg-blue-100">Full</div>
                    </Col>
                      
                      <Col cols={3}>
                        <div className="p-1 border-blue-300 border bg-blue-100">4</div>
                    </Col>
                      <Col cols={3}>
                        <div className="p-1 border-blue-300 border bg-blue-100">4</div>
                    </Col>
                      <Col cols={3}>
                        <div className="p-1 border-blue-300 border bg-blue-100">4</div>
                    </Col>
                      <Col cols={3}>
                        <div className="p-3 border-blue-300 border bg-blue-100">4</div>
                    </Col>
                    <Col cols={'auto'}>
                        <div className="p-3 border-blue-300 border">Autooo000 width a lo que de</div>
                      </Col>
                </Row>
            </Container>
        </Container>
    </>
  );
}

export default App;
