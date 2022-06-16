# @aemforms/af-core - v0.15.0

## Table of contents

### Interfaces

- [Action](interfaces/Action.md)
- [BaseModel](interfaces/BaseModel.md)
- [ContainerModel](interfaces/ContainerModel.md)
- [FieldModel](interfaces/FieldModel.md)
- [FieldsetModel](interfaces/FieldsetModel.md)
- [FormMetaDataModel](interfaces/FormMetaDataModel.md)
- [FormModel](interfaces/FormModel.md)
- [IFileObject](interfaces/IFileObject.md)
- [IValidationError](interfaces/IValidationError.md)
- [ScriptableField](interfaces/ScriptableField.md)

### Classes

- [AddItem](classes/AddItem.md)
- [BaseNode](classes/BaseNode.md)
- [Blur](classes/Blur.md)
- [Change](classes/Change.md)
- [Checkbox](classes/Checkbox.md)
- [CheckboxGroup](classes/CheckboxGroup.md)
- [Click](classes/Click.md)
- [Container](classes/Container.md)
- [CustomEvent](classes/CustomEvent.md)
- [Field](classes/Field.md)
- [FieldChanged](classes/FieldChanged.md)
- [Fieldset](classes/Fieldset.md)
- [FileObject](classes/FileObject.md)
- [FileUpload](classes/FileUpload.md)
- [Form](classes/Form.md)
- [FormMetaData](classes/FormMetaData.md)
- [Initialize](classes/Initialize.md)
- [Invalid](classes/Invalid.md)
- [Node](classes/Node.md)
- [RemoveItem](classes/RemoveItem.md)
- [Scriptable](classes/Scriptable.md)
- [Submit](classes/Submit.md)
- [Valid](classes/Valid.md)
- [ValidationComplete](classes/ValidationComplete.md)
- [ValidationError](classes/ValidationError.md)

### Type aliases

