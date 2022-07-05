import axios from 'axios';
import { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';

export const CreateReport = () => {
  const [values, setValues] = useState({});
  const [reportCreated, setReportCreated] = useState(false);

  const handleChange = (e) => {
    const newValues = values;

    newValues[e.target.name] = e.target.value;
    setValues(newValues);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/report', values);
      setReportCreated(true);
      setValues('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-3 mb-5">
      {(reportCreated && (
        <Alert
          style={{ margin: '5% 20%', textAlign: 'center' }}
          variant={'success'}
        >
          Laudo registrado com sucesso!
        </Alert>
      )) || (
        <Container className="justify-content-md-center">
          <Form onSubmit={handleSubmit}>
            <h2>Criar Laudo</h2>
            <Form.Group className="mb-3">
              <Form.Label>Veterinário solicitante</Form.Label>
              <Form.Control
                value={values.veterinary}
                name="veterinary"
                onChange={handleChange}
                type="text"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Tutor</Form.Label>
              <Form.Control
                value={values.guardian}
                name="guardian"
                onChange={handleChange}
                type="text"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Paciente</Form.Label>
              <Form.Control
                value={values.pacient}
                name="pacient"
                onChange={handleChange}
                type="text"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Espécie</Form.Label>
              <Form.Control
                value={values.specie}
                name="specie"
                onChange={handleChange}
                type="text"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Raça</Form.Label>
              <Form.Control
                value={values.breed}
                name="breed"
                onChange={handleChange}
                type="text"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Sexo</Form.Label>
              <Form.Select
                value={values.sex}
                name="sex"
                onChange={handleChange}
              >
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
                type="number"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Região</Form.Label>
              <Form.Control
                value={values.region}
                name="region"
                onChange={handleChange}
                type="text"
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
              Enviar
            </Button>
          </Form>
        </Container>
      )}
    </div>
  );
};
