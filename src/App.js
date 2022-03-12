import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { getData } from './redux/action';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Container, Form, FormControl,  Navbar,  Spinner } from 'react-bootstrap';

function App() {
  const [query, setquery] = useState()
  const dispatch = useDispatch();
  const {loading,users} = useSelector((state) => state);

  useEffect(() => {
    dispatch(getData(query));
  }, [query]);

 

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Food Recipe</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Form className="d-flex">
        <FormControl
         value={query}
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={(e)=>setquery(e.target.value)}
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>

      {
       loading ? 
       <Spinner animation="border" role="status">
       </Spinner>

       :
       <div className='box-container'>{
       users.map(el=> 
        
  <div >
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={el.recipe.image} />
  <Card.Body>
    <Card.Title>{el.recipe.label}</Card.Title>
    <Card.Text>
      calories : {el.recipe.calories}
    </Card.Text>
    <Button variant="primary" href={el.recipe.url}>  Show Recipe  </Button>
    
  </Card.Body>
</Card>
    
  </div>
  )}
  </div>
}
    </div>
  );
}

export default App;
