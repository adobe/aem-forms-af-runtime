# Class: Scriptable<T\>

Defines scriptable aspects (ie rules, events) of form runtime model. Any form runtime object which requires
execution of rules/events should extend from this class.

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
- [lang](Scriptable.md#lang)
- [name](Scriptable.md#name)
- [parent](Scriptable.md#parent)
- [properties](Scriptable.md#properties)
- [qualifiedName](Scriptable.md#qualifiedname)
- [repeatable](Scriptable.md#repeatable)
- [ruleEngine](Scriptable.md#ruleengine)
- [screenReaderText](Scriptable.md#screenreadertext)
- [type](Scriptable.md#type)
- [uniqueItems](Scriptable.md#uniqueitems)
- [visible](Scriptable.md#visible)

### Properties

- [\_eventSource](Scriptable.md#_eventsource)
- [value](Scriptable.md#value)

### Methods

- [change](Scriptable.md#change)
- [defaultDataModel](Scriptable.md#defaultdatamodel)
- [dispatch](Scriptable.md#dispatch)
- [executeAction](Scriptable.md#executeaction)
- [executeExpression](Scriptable.md#executeexpression)
- [focus](Scriptable.md#focus)
- [getDependents](Scriptable.md#getdependents)
- [getNonTransparentParent](Scriptable.md#getnontransparentparent)
- [getRules](Scriptable.md#getrules)
- [getState](Scriptable.md#getstate)
- [importData](Scriptable.md#importdata)
- [isTransparent](Scriptable.md#istransparent)
- [reset](Scriptable.md#reset)
- [validate](Scriptable.md#validate)

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

### lang

• `get` **lang**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

BaseNode.lang

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

### qualifiedName

• `get` **qualifiedName**(): `any`

#### Returns

`any`

#### Inherited from

BaseNode.qualifiedName

___

### repeatable

• `get` **repeatable**(): `any`

#### Returns

`any`

#### Inherited from

BaseNode.repeatable

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

### screenReaderText

• `get` **screenReaderText**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

BaseNode.screenReaderText

___

### type

• `get` **type**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

BaseNode.type

___

### uniqueItems

• `get` **uniqueItems**(): `undefined` \| `boolean`

#### Returns

`undefined` \| `boolean`

#### Inherited from

BaseNode.uniqueItems

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

## Properties

### \_eventSource

• **\_eventSource**: [`EventSource`](../enums/EventSource.md) = `EventSource.CODE`

#### Inherited from

[BaseNode](BaseNode.md).[_eventSource](BaseNode.md#_eventsource)

___

### value

• `Abstract` **value**: [`Primitives`](../README.md#primitives)

The current value of the Field. The property is serialized in the Data Model.

#### Inherited from

[BaseNode](BaseNode.md).[value](BaseNode.md#value)

## Methods

### change

▸ **change**(`event`, `context`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Action`](../interfaces/Action.md) |
| `context` | `any` |

#### Returns

`void`

___

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

### focus

▸ **focus**(): `void`

#### Returns

`void`

#### Inherited from

[BaseNode](BaseNode.md).[focus](BaseNode.md#focus)

___

### getDependents

▸ **getDependents**(): `string`[]

#### Returns

`string`[]

#### Inherited from

[BaseNode](BaseNode.md).[getDependents](BaseNode.md#getdependents)

___

### getNonTransparentParent

▸ **getNonTransparentParent**(): [`ContainerModel`](../interfaces/ContainerModel.md)

#### Returns

[`ContainerModel`](../interfaces/ContainerModel.md)

#### Inherited from

[BaseNode](BaseNode.md).[getNonTransparentParent](BaseNode.md#getnontransparentparent)

___

### getRules

▸ **getRules**(): [`Items`](../README.md#items)<`string`\>

#### Returns

[`Items`](../README.md#items)<`string`\>

___

### getState

▸ **getState**(`forRestore?`): `T` & { `:type`: `string` ; `_dependents`: `undefined` \| `string`[] ; `allowedComponents`: `undefined` = undefined; `columnClassNames`: `undefined` = undefined; `columnCount`: `undefined` = undefined; `gridClassNames`: `undefined` = undefined; `id`: `string` ; `index`: `number` ; `maxOccur`: `undefined` \| `number` ; `minOccur`: `undefined` \| `number` ; `parent`: `undefined` = undefined; `properties`: { [key: string]: `any`;  } ; `qualifiedName`: `any` ; `repeatable`: `undefined` \| `boolean` = true }

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `forRestore` | `boolean` | `false` |

#### Returns

`T` & { `:type`: `string` ; `_dependents`: `undefined` \| `string`[] ; `allowedComponents`: `undefined` = undefined; `columnClassNames`: `undefined` = undefined; `columnCount`: `undefined` = undefined; `gridClassNames`: `undefined` = undefined; `id`: `string` ; `index`: `number` ; `maxOccur`: `undefined` \| `number` ; `minOccur`: `undefined` \| `number` ; `parent`: `undefined` = undefined; `properties`: { [key: string]: `any`;  } ; `qualifiedName`: `any` ; `repeatable`: `undefined` \| `boolean` = true }

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

### reset

▸ `Abstract` **reset**(): `any`

Resets the form model

#### Returns

`any`

#### Inherited from

[BaseNode](BaseNode.md).[reset](BaseNode.md#reset)

___

### validate

▸ `Abstract` **validate**(): [`ValidationError`](ValidationError.md)[]

Validates the given form field

#### Returns

[`ValidationError`](ValidationError.md)[]

#### Inherited from

[BaseNode](BaseNode.md).[validate](BaseNode.md#validate)
