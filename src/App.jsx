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

    const blue = 'p-3 bg-blue-100 border border-blue-500'

  return (
    <>
      <Container maxWidth="full" className="border border-red-500">
            <Container maxWidth="5xl" className="border border-red-800 p-1">
                  <Row className="flex items-center justify-center" alignItems="center" justifyContent="center" direction="row">
                      
                    
                    <Col className="w-11/12">
                        <div className="{class}">11/12</div>
                        <div className={blue}>No funciona 12/12</div>
                    </Col>
                    <Col className="w-full">
                        <div className={blue}>full</div>
                    </Col>
                    <Col className="w-6/12">
                        <div className={blue}>50%</div>
                    </Col>
                    <Col className="w-6/12">
                        <div className={blue}>50%</div>
                    </Col>
                   
                    <Col className="w-auto">
                        <div className={blue}>W-AUTO</div>
                    </Col>
                    <Col className="w-auto">
                        <div className={blue}>W-AUTO</div>
                      </Col>
                    {/* <Col>Col no props</Col> */}
                    {/* <Col>
                        <BlockTailwind nombre="Francisco" />
                        <ProfileCard nombre="Francisco" />
                      </Col> */}
                  </Row>
                 
                  
                  <Row>
                      <Col className="w-11/12 sm:w-3/12 md:w-11/12 lg:w-11/12 xl:w-6/12 2xl:w-3/12">
                      <div className={blue}>6{"w-11/12 sm:w-3/12 md:w-11/12 lg:w-11/12 xl:w-6/12 l:w-11/12"}</div>
                    </Col>
                    <Col className="w-11/12 sm:w-3/12 md:w-11/12 lg:w-11/12 xl:w-6/12 2xl:w-3/12">
                      <div className={blue}>6{"w-11/12 sm:w-3/12 md:w-11/12 lg:w-11/12 xl:w-6/12 l:w-11/12"}</div>
                    </Col>
                </Row>
            </Container>
        </Container>
          <BreakpointDetector></BreakpointDetector>

        <Container>
            <Row>
                <Col className="w-full">
                    <h3 className="mt-6">GRID</h3>
                    <div class="grid grid-cols-3 gap-4">
                        <div className={blue}>Columna 1</div>
                        <div className={blue}>Columna 2</div>
                        <div className={blue}>Columna 3</div>
                        <div className={blue}>Columna 4</div>
                        <div className={blue}>Columna 5</div>
                        <div className={blue}>Columna 6</div>
                    </div>
                </Col>
              </Row>
        </Container>
    </>
  );
}

export default App;
