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
              <Container maxWidth="5xl" className="border border-red-800 bg-white p-4" >
        <Row className="flex items-center justify-center" alignItems="center" justifyContent="center" direction="row">
            {/* <BlockTailwind nombre="Francisco" /> */}
                      {/* <Saludo nombre="Francisco" /> */}
                      
                      <Col cols={6}>
                          <div className="p-3 border-blue-300 border">1</div>
                      </Col>
                      <Col cols={6}>
                          <div className="p-3 border-blue-300 border">2</div>
                      </Col>
                      <Col cols={6}>
                          <div className="p-3 border-blue-300 border">3</div>
                      </Col>
                      <Col cols={6}>
                          <div className="p-3 border-blue-300 border">4</div>
                      </Col>
                      <Col cols={12}>
                          <div className="p-3 border-blue-300 border">Full</div>
                      </Col>
                      <Col cols={'auto'}>
                          <div className="p-3 border-blue-300 border">Auto width a lo que de</div>
                      </Col>

            {/* <Card className="max-w-sm">
              <img src="https://placedog.net/200/200" className="w-full" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Título de la Tarjeta
                </h3>
                <p className="text-gray-600 text-sm">
                  Descripción breve de la tarjeta. Puedes incluir más texto
                  aquí.
                </p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                  Ver más
                </button>
              </div>
            </Card>
            <Card className="max-w-sm">
              <img src="https://placedog.net/200/200" className="w-full" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Título de la Tarjeta
                </h3>
                <p className="text-gray-600 text-sm">
                  Descripción breve de la tarjeta. Puedes incluir más texto
                  aquí.
                </p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                  Ver más
                </button>
              </div>
            </Card> */}
        </Row>
        </Container>
      </Container>
    </>
  );
}

export default App;
