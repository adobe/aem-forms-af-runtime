# @aemforms/af-core - v0.22.93

## Table of contents

### Interfaces

- [Action](interfaces/Action.md)
- [BaseModel](interfaces/BaseModel.md)
- [CaptchaModel](interfaces/CaptchaModel.md)
- [ContainerModel](interfaces/ContainerModel.md)
- [FieldModel](interfaces/FieldModel.md)
- [FieldsetModel](interfaces/FieldsetModel.md)
- [FormMetaDataModel](interfaces/FormMetaDataModel.md)
- [FormModel](interfaces/FormModel.md)
- [IFileObject](interfaces/IFileObject.md)
- [IFormFieldFactory](interfaces/IFormFieldFactory.md)
- [IValidationError](interfaces/IValidationError.md)
- [ScriptableField](interfaces/ScriptableField.md)
- [SubmitMetaDataModel](interfaces/SubmitMetaDataModel.md)

### Classes

- [AddInstance](classes/AddInstance.md)
- [AddItem](classes/AddItem.md)
- [BaseNode](classes/BaseNode.md)
- [Blur](classes/Blur.md)
- [Captcha](classes/Captcha.md)
- [Change](classes/Change.md)
- [Checkbox](classes/Checkbox.md)
- [CheckboxGroup](classes/CheckboxGroup.md)
- [Click](classes/Click.md)
- [Container](classes/Container.md)
- [CustomEvent](classes/CustomEvent.md)
- [EmailInput](classes/EmailInput.md)
- [Field](classes/Field.md)
- [FieldChanged](classes/FieldChanged.md)
- [Fieldset](classes/Fieldset.md)
- [FileObject](classes/FileObject.md)
- [FileUpload](classes/FileUpload.md)
- [Focus](classes/Focus.md)
- [Form](classes/Form.md)
- [FormLoad](classes/FormLoad.md)
- [FormMetaData](classes/FormMetaData.md)
- [Initialize](classes/Initialize.md)
- [Invalid](classes/Invalid.md)
- [Node](classes/Node.md)
- [RemoveInstance](classes/RemoveInstance.md)
- [RemoveItem](classes/RemoveItem.md)
- [Reset](classes/Reset.md)
- [Save](classes/Save.md)
- [Scriptable](classes/Scriptable.md)
- [Submit](classes/Submit.md)
- [SubmitError](classes/SubmitError.md)
- [SubmitFailure](classes/SubmitFailure.md)
- [SubmitMetaData](classes/SubmitMetaData.md)
- [SubmitSuccess](classes/SubmitSuccess.md)
- [Valid](classes/Valid.md)
- [ValidationComplete](classes/ValidationComplete.md)
- [ValidationError](classes/ValidationError.md)

### Type aliases

