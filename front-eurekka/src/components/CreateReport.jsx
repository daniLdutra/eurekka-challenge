import { Form, Button, Container } from 'react-bootstrap';

export const CreateReport = () => {
  return (
    <div>
      <Container className="justify-content-md-center">
        <Form>
          <h2>Criar Laudo</h2>
          <Form.Group className="mb-3">
            <Form.Label>Veterinário solicitante</Form.Label>
            <Form.Control type="veterinary" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Tutor</Form.Label>
            <Form.Control type="guardian" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Paciente</Form.Label>
            <Form.Control type="pacient" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Espécie</Form.Label>
            <Form.Control type="specie" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Raça</Form.Label>
            <Form.Control type="breed" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Sexo</Form.Label>
            <Form.Select>
              <option value="F">Fêmea</option>
              <option value="M">Macho</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Idade</Form.Label>
            <Form.Control type="age" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Região</Form.Label>
            <Form.Control type="region" />
          </Form.Group>

          <div>
            <label htmlFor="exampleFormControlTextarea1">
              Achados Radiográficos
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={5}
            />
          </div>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};
