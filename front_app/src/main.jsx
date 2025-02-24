import { createRoot } from 'react-dom/client'
import { ProductList } from './store/ProductList.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Form from './Form_useState/Form.jsx'

createRoot(document.getElementById('root')).render(
  <Form/>
)