- [BaseJson](README.md#basejson)
- [CaptchaJson](README.md#captchajson)
- [ChangePayload](README.md#changepayload)
- [ConstraintsJson](README.md#constraintsjson)
- [ConstraintsMessages](README.md#constraintsmessages)
- [ContainerJson](README.md#containerjson)
- [FieldJson](README.md#fieldjson)
- [FieldsetJson](README.md#fieldsetjson)
- [FormCreationMode](README.md#formcreationmode)
- [FormJson](README.md#formjson)
- [Items](README.md#items)
- [Label](README.md#label)
- [MetaDataJson](README.md#metadatajson)
- [Primitives](README.md#primitives)
- [RulesJson](README.md#rulesjson)
- [State](README.md#state)
- [TranslationJson](README.md#translationjson)

### Variables

- [CUSTOM\_PROPS\_KEY](README.md#custom_props_key)
- [ConstraintType](README.md#constrainttype)
- [FunctionRuntime](README.md#functionruntime)
- [TRANSLATION\_ID](README.md#translation_id)
- [TRANSLATION\_TOKEN](README.md#translation_token)
- [constraintKeys](README.md#constraintkeys)
- [constraintProps](README.md#constraintprops)
- [createFormInstance](README.md#createforminstance)
- [translationProps](README.md#translationprops)

### Enumerations

- [CaptchaDisplayMode](enums/CaptchaDisplayMode.md)
- [EventSource](enums/EventSource.md)
- [FocusOption](enums/FocusOption.md)

### Functions

- [checkIfConstraintsArePresent](README.md#checkifconstraintsarepresent)
- [checkIfKeyAdded](README.md#checkifkeyadded)
- [createTranslationObject](README.md#createtranslationobject)
- [defaultFieldTypes](README.md#defaultfieldtypes)
- [exportDataSchema](README.md#exportdataschema)
- [extractFileInfo](README.md#extractfileinfo)
- [fetchForm](README.md#fetchform)
- [getConstraintTypeMessages](README.md#getconstrainttypemessages)
- [getFileSizeInBytes](README.md#getfilesizeinbytes)
- [getOrElse](README.md#getorelse)
- [getProperty](README.md#getproperty)
- [isButton](README.md#isbutton)
- [isCaptcha](README.md#iscaptcha)
- [isCheckbox](README.md#ischeckbox)
- [isCheckboxGroup](README.md#ischeckboxgroup)
- [isDateField](README.md#isdatefield)
- [isEmailInput](README.md#isemailinput)
- [isEmpty](README.md#isempty)
- [isFile](README.md#isfile)
- [isRepeatable](README.md#isrepeatable)
- [jsonString](README.md#jsonstring)
- [propertyChange](README.md#propertychange)
- [registerFunctions](README.md#registerfunctions)
- [restoreFormInstance](README.md#restoreforminstance)
- [setCustomDefaultConstraintTypeMessages](README.md#setcustomdefaultconstrainttypemessages)
- [validateFormData](README.md#validateformdata)
- [validateFormInstance](README.md#validateforminstance)

### Namespaces

- [createFormInstance](modules/createFormInstance.md)

## Type aliases

### BaseJson

Ƭ **BaseJson**: `TranslationBaseJson` & [`RulesJson`](README.md#rulesjson) & [`ConstraintsJson`](README.md#constraintsjson) & { `:type?`: `string` ; `altText?`: `string` ; `appliedCssClassNames?`: `string` ; `buttonType?`: `string` ; `constraintMessages?`: [`ConstraintsMessages`](README.md#constraintsmessages) ; `dataRef?`: `string` \| ``null`` ; `enabled?`: `boolean` ; `errorMessage?`: `string` ; `fieldType?`: `string` ; `label?`: [`Label`](README.md#label) ; `lang?`: `string` ; `name?`: `string` ; `properties?`: { [key: string]: `any`;  } ; `repeatable?`: `boolean` ; `screenReaderText?`: `string` ; `tooltip?`: `string` ; `viewType?`: `string` ; `visible?`: `boolean`  }

Type for `generic form properties` based on `adaptive form specification`

___

### CaptchaJson

Ƭ **CaptchaJson**: [`FieldJson`](README.md#fieldjson) & { `captchaDisplayMode?`: [`CaptchaDisplayMode`](enums/CaptchaDisplayMode.md) ; `captchaProvider?`: `string` ; `siteKey?`: `string`  }

Type for `form captcha field properties` based on `adaptive form specification`

___

### ChangePayload

Ƭ **ChangePayload**: `Object`

Payload of change event

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `changes` | { `currentValue`: `any` ; `prevValue?`: `any` ; `propertyName`: `string`  }[] | List of changes |
| `eventSource?` | [`EventSource`](enums/EventSource.md) | To identify the source(code/ui) of the event |

___

### ConstraintsJson

Ƭ **ConstraintsJson**: `TranslationConstraintsJson` & { `accept?`: `string`[] ; `enforceEnum?`: `boolean` ; `exclusiveMaximum?`: `number` ; `exclusiveMinimum?`: `number` ; `format?`: `string` ; `maxFileSize?`: `number` \| `string` ; `maxItems?`: `number` ; `maxLength?`: `number` ; `maxOccur?`: `number` ; `maximum?`: `number` ; `minItems?`: `number` ; `minLength?`: `number` ; `minOccur?`: `number` ; `minimum?`: `number` ; `pattern?`: `string` ; `required?`: `boolean` ; `step?`: `number` ; `type?`: `string` ; `uniqueItems?`: `boolean` ; `validationExpression?`: `string`  }

Type for `constraint properties` based on `adaptive form specification`

___

### ConstraintsMessages

Ƭ **ConstraintsMessages**: `Object`

Type for `constraint messages` based on `adaptive form specification`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `accept?` | `string` |
| `enum?` | `string` |
| `exclusiveMaximum?` | `string` |
| `exclusiveMinimum?` | `string` |
| `format?` | `string` |
| `maxFileSize?` | `string` |
| `maxItems?` | `string` |
| `maxLength?` | `string` |
| `maximum?` | `string` |
| `minItems?` | `string` |
| `minLength?` | `string` |
| `minimum?` | `string` |
| `pattern?` | `string` |
| `required?` | `string` |
| `step?` | `string` |
| `type?` | `string` |
| `uniqueItems?` | `string` |
| `validationExpression?` | `string` |

___

### ContainerJson

Ƭ **ContainerJson**: [`BaseJson`](README.md#basejson) & { `activeChild?`: `string` ; `initialItems?`: `number` ; `items`: ([`FieldJson`](README.md#fieldjson) \| [`ContainerJson`](README.md#containerjson))[]  }

Type for `form container properties` based on `adaptive form specification`

___

### FieldJson

Ƭ **FieldJson**: [`BaseJson`](README.md#basejson) & `TranslationFieldJson` & { `checked?`: `boolean` ; `default?`: `any` ; `displayFormat?`: `string` ; `displayValue?`: `string` ; `displayValueExpression?`: `string` ; `editFormat?`: `string` ; `editValue?`: `string` ; `emptyValue?`: ``"null"`` \| ``"undefined"`` \| ``""`` ; `readOnly?`: `boolean` ; `valid?`: `boolean` ; `validationMessage?`: `string` ; `validity?`: `any` ; `value?`: `any`  }

Type for `form field properties` based on `adaptive form specification`

___

### FieldsetJson

Ƭ **FieldsetJson**: [`ContainerJson`](README.md#containerjson) & { `readOnly?`: `boolean` ; `type?`: ``"array"`` \| ``"object"``  }

Type for `form fieldset` based on `adaptive form specification`

___

### FormCreationMode

Ƭ **FormCreationMode**: ``"create"`` \| ``"restore"``

___

### FormJson

Ƭ **FormJson**: [`ContainerJson`](README.md#containerjson) & { `action?`: `string` ; `adaptiveform?`: `string` ; `data?`: `any` ; `lang?`: `string` ; `metadata?`: [`MetaDataJson`](README.md#metadatajson) ; `title?`: `string`  }

Type for `form model` based on `adaptive form specification`

___

### Items

Ƭ **Items**<`T`\>: `Object`

Type for `items property` based on `adaptive form specification`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Index signature

▪ [key: `string`]: `T`

___

### Label

Ƭ **Label**: `Object`

Type for `label` based on `adaptive form specification`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `richText?` | `boolean` |
| `value` | `string` |
| `visible?` | `boolean` |

___

### MetaDataJson

Ƭ **MetaDataJson**: `Object`

Type for `form metadata` based on `adaptive form specification`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `grammar?` | `string` |
| `version?` | `string` |

___

### Primitives

Ƭ **Primitives**: `string` \| `number` \| `boolean` \| ``null`` \| `undefined`

Type alias for primitive types

___

### RulesJson

Ƭ **RulesJson**: `Object`

Type for `constraint messages` based on `adaptive form specification`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `events?` | [`Items`](README.md#items)<`string`[] \| `string` \| `undefined`\> |
| `rules?` | [`Items`](README.md#items)<`string`\> |

___

### State

Ƭ **State**<`T`\>: `stateProps` & `T` extends [`ContainerJson`](README.md#containerjson) ? `T` & { `items`: [`State`](README.md#state)<[`FieldJson`](README.md#fieldjson) \| [`ContainerJson`](README.md#containerjson)\>[]  } : `T`

Generic type for a form object state

#### Type parameters

| Name |
| :------ |
| `T` |

___

### TranslationJson

Ƭ **TranslationJson**: `TranslationBaseJson` & `TranslationFieldJson` & `TranslationConstraintsJson`

Type for all properties which can be translated based on `adaptive form specification`

## Variables

### CUSTOM\_PROPS\_KEY

• **CUSTOM\_PROPS\_KEY**: ``"properties"``

___

### ConstraintType

• **ConstraintType**: `Readonly`<{ `ACCEPT_MISMATCH`: ``"acceptMismatch"`` = 'acceptMismatch'; `EXPRESSION_MISMATCH`: ``"expressionMismatch"`` = 'expressionMismatch'; `FILE_SIZE_MISMATCH`: ``"fileSizeMismatch"`` = 'fileSizeMismatch'; `FORMAT_MISMATCH`: ``"formatMismatch"`` = 'formatMismatch'; `MAX_ITEMS_MISMATCH`: ``"maxItemsMismatch"`` = 'maxItemsMismatch'; `MIN_ITEMS_MISMATCH`: ``"minItemsMismatch"`` = 'minItemsMismatch'; `PATTERN_MISMATCH`: ``"patternMismatch"`` = 'patternMismatch'; `RANGE_OVERFLOW`: ``"rangeOverflow"`` = 'rangeOverflow'; `RANGE_UNDERFLOW`: ``"rangeUnderflow"`` = 'rangeUnderflow'; `STEP_MISMATCH`: ``"stepMismatch"`` = 'stepMismatch'; `TOO_LONG`: ``"tooLong"`` = 'tooLong'; `TOO_SHORT`: ``"tooShort"`` = 'tooShort'; `TYPE_MISMATCH`: ``"typeMismatch"`` = 'typeMismatch'; `UNIQUE_ITEMS_MISMATCH`: ``"uniqueItemsMismatch"`` = 'uniqueItemsMismatch'; `VALUE_MISSING`: ``"valueMissing"`` = 'valueMissing' }\>

ConstraintType is an object containing properties that represent the constraint types as per HTML5 specfication.
Once can access these properties using dot notation (for example)
(ConstraintType.PATTERN_MISMATCH, ConstraintType.TOO_SHORT, etc.).

___

### FunctionRuntime

• **FunctionRuntime**: `FunctionRuntimeImpl`

___

### TRANSLATION\_ID

• **TRANSLATION\_ID**: ``"afs:translationIds"``

Name of the object which holds all translation specific properties

___

### TRANSLATION\_TOKEN

• **TRANSLATION\_TOKEN**: ``"##"``

Token used while creating translation specific properties from `adaptive form specification`

___

### constraintKeys

• **constraintKeys**: `Readonly`<{ `accept`: ``"acceptMismatch"`` = ConstraintType.ACCEPT\_MISMATCH; `format`: ``"formatMismatch"`` = ConstraintType.FORMAT\_MISMATCH; `maxFileSize`: ``"fileSizeMismatch"`` = ConstraintType.FILE\_SIZE\_MISMATCH; `maxItems`: ``"maxItemsMismatch"`` = ConstraintType.MAX\_ITEMS\_MISMATCH; `maxLength`: ``"tooLong"`` = ConstraintType.TOO\_LONG; `maximum`: ``"rangeOverflow"`` = ConstraintType.RANGE\_OVERFLOW; `minItems`: ``"minItemsMismatch"`` = ConstraintType.MIN\_ITEMS\_MISMATCH; `minLength`: ``"tooShort"`` = ConstraintType.TOO\_SHORT; `minimum`: ``"rangeUnderflow"`` = ConstraintType.RANGE\_UNDERFLOW; `pattern`: ``"patternMismatch"`` = ConstraintType.PATTERN\_MISMATCH; `required`: ``"valueMissing"`` = ConstraintType.VALUE\_MISSING; `step`: ``"stepMismatch"`` = ConstraintType.STEP\_MISMATCH; `type`: ``"typeMismatch"`` = ConstraintType.TYPE\_MISMATCH; `uniqueItems`: ``"uniqueItemsMismatch"`` = ConstraintType.UNIQUE\_ITEMS\_MISMATCH; `validationExpression`: ``"expressionMismatch"`` = ConstraintType.EXPRESSION\_MISMATCH }\>

This map consists of key which are constraints based on `adaptive form specification and value
which specifies constraint types as per HTML5 specification

___

### constraintProps

• **constraintProps**: `string`[]

Constant for all properties which are constraints based on `adaptive form specification`

___

### createFormInstance

• **createFormInstance**: `Object`

#### Call signature

▸ (`formModel`, `callback?`, `logLevel?`, `fModel?`): [`FormModel`](interfaces/FormModel.md)

Creates form instance using form model definition as per `adaptive form specification`

##### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `formModel` | `any` | `undefined` | form model definition |
| `callback?` | (`f`: [`FormModel`](interfaces/FormModel.md)) => `any` | `undefined` | a callback that recieves the FormModel instance that gets executed before any event in the Form is executed |
| `logLevel` | `LogLevel` | `'error'` | Logging Level for the form. Setting it off will disable the logging |
| `fModel` | `any` | `undefined` | existing form model, this is additional optimization to prevent creation of form instance |

##### Returns

[`FormModel`](interfaces/FormModel.md)

[form model](interfaces/FormModel.md)

#### Type declaration

| Name | Type |
| :------ | :------ |
| `currentVersion` | `Version` |

___

### translationProps

• **translationProps**: `string`[]

Constant for all properties which can be translated based on `adaptive form specification`

## Functions

### checkIfConstraintsArePresent

▸ `Const` **checkIfConstraintsArePresent**(`item`): `boolean`

Utility to check if the given form field has any data constraints

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | [`FieldJson`](README.md#fieldjson) \| [`FieldsetJson`](README.md#fieldsetjson) | form field to check |

#### Returns

`boolean`

`true` if `item` has data constraints, `false` otherwise

___

### checkIfKeyAdded

▸ **checkIfKeyAdded**(`currentObj`, `prevObj`, `objKey`): `boolean`

Checks if the key got added in current object

#### Parameters

| Name | Type |
| :------ | :------ |
| `currentObj` | `any` |
| `prevObj` | `any` |
| `objKey` | `string` |

#### Returns

`boolean`

___

### createTranslationObject

▸ `Const` **createTranslationObject**(`input`, `additionalTranslationProps?`, `bcp47LangTags?`): `any`

Creates translation object with [BCP 47](https://tools.ietf.org/search/bcp47) language tags as key and value is a translation object. Key of translation object is
generated based on the form hierarchy and it is separated by "##" token to signify that the id is machine generated (ie its not a human generated string)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `input` | `any` | `undefined` | form model definition |
| `additionalTranslationProps` | `string`[] | `[]` | optional properties which needs to be translated, by default, only OOTB properties of form model definition is translated |
| `bcp47LangTags` | `string`[] | `[]` | optional additional language tags |

#### Returns

`any`

translation object for each bcp 47 language tag

___

### defaultFieldTypes

▸ `Const` **defaultFieldTypes**(`schema`): `string`

Returns the default view type for a given form field object based on `adaptive form specification`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `schema` | `any` | schema item for which default view type is to found |

#### Returns

`string`

default view type

___

### exportDataSchema

▸ `Const` **exportDataSchema**(`form`): `any`

Creates a json schema from form model definition

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `form` | [`FormJson`](README.md#formjson) | [form model definition](README.md#formjson) |

#### Returns

`any`

json schema of form model definition

___

### extractFileInfo

▸ `Const` **extractFileInfo**(`file`): `any`

Utility to extract [FileObject](classes/FileObject.md) from string or HTML File data type

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `any` |

#### Returns

`any`

list of [FileObject](classes/FileObject.md)

___

### fetchForm

▸ `Const` **fetchForm**(`url`, `headers?`): `Promise`<`string`\>

Helper API to fetch form model definition from an AEM instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | URL of the instance |
| `headers` | `any` | HTTP headers to pass to the aem instance |

#### Returns

`Promise`<`string`\>

promise which resolves to the form model definition

___

### getConstraintTypeMessages

▸ `Const` **getConstraintTypeMessages**(): `Object`

API to get the constraint type messages

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `acceptMismatch` | ``"The specified file type not supported."`` |
| `expressionMismatch` | ``"Please enter a valid value."`` |
| `fileSizeMismatch` | ``"File too large. Reduce size and try again."`` |
| `formatMismatch` | ``"Specify the value in allowed format : ${0}."`` |
| `maxItemsMismatch` | ``"Specify a number of items equal to or less than ${0}."`` |
| `minItemsMismatch` | ``"Specify a number of items equal to or greater than ${0}."`` |
| `patternMismatch` | ``"Please match the format requested."`` |
| `rangeOverflow` | ``"Value must be less than or equal to ${0}."`` |
| `rangeUnderflow` | ``"Value must be greater than or equal to ${0}."`` |
| `stepMismatch` | ``"Please enter a valid value."`` |
| `tooLong` | ``"Please shorten this text to ${0} characters or less."`` |
| `tooShort` | ``"Please lengthen this text to ${0} characters or more."`` |
| `typeMismatch` | ``"Please enter a valid value."`` |
| `uniqueItemsMismatch` | ``"All the items must be unique."`` |
| `valueMissing` | ``"Please fill in this field."`` |

___

### getFileSizeInBytes

▸ `Const` **getFileSizeInBytes**(`str`): `number`

Converts file size in string to bytes based on IEC specification

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `any` | file size |

#### Returns

`number`

file size as bytes (in kb) based on IEC specification

___

### getOrElse

▸ `Const` **getOrElse**(`input`, `key`, `defaultValue?`): `any`

Gets the value for the given key from the input, in case of no value, default is returned

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `input` | `any` | `undefined` | input object |
| `key` | `string` \| `string`[] | `undefined` | key to return from input object (key could be comma separated, example, label.value) |
| `defaultValue` | `any` | `null` | default value |

#### Returns

`any`

___

### getProperty

▸ `Const` **getProperty**<`P`\>(`data`, `key`, `def`): `P`

Get the property value form the json

#### Type parameters

| Name | Description |
| :------ | :------ |
| `P` | type for the default value |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `any` | object as json |
| `key` | `string` | name of the key |
| `def` | `P` | default value |

#### Returns

`P`

___

### isButton

▸ `Const` **isButton**(`item`): `boolean`

Checks if the input item provided is a button field

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | [`FieldJson`](README.md#fieldjson) \| [`FieldsetJson`](README.md#fieldsetjson) | input item it could be [Fieldset](README.md#fieldsetjson) or [Field](README.md#fieldjson) |

#### Returns

`boolean`

`true` if `item` is a form button, `false` otherwise

___

### isCaptcha

▸ `Const` **isCaptcha**(`item`): `boolean`

Checks if the input item provided is a captcha field

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | [`FieldJson`](README.md#fieldjson) \| [`FieldsetJson`](README.md#fieldsetjson) | input item it could be [Fieldset](README.md#fieldsetjson) or [Field](README.md#fieldjson) |

#### Returns

`boolean`

`true` if `item` is a form captcha, `false` otherwise

___

### isCheckbox

▸ `Const` **isCheckbox**(`item`): `boolean`

Checks if the input item provided is a form check box field

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | [`FieldJson`](README.md#fieldjson) \| [`FieldsetJson`](README.md#fieldsetjson) | input item it could be [Fieldset](README.md#fieldsetjson) or [Field](README.md#fieldjson) |

#### Returns

`boolean`

`true` if `item` is a form check box, `false` otherwise

___

### isCheckboxGroup

▸ `Const` **isCheckboxGroup**(`item`): `boolean`

Checks if the input item provided is a form check box group field

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | [`FieldJson`](README.md#fieldjson) \| [`FieldsetJson`](README.md#fieldsetjson) | input item it could be [Fieldset](README.md#fieldsetjson) or [Field](README.md#fieldjson) |

#### Returns

`boolean`

`true` if `item` is a form check box group, `false` otherwise

___

### isDateField

▸ `Const` **isDateField**(`item`): `boolean`

Checks if the input item provided is a date field

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | [`FieldJson`](README.md#fieldjson) \| [`FieldsetJson`](README.md#fieldsetjson) | input item it could be [Fieldset](README.md#fieldsetjson) or [Field](README.md#fieldjson) |

#### Returns

`boolean`

`true` if `item` is a form check box group, `false` otherwise

___

### isEmailInput

▸ `Const` **isEmailInput**(`item`): `boolean`

Checks if the input item provided is a form check box group field

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | [`FieldJson`](README.md#fieldjson) \| [`FieldsetJson`](README.md#fieldsetjson) | input item it could be [Fieldset](README.md#fieldsetjson) or [Field](README.md#fieldjson) |

#### Returns

`boolean`

`true` if `item` is a form check box group, `false` otherwise

___

### isEmpty

▸ `Const` **isEmpty**(`value`): `boolean`

Utility to check if the value is empty

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | value |

#### Returns

`boolean`

`true` if value is empty, `false` otherwise

___

### isFile

▸ `Const` **isFile**(`item`): `boolean`

Checks if the input item provided is a form file attachment field

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | [`FieldJson`](README.md#fieldjson) \| [`FieldsetJson`](README.md#fieldsetjson) | input item it could be [Fieldset](README.md#fieldsetjson) or [Field](README.md#fieldjson) |

#### Returns

`boolean`

`true` if `item` is a form file attachment, `false` otherwise

___

### isRepeatable

▸ `Const` **isRepeatable**(`obj`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`FieldJson`](README.md#fieldjson) \| [`FieldsetJson`](README.md#fieldsetjson) |

#### Returns

`boolean`

___

### jsonString

▸ `Const` **jsonString**(`obj`): `string`

Prettifies obj as json string

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `any` | object to prettify |

#### Returns

`string`

json string

___

### propertyChange

▸ `Const` **propertyChange**(`propertyName`, `currentValue`, `prevValue?`): [`Change`](classes/Change.md)

Creates a change event

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `propertyName` | `string` | name of the form field property |
| `currentValue` | `any` | current value |
| `prevValue?` | `any` | previous value |

#### Returns

[`Change`](classes/Change.md)

[Change](classes/Change.md) change event

___

### registerFunctions

▸ `Const` **registerFunctions**(`functions`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functions` | `Object` |

#### Returns

`void`

___

### restoreFormInstance

▸ `Const` **restoreFormInstance**(`formModel`, `data?`, `__namedParameters?`): [`FormModel`](interfaces/FormModel.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `formModel` | `any` | `undefined` |
| `data` | `any` | `null` |
| `__namedParameters` | `Object` | `defaultOptions` |
| `__namedParameters.logLevel` | `LogLevel` | `undefined` |

#### Returns

[`FormModel`](interfaces/FormModel.md)

___

### setCustomDefaultConstraintTypeMessages

▸ `Const` **setCustomDefaultConstraintTypeMessages**(`messages`): `void`

API to override the custom default constraint messages

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `messages` | `Record`<`string`, `string`\> | messages to override as per {@link defaultConstraintTypeMessages} As an example, ``` // Example usage: setCustomConstraintMessages({          'pattern': 'Custom pattern mismatch message.',          'minLength': 'Custom too short message.', }); ``` |

#### Returns

`void`

___

### validateFormData

▸ `Const` **validateFormData**(`formModel`, `data`): `Object`

Validates Form model definition with the given data

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `formModel` | `any` | form model definition |
| `data` | `any` | form data |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `messages` | `any`[] |
| `valid` | `boolean` |

___

### validateFormInstance

▸ `Const` **validateFormInstance**(`formModel`, `data`): `boolean`

Validates Form model definition with the given data

**`deprecated`** use validateFormData

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `formModel` | `any` | form model definition |
| `data` | `any` | form data |

#### Returns

`boolean`

`true`, if form is valid against the given form data, `false` otherwise
