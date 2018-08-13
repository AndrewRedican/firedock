import Suite from './components/suite'
import { isNotType, throwError } from '../helpers/err'

function Firedock ( paramA, paramB ){
    const suite = new Suite() /** Missing params and DB */
    
    
    this.client = true
    this.nodes = true
    this.backend = true
}

module = module.exports = Firedock;