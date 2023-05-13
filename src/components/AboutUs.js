import Card from "react-bootstrap/Card";

function AboutUs() {
  return (
    <Card className="text-center">
      <Card.Header>
        <strong>
          Govind Ballabh Pant Institute of Techonology and Engineering
        </strong>
      </Card.Header>
      <Card.Body>
        <Card.Title>Department of Computer Science and Engineering</Card.Title>
        <Card.Text>
          We are the students of final year and took Text Summerization as our
          Major Project .There are four members in our team and we are mentored
          by Dr. Jogendra Kumar Singh who is an  assitant professor in CSE
          department. With his help and mentorship we were able to complete the
          project we are very thankful to him.
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">
        The computer was born to solve problems that did not exist before.
      </Card.Footer>
    </Card>
  );
}

export default AboutUs;
