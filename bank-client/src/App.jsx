import { Accordion } from 'react-bootstrap'

// Testing de comnponente Accordion de React-Bootstrap

const App = () => {
  return (
    <>
      <header className='text-bg-dark text-capitalize'>
        <h1 className='p-2'>bank saint patrick app</h1>
      </header>
      <main>
        <Accordion flush>
          <Accordion.Item eventKey='0'>
            <Accordion.Header>¿Que es Bootstrap?</Accordion.Header>
            <Accordion.Body>
              Bootstrap es una librería de JavaScript que se utiliza para construir interfaces de usuario de forma
              dinámica.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='1'>
            <Accordion.Header>¿Como Configurar Bootstrap?</Accordion.Header>
            <Accordion.Body>Utilizando la documentacion :D</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </main>
    </>
  )
}

export default App
