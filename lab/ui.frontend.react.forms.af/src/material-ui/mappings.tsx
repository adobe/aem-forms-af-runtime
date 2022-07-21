import { mappings } from '@aemforms/af-react-components';
import DateField from './Date'
const newMappings: any = {
    ...mappings,
    'custom:dateField' : DateField
};
  
export default newMappings;