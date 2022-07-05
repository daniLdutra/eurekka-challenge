import { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

export const CreateReport = () => {
  const [values, setValues] = useState({});

  const handleChange = (e) => {
    const newValues = values;

    newValues[e.target.name] = e.target.value;
    setValues(newValues);
  };

  return (
    <div>
      <Container className="justify-content-md-center">
        <Form>
          <h2>Criar Laudo</h2>
          <Form.Group className="mb-3">
            <Form.Label>Veterinário solicitante</Form.Label>
            <Form.Control
              value={values.veterinary}
              name="veterinary"
              onChange={handleChange}
              type="veterinary"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Tutor</Form.Label>
            <Form.Control
              value={values.guardian}
              name="guardian"
              onChange={handleChange}
              type="guardian"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Paciente</Form.Label>
            <Form.Control
              value={values.pacient}
              name="pacient"
              onChange={handleChange}
              type="pacient"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Espécie</Form.Label>
            <Form.Control
              value={values.specie}
              name="specie"
              onChange={handleChange}
              type="specie"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Raça</Form.Label>
            <Form.Control
              value={values.breed}
              name="breed"
              onChange={handleChange}
              type="breed"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Sexo</Form.Label>
            <Form.Select value={values.sex} name="sex" onChange={handleChange}>
              <option value="">Selecione uma opção</option>
              <option value="F">Fêmea</option>
              <option value="M">Macho</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Idade</Form.Label>
            <Form.Control
              value={values.age}
              name="age"
              onChange={handleChange}
              type="age"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Região</Form.Label>
            <Form.Control
              value={values.region}
              name="region"
              onChange={handleChange}
              type="region"
            />
          </Form.Group>

          <div>
            <label htmlFor="exampleFormControlTextarea1">
              Achados Radiográficos
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={5}
              value={values.report}
              name="report"
              onChange={handleChange}
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