- [BaseJson](README.md#basejson)
- [ChangePayload](README.md#changepayload)
- [ConstraintsJson](README.md#constraintsjson)
- [ConstraintsMessages](README.md#constraintsmessages)
- [ContainerJson](README.md#containerjson)
- [FieldJson](README.md#fieldjson)
- [FieldsetJson](README.md#fieldsetjson)
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
- [TRANSLATION\_ID](README.md#translation_id)
- [TRANSLATION\_TOKEN](README.md#translation_token)
- [constraintProps](README.md#constraintprops)
- [translationProps](README.md#translationprops)

### Functions

- [checkIfConstraintsArePresent](README.md#checkifconstraintsarepresent)
- [checkIfKeyAdded](README.md#checkifkeyadded)
- [createFormInstance](README.md#createforminstance)
- [createTranslationObject](README.md#createtranslationobject)
- [defaultFieldTypes](README.md#defaultfieldtypes)
- [exportDataSchema](README.md#exportdataschema)
- [fetchForm](README.md#fetchform)
- [getFileSizeInBytes](README.md#getfilesizeinbytes)
- [getProperty](README.md#getproperty)
- [isCheckbox](README.md#ischeckbox)
- [isCheckboxGroup](README.md#ischeckboxgroup)
- [isFile](README.md#isfile)
- [jsonString](README.md#jsonstring)
- [propertyChange](README.md#propertychange)
- [validateFormInstance](README.md#validateforminstance)

## Type aliases

### BaseJson

Ƭ **BaseJson**: `TranslationBaseJson` & [`RulesJson`](README.md#rulesjson) & [`ConstraintsJson`](README.md#constraintsjson) & { `:type?`: `string` ; `constraintMessages?`: [`ConstraintsMessages`](README.md#constraintsmessages) ; `dataRef?`: `string` \| ``null`` ; `enabled?`: `boolean` ; `errorMessage?`: `string` ; `fieldType?`: `string` ; `label?`: [`Label`](README.md#label) ; `name?`: `string` ; `properties?`: { [key: string]: `any`;  } ; `visible?`: `boolean`  }

Type for `generic form properties` based on `adaptive form specification`

___

### ChangePayload

Ƭ **ChangePayload**: `Object`

Payload of change event

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `changes` | { `currentValue`: `any` ; `prevValue?`: `any` ; `propertyName`: `string`  }[] | List of changes |

___

### ConstraintsJson

Ƭ **ConstraintsJson**: `TranslationConstraintsJson` & { `accept?`: `string`[] ; `enforceEnum?`: `boolean` ; `exclusiveMaximum?`: `number` ; `exclusiveMinimum?`: `number` ; `format?`: `string` ; `maxFileSize?`: `number` \| `string` ; `maxItems?`: `number` ; `maxLength?`: `number` ; `maximum?`: `number` ; `minItems?`: `number` ; `minLength?`: `number` ; `minimum?`: `number` ; `pattern?`: `string` ; `required?`: `boolean` ; `step?`: `number` ; `type?`: `string` ; `validationExpression?`: `string`  }

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
| `validationExpression?` | `string` |

___

### ContainerJson

Ƭ **ContainerJson**: [`BaseJson`](README.md#basejson) & { `initialItems?`: `number` ; `items`: ([`FieldJson`](README.md#fieldjson) \| [`ContainerJson`](README.md#containerjson))[]  }

Type for `form container properties` based on `adaptive form specification`

___

### FieldJson

Ƭ **FieldJson**: [`BaseJson`](README.md#basejson) & `TranslationFieldJson` & { `default?`: `any` ; `emptyValue?`: ``"null"`` \| ``"undefined"`` \| ``""`` ; `readOnly?`: `boolean` ; `valid?`: `boolean` ; `value?`: `any`  }

Type for `form field properties` based on `adaptive form specification`

___

### FieldsetJson

Ƭ **FieldsetJson**: [`ContainerJson`](README.md#containerjson) & { `type?`: ``"array"`` \| ``"object"``  }

Type for `form fieldset` based on `adaptive form specification`

___

### FormJson

Ƭ **FormJson**: [`ContainerJson`](README.md#containerjson) & { `action?`: `string` ; `adaptiveForm?`: `string` ; `data?`: `any` ; `metadata?`: [`MetaDataJson`](README.md#metadatajson) ; `title?`: `string`  }

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
| `locale?` | `string` |
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

Ƭ **State**<`T`\>: `T` extends [`ContainerJson`](README.md#containerjson) ? `T` & { `id`: `string` ; `items`: [`State`](README.md#state)<[`FieldJson`](README.md#fieldjson) \| [`ContainerJson`](README.md#containerjson)\>[]  } : `T` & { `:type`: `string` ; `id`: `string`  }

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

### TRANSLATION\_ID

• **TRANSLATION\_ID**: ``"afs:translationIds"``

Name of the object which holds all translation specific properties

___

### TRANSLATION\_TOKEN

• **TRANSLATION\_TOKEN**: ``"##"``

Token used while creating translation specific properties from `adaptive form specification`

___

### constraintProps

• **constraintProps**: `string`[]

Constant for all properties which are constraints based on `adaptive form specification`

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

### createFormInstance

▸ `Const` **createFormInstance**(`formModel`, `callback?`, `logLevel?`, `fModel?`): [`FormModel`](interfaces/FormModel.md)

Creates form instance using form model definition as per `adaptive form specification`

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `formModel` | `any` | `undefined` | form model definition |
| `callback?` | (`f`: [`FormModel`](interfaces/FormModel.md)) => `any` | `undefined` | a callback that recieves the FormModel instance that gets executed before any event in the Form is executed |
| `logLevel` | `LogLevel` | `'error'` | Logging Level for the form. Setting it off will disable the logging |
| `fModel` | `any` | `undefined` | existing form model, this is additional optimization to prevent creation of form instance |

#### Returns

[`FormModel`](interfaces/FormModel.md)

[form model](interfaces/FormModel.md)

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

### validateFormInstance

▸ `Const` **validateFormInstance**(`formModel`, `data`): `boolean`

Validates Form model definition with the given data

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `formModel` | `any` | form model definition |
| `data` | `any` | form data |

#### Returns

`boolean`

`true`, if form is valid against the given form data, `false` otherwise
