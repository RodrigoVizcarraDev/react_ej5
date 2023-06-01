import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import FormularioInputColor from './components/FormularioInputColor';
import CardColor from './components/CardColor';
function App() {

  return (
    <>
    <section className='m-5  mx-auto border p-3 border-2 shadow' style={{width:"90%"}}>
      <h1 className='display-5 fs-1'>Administrar Colores</h1>
      <FormularioInputColor></FormularioInputColor>
    </section>

    <section className='container'>
      <div className='row px-3'>
        
      </div>
    </section>
    </>
    
  )
}

export default App
