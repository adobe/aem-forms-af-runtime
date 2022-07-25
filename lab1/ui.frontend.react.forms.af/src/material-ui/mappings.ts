// import default mappings from af react components
// these default mappings are between field types and adobe react spectrum components
import { mappings } from '@aemforms/af-react-components';
// import custom component
import DateField from './Date'
// expose the mappings for the custom component as per ":type" property set in the json
const newMappings: any = {
    ...mappings,
    'custom:dateField' : DateField
};
// export the mappings so that it could be imported in the application
export default newMappings;