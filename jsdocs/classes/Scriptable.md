# Class: Scriptable<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`RulesJson`](../README.md#rulesjson) |

## Hierarchy

- [`BaseNode`](BaseNode.md)<`T`\>

  ↳ **`Scriptable`**

  ↳↳ [`Container`](Container.md)

  ↳↳ [`Field`](Field.md)

## Implements

- [`ScriptableField`](../interfaces/ScriptableField.md)

## Table of contents

### Accessors

- [:type](Scriptable.md#:type)
- [dataRef](Scriptable.md#dataref)
- [description](Scriptable.md#description)
- [fieldType](Scriptable.md#fieldtype)
- [form](Scriptable.md#form)
- [id](Scriptable.md#id)
- [index](Scriptable.md#index)
- [isContainer](Scriptable.md#iscontainer)
- [label](Scriptable.md#label)
- [name](Scriptable.md#name)
- [parent](Scriptable.md#parent)
- [properties](Scriptable.md#properties)
- [ruleEngine](Scriptable.md#ruleengine)
- [rules](Scriptable.md#rules)
- [type](Scriptable.md#type)
- [visible](Scriptable.md#visible)

### Methods

- [defaultDataModel](Scriptable.md#defaultdatamodel)
- [dispatch](Scriptable.md#dispatch)
- [executeAction](Scriptable.md#executeaction)
- [executeExpression](Scriptable.md#executeexpression)
- [getState](Scriptable.md#getstate)
- [importData](Scriptable.md#importdata)
- [isTransparent](Scriptable.md#istransparent)
- [validate](Scriptable.md#validate)

### Properties

- [value](Scriptable.md#value)

## Accessors

### :type

• `get` **:type**(): `string`

#### Returns

`string`

#### Inherited from

BaseNode.:type

___

### dataRef

• `get` **dataRef**(): `undefined` \| ``null`` \| `string`

#### Returns

`undefined` \| ``null`` \| `string`

#### Inherited from

BaseNode.dataRef

___

### description

• `get` **description**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

BaseNode.description

• `set` **description**(`d`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `d` | `undefined` \| `string` |

#### Returns

`void`

#### Inherited from

BaseNode.description

___

### fieldType

• `get` **fieldType**(): `string`

#### Returns

`string`

#### Inherited from

BaseNode.fieldType

___

### form

• `get` **form**(): [`FormModel`](../interfaces/FormModel.md)

#### Returns

[`FormModel`](../interfaces/FormModel.md)

#### Inherited from

BaseNode.form

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Inherited from

BaseNode.id

___

### index

• `get` **index**(): `number`

#### Returns

`number`

#### Inherited from

BaseNode.index

___

### isContainer

• `get` **isContainer**(): `boolean`

#### Returns

`boolean`

#### Inherited from

BaseNode.isContainer

___

### label

• `get` **label**(): `undefined` \| [`Label`](../README.md#label)

#### Returns

`undefined` \| [`Label`](../README.md#label)

#### Inherited from

BaseNode.label

• `set` **label**(`l`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `l` | `undefined` \| [`Label`](../README.md#label) |

#### Returns

`void`

#### Inherited from

BaseNode.label

___

### name

• `get` **name**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

BaseNode.name

___

### parent

• `get` **parent**(): [`ContainerModel`](../interfaces/ContainerModel.md)

#### Returns

[`ContainerModel`](../interfaces/ContainerModel.md)

#### Inherited from

BaseNode.parent

___

### properties

• `get` **properties**(): `Object`

#### Returns

`Object`

#### Inherited from

BaseNode.properties

• `set` **properties**(`p`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | `Object` |

#### Returns

`void`

#### Inherited from

BaseNode.properties

___

### ruleEngine

• `get` **ruleEngine**(): `RuleEngine`

#### Returns

`RuleEngine`

#### Implementation of

ScriptableField.ruleEngine

#### Inherited from

BaseNode.ruleEngine

___

### rules

• `get` **rules**(): [`Items`](../README.md#items)<`string`\>

Rules that modify the property of the object dynamically. The rules are evaluated whenever the dependency changes.

#### Returns

[`Items`](../README.md#items)<`string`\>

#### Implementation of

[ScriptableField](../interfaces/ScriptableField.md).[rules](../interfaces/ScriptableField.md#rules)

___

### type

• `get` **type**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

BaseNode.type

___

### visible

• `get` **visible**(): `undefined` \| `boolean`

#### Returns

`undefined` \| `boolean`

#### Inherited from

BaseNode.visible

• `set` **visible**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `undefined` \| `boolean` |

#### Returns

`void`

#### Inherited from

BaseNode.visible

## Methods

### defaultDataModel

▸ `Abstract` **defaultDataModel**(`name`): `undefined` \| `default`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` \| `number` |

#### Returns

`undefined` \| `default`

#### Inherited from

[BaseNode](BaseNode.md).[defaultDataModel](BaseNode.md#defaultdatamodel)

___

### dispatch

▸ **dispatch**(`action`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | [`Action`](../interfaces/Action.md) |

#### Returns

`void`

#### Inherited from

[BaseNode](BaseNode.md).[dispatch](BaseNode.md#dispatch)

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

#### Overrides

[BaseNode](BaseNode.md).[executeAction](BaseNode.md#executeaction)

___

### executeExpression

▸ **executeExpression**(`expr`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `expr` | `string` |

#### Returns

`any`

___

### getState

▸ **getState**(): `T` & { `:type`: `string` ; `id`: `string`  }

#### Returns

`T` & { `:type`: `string` ; `id`: `string`  }

#### Inherited from

[BaseNode](BaseNode.md).[getState](BaseNode.md#getstate)

___

### importData

▸ `Abstract` **importData**(`a`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `default` |

#### Returns

`any`

#### Inherited from

[BaseNode](BaseNode.md).[importData](BaseNode.md#importdata)

___

### isTransparent

▸ **isTransparent**(): `boolean`

Transparent form fields are meant only for creation of view. They are also not part of data

#### Returns

`boolean`

#### Inherited from

[BaseNode](BaseNode.md).[isTransparent](BaseNode.md#istransparent)

___

### validate

▸ `Abstract` **validate**(): [`ValidationError`](ValidationError.md)[]

Validates the given form field

#### Returns

[`ValidationError`](ValidationError.md)[]

#### Inherited from

[BaseNode](BaseNode.md).[validate](BaseNode.md#validate)

## Properties

### value

• `Abstract` **value**: [`Primitives`](../README.md#primitives)

The current value of the Field. The property is serialized in the Data Model.

#### Inherited from

[BaseNode](BaseNode.md).[value](BaseNode.md#value)
