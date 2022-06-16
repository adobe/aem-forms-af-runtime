# Class: CheckboxGroup

Implementation of CheckBoxGroup runtime model which extends from [field](Field.md)

## Hierarchy

- [`Field`](Field.md)

  ↳ **`CheckboxGroup`**

## Table of contents

### Accessors

- [:type](CheckboxGroup.md#:type)
- [dataRef](CheckboxGroup.md#dataref)
- [description](CheckboxGroup.md#description)
- [emptyValue](CheckboxGroup.md#emptyvalue)
- [enabled](CheckboxGroup.md#enabled)
- [enum](CheckboxGroup.md#enum)
- [enumNames](CheckboxGroup.md#enumnames)
- [fieldType](CheckboxGroup.md#fieldtype)
- [form](CheckboxGroup.md#form)
- [format](CheckboxGroup.md#format)
- [id](CheckboxGroup.md#id)
- [index](CheckboxGroup.md#index)
- [isContainer](CheckboxGroup.md#iscontainer)
- [label](CheckboxGroup.md#label)
- [maximum](CheckboxGroup.md#maximum)
- [minimum](CheckboxGroup.md#minimum)
- [name](CheckboxGroup.md#name)
- [parent](CheckboxGroup.md#parent)
- [properties](CheckboxGroup.md#properties)
- [readOnly](CheckboxGroup.md#readonly)
- [required](CheckboxGroup.md#required)
- [ruleEngine](CheckboxGroup.md#ruleengine)
- [rules](CheckboxGroup.md#rules)
- [type](CheckboxGroup.md#type)
- [valid](CheckboxGroup.md#valid)
- [value](CheckboxGroup.md#value)
- [visible](CheckboxGroup.md#visible)

### Methods

- [dispatch](CheckboxGroup.md#dispatch)
- [executeAction](CheckboxGroup.md#executeaction)
- [executeExpression](CheckboxGroup.md#executeexpression)
- [getErrorMessage](CheckboxGroup.md#geterrormessage)
- [getState](CheckboxGroup.md#getstate)
- [importData](CheckboxGroup.md#importdata)
- [isTransparent](CheckboxGroup.md#istransparent)
- [toString](CheckboxGroup.md#tostring)
- [triggerValidationEvent](CheckboxGroup.md#triggervalidationevent)
- [validate](CheckboxGroup.md#validate)
- [valueOf](CheckboxGroup.md#valueof)

## Accessors

### :type

• `get` **:type**(): `string`

#### Returns

`string`

#### Inherited from

Field.:type

___

### dataRef

• `get` **dataRef**(): `undefined` \| ``null`` \| `string`

#### Returns

`undefined` \| ``null`` \| `string`

#### Inherited from

Field.dataRef

___

### description

• `get` **description**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

Field.description

• `set` **description**(`d`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `d` | `undefined` \| `string` |

#### Returns

`void`

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

#### Returns

`undefined` \| `boolean`

#### Inherited from

Field.enabled

• `set` **enabled**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `undefined` \| `boolean` |

#### Returns

`void`

#### Inherited from

Field.enabled

___

### enum

• `get` **enum**(): `undefined` \| `any`[]

#### Returns

`undefined` \| `any`[]

#### Inherited from

Field.enum

• `set` **enum**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `undefined` \| `any`[] |

#### Returns

`void`

#### Inherited from

Field.enum

___

### enumNames

• `get` **enumNames**(): `undefined` \| `string`[]

#### Returns

`undefined` \| `string`[]

#### Inherited from

Field.enumNames

• `set` **enumNames**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `undefined` \| `string`[] |

#### Returns

`void`

#### Inherited from

Field.enumNames

___

### fieldType

• `get` **fieldType**(): `string`

#### Returns

`string`

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

#### Inherited from

Field.format

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Inherited from

Field.id

___

### index

• `get` **index**(): `number`

#### Returns

`number`

#### Inherited from

Field.index

___

### isContainer

• `get` **isContainer**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Field.isContainer

___

### label

• `get` **label**(): `undefined` \| [`Label`](../README.md#label)

#### Returns

`undefined` \| [`Label`](../README.md#label)

#### Inherited from

Field.label

• `set` **label**(`l`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `l` | `undefined` \| [`Label`](../README.md#label) |

#### Returns

`void`

#### Inherited from

Field.label

___

### maximum

• `get` **maximum**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Inherited from

Field.maximum

• `set` **maximum**(`m`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | `undefined` \| `number` |

#### Returns

`void`

#### Inherited from

Field.maximum

___

### minimum

• `get` **minimum**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Inherited from

Field.minimum

• `set` **minimum**(`m`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | `undefined` \| `number` |

#### Returns

`void`

#### Inherited from

Field.minimum

___

### name

• `get` **name**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

Field.name

___

### parent

• `get` **parent**(): [`ContainerModel`](../interfaces/ContainerModel.md)

#### Returns

[`ContainerModel`](../interfaces/ContainerModel.md)

#### Inherited from

Field.parent

___

### properties

• `get` **properties**(): `Object`

#### Returns

`Object`

#### Inherited from

Field.properties

• `set` **properties**(`p`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | `Object` |

#### Returns

`void`

#### Inherited from

Field.properties

___

### readOnly

• `get` **readOnly**(): `undefined` \| `boolean`

#### Returns

`undefined` \| `boolean`

#### Inherited from

Field.readOnly

• `set` **readOnly**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `undefined` \| `boolean` |

#### Returns

`void`

#### Inherited from

Field.readOnly

___

### required

• `get` **required**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Field.required

• `set` **required**(`r`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | `boolean` |

#### Returns

`void`

#### Inherited from

Field.required

___

### ruleEngine

• `get` **ruleEngine**(): `RuleEngine`

#### Returns

`RuleEngine`

#### Inherited from

Field.ruleEngine

___

### rules

• `get` **rules**(): [`Items`](../README.md#items)<`string`\>

#### Returns

[`Items`](../README.md#items)<`string`\>

#### Inherited from

Field.rules

___

### type

• `get` **type**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

Field.type

___

### valid

• `get` **valid**(): `undefined` \| `boolean`

#### Returns

`undefined` \| `boolean`

#### Inherited from

Field.valid

___

### value

• `get` **value**(): `any`

#### Returns

`any`

#### Inherited from

Field.value

• `set` **value**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |

#### Returns

`void`

#### Inherited from

Field.value

___

### visible

• `get` **visible**(): `undefined` \| `boolean`

#### Returns

`undefined` \| `boolean`

#### Inherited from

Field.visible

• `set` **visible**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `undefined` \| `boolean` |

#### Returns

`void`

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

#### Inherited from

[Field](Field.md).[getState](Field.md#getstate)

___

### importData

▸ **importData**(`contextualDataModel`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextualDataModel` | `default` |

#### Returns

`void`

#### Inherited from

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

### validate

▸ **validate**(): [`ValidationError`](ValidationError.md)[]

Validates the current form object

#### Returns

[`ValidationError`](ValidationError.md)[]

#### Inherited from

[Field](Field.md).[validate](Field.md#validate)

___

### valueOf

▸ **valueOf**(): `any`

#### Returns

`any`

#### Inherited from

[Field](Field.md).[valueOf](Field.md#valueof)
