
import Loadable from 'react-loadable'

export default Loadable({
  // The import below tells webpack to 
  // separate this code into another bundle
  loader: import('./VideoSection')
})

