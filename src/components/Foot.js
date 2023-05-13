import Card from "react-bootstrap/Card";

function Foot() {
  return (
    <Card className="text-center" bg="dark" >
      <Card.Footer className="text-muted ">
        This thing is subjected to change in the future
      </Card.Footer>
    </Card>
  );
}

export default Foot;
