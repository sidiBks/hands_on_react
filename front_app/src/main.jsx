import { createRoot } from 'react-dom/client'
import { ProductList } from './store/ProductList.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Form from './Form_useState/Form.jsx'
import FormRef from './Form_useRef/FormRef.jsx'
import FormRefDefaultVal from './Form_useRef/FormRefDefaultVal.jsx'

createRoot(document.getElementById('root')).render(
  // <ProductList/>
  // <Form/>
  // <FormRef/>
  <FormRefDefaultVal/>
)
