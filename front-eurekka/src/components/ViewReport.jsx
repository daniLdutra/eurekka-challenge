import { Alert, Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const ViewReport = () => {
  const { reportId } = useParams();
  const [values, setValues] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/report/${reportId}`)
      .then(({ data }) => {
        // console.log(data);
        setValues(data);
      })
      .catch((err) => {
        setError(true);
      });
  }, [reportId]);

  return (
    <Container>
      {(error && (
        <Alert
          style={{ margin: '5% 20%', textAlign: 'center' }}
          variant={'danger'}
        >
          Falha ao obter laudo. Por favor, entrar em contato com o hospital. Nos
          canais de atendimento: WhatsApp: (99) 99999-9999 ou e-mail:
          meulaudo@hospital.com
        </Alert>
      )) || (
        <div>
          <h1 style={{ textAlign: 'center' }}>Resultado - Laudo</h1>
          <Card>
            <Card.Header>
              <p>Veterinário Solicitante: {values.veterinary}</p>
              <p>Tutor: {values.guardian}</p>
              <p>Paciente: {values.pacient}</p>
              <p>Espécie: {values.specie}</p>
              <p>Raça: {values.breed}</p>
              <p>Sexo: {values.sex}</p>
              <p>Idade: {values.age}</p>
            </Card.Header>

            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>Região:{values.region}</p>
                <text>Achados Radiográficos: {values.report}</text>
                <footer className="blockquote-footer">
                  <p>Laudado por: Dra. Rosimeire Alves</p>
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        </div>
      )}
    </Container>
  );
};
