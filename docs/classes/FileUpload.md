# Class: FileUpload

Implementation of FileUpload runtime model which extends from [field](Field.md)

## Hierarchy

- [`Field`](Field.md)

  ↳ **`FileUpload`**

## Implements

- [`FieldModel`](../interfaces/FieldModel.md)

## Table of contents

### Accessors

- [:type](FileUpload.md#:type)
- [accept](FileUpload.md#accept)
- [dataRef](FileUpload.md#dataref)
- [description](FileUpload.md#description)
- [emptyValue](FileUpload.md#emptyvalue)
- [enabled](FileUpload.md#enabled)
- [enum](FileUpload.md#enum)
- [enumNames](FileUpload.md#enumnames)
- [fieldType](FileUpload.md#fieldtype)
- [form](FileUpload.md#form)
- [format](FileUpload.md#format)
- [id](FileUpload.md#id)
- [index](FileUpload.md#index)
- [isContainer](FileUpload.md#iscontainer)
- [label](FileUpload.md#label)
- [maxFileSize](FileUpload.md#maxfilesize)
- [maximum](FileUpload.md#maximum)
- [minimum](FileUpload.md#minimum)
- [name](FileUpload.md#name)
- [parent](FileUpload.md#parent)
- [properties](FileUpload.md#properties)
- [readOnly](FileUpload.md#readonly)
- [required](FileUpload.md#required)
- [ruleEngine](FileUpload.md#ruleengine)
- [rules](FileUpload.md#rules)
- [type](FileUpload.md#type)
- [valid](FileUpload.md#valid)
- [value](FileUpload.md#value)
- [visible](FileUpload.md#visible)

### Methods

- [dispatch](FileUpload.md#dispatch)
- [executeAction](FileUpload.md#executeaction)
- [executeExpression](FileUpload.md#executeexpression)
- [getErrorMessage](FileUpload.md#geterrormessage)
- [getState](FileUpload.md#getstate)
- [importData](FileUpload.md#importdata)
- [isTransparent](FileUpload.md#istransparent)
- [toString](FileUpload.md#tostring)
- [triggerValidationEvent](FileUpload.md#triggervalidationevent)
- [typeCheck](FileUpload.md#typecheck)
- [validate](FileUpload.md#validate)
- [valueOf](FileUpload.md#valueof)

## Accessors

### :type

• `get` **:type**(): `string`

Custom widget type show to the user for capturing the data.

#### Returns

`string`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[:type](../interfaces/FieldModel.md#:type)

#### Inherited from

Field.:type

___

### accept

• `get` **accept**(): `undefined` \| `string`[]

Returns the list of mime types which file attachment can accept

#### Returns

`undefined` \| `string`[]

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[accept](../interfaces/FieldModel.md#accept)

___

### dataRef

• `get` **dataRef**(): `undefined` \| ``null`` \| `string`

To map the field’s value to a property in the data model.

#### Returns

`undefined` \| ``null`` \| `string`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[dataRef](../interfaces/FieldModel.md#dataref)

#### Inherited from

Field.dataRef

___

### description

• `get` **description**(): `undefined` \| `string`

Extra description to be shown to the user to aid in form filling experience. It can be rich text.

#### Returns

`undefined` \| `string`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[description](../interfaces/FieldModel.md#description)

#### Inherited from

Field.description

• `set` **description**(`d`): `void`

Extra description to be shown to the user to aid in form filling experience. It can be rich text.

#### Parameters

| Name | Type |
| :------ | :------ |
| `d` | `undefined` \| `string` |

#### Returns

`void`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[description](../interfaces/FieldModel.md#description)

#### Inherited from

Field.description

___

### emptyValue

• `get` **emptyValue**(): `undefined` \| ``null`` \| ``""``

#### Returns

`undefined` \| ``null`` \| ``""``

#### Inherited from

Field.emptyValue

___

### enabled

• `get` **enabled**(): `undefined` \| `boolean`

Whether the field is enabled and takes part in rules, events etc.

#### Returns

`undefined` \| `boolean`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[enabled](../interfaces/FieldModel.md#enabled)

#### Inherited from

Field.enabled

• `set` **enabled**(`e`): `void`

Whether the field is enabled and takes part in rules, events etc.

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `undefined` \| `boolean` |

#### Returns

`void`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[enabled](../interfaces/FieldModel.md#enabled)

#### Inherited from

Field.enabled

___

### enum

• `get` **enum**(): `undefined` \| `any`[]

#### Returns

`undefined` \| `any`[]

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[enum](../interfaces/FieldModel.md#enum)

#### Inherited from

Field.enum

• `set` **enum**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `undefined` \| `any`[] |

#### Returns

`void`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[enum](../interfaces/FieldModel.md#enum)

#### Inherited from

Field.enum

___

### enumNames

• `get` **enumNames**(): `undefined` \| `string`[]

#### Returns

`undefined` \| `string`[]

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[enumNames](../interfaces/FieldModel.md#enumnames)

#### Inherited from

Field.enumNames

• `set` **enumNames**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `undefined` \| `string`[] |

#### Returns

`void`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[enumNames](../interfaces/FieldModel.md#enumnames)

#### Inherited from

Field.enumNames

___

### fieldType

• `get` **fieldType**(): `string`

Type of field to capture the user data.

#### Returns

`string`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[fieldType](../interfaces/FieldModel.md#fieldtype)

#### Inherited from

Field.fieldType

___

### form

• `get` **form**(): [`FormModel`](../interfaces/FormModel.md)

#### Returns

[`FormModel`](../interfaces/FormModel.md)

#### Inherited from

Field.form

___

### format

• `get` **format**(): `string`

returns the format constraint

#### Returns

`string`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[format](../interfaces/FieldModel.md#format)

#### Inherited from

Field.format

___

### id

• `get` **id**(): `string`

Unique id of the form field.

#### Returns

`string`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[id](../interfaces/FieldModel.md#id)

#### Inherited from

Field.id

___

### index

• `get` **index**(): `number`

The index of the Field within its parent.

#### Returns

`number`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[index](../interfaces/FieldModel.md#index)

#### Inherited from

Field.index

___

### isContainer

• `get` **isContainer**(): `boolean`

Whether the form field is container or not

#### Returns

`boolean`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[isContainer](../interfaces/FieldModel.md#iscontainer)

#### Inherited from

Field.isContainer

___

### label

• `get` **label**(): `undefined` \| [`Label`](../README.md#label)

Label to be used for the field.

#### Returns

`undefined` \| [`Label`](../README.md#label)

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[label](../interfaces/FieldModel.md#label)

#### Inherited from

Field.label

• `set` **label**(`l`): `void`

Label to be used for the field.

#### Parameters

| Name | Type |
| :------ | :------ |
| `l` | `undefined` \| [`Label`](../README.md#label) |

#### Returns

`void`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[label](../interfaces/FieldModel.md#label)

#### Inherited from

Field.label

___

### maxFileSize

• `get` **maxFileSize**(): `number`

Returns the max file size in bytes as per IEC specification

#### Returns

`number`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[maxFileSize](../interfaces/FieldModel.md#maxfilesize)

___

### maximum

• `get` **maximum**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[maximum](../interfaces/FieldModel.md#maximum)

#### Inherited from

Field.maximum

• `set` **maximum**(`m`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | `undefined` \| `number` |

#### Returns

`void`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[maximum](../interfaces/FieldModel.md#maximum)

#### Inherited from

Field.maximum

___

### minimum

• `get` **minimum**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[minimum](../interfaces/FieldModel.md#minimum)

#### Inherited from

Field.minimum

• `set` **minimum**(`m`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | `undefined` \| `number` |

#### Returns

`void`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[minimum](../interfaces/FieldModel.md#minimum)

#### Inherited from

Field.minimum

___

### name

• `get` **name**(): `undefined` \| `string`

Name of the form field.

#### Returns

`undefined` \| `string`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[name](../interfaces/FieldModel.md#name)

#### Inherited from

Field.name

___

### parent

• `get` **parent**(): [`ContainerModel`](../interfaces/ContainerModel.md)

Parent of the current field

#### Returns

[`ContainerModel`](../interfaces/ContainerModel.md)

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[parent](../interfaces/FieldModel.md#parent)

#### Inherited from

Field.parent

___

### properties

• `get` **properties**(): `Object`

Custom properties of the form field.

#### Returns

`Object`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[properties](../interfaces/FieldModel.md#properties)

#### Inherited from

Field.properties

• `set` **properties**(`p`): `void`

Custom properties of the form field.

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | `Object` |

#### Returns

`void`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[properties](../interfaces/FieldModel.md#properties)

#### Inherited from

Field.properties

___

### readOnly

• `get` **readOnly**(): `undefined` \| `boolean`

Whether the field should be readOnly to end user or not.

#### Returns

`undefined` \| `boolean`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[readOnly](../interfaces/FieldModel.md#readonly)

#### Inherited from

Field.readOnly

• `set` **readOnly**(`e`): `void`

Whether the field should be readOnly to end user or not.

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `undefined` \| `boolean` |

#### Returns

`void`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[readOnly](../interfaces/FieldModel.md#readonly)

#### Inherited from

Field.readOnly

___

### required

• `get` **required**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[required](../interfaces/FieldModel.md#required)

#### Inherited from

Field.required

• `set` **required**(`r`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | `boolean` |

#### Returns

`void`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[required](../interfaces/FieldModel.md#required)

#### Inherited from

Field.required

___

### ruleEngine

• `get` **ruleEngine**(): `RuleEngine`

#### Returns

`RuleEngine`

#### Implementation of

FieldModel.ruleEngine

#### Inherited from

Field.ruleEngine

___

### rules

• `get` **rules**(): [`Items`](../README.md#items)<`string`\>

Rules that modify the property of the object dynamically. The rules are evaluated whenever the dependency changes.

#### Returns

[`Items`](../README.md#items)<`string`\>

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[rules](../interfaces/FieldModel.md#rules)

#### Inherited from

Field.rules

___

### type

• `get` **type**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[type](../interfaces/FieldModel.md#type)

#### Inherited from

Field.type

___

### valid

• `get` **valid**(): `undefined` \| `boolean`

The current validation state of the Field. The property is always computed after merging the Data Model with the Form

#### Returns

`undefined` \| `boolean`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[valid](../interfaces/FieldModel.md#valid)

#### Inherited from

Field.valid

___

### value

• `get` **value**(): `any`

The current value of the Field. The property is serialized in the Data Model.

#### Returns

`any`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[value](../interfaces/FieldModel.md#value)

#### Overrides

Field.value

• `set` **value**(`value`): `void`

The current value of the Field. The property is serialized in the Data Model.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`void`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[value](../interfaces/FieldModel.md#value)

#### Overrides

Field.value

___

### visible

• `get` **visible**(): `undefined` \| `boolean`

Whether the field should be visible to author or not.

#### Returns

`undefined` \| `boolean`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[visible](../interfaces/FieldModel.md#visible)

#### Inherited from

Field.visible

• `set` **visible**(`v`): `void`

Whether the field should be visible to author or not.

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `undefined` \| `boolean` |

#### Returns

`void`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[visible](../interfaces/FieldModel.md#visible)

#### Inherited from

Field.visible

## Methods

### dispatch

▸ **dispatch**(`action`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | [`Action`](../interfaces/Action.md) |

#### Returns

`void`

#### Implementation of

FieldModel.dispatch

#### Inherited from

[Field](Field.md).[dispatch](Field.md#dispatch)

___

### executeAction

▸ **executeAction**(`action`): `void`

Executes the given action

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `action` | [`Action`](../interfaces/Action.md) | [event object](../interfaces/Action.md) |

#### Returns

`void`

#### Inherited from

[Field](Field.md).[executeAction](Field.md#executeaction)

___

### executeExpression

▸ **executeExpression**(`expr`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `expr` | `string` |

#### Returns

`any`

#### Inherited from

[Field](Field.md).[executeExpression](Field.md#executeexpression)

___

### getErrorMessage

▸ **getErrorMessage**(`constraint`): `string`

Returns the error message for a given constraint

#### Parameters

| Name | Type |
| :------ | :------ |
| `constraint` | keyof [`ConstraintsMessages`](../README.md#constraintsmessages) |

#### Returns

`string`

#### Inherited from

[Field](Field.md).[getErrorMessage](Field.md#geterrormessage)

___

### getState

▸ **getState**(): `TranslationBaseJson` & [`RulesJson`](../README.md#rulesjson) & `TranslationConstraintsJson` & { `accept?`: `string`[] ; `enforceEnum?`: `boolean` ; `exclusiveMaximum?`: `number` ; `exclusiveMinimum?`: `number` ; `format?`: `string` ; `maxFileSize?`: `string` \| `number` ; `maxItems?`: `number` ; `maxLength?`: `number` ; `maximum?`: `number` ; `minItems?`: `number` ; `minLength?`: `number` ; `minimum?`: `number` ; `pattern?`: `string` ; `required?`: `boolean` ; `step?`: `number` ; `type?`: `string` ; `validationExpression?`: `string`  } & { `:type?`: `string` ; `constraintMessages?`: [`ConstraintsMessages`](../README.md#constraintsmessages) ; `dataRef?`: ``null`` \| `string` ; `enabled?`: `boolean` ; `errorMessage?`: `string` ; `fieldType?`: `string` ; `label?`: [`Label`](../README.md#label) ; `name?`: `string` ; `properties?`: { [key: string]: `any`;  } ; `visible?`: `boolean`  } & `TranslationFieldJson` & { `default?`: `any` ; `emptyValue?`: ``""`` \| ``"undefined"`` \| ``"null"`` ; `readOnly?`: `boolean` ; `valid?`: `boolean` ; `value?`: `any`  } & { `:type`: `string` ; `id`: `string`  }

[state](../README.md#state) of the form object

#### Returns

`TranslationBaseJson` & [`RulesJson`](../README.md#rulesjson) & `TranslationConstraintsJson` & { `accept?`: `string`[] ; `enforceEnum?`: `boolean` ; `exclusiveMaximum?`: `number` ; `exclusiveMinimum?`: `number` ; `format?`: `string` ; `maxFileSize?`: `string` \| `number` ; `maxItems?`: `number` ; `maxLength?`: `number` ; `maximum?`: `number` ; `minItems?`: `number` ; `minLength?`: `number` ; `minimum?`: `number` ; `pattern?`: `string` ; `required?`: `boolean` ; `step?`: `number` ; `type?`: `string` ; `validationExpression?`: `string`  } & { `:type?`: `string` ; `constraintMessages?`: [`ConstraintsMessages`](../README.md#constraintsmessages) ; `dataRef?`: ``null`` \| `string` ; `enabled?`: `boolean` ; `errorMessage?`: `string` ; `fieldType?`: `string` ; `label?`: [`Label`](../README.md#label) ; `name?`: `string` ; `properties?`: { [key: string]: `any`;  } ; `visible?`: `boolean`  } & `TranslationFieldJson` & { `default?`: `any` ; `emptyValue?`: ``""`` \| ``"undefined"`` \| ``"null"`` ; `readOnly?`: `boolean` ; `valid?`: `boolean` ; `value?`: `any`  } & { `:type`: `string` ; `id`: `string`  }

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[getState](../interfaces/FieldModel.md#getstate)

#### Inherited from

[Field](Field.md).[getState](Field.md#getstate)

___

### importData

▸ **importData**(`dataModel?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataModel?` | `default` |

#### Returns

`void`

#### Implementation of

FieldModel.importData

#### Overrides

[Field](Field.md).[importData](Field.md#importdata)

___

### isTransparent

▸ **isTransparent**(): `boolean`

Transparent form fields are meant only for creation of view. They are also not part of data

#### Returns

`boolean`

#### Inherited from

[Field](Field.md).[isTransparent](Field.md#istransparent)

___

### toString

▸ **toString**(): `any`

#### Returns

`any`

#### Inherited from

[Field](Field.md).[toString](Field.md#tostring)

___

### triggerValidationEvent

▸ **triggerValidationEvent**(`changes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `changes` | `any` |

#### Returns

`void`

#### Inherited from

[Field](Field.md).[triggerValidationEvent](Field.md#triggervalidationevent)

___

### typeCheck

▸ **typeCheck**(`value`): `ValidationResult`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`ValidationResult`

___

### validate

▸ **validate**(): [`ValidationError`](ValidationError.md)[]

Validates the current form object

#### Returns

[`ValidationError`](ValidationError.md)[]

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[validate](../interfaces/FieldModel.md#validate)

#### Inherited from

[Field](Field.md).[validate](Field.md#validate)

___

### valueOf

▸ **valueOf**(): `any`

#### Returns

`any`

#### Inherited from

[Field](Field.md).[valueOf](Field.md#valueof)
