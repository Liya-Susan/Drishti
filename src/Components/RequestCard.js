import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function RequestCard({id,faculty,location,grade,alert,details}) {
  return (
    
    <Card style={{ width: '18rem' ,borderWidth:'3px',margin:'10px'}}>
    <Card.Body>
      
      <Card.Text>Alert:{alert}</Card.Text>
      
      <Card.Text>
      Location: {location}
      </Card.Text>
      <Card.Text>
      Grade: {grade}
      </Card.Text>
    
     
    
    </Card.Body>
  </Card>
    
  )
}

export default RequestCard
