# Class: BaseNode<T\>

Defines a generic base class which all objects of form runtime model should extend from.

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends [`BaseJson`](../README.md#basejson) | type of the form object which extends from [base type](../README.md#basejson) |

## Hierarchy

- **`BaseNode`**

  ↳ [`Scriptable`](Scriptable.md)

## Implements

- [`BaseModel`](../interfaces/BaseModel.md)

## Table of contents

### Accessors

- [:type](BaseNode.md#:type)
- [dataRef](BaseNode.md#dataref)
- [description](BaseNode.md#description)
- [fieldType](BaseNode.md#fieldtype)
- [form](BaseNode.md#form)
- [id](BaseNode.md#id)
- [index](BaseNode.md#index)
- [isContainer](BaseNode.md#iscontainer)
- [label](BaseNode.md#label)
- [name](BaseNode.md#name)
- [parent](BaseNode.md#parent)
- [properties](BaseNode.md#properties)
- [ruleEngine](BaseNode.md#ruleengine)
- [type](BaseNode.md#type)
- [visible](BaseNode.md#visible)

### Methods

- [defaultDataModel](BaseNode.md#defaultdatamodel)
- [dispatch](BaseNode.md#dispatch)
- [executeAction](BaseNode.md#executeaction)
- [getState](BaseNode.md#getstate)
- [importData](BaseNode.md#importdata)
- [isTransparent](BaseNode.md#istransparent)
- [validate](BaseNode.md#validate)

### Properties

- [value](BaseNode.md#value)

## Accessors

### :type

• `get` **:type**(): `string`

Custom widget type show to the user for capturing the data.

#### Returns

`string`

#### Implementation of

[BaseModel](../interfaces/BaseModel.md).[:type](../interfaces/BaseModel.md#:type)

___

### dataRef

• `get` **dataRef**(): `undefined` \| ``null`` \| `string`

To map the field’s value to a property in the data model.

#### Returns

`undefined` \| ``null`` \| `string`

#### Implementation of

[BaseModel](../interfaces/BaseModel.md).[dataRef](../interfaces/BaseModel.md#dataref)

___

### description

• `get` **description**(): `undefined` \| `string`

Extra description to be shown to the user to aid in form filling experience. It can be rich text.

#### Returns

`undefined` \| `string`

#### Implementation of

[BaseModel](../interfaces/BaseModel.md).[description](../interfaces/BaseModel.md#description)

• `set` **description**(`d`): `void`

Extra description to be shown to the user to aid in form filling experience. It can be rich text.

#### Parameters

| Name | Type |
| :------ | :------ |
| `d` | `undefined` \| `string` |

#### Returns

`void`

#### Implementation of

[BaseModel](../interfaces/BaseModel.md).[description](../interfaces/BaseModel.md#description)

___

### fieldType

• `get` **fieldType**(): `string`

Type of field to capture the user data.

#### Returns

`string`

#### Implementation of

[BaseModel](../interfaces/BaseModel.md).[fieldType](../interfaces/BaseModel.md#fieldtype)

___

### form

• `get` **form**(): [`FormModel`](../interfaces/FormModel.md)

#### Returns

[`FormModel`](../interfaces/FormModel.md)

___

### id

• `get` **id**(): `string`

Unique id of the form field.

#### Returns

`string`

#### Implementation of

[BaseModel](../interfaces/BaseModel.md).[id](../interfaces/BaseModel.md#id)

___

### index

• `get` **index**(): `number`

The index of the Field within its parent.

#### Returns

`number`

#### Implementation of

[BaseModel](../interfaces/BaseModel.md).[index](../interfaces/BaseModel.md#index)

___

### isContainer

• `get` **isContainer**(): `boolean`

Whether the form field is container or not

#### Returns

`boolean`

#### Implementation of

[BaseModel](../interfaces/BaseModel.md).[isContainer](../interfaces/BaseModel.md#iscontainer)

___

### label

• `get` **label**(): `undefined` \| [`Label`](../README.md#label)

Label to be used for the field.

#### Returns

`undefined` \| [`Label`](../README.md#label)

#### Implementation of

[BaseModel](../interfaces/BaseModel.md).[label](../interfaces/BaseModel.md#label)

• `set` **label**(`l`): `void`

Label to be used for the field.

#### Parameters

| Name | Type |
| :------ | :------ |
| `l` | `undefined` \| [`Label`](../README.md#label) |

#### Returns

`void`

#### Implementation of

[BaseModel](../interfaces/BaseModel.md).[label](../interfaces/BaseModel.md#label)

___

### name

• `get` **name**(): `undefined` \| `string`

Name of the form field.

#### Returns

`undefined` \| `string`

#### Implementation of

[BaseModel](../interfaces/BaseModel.md).[name](../interfaces/BaseModel.md#name)

___

### parent

• `get` **parent**(): [`ContainerModel`](../interfaces/ContainerModel.md)

The Parent Panel of the Field/Panel.

#### Returns

[`ContainerModel`](../interfaces/ContainerModel.md)

#### Implementation of

[BaseModel](../interfaces/BaseModel.md).[parent](../interfaces/BaseModel.md#parent)

___

### properties

• `get` **properties**(): `Object`

Custom properties of the form field.

#### Returns

`Object`

#### Implementation of

[BaseModel](../interfaces/BaseModel.md).[properties](../interfaces/BaseModel.md#properties)

• `set` **properties**(`p`): `void`

Custom properties of the form field.

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | `Object` |

#### Returns

`void`

#### Implementation of

[BaseModel](../interfaces/BaseModel.md).[properties](../interfaces/BaseModel.md#properties)

___

### ruleEngine

• `get` **ruleEngine**(): `RuleEngine`

#### Returns

`RuleEngine`

___

### type

• `get` **type**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Implementation of

[BaseModel](../interfaces/BaseModel.md).[type](../interfaces/BaseModel.md#type)

___

### visible

• `get` **visible**(): `undefined` \| `boolean`

Whether the field should be visible to author or not.

#### Returns

`undefined` \| `boolean`

#### Implementation of

[BaseModel](../interfaces/BaseModel.md).[visible](../interfaces/BaseModel.md#visible)

• `set` **visible**(`v`): `void`

Whether the field should be visible to author or not.

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `undefined` \| `boolean` |

#### Returns

`void`

#### Implementation of

[BaseModel](../interfaces/BaseModel.md).[visible](../interfaces/BaseModel.md#visible)

## Methods

### defaultDataModel

▸ `Abstract` **defaultDataModel**(`name`): `undefined` \| `default`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` \| `number` |

#### Returns

`undefined` \| `default`

___

### dispatch

▸ **dispatch**(`action`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | [`Action`](../interfaces/Action.md) |

#### Returns

`void`

#### Implementation of

BaseModel.dispatch

___

### executeAction

▸ `Abstract` **executeAction**(`action`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | [`Action`](../interfaces/Action.md) |

#### Returns

`any`

___

### getState

▸ **getState**(): `T` & { `:type`: `string` ; `id`: `string`  }

#### Returns

`T` & { `:type`: `string` ; `id`: `string`  }

___

### importData

▸ `Abstract` **importData**(`a`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `default` |

#### Returns

`any`

#### Implementation of

BaseModel.importData

___

### isTransparent

▸ **isTransparent**(): `boolean`

Transparent form fields are meant only for creation of view. They are also not part of data

#### Returns

`boolean`

___

### validate

▸ `Abstract` **validate**(): [`ValidationError`](ValidationError.md)[]

Validates the given form field

#### Returns

[`ValidationError`](ValidationError.md)[]

#### Implementation of

[BaseModel](../interfaces/BaseModel.md).[validate](../interfaces/BaseModel.md#validate)

## Properties

### value

• `Abstract` **value**: [`Primitives`](../README.md#primitives)

The current value of the Field. The property is serialized in the Data Model.

#### Implementation of

[BaseModel](../interfaces/BaseModel.md).[value](../interfaces/BaseModel.md#value)
