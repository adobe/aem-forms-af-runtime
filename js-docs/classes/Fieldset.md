# Class: Fieldset

Defines a field set class which extends from [container](Container.md)

## Hierarchy

- [`Container`](Container.md)<[`FieldsetJson`](../README.md#fieldsetjson)\>

  ↳ **`Fieldset`**

## Implements

- [`FieldsetModel`](../interfaces/FieldsetModel.md)

## Table of contents

### Accessors

- [:type](Fieldset.md#:type)
- [activeChild](Fieldset.md#activechild)
- [dataRef](Fieldset.md#dataref)
- [description](Fieldset.md#description)
- [enabled](Fieldset.md#enabled)
- [fieldType](Fieldset.md#fieldtype)
- [form](Fieldset.md#form)
- [id](Fieldset.md#id)
- [index](Fieldset.md#index)
- [isContainer](Fieldset.md#iscontainer)
- [items](Fieldset.md#items)
- [label](Fieldset.md#label)
- [lang](Fieldset.md#lang)
- [maxItems](Fieldset.md#maxitems)
- [minItems](Fieldset.md#minitems)
- [name](Fieldset.md#name)
- [parent](Fieldset.md#parent)
- [properties](Fieldset.md#properties)
- [qualifiedName](Fieldset.md#qualifiedname)
- [readOnly](Fieldset.md#readonly)
- [repeatable](Fieldset.md#repeatable)
- [ruleEngine](Fieldset.md#ruleengine)
- [type](Fieldset.md#type)
- [uniqueItems](Fieldset.md#uniqueitems)
- [value](Fieldset.md#value)
- [visible](Fieldset.md#visible)

### Methods

- [\_canHaveRepeatingChildren](Fieldset.md#_canhaverepeatingchildren)
- [executeAction](Fieldset.md#executeaction)
- [executeExpression](Fieldset.md#executeexpression)
- [focus](Fieldset.md#focus)
- [getNonTransparentParent](Fieldset.md#getnontransparentparent)
- [getRules](Fieldset.md#getrules)
- [getState](Fieldset.md#getstate)
- [hasDynamicItems](Fieldset.md#hasdynamicitems)
- [indexOf](Fieldset.md#indexof)
- [isTransparent](Fieldset.md#istransparent)
- [notifyChildren](Fieldset.md#notifychildren)
- [validate](Fieldset.md#validate)

## Accessors

### :type

• `get` **:type**(): `string`

Custom widget type show to the user for capturing the data.

#### Returns

`string`

#### Implementation of

[FieldsetModel](../interfaces/FieldsetModel.md).[:type](../interfaces/FieldsetModel.md#:type)

#### Inherited from

Container.:type

___

### activeChild

• `get` **activeChild**(): ``null`` \| [`BaseModel`](../interfaces/BaseModel.md)

#### Returns

``null`` \| [`BaseModel`](../interfaces/BaseModel.md)

#### Implementation of

[FieldsetModel](../interfaces/FieldsetModel.md).[activeChild](../interfaces/FieldsetModel.md#activechild)

#### Inherited from

Container.activeChild

• `set` **activeChild**(`c`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | ``null`` \| [`BaseModel`](../interfaces/BaseModel.md) |

#### Returns

`void`

#### Implementation of

[FieldsetModel](../interfaces/FieldsetModel.md).[activeChild](../interfaces/FieldsetModel.md#activechild)

#### Inherited from

Container.activeChild

___

### dataRef

• `get` **dataRef**(): `undefined` \| ``null`` \| `string`

To map the field’s value to a property in the data model.

#### Returns

`undefined` \| ``null`` \| `string`

#### Implementation of

[FieldsetModel](../interfaces/FieldsetModel.md).[dataRef](../interfaces/FieldsetModel.md#dataref)

#### Inherited from

Container.dataRef

___

### description

• `get` **description**(): `undefined` \| `string`

Extra description to be shown to the user to aid in form filling experience. It can be rich text.

#### Returns

`undefined` \| `string`

#### Implementation of

[FieldsetModel](../interfaces/FieldsetModel.md).[description](../interfaces/FieldsetModel.md#description)

#### Inherited from

Container.description

• `set` **description**(`d`): `void`

Extra description to be shown to the user to aid in form filling experience. It can be rich text.

#### Parameters

| Name | Type |
| :------ | :------ |
| `d` | `undefined` \| `string` |

#### Returns

`void`

#### Implementation of

[FieldsetModel](../interfaces/FieldsetModel.md).[description](../interfaces/FieldsetModel.md#description)

#### Inherited from

Container.description

___

### enabled

• `get` **enabled**(): `undefined` \| `boolean`

Whether the field is enabled and takes part in rules, events etc.

#### Returns

`undefined` \| `boolean`

#### Implementation of

[FieldsetModel](../interfaces/FieldsetModel.md).[enabled](../interfaces/FieldsetModel.md#enabled)

#### Inherited from

Container.enabled

• `set` **enabled**(`e`): `void`

Whether the field is enabled and takes part in rules, events etc.

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `undefined` \| `boolean` |

#### Returns

`void`

#### Implementation of

[FieldsetModel](../interfaces/FieldsetModel.md).[enabled](../interfaces/FieldsetModel.md#enabled)

#### Inherited from

Container.enabled

___

### fieldType

• `get` **fieldType**(): `string`

Type of field to capture the user data.

#### Returns

`string`

#### Implementation of

[FieldsetModel](../interfaces/FieldsetModel.md).[fieldType](../interfaces/FieldsetModel.md#fieldtype)

#### Overrides

Container.fieldType

___

### form

• `get` **form**(): [`FormModel`](../interfaces/FormModel.md)

#### Returns

[`FormModel`](../interfaces/FormModel.md)

#### Inherited from

Container.form

___

### id

• `get` **id**(): `string`

Unique id of the form field.

#### Returns

`string`

#### Implementation of

[FieldsetModel](../interfaces/FieldsetModel.md).[id](../interfaces/FieldsetModel.md#id)

#### Inherited from

Container.id

___

### index

• `get` **index**(): `number`

The index of the Field within its parent.

#### Returns

`number`

#### Implementation of

[FieldsetModel](../interfaces/FieldsetModel.md).[index](../interfaces/FieldsetModel.md#index)

#### Inherited from

Container.index

___

### isContainer

• `get` **isContainer**(): `boolean`

Whether the form field is container or not

#### Returns

`boolean`

#### Implementation of

[FieldsetModel](../interfaces/FieldsetModel.md).[isContainer](../interfaces/FieldsetModel.md#iscontainer)

#### Inherited from

Container.isContainer

___

### items

• `get` **items**(): ([`FieldModel`](../interfaces/FieldModel.md) \| [`FieldsetModel`](../interfaces/FieldsetModel.md))[]

Defines the children/items of the container

#### Returns

([`FieldModel`](../interfaces/FieldModel.md) \| [`FieldsetModel`](../interfaces/FieldsetModel.md))[]

#### Implementation of

[FieldsetModel](../interfaces/FieldsetModel.md).[items](../interfaces/FieldsetModel.md#items)

#### Overrides

Container.items

___

### label

• `get` **label**(): `undefined` \| [`Label`](../README.md#label)

Label to be used for the field.

#### Returns

`undefined` \| [`Label`](../README.md#label)

#### Implementation of

[FieldsetModel](../interfaces/FieldsetModel.md).[label](../interfaces/FieldsetModel.md#label)

#### Inherited from

Container.label

• `set` **label**(`l`): `void`

Label to be used for the field.

#### Parameters

| Name | Type |
| :------ | :------ |
| `l` | `undefined` \| [`Label`](../README.md#label) |

#### Returns

`void`

#### Implementation of

[FieldsetModel](../interfaces/FieldsetModel.md).[label](../interfaces/FieldsetModel.md#label)

#### Inherited from

Container.label

___

### lang

• `get` **lang**(): `undefined` \| `string`

language of the field

#### Returns

`undefined` \| `string`

#### Implementation of

[FieldsetModel](../interfaces/FieldsetModel.md).[lang](../interfaces/FieldsetModel.md#lang)

#### Inherited from

Container.lang

___

### maxItems

• `get` **maxItems**(): `number`

#### Returns

`number`

#### Implementation of

[FieldsetModel](../interfaces/FieldsetModel.md).[maxItems](../interfaces/FieldsetModel.md#maxitems)

#### Inherited from

Container.maxItems

• `set` **maxItems**(`m`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | `number` |

#### Returns

`void`

#### Implementation of

[FieldsetModel](../interfaces/FieldsetModel.md).[maxItems](../interfaces/FieldsetModel.md#maxitems)

#### Inherited from

Container.maxItems

___

### minItems

• `get` **minItems**(): `number`

#### Returns

`number`

#### Implementation of

[FieldsetModel](../interfaces/FieldsetModel.md).[minItems](../interfaces/FieldsetModel.md#minitems)

#### Inherited from

Container.minItems

• `set` **minItems**(`m`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | `number` |

#### Returns

`void`

#### Implementation of

[FieldsetModel](../interfaces/FieldsetModel.md).[minItems](../interfaces/FieldsetModel.md#minitems)

#### Inherited from

Container.minItems

___

### name

• `get` **name**(): `undefined` \| `string`

Name of the form field.

#### Returns

`undefined` \| `string`

#### Implementation of

[FieldsetModel](../interfaces/FieldsetModel.md).[name](../interfaces/FieldsetModel.md#name)

#### Inherited from

Container.name

___

### parent

• `get` **parent**(): [`ContainerModel`](../interfaces/ContainerModel.md)

Defines the parent of the container

#### Returns

[`ContainerModel`](../interfaces/ContainerModel.md)

#### Implementation of

[FieldsetModel](../interfaces/FieldsetModel.md).[parent](../interfaces/FieldsetModel.md#parent)

#### Inherited from

Container.parent

___

### properties

• `get` **properties**(): `Object`

Custom properties of the form field.

#### Returns

`Object`

#### Implementation of

[FieldsetModel](../interfaces/FieldsetModel.md).[properties](../interfaces/FieldsetModel.md#properties)

#### Inherited from

Container.properties

• `set` **properties**(`p`): `void`

Custom properties of the form field.

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | `Object` |

#### Returns

`void`

#### Implementation of

[FieldsetModel](../interfaces/FieldsetModel.md).[properties](../interfaces/FieldsetModel.md#properties)

#### Inherited from

Container.properties

___

### qualifiedName

• `get` **qualifiedName**(): `any`

#### Returns

`any`

#### Implementation of

[FieldsetModel](../interfaces/FieldsetModel.md).[qualifiedName](../interfaces/FieldsetModel.md#qualifiedname)

#### Inherited from

Container.qualifiedName

___

### readOnly

• `get` **readOnly**(): `any`

Whether the field should be readOnly to end user or not.

#### Returns

`any`

#### Implementation of

[FieldsetModel](../interfaces/FieldsetModel.md).[readOnly](../interfaces/FieldsetModel.md#readonly)

#### Inherited from

Container.readOnly

• `set` **readOnly**(`e`): `void`

Whether the field should be readOnly to end user or not.

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `any` |

#### Returns

`void`

#### Implementation of

[FieldsetModel](../interfaces/FieldsetModel.md).[readOnly](../interfaces/FieldsetModel.md#readonly)

#### Inherited from

Container.readOnly

___

### repeatable

• `get` **repeatable**(): `any`

Field is repeatable or not

#### Returns

`any`

#### Implementation of

[FieldsetModel](../interfaces/FieldsetModel.md).[repeatable](../interfaces/FieldsetModel.md#repeatable)

#### Inherited from

Container.repeatable

___

### ruleEngine

• `get` **ruleEngine**(): `RuleEngine`

#### Returns

`RuleEngine`

#### Implementation of

FieldsetModel.ruleEngine

#### Inherited from

Container.ruleEngine

___

### type

• `get` **type**(): `undefined` \| ``"array"`` \| ``"object"``

#### Returns

`undefined` \| ``"array"`` \| ``"object"``

#### Implementation of

[FieldsetModel](../interfaces/FieldsetModel.md).[type](../interfaces/FieldsetModel.md#type)

#### Overrides

Container.type

___

### uniqueItems

• `get` **uniqueItems**(): `undefined` \| `boolean`

#### Returns

`undefined` \| `boolean`

#### Implementation of

[FieldsetModel](../interfaces/FieldsetModel.md).[uniqueItems](../interfaces/FieldsetModel.md#uniqueitems)

#### Inherited from

Container.uniqueItems

___

### value

• `get` **value**(): ``null``

The current value of the Field. The property is serialized in the Data Model.

#### Returns

``null``

#### Implementation of

[FieldsetModel](../interfaces/FieldsetModel.md).[value](../interfaces/FieldsetModel.md#value)

#### Overrides

Container.value

___

### visible

• `get` **visible**(): `undefined` \| `boolean`

Whether the field should be visible to author or not.

#### Returns

`undefined` \| `boolean`

#### Implementation of

[FieldsetModel](../interfaces/FieldsetModel.md).[visible](../interfaces/FieldsetModel.md#visible)

#### Inherited from

Container.visible

• `set` **visible**(`v`): `void`

Whether the field should be visible to author or not.

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `undefined` \| `boolean` |

#### Returns

`void`

#### Implementation of

[FieldsetModel](../interfaces/FieldsetModel.md).[visible](../interfaces/FieldsetModel.md#visible)

#### Inherited from

Container.visible

## Methods

### \_canHaveRepeatingChildren

▸ **_canHaveRepeatingChildren**(`mode?`): `boolean`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `mode` | [`FormCreationMode`](../README.md#formcreationmode) | `'create'` |

#### Returns

`boolean`

#### Inherited from

[Container](Container.md).[_canHaveRepeatingChildren](Container.md#_canhaverepeatingchildren)

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

[Container](Container.md).[executeAction](Container.md#executeaction)

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

[Container](Container.md).[executeExpression](Container.md#executeexpression)

___

### focus

▸ **focus**(): `void`

#### Returns

`void`

#### Inherited from

[Container](Container.md).[focus](Container.md#focus)

___

### getNonTransparentParent

▸ **getNonTransparentParent**(): [`ContainerModel`](../interfaces/ContainerModel.md)

#### Returns

[`ContainerModel`](../interfaces/ContainerModel.md)

#### Inherited from

[Container](Container.md).[getNonTransparentParent](Container.md#getnontransparentparent)

___

### getRules

▸ **getRules**(): [`Items`](../README.md#items)<`string`\>

#### Returns

[`Items`](../README.md#items)<`string`\>

#### Inherited from

[Container](Container.md).[getRules](Container.md#getrules)

___

### getState

▸ **getState**(`isRepeatableChild?`, `forRestore?`): `TranslationBaseJson` & [`RulesJson`](../README.md#rulesjson) & `TranslationConstraintsJson` & { `accept?`: `string`[] ; `enforceEnum?`: `boolean` ; `exclusiveMaximum?`: `number` ; `exclusiveMinimum?`: `number` ; `format?`: `string` ; `maxFileSize?`: `string` \| `number` ; `maxItems?`: `number` ; `maxLength?`: `number` ; `maxOccur?`: `number` ; `maximum?`: `number` ; `minItems?`: `number` ; `minLength?`: `number` ; `minOccur?`: `number` ; `minimum?`: `number` ; `pattern?`: `string` ; `required?`: `boolean` ; `step?`: `number` ; `type?`: `string` ; `uniqueItems?`: `boolean` ; `validationExpression?`: `string`  } & { `:type?`: `string` ; `altText?`: `string` ; `appliedCssClassNames?`: `string` ; `constraintMessages?`: [`ConstraintsMessages`](../README.md#constraintsmessages) ; `dataRef?`: ``null`` \| `string` ; `enabled?`: `boolean` ; `errorMessage?`: `string` ; `fieldType?`: `string` ; `label?`: [`Label`](../README.md#label) ; `lang?`: `string` ; `name?`: `string` ; `properties?`: { [key: string]: `any`;  } ; `repeatable?`: `boolean` ; `screenReaderText?`: `string` ; `tooltip?`: `string` ; `viewType?`: `string` ; `visible?`: `boolean`  } & { `activeChild?`: `string` ; `initialItems?`: `number` ; `items`: ([`FieldJson`](../README.md#fieldjson) \| [`ContainerJson`](../README.md#containerjson))[]  } & { `readOnly?`: `boolean` ; `type?`: ``"object"`` \| ``"array"``  } & { `:items`: `undefined` = undefined; `:itemsOrder`: `undefined` = undefined; `:type`: `string` ; `_dependents`: `undefined` \| `string`[] ; `allowedComponents`: `undefined` = undefined; `columnClassNames`: `undefined` = undefined; `columnCount`: `undefined` = undefined; `enabled`: `undefined` \| `boolean` ; `gridClassNames`: `undefined` = undefined; `id`: `string` ; `index`: `number` ; `items`: `any`[] ; `parent`: `undefined` = undefined; `properties`: { [key: string]: `any`;  } ; `qualifiedName`: `any` ; `readOnly`: `any` ; `repeatable`: `undefined` \| `boolean`  }

Returns the current container state

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `isRepeatableChild` | `boolean` | `false` |
| `forRestore` | `boolean` | `false` |

#### Returns

`TranslationBaseJson` & [`RulesJson`](../README.md#rulesjson) & `TranslationConstraintsJson` & { `accept?`: `string`[] ; `enforceEnum?`: `boolean` ; `exclusiveMaximum?`: `number` ; `exclusiveMinimum?`: `number` ; `format?`: `string` ; `maxFileSize?`: `string` \| `number` ; `maxItems?`: `number` ; `maxLength?`: `number` ; `maxOccur?`: `number` ; `maximum?`: `number` ; `minItems?`: `number` ; `minLength?`: `number` ; `minOccur?`: `number` ; `minimum?`: `number` ; `pattern?`: `string` ; `required?`: `boolean` ; `step?`: `number` ; `type?`: `string` ; `uniqueItems?`: `boolean` ; `validationExpression?`: `string`  } & { `:type?`: `string` ; `altText?`: `string` ; `appliedCssClassNames?`: `string` ; `constraintMessages?`: [`ConstraintsMessages`](../README.md#constraintsmessages) ; `dataRef?`: ``null`` \| `string` ; `enabled?`: `boolean` ; `errorMessage?`: `string` ; `fieldType?`: `string` ; `label?`: [`Label`](../README.md#label) ; `lang?`: `string` ; `name?`: `string` ; `properties?`: { [key: string]: `any`;  } ; `repeatable?`: `boolean` ; `screenReaderText?`: `string` ; `tooltip?`: `string` ; `viewType?`: `string` ; `visible?`: `boolean`  } & { `activeChild?`: `string` ; `initialItems?`: `number` ; `items`: ([`FieldJson`](../README.md#fieldjson) \| [`ContainerJson`](../README.md#containerjson))[]  } & { `readOnly?`: `boolean` ; `type?`: ``"object"`` \| ``"array"``  } & { `:items`: `undefined` = undefined; `:itemsOrder`: `undefined` = undefined; `:type`: `string` ; `_dependents`: `undefined` \| `string`[] ; `allowedComponents`: `undefined` = undefined; `columnClassNames`: `undefined` = undefined; `columnCount`: `undefined` = undefined; `enabled`: `undefined` \| `boolean` ; `gridClassNames`: `undefined` = undefined; `id`: `string` ; `index`: `number` ; `items`: `any`[] ; `parent`: `undefined` = undefined; `properties`: { [key: string]: `any`;  } ; `qualifiedName`: `any` ; `readOnly`: `any` ; `repeatable`: `undefined` \| `boolean`  }

#### Implementation of

[FieldsetModel](../interfaces/FieldsetModel.md).[getState](../interfaces/FieldsetModel.md#getstate)

#### Inherited from

[Container](Container.md).[getState](Container.md#getstate)

___

### hasDynamicItems

▸ **hasDynamicItems**(): `boolean`

returns whether the items in the Panel can repeat or not

#### Returns

`boolean`

#### Inherited from

[Container](Container.md).[hasDynamicItems](Container.md#hasdynamicitems)

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

[FieldsetModel](../interfaces/FieldsetModel.md).[indexOf](../interfaces/FieldsetModel.md#indexof)

#### Inherited from

[Container](Container.md).[indexOf](Container.md#indexof)

___

### isTransparent

▸ **isTransparent**(): `boolean`

Transparent form fields are meant only for creation of view. They are also not part of data

#### Returns

`boolean`

#### Implementation of

[FieldsetModel](../interfaces/FieldsetModel.md).[isTransparent](../interfaces/FieldsetModel.md#istransparent)

#### Inherited from

[Container](Container.md).[isTransparent](Container.md#istransparent)

___

### notifyChildren

▸ **notifyChildren**(`action`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | [`Action`](../interfaces/Action.md) |

#### Returns

`void`

#### Inherited from

[Container](Container.md).[notifyChildren](Container.md#notifychildren)

___

### validate

▸ **validate**(): [`ValidationError`](ValidationError.md)[]

Validates the given form field

#### Returns

[`ValidationError`](ValidationError.md)[]

#### Implementation of

[FieldsetModel](../interfaces/FieldsetModel.md).[validate](../interfaces/FieldsetModel.md#validate)

#### Inherited from

[Container](Container.md).[validate](Container.md#validate)
