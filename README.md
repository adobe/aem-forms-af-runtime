# AEM Forms - Adaptive Forms

AEM Forms now provide a mechanism to render Adaptive Form using React Components in Single Page Applications. It exposes headless APIs to fetch the 
form definition from AEM and render it using JavaScript libraries.

# Usage

## Prerequisites
The assumption is that you have node > 16 and npm > 8 installed on your machine and created a react project (using react version ^16.14.0 || ^17.0.2). There are multiple ways to do that (create-react-app, webpack, etc.).

Once you have your React project ready you need to install the following dependencies

```
npm i --save @aemforms/af-react-renderer @aemforms/af-react-components @adobe/react-spectrum
```

## Form JSON
One needs to fetch The Form JSON from aem using the headless APIs

## Mappings Object

A Mappings Object is a JavaScript map that maps the field types defined in the Specification to its respective React Component. The Adaptive Form Super Component uses this map to render the different components defined in the Form JSON.

To use that in your project use the following import, assuming you have added the project as a dependency in your project

```
import {mappings} from '@aemforms/af-react-components'
```

Once you have fetched the JSON for the form, the code would look like

```
import {mappings} from '@aemforms/af-react-components'
const json = {...}
<AdaptiveForm mappings={mappings} formJson={json} />
```

If you are not using React Spectrum then you might need to start your app with the React Spectrum Provider.

If you are not using Provider at your app level, you can use that with the Adaptive Form Super Component

```
import {mappings} from '@aemforms/af-react-components'
import { Provider as Spectrum3Provider, defaultTheme } from '@adobe/react-spectrum'
const json = {...}
<SpectrumProvider theme={defaultTheme}>
<AdaptiveForm mappings={mappings} formJson={json} />
</SpectrumProvider>
```
# Links
1. [Story book](https://opensource.adobe.com/aem-forms-af-runtime/storybook)
2. [JS API Docs](https://opensource.adobe.com/aem-forms-af-runtime/jsdocs)
3. [HTTP API Docs](https://opensource.adobe.com/aem-forms-af-runtime/api)
4. [Adaptive Form Runtime packages](https://www.npmjs.com/org/aemforms)
