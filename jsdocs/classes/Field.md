# Class: Field

Defines a form object field which implements [field model](../interfaces/FieldModel.md) interface

## Hierarchy

- [`Scriptable`](Scriptable.md)<[`FieldJson`](../README.md#fieldjson)\>

  ↳ **`Field`**

  ↳↳ [`Checkbox`](Checkbox.md)

  ↳↳ [`CheckboxGroup`](CheckboxGroup.md)

  ↳↳ [`FileUpload`](FileUpload.md)

## Implements

- [`FieldModel`](../interfaces/FieldModel.md)

## Table of contents

### Accessors

- [:type](Field.md#:type)
- [dataRef](Field.md#dataref)
- [description](Field.md#description)
- [emptyValue](Field.md#emptyvalue)
- [enabled](Field.md#enabled)
- [enum](Field.md#enum)
- [enumNames](Field.md#enumnames)
- [fieldType](Field.md#fieldtype)
- [form](Field.md#form)
- [format](Field.md#format)
- [id](Field.md#id)
- [index](Field.md#index)
- [isContainer](Field.md#iscontainer)
- [label](Field.md#label)
- [maximum](Field.md#maximum)
- [minimum](Field.md#minimum)
- [name](Field.md#name)
- [parent](Field.md#parent)
- [properties](Field.md#properties)
- [readOnly](Field.md#readonly)
- [required](Field.md#required)
- [ruleEngine](Field.md#ruleengine)
- [rules](Field.md#rules)
- [type](Field.md#type)
- [valid](Field.md#valid)
- [value](Field.md#value)
- [visible](Field.md#visible)

### Methods

- [dispatch](Field.md#dispatch)
- [executeAction](Field.md#executeaction)
- [executeExpression](Field.md#executeexpression)
- [getErrorMessage](Field.md#geterrormessage)
- [getState](Field.md#getstate)
- [importData](Field.md#importdata)
- [isTransparent](Field.md#istransparent)
- [toString](Field.md#tostring)
- [triggerValidationEvent](Field.md#triggervalidationevent)
- [validate](Field.md#validate)
- [valueOf](Field.md#valueof)

## Accessors

### :type

• `get` **:type**(): `string`

Custom widget type show to the user for capturing the data.

#### Returns

`string`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[:type](../interfaces/FieldModel.md#:type)

#### Inherited from

Scriptable.:type

___

### dataRef

• `get` **dataRef**(): `undefined` \| ``null`` \| `string`

To map the field’s value to a property in the data model.

#### Returns

`undefined` \| ``null`` \| `string`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[dataRef](../interfaces/FieldModel.md#dataref)

#### Inherited from

Scriptable.dataRef

___

### description

• `get` **description**(): `undefined` \| `string`

Extra description to be shown to the user to aid in form filling experience. It can be rich text.

#### Returns

`undefined` \| `string`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[description](../interfaces/FieldModel.md#description)

#### Inherited from

Scriptable.description

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

Scriptable.description

___

### emptyValue

• `get` **emptyValue**(): `undefined` \| ``null`` \| ``""``

#### Returns

`undefined` \| ``null`` \| ``""``

___

### enabled

• `get` **enabled**(): `undefined` \| `boolean`

Whether the field is enabled and takes part in rules, events etc.

#### Returns

`undefined` \| `boolean`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[enabled](../interfaces/FieldModel.md#enabled)

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

___

### enum

• `get` **enum**(): `undefined` \| `any`[]

#### Returns

`undefined` \| `any`[]

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[enum](../interfaces/FieldModel.md#enum)

• `set` **enum**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `undefined` \| `any`[] |

#### Returns

`void`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[enum](../interfaces/FieldModel.md#enum)

___

### enumNames

• `get` **enumNames**(): `undefined` \| `string`[]

#### Returns

`undefined` \| `string`[]

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[enumNames](../interfaces/FieldModel.md#enumnames)

• `set` **enumNames**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `undefined` \| `string`[] |

#### Returns

`void`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[enumNames](../interfaces/FieldModel.md#enumnames)

___

### fieldType

• `get` **fieldType**(): `string`

Type of field to capture the user data.

#### Returns

`string`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[fieldType](../interfaces/FieldModel.md#fieldtype)

#### Inherited from

Scriptable.fieldType

___

### form

• `get` **form**(): [`FormModel`](../interfaces/FormModel.md)

#### Returns

[`FormModel`](../interfaces/FormModel.md)

#### Inherited from

Scriptable.form

___

### format

• `get` **format**(): `string`

returns the format constraint

#### Returns

`string`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[format](../interfaces/FieldModel.md#format)

___

### id

• `get` **id**(): `string`

Unique id of the form field.

#### Returns

`string`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[id](../interfaces/FieldModel.md#id)

#### Inherited from

Scriptable.id

___

### index

• `get` **index**(): `number`

The index of the Field within its parent.

#### Returns

`number`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[index](../interfaces/FieldModel.md#index)

#### Inherited from

Scriptable.index

___

### isContainer

• `get` **isContainer**(): `boolean`

Whether the form field is container or not

#### Returns

`boolean`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[isContainer](../interfaces/FieldModel.md#iscontainer)

#### Inherited from

Scriptable.isContainer

___

### label

• `get` **label**(): `undefined` \| [`Label`](../README.md#label)

Label to be used for the field.

#### Returns

`undefined` \| [`Label`](../README.md#label)

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[label](../interfaces/FieldModel.md#label)

#### Inherited from

Scriptable.label

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

Scriptable.label

___

### maximum

• `get` **maximum**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[maximum](../interfaces/FieldModel.md#maximum)

• `set` **maximum**(`m`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | `undefined` \| `number` |

#### Returns

`void`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[maximum](../interfaces/FieldModel.md#maximum)

___

### minimum

• `get` **minimum**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[minimum](../interfaces/FieldModel.md#minimum)

• `set` **minimum**(`m`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | `undefined` \| `number` |

#### Returns

`void`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[minimum](../interfaces/FieldModel.md#minimum)

___

### name

• `get` **name**(): `undefined` \| `string`

Name of the form field.

#### Returns

`undefined` \| `string`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[name](../interfaces/FieldModel.md#name)

#### Inherited from

Scriptable.name

___

### parent

• `get` **parent**(): [`ContainerModel`](../interfaces/ContainerModel.md)

Parent of the current field

#### Returns

[`ContainerModel`](../interfaces/ContainerModel.md)

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[parent](../interfaces/FieldModel.md#parent)

#### Inherited from

Scriptable.parent

___

### properties

• `get` **properties**(): `Object`

Custom properties of the form field.

#### Returns

`Object`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[properties](../interfaces/FieldModel.md#properties)

#### Inherited from

Scriptable.properties

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

Scriptable.properties

___

### readOnly

• `get` **readOnly**(): `undefined` \| `boolean`

Whether the field should be readOnly to end user or not.

#### Returns

`undefined` \| `boolean`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[readOnly](../interfaces/FieldModel.md#readonly)

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

___

### required

• `get` **required**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[required](../interfaces/FieldModel.md#required)

• `set` **required**(`r`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | `boolean` |

#### Returns

`void`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[required](../interfaces/FieldModel.md#required)

___

### ruleEngine

• `get` **ruleEngine**(): `RuleEngine`

#### Returns

`RuleEngine`

#### Implementation of

FieldModel.ruleEngine

#### Inherited from

Scriptable.ruleEngine

___

### rules

• `get` **rules**(): [`Items`](../README.md#items)<`string`\>

Rules that modify the property of the object dynamically. The rules are evaluated whenever the dependency changes.

#### Returns

[`Items`](../README.md#items)<`string`\>

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[rules](../interfaces/FieldModel.md#rules)

#### Inherited from

Scriptable.rules

___

### type

• `get` **type**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[type](../interfaces/FieldModel.md#type)

#### Inherited from

Scriptable.type

___

### valid

• `get` **valid**(): `undefined` \| `boolean`

The current validation state of the Field. The property is always computed after merging the Data Model with the Form

#### Returns

`undefined` \| `boolean`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[valid](../interfaces/FieldModel.md#valid)

___

### value

• `get` **value**(): `any`

The current value of the Field. The property is serialized in the Data Model.

#### Returns

`any`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[value](../interfaces/FieldModel.md#value)

#### Overrides

Scriptable.value

• `set` **value**(`v`): `void`

The current value of the Field. The property is serialized in the Data Model.

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |

#### Returns

`void`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[value](../interfaces/FieldModel.md#value)

#### Overrides

Scriptable.value

___

### visible

• `get` **visible**(): `undefined` \| `boolean`

Whether the field should be visible to author or not.

#### Returns

`undefined` \| `boolean`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[visible](../interfaces/FieldModel.md#visible)

#### Inherited from

Scriptable.visible

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

Scriptable.visible

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

[Scriptable](Scriptable.md).[dispatch](Scriptable.md#dispatch)

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

[Scriptable](Scriptable.md).[executeAction](Scriptable.md#executeaction)

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

[Scriptable](Scriptable.md).[executeExpression](Scriptable.md#executeexpression)

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

___

### getState

▸ **getState**(): `TranslationBaseJson` & [`RulesJson`](../README.md#rulesjson) & `TranslationConstraintsJson` & { `accept?`: `string`[] ; `enforceEnum?`: `boolean` ; `exclusiveMaximum?`: `number` ; `exclusiveMinimum?`: `number` ; `format?`: `string` ; `maxFileSize?`: `string` \| `number` ; `maxItems?`: `number` ; `maxLength?`: `number` ; `maximum?`: `number` ; `minItems?`: `number` ; `minLength?`: `number` ; `minimum?`: `number` ; `pattern?`: `string` ; `required?`: `boolean` ; `step?`: `number` ; `type?`: `string` ; `validationExpression?`: `string`  } & { `:type?`: `string` ; `constraintMessages?`: [`ConstraintsMessages`](../README.md#constraintsmessages) ; `dataRef?`: ``null`` \| `string` ; `enabled?`: `boolean` ; `errorMessage?`: `string` ; `fieldType?`: `string` ; `label?`: [`Label`](../README.md#label) ; `name?`: `string` ; `properties?`: { [key: string]: `any`;  } ; `visible?`: `boolean`  } & `TranslationFieldJson` & { `default?`: `any` ; `emptyValue?`: ``""`` \| ``"undefined"`` \| ``"null"`` ; `readOnly?`: `boolean` ; `valid?`: `boolean` ; `value?`: `any`  } & { `:type`: `string` ; `id`: `string`  }

[state](../README.md#state) of the form object

#### Returns

`TranslationBaseJson` & [`RulesJson`](../README.md#rulesjson) & `TranslationConstraintsJson` & { `accept?`: `string`[] ; `enforceEnum?`: `boolean` ; `exclusiveMaximum?`: `number` ; `exclusiveMinimum?`: `number` ; `format?`: `string` ; `maxFileSize?`: `string` \| `number` ; `maxItems?`: `number` ; `maxLength?`: `number` ; `maximum?`: `number` ; `minItems?`: `number` ; `minLength?`: `number` ; `minimum?`: `number` ; `pattern?`: `string` ; `required?`: `boolean` ; `step?`: `number` ; `type?`: `string` ; `validationExpression?`: `string`  } & { `:type?`: `string` ; `constraintMessages?`: [`ConstraintsMessages`](../README.md#constraintsmessages) ; `dataRef?`: ``null`` \| `string` ; `enabled?`: `boolean` ; `errorMessage?`: `string` ; `fieldType?`: `string` ; `label?`: [`Label`](../README.md#label) ; `name?`: `string` ; `properties?`: { [key: string]: `any`;  } ; `visible?`: `boolean`  } & `TranslationFieldJson` & { `default?`: `any` ; `emptyValue?`: ``""`` \| ``"undefined"`` \| ``"null"`` ; `readOnly?`: `boolean` ; `valid?`: `boolean` ; `value?`: `any`  } & { `:type`: `string` ; `id`: `string`  }

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[getState](../interfaces/FieldModel.md#getstate)

#### Inherited from

[Scriptable](Scriptable.md).[getState](Scriptable.md#getstate)

___

### importData

▸ **importData**(`contextualDataModel`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextualDataModel` | `default` |

#### Returns

`void`

#### Implementation of

FieldModel.importData

#### Overrides

[Scriptable](Scriptable.md).[importData](Scriptable.md#importdata)

___

### isTransparent

▸ **isTransparent**(): `boolean`

Transparent form fields are meant only for creation of view. They are also not part of data

#### Returns

`boolean`

#### Inherited from

[Scriptable](Scriptable.md).[isTransparent](Scriptable.md#istransparent)

___

### toString

▸ **toString**(): `any`

#### Returns

`any`

___

### triggerValidationEvent

▸ **triggerValidationEvent**(`changes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `changes` | `any` |

#### Returns

`void`

___

### validate

▸ **validate**(): [`ValidationError`](ValidationError.md)[]

Validates the current form object

#### Returns

[`ValidationError`](ValidationError.md)[]

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[validate](../interfaces/FieldModel.md#validate)

#### Overrides

[Scriptable](Scriptable.md).[validate](Scriptable.md#validate)

___

### valueOf

▸ **valueOf**(): `any`

#### Returns

`any`
