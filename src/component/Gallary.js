import EVERYPRODUCT from "./EvryProduct";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function GALLARY(props) {
  const allBroductsId = Object.keys(props.allBroducts);
  console.log(allBroductsId);
  return (
    <>
      {allBroductsId.length <= 0 ? (
        <div className="cont">
          <div className="spinner-border center text-danger" role="status">
            <span className="spin center sr-only"></span>
          </div>
        </div>
      ) : (
        <section id="gallary">
          <h1 className="center"> Our Gallary </h1>
          <Row>
            {allBroductsId.map((prod) => {
              return (
                <Col key={prod}>
                  <EVERYPRODUCT
                    id={prod}
                    allBroducts={props.allBroducts}
                    // src={prod.src}
                    // name={prod.name}
                    // price={prod.price}
                  />
                </Col>
              );
            })}
          </Row>
        </section>
      )}
    </>
  );
}

export default GALLARY;
