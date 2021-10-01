import { Form, Button, Container } from "react-bootstrap";

export const Search = () => {
  return (
    <Container className="d-flex justify-content-center">
      <Form inline className="w-100 justify-content-center">
        <Form.Control
          type="text"
          placeholder="Search heroe..."
          className="w-75 mr-sm-2"
        />
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};
