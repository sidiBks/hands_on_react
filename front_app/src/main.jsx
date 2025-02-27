import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { ProductList } from './store/ProductList.jsx'
import Form from './Form_useState/Form.jsx'
import FormRef from './Form_useRef/FormRef.jsx'
import FormRefDefaultVal from './Form_useRef/FormRefDefaultVal.jsx'
import Page from './Data_child_to_parent/Page.jsx'
import FormValidation from './Form_validation/FormValidation.jsx'

createRoot(document.getElementById('root')).render(
  // <ProductList/>
  // <Form/>
  // <FormRef/>
  // <FormRefDefaultVal/>
  // <Page/>
  <FormValidation/>
)
