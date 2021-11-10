import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
function EVERYPRODUCT(props) {
  const { allBroducts, id } = props;
  console.log(id);

  return (
    <>
      {allBroducts.length <= 0 ? (
        <div className="cont">
          <div className="spinner-border center text-danger" role="status">
            <span className="spin center sr-only"></span>
          </div>
        </div>
      ) : (
        <>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={allBroducts[id].src} />
            <Card.Body>
              <Card.Title>{allBroducts[id]?.name?.slice(0, 20)}</Card.Title>
              <Card.Text>{allBroducts[id].price} $</Card.Text>
              <NavLink className="nav" to={`/${id}`} variant="danger">
                Show more
              </NavLink>
            </Card.Body>
          </Card>
        </>
      )}
    </>
  );
}
export default EVERYPRODUCT;
