# Class: Container<T\>

Defines a generic container class which any form container should extend from.

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends [`ContainerJson`](../README.md#containerjson) & [`RulesJson`](../README.md#rulesjson) | type of the node which extends [ContainerJson](../README.md#containerjson) and [RulesJson](../README.md#rulesjson) |

## Hierarchy

- [`Scriptable`](Scriptable.md)<`T`\>

  ↳ **`Container`**

  ↳↳ [`Form`](Form.md)

  ↳↳ [`Fieldset`](Fieldset.md)

## Implements

- [`ContainerModel`](../interfaces/ContainerModel.md)

## Table of contents

### Accessors

- [:type](Container.md#:type)
- [activeChild](Container.md#activechild)
- [dataRef](Container.md#dataref)
- [description](Container.md#description)
- [enabled](Container.md#enabled)
- [fieldType](Container.md#fieldtype)
- [form](Container.md#form)
- [id](Container.md#id)
- [index](Container.md#index)
- [isContainer](Container.md#iscontainer)
- [items](Container.md#items)
- [label](Container.md#label)
- [lang](Container.md#lang)
- [maxItems](Container.md#maxitems)
- [minItems](Container.md#minitems)
- [name](Container.md#name)
- [parent](Container.md#parent)
- [properties](Container.md#properties)
- [qualifiedName](Container.md#qualifiedname)
- [readOnly](Container.md#readonly)
- [repeatable](Container.md#repeatable)
- [ruleEngine](Container.md#ruleengine)
- [type](Container.md#type)
- [uniqueItems](Container.md#uniqueitems)
- [visible](Container.md#visible)

### Constructors

- [constructor](Container.md#constructor)

### Methods

- [executeAction](Container.md#executeaction)
- [executeExpression](Container.md#executeexpression)
- [focus](Container.md#focus)
- [getNonTransparentParent](Container.md#getnontransparentparent)
- [getRules](Container.md#getrules)
- [getState](Container.md#getstate)
- [hasDynamicItems](Container.md#hasdynamicitems)
- [indexOf](Container.md#indexof)
- [isTransparent](Container.md#istransparent)
- [notifyChildren](Container.md#notifychildren)
- [validate](Container.md#validate)

### Properties

- [value](Container.md#value)

## Accessors

### :type

• `get` **:type**(): `string`

Custom widget type show to the user for capturing the data.

#### Returns

`string`

#### Implementation of

[ContainerModel](../interfaces/ContainerModel.md).[:type](../interfaces/ContainerModel.md#:type)

#### Inherited from

Scriptable.:type

___

### activeChild

• `get` **activeChild**(): ``null`` \| [`BaseModel`](../interfaces/BaseModel.md)

#### Returns

``null`` \| [`BaseModel`](../interfaces/BaseModel.md)

#### Implementation of

[ContainerModel](../interfaces/ContainerModel.md).[activeChild](../interfaces/ContainerModel.md#activechild)

• `set` **activeChild**(`c`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | ``null`` \| [`BaseModel`](../interfaces/BaseModel.md) |

#### Returns

`void`

#### Implementation of

[ContainerModel](../interfaces/ContainerModel.md).[activeChild](../interfaces/ContainerModel.md#activechild)

___

### dataRef

• `get` **dataRef**(): `undefined` \| ``null`` \| `string`

To map the field’s value to a property in the data model.

#### Returns

`undefined` \| ``null`` \| `string`

#### Implementation of

[ContainerModel](../interfaces/ContainerModel.md).[dataRef](../interfaces/ContainerModel.md#dataref)

#### Inherited from

Scriptable.dataRef

___

### description

• `get` **description**(): `undefined` \| `string`

Extra description to be shown to the user to aid in form filling experience. It can be rich text.

#### Returns

`undefined` \| `string`

#### Implementation of

[ContainerModel](../interfaces/ContainerModel.md).[description](../interfaces/ContainerModel.md#description)

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

[ContainerModel](../interfaces/ContainerModel.md).[description](../interfaces/ContainerModel.md#description)

#### Inherited from

Scriptable.description

___

### enabled

• `get` **enabled**(): `undefined` \| `boolean`

Whether the field is enabled and takes part in rules, events etc.

#### Returns

`undefined` \| `boolean`

#### Implementation of

[ContainerModel](../interfaces/ContainerModel.md).[enabled](../interfaces/ContainerModel.md#enabled)

• `set` **enabled**(`e`): `void`

Whether the field is enabled and takes part in rules, events etc.

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `undefined` \| `boolean` |

#### Returns

`void`

#### Implementation of

[ContainerModel](../interfaces/ContainerModel.md).[enabled](../interfaces/ContainerModel.md#enabled)

___

### fieldType

• `get` **fieldType**(): `string`

Type of field to capture the user data.

#### Returns

`string`

#### Implementation of

[ContainerModel](../interfaces/ContainerModel.md).[fieldType](../interfaces/ContainerModel.md#fieldtype)

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

### id

• `get` **id**(): `string`

Unique id of the form field.

#### Returns

`string`

#### Implementation of

[ContainerModel](../interfaces/ContainerModel.md).[id](../interfaces/ContainerModel.md#id)

#### Inherited from

Scriptable.id

___

### index

• `get` **index**(): `number`

The index of the Field within its parent.

#### Returns

`number`

#### Implementation of

[ContainerModel](../interfaces/ContainerModel.md).[index](../interfaces/ContainerModel.md#index)

#### Inherited from

Scriptable.index

___

### isContainer

• `get` **isContainer**(): `boolean`

Whether the form field is container or not

#### Returns

`boolean`

#### Implementation of

[ContainerModel](../interfaces/ContainerModel.md).[isContainer](../interfaces/ContainerModel.md#iscontainer)

#### Overrides

Scriptable.isContainer

___

### items

• `get` **items**(): ([`FieldModel`](../interfaces/FieldModel.md) \| [`FieldsetModel`](../interfaces/FieldsetModel.md))[]

Defines the children/items of the container

#### Returns

([`FieldModel`](../interfaces/FieldModel.md) \| [`FieldsetModel`](../interfaces/FieldsetModel.md))[]

#### Implementation of

[ContainerModel](../interfaces/ContainerModel.md).[items](../interfaces/ContainerModel.md#items)

___

### label

• `get` **label**(): `undefined` \| [`Label`](../README.md#label)

Label to be used for the field.

#### Returns

`undefined` \| [`Label`](../README.md#label)

#### Implementation of

[ContainerModel](../interfaces/ContainerModel.md).[label](../interfaces/ContainerModel.md#label)

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

[ContainerModel](../interfaces/ContainerModel.md).[label](../interfaces/ContainerModel.md#label)

#### Inherited from

Scriptable.label

___

### lang

• `get` **lang**(): `undefined` \| `string`

language of the field

#### Returns

`undefined` \| `string`

#### Implementation of

[ContainerModel](../interfaces/ContainerModel.md).[lang](../interfaces/ContainerModel.md#lang)

#### Inherited from

Scriptable.lang

___

### maxItems

• `get` **maxItems**(): `number`

#### Returns

`number`

#### Implementation of

[ContainerModel](../interfaces/ContainerModel.md).[maxItems](../interfaces/ContainerModel.md#maxitems)

• `set` **maxItems**(`m`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | `number` |

#### Returns

`void`

#### Implementation of

[ContainerModel](../interfaces/ContainerModel.md).[maxItems](../interfaces/ContainerModel.md#maxitems)

___

### minItems

• `get` **minItems**(): `number`

#### Returns

`number`

#### Implementation of

[ContainerModel](../interfaces/ContainerModel.md).[minItems](../interfaces/ContainerModel.md#minitems)

___

### name

• `get` **name**(): `undefined` \| `string`

Name of the form field.

#### Returns

`undefined` \| `string`

#### Implementation of

[ContainerModel](../interfaces/ContainerModel.md).[name](../interfaces/ContainerModel.md#name)

#### Inherited from

Scriptable.name

___

### parent

• `get` **parent**(): [`ContainerModel`](../interfaces/ContainerModel.md)

Defines the parent of the container

#### Returns

[`ContainerModel`](../interfaces/ContainerModel.md)

#### Implementation of

[ContainerModel](../interfaces/ContainerModel.md).[parent](../interfaces/ContainerModel.md#parent)

#### Inherited from

Scriptable.parent

___

### properties

• `get` **properties**(): `Object`

Custom properties of the form field.

#### Returns

`Object`

#### Implementation of

[ContainerModel](../interfaces/ContainerModel.md).[properties](../interfaces/ContainerModel.md#properties)

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

[ContainerModel](../interfaces/ContainerModel.md).[properties](../interfaces/ContainerModel.md#properties)

#### Inherited from

Scriptable.properties

___

### qualifiedName

• `get` **qualifiedName**(): `any`

#### Returns

`any`

#### Implementation of

[ContainerModel](../interfaces/ContainerModel.md).[qualifiedName](../interfaces/ContainerModel.md#qualifiedname)

#### Inherited from

Scriptable.qualifiedName

___

### readOnly

• `get` **readOnly**(): `any`

Whether the field should be readOnly to end user or not.

#### Returns

`any`

#### Implementation of

[ContainerModel](../interfaces/ContainerModel.md).[readOnly](../interfaces/ContainerModel.md#readonly)

• `set` **readOnly**(`e`): `void`

Whether the field should be readOnly to end user or not.

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `any` |

#### Returns

`void`

#### Implementation of

[ContainerModel](../interfaces/ContainerModel.md).[readOnly](../interfaces/ContainerModel.md#readonly)

___

### repeatable

• `get` **repeatable**(): `any`

Field is repeatable or not

#### Returns

`any`

#### Implementation of

[ContainerModel](../interfaces/ContainerModel.md).[repeatable](../interfaces/ContainerModel.md#repeatable)

#### Inherited from

Scriptable.repeatable

___

### ruleEngine

• `get` **ruleEngine**(): `RuleEngine`

#### Returns

`RuleEngine`

#### Implementation of

ContainerModel.ruleEngine

#### Inherited from

Scriptable.ruleEngine

___

### type

• `get` **type**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Implementation of

[ContainerModel](../interfaces/ContainerModel.md).[type](../interfaces/ContainerModel.md#type)

#### Inherited from

Scriptable.type

___

### uniqueItems

• `get` **uniqueItems**(): `undefined` \| `boolean`

#### Returns

`undefined` \| `boolean`

#### Implementation of

[ContainerModel](../interfaces/ContainerModel.md).[uniqueItems](../interfaces/ContainerModel.md#uniqueitems)

#### Inherited from

Scriptable.uniqueItems

___

### visible

• `get` **visible**(): `undefined` \| `boolean`

Whether the field should be visible to author or not.

#### Returns

`undefined` \| `boolean`

#### Implementation of

[ContainerModel](../interfaces/ContainerModel.md).[visible](../interfaces/ContainerModel.md#visible)

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

[ContainerModel](../interfaces/ContainerModel.md).[visible](../interfaces/ContainerModel.md#visible)

#### Inherited from

Scriptable.visible

## Constructors

### constructor

• **new Container**<`T`\>(`json`, `_options`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `TranslationBaseJson` & [`RulesJson`](../README.md#rulesjson) & `TranslationConstraintsJson` & { `accept?`: `string`[] ; `enforceEnum?`: `boolean` ; `exclusiveMaximum?`: `number` ; `exclusiveMinimum?`: `number` ; `format?`: `string` ; `maxFileSize?`: `string` \| `number` ; `maxItems?`: `number` ; `maxLength?`: `number` ; `maxOccur?`: `number` ; `maximum?`: `number` ; `minItems?`: `number` ; `minLength?`: `number` ; `minOccur?`: `number` ; `minimum?`: `number` ; `pattern?`: `string` ; `required?`: `boolean` ; `step?`: `number` ; `type?`: `string` ; `uniqueItems?`: `boolean` ; `validationExpression?`: `string`  } & { `:type?`: `string` ; `altText?`: `string` ; `constraintMessages?`: [`ConstraintsMessages`](../README.md#constraintsmessages) ; `dataRef?`: ``null`` \| `string` ; `enabled?`: `boolean` ; `errorMessage?`: `string` ; `fieldType?`: `string` ; `label?`: [`Label`](../README.md#label) ; `lang?`: `string` ; `name?`: `string` ; `properties?`: { [key: string]: `any`;  } ; `repeatable?`: `boolean` ; `screenReaderText?`: `string` ; `tooltip?`: `string` ; `viewType?`: `string` ; `visible?`: `boolean`  } & { `activeChild?`: `string` ; `initialItems?`: `number` ; `items`: ([`FieldJson`](../README.md#fieldjson) \| [`ContainerJson`](../README.md#containerjson))[]  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `T` |
| `_options` | `Object` |
| `_options.fieldFactory` | [`IFormFieldFactory`](../interfaces/IFormFieldFactory.md) |
| `_options.form` | [`FormModel`](../interfaces/FormModel.md) |
| `_options.parent` | [`ContainerModel`](../interfaces/ContainerModel.md) |

#### Overrides

Scriptable&lt;T\&gt;.constructor

## Methods

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

### focus

▸ **focus**(): `void`

#### Returns

`void`

#### Inherited from

[Scriptable](Scriptable.md).[focus](Scriptable.md#focus)

___

### getNonTransparentParent

▸ **getNonTransparentParent**(): [`ContainerModel`](../interfaces/ContainerModel.md)

#### Returns

[`ContainerModel`](../interfaces/ContainerModel.md)

#### Inherited from

[Scriptable](Scriptable.md).[getNonTransparentParent](Scriptable.md#getnontransparentparent)

___

### getRules

▸ **getRules**(): [`Items`](../README.md#items)<`string`\>

#### Returns

[`Items`](../README.md#items)<`string`\>

#### Inherited from

[Scriptable](Scriptable.md).[getRules](Scriptable.md#getrules)

___

### getState

▸ **getState**(`isRepeatableChild?`): `T` & { `:type`: `string` ; `enabled`: `undefined` \| `boolean` ; `events`: {} = {}; `id`: `string` ; `index`: `number` ; `items`: `any`[] ; `parent`: `undefined` = undefined; `properties`: { [key: string]: `any`;  } ; `qualifiedName`: `any` ; `readOnly`: `any` ; `repeatable`: `undefined` \| `boolean` ; `rules`: {} = {} }

Returns the current container state

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `isRepeatableChild` | `boolean` | `false` |

#### Returns

`T` & { `:type`: `string` ; `enabled`: `undefined` \| `boolean` ; `events`: {} = {}; `id`: `string` ; `index`: `number` ; `items`: `any`[] ; `parent`: `undefined` = undefined; `properties`: { [key: string]: `any`;  } ; `qualifiedName`: `any` ; `readOnly`: `any` ; `repeatable`: `undefined` \| `boolean` ; `rules`: {} = {} }

#### Overrides

[Scriptable](Scriptable.md).[getState](Scriptable.md#getstate)

___

### hasDynamicItems

▸ **hasDynamicItems**(): `boolean`

returns whether the items in the Panel can repeat or not

#### Returns

`boolean`

___

### indexOf

▸ **indexOf**(`f`): `number`

Returns the index of the [child item](../interfaces/FieldModel.md) or the [child container](../interfaces/FieldsetModel.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`FieldModel`](../interfaces/FieldModel.md) \| [`FieldsetModel`](../interfaces/FieldsetModel.md) |

#### Returns

`number`

#### Implementation of

[ContainerModel](../interfaces/ContainerModel.md).[indexOf](../interfaces/ContainerModel.md#indexof)

___

### isTransparent

▸ **isTransparent**(): `boolean`

Transparent form fields are meant only for creation of view. They are also not part of data

#### Returns

`boolean`

#### Implementation of

[ContainerModel](../interfaces/ContainerModel.md).[isTransparent](../interfaces/ContainerModel.md#istransparent)

#### Inherited from

[Scriptable](Scriptable.md).[isTransparent](Scriptable.md#istransparent)

___

### notifyChildren

▸ **notifyChildren**(`action`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | [`Action`](../interfaces/Action.md) |

#### Returns

`void`

___

### validate

▸ **validate**(): [`ValidationError`](ValidationError.md)[]

Validates the given form field

#### Returns

[`ValidationError`](ValidationError.md)[]

#### Implementation of

[ContainerModel](../interfaces/ContainerModel.md).[validate](../interfaces/ContainerModel.md#validate)

#### Overrides

[Scriptable](Scriptable.md).[validate](Scriptable.md#validate)

## Properties

### value

• `Abstract` **value**: [`Primitives`](../README.md#primitives)

The current value of the Field. The property is serialized in the Data Model.

#### Implementation of

[ContainerModel](../interfaces/ContainerModel.md).[value](../interfaces/ContainerModel.md#value)

#### Inherited from

[Scriptable](Scriptable.md).[value](Scriptable.md#value)
