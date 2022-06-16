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
- [dataRef](Container.md#dataref)
- [description](Container.md#description)
- [fieldType](Container.md#fieldtype)
- [form](Container.md#form)
- [id](Container.md#id)
- [index](Container.md#index)
- [isContainer](Container.md#iscontainer)
- [items](Container.md#items)
- [label](Container.md#label)
- [maxItems](Container.md#maxitems)
- [name](Container.md#name)
- [parent](Container.md#parent)
- [properties](Container.md#properties)
- [ruleEngine](Container.md#ruleengine)
- [rules](Container.md#rules)
- [type](Container.md#type)
- [visible](Container.md#visible)

### Methods

- [executeAction](Container.md#executeaction)
- [executeExpression](Container.md#executeexpression)
- [getState](Container.md#getstate)
- [hasDynamicItems](Container.md#hasdynamicitems)
- [indexOf](Container.md#indexof)
- [isTransparent](Container.md#istransparent)
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

### maxItems

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

### ruleEngine

• `get` **ruleEngine**(): `RuleEngine`

#### Returns

`RuleEngine`

#### Implementation of

ContainerModel.ruleEngine

#### Inherited from

Scriptable.ruleEngine

___

### rules

• `get` **rules**(): [`Items`](../README.md#items)<`string`\>

Rules that modify the property of the object dynamically. The rules are evaluated whenever the dependency changes.

#### Returns

[`Items`](../README.md#items)<`string`\>

#### Implementation of

[ContainerModel](../interfaces/ContainerModel.md).[rules](../interfaces/ContainerModel.md#rules)

#### Inherited from

Scriptable.rules

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

### getState

▸ **getState**(): `T` & { `:type`: `string` ; `id`: `string` ; `items`: ({ `:type`: `string` ; `accept?`: `string`[] ; `constraintMessages?`: [`ConstraintsMessages`](../README.md#constraintsmessages) ; `dataRef?`: ``null`` \| `string` ; `default?`: `any` ; `description?`: `string` ; `emptyValue?`: ``""`` \| ``"undefined"`` \| ``"null"`` ; `enabled?`: `boolean` ; `enforceEnum?`: `boolean` ; `enum?`: `any`[] ; `enumNames?`: `string`[] ; `errorMessage?`: `string` ; `events?`: [`Items`](../README.md#items)<`undefined` \| `string` \| `string`[]\> ; `exclusiveMaximum?`: `number` ; `exclusiveMinimum?`: `number` ; `fieldType?`: `string` ; `format?`: `string` ; `id`: `string` ; `label?`: [`Label`](../README.md#label) ; `maxFileSize?`: `string` \| `number` ; `maxItems?`: `number` ; `maxLength?`: `number` ; `maximum?`: `number` ; `minItems?`: `number` ; `minLength?`: `number` ; `minimum?`: `number` ; `name?`: `string` ; `pattern?`: `string` ; `placeholder?`: `string` ; `properties?`: { [key: string]: `any`;  } ; `readOnly?`: `boolean` ; `required?`: `boolean` ; `rules?`: [`Items`](../README.md#items)<`string`\> ; `step?`: `number` ; `type?`: `string` ; `valid?`: `boolean` ; `validationExpression?`: `string` ; `value?`: `any` ; `visible?`: `boolean`  } \| { `:type?`: `string` ; `accept?`: `string`[] ; `constraintMessages?`: [`ConstraintsMessages`](../README.md#constraintsmessages) ; `dataRef?`: ``null`` \| `string` ; `description?`: `string` ; `enabled?`: `boolean` ; `enforceEnum?`: `boolean` ; `enum?`: `any`[] ; `enumNames?`: `string`[] ; `errorMessage?`: `string` ; `events?`: [`Items`](../README.md#items)<`undefined` \| `string` \| `string`[]\> ; `exclusiveMaximum?`: `number` ; `exclusiveMinimum?`: `number` ; `fieldType?`: `string` ; `format?`: `string` ; `id`: `string` ; `initialItems?`: `number` ; `items`: ([`FieldJson`](../README.md#fieldjson) \| [`ContainerJson`](../README.md#containerjson))[] & (`TranslationBaseJson` & [`RulesJson`](../README.md#rulesjson) & `TranslationConstraintsJson` & { `accept?`: `string`[] ; `enforceEnum?`: `boolean` ; `exclusiveMaximum?`: `number` ; `exclusiveMinimum?`: `number` ; `format?`: `string` ; `maxFileSize?`: `string` \| `number` ; `maxItems?`: `number` ; `maxLength?`: `number` ; `maximum?`: `number` ; `minItems?`: `number` ; `minLength?`: `number` ; `minimum?`: `number` ; `pattern?`: `string` ; `required?`: `boolean` ; `step?`: `number` ; `type?`: `string` ; `validationExpression?`: `string`  } & { `:type?`: `string` ; `constraintMessages?`: [`ConstraintsMessages`](../README.md#constraintsmessages) ; `dataRef?`: ``null`` \| `string` ; `enabled?`: `boolean` ; `errorMessage?`: `string` ; `fieldType?`: `string` ; `label?`: [`Label`](../README.md#label) ; `name?`: `string` ; `properties?`: { [key: string]: `any`;  } ; `visible?`: `boolean`  } & `TranslationFieldJson` & { `default?`: `any` ; `emptyValue?`: ``""`` \| ``"undefined"`` \| ``"null"`` ; `readOnly?`: `boolean` ; `valid?`: `boolean` ; `value?`: `any`  } & { `:type`: `string` ; `id`: `string`  } \| `TranslationBaseJson` & [`RulesJson`](../README.md#rulesjson) & `TranslationConstraintsJson` & { `accept?`: `string`[] ; `enforceEnum?`: `boolean` ; `exclusiveMaximum?`: `number` ; `exclusiveMinimum?`: `number` ; `format?`: `string` ; `maxFileSize?`: `string` \| `number` ; `maxItems?`: `number` ; `maxLength?`: `number` ; `maximum?`: `number` ; `minItems?`: `number` ; `minLength?`: `number` ; `minimum?`: `number` ; `pattern?`: `string` ; `required?`: `boolean` ; `step?`: `number` ; `type?`: `string` ; `validationExpression?`: `string`  } & { `:type?`: `string` ; `constraintMessages?`: [`ConstraintsMessages`](../README.md#constraintsmessages) ; `dataRef?`: ``null`` \| `string` ; `enabled?`: `boolean` ; `errorMessage?`: `string` ; `fieldType?`: `string` ; `label?`: [`Label`](../README.md#label) ; `name?`: `string` ; `properties?`: { [key: string]: `any`;  } ; `visible?`: `boolean`  } & { `initialItems?`: `number` ; `items`: ([`FieldJson`](../README.md#fieldjson) \| [`ContainerJson`](../README.md#containerjson))[]  } & { `id`: `string` ; `items`: (`TranslationBaseJson` & [`RulesJson`](../README.md#rulesjson) & `TranslationConstraintsJson` & { `accept?`: `string`[] ; `enforceEnum?`: `boolean` ; `exclusiveMaximum?`: `number` ; `exclusiveMinimum?`: `number` ; `format?`: `string` ; `maxFileSize?`: `string` \| `number` ; `maxItems?`: `number` ; `maxLength?`: `number` ; `maximum?`: `number` ; `minItems?`: `number` ; `minLength?`: `number` ; `minimum?`: `number` ; `pattern?`: `string` ; `required?`: `boolean` ; `step?`: `number` ; `type?`: `string` ; `validationExpression?`: `string`  } & { `:type?`: `string` ; `constraintMessages?`: [`ConstraintsMessages`](../README.md#constraintsmessages) ; `dataRef?`: ``null`` \| `string` ; `enabled?`: `boolean` ; `errorMessage?`: `string` ; `fieldType?`: `string` ; `label?`: [`Label`](../README.md#label) ; `name?`: `string` ; `properties?`: { [key: string]: `any`;  } ; `visible?`: `boolean`  } & `TranslationFieldJson` & { `default?`: `any` ; `emptyValue?`: ``""`` \| ``"undefined"`` \| ``"null"`` ; `readOnly?`: `boolean` ; `valid?`: `boolean` ; `value?`: `any`  } & { `:type`: `string` ; `id`: `string`  } \| `TranslationBaseJson` & [`RulesJson`](../README.md#rulesjson) & `TranslationConstraintsJson` & { `accept?`: `string`[] ; `enforceEnum?`: `boolean` ; `exclusiveMaximum?`: `number` ; `exclusiveMinimum?`: `number` ; `format?`: `string` ; `maxFileSize?`: `string` \| `number` ; `maxItems?`: `number` ; `maxLength?`: `number` ; `maximum?`: `number` ; `minItems?`: `number` ; `minLength?`: `number` ; `minimum?`: `number` ; `pattern?`: `string` ; `required?`: `boolean` ; `step?`: `number` ; `type?`: `string` ; `validationExpression?`: `string`  } & { `:type?`: `string` ; `constraintMessages?`: [`ConstraintsMessages`](../README.md#constraintsmessages) ; `dataRef?`: ``null`` \| `string` ; `enabled?`: `boolean` ; `errorMessage?`: `string` ; `fieldType?`: `string` ; `label?`: [`Label`](../README.md#label) ; `name?`: `string` ; `properties?`: { [key: string]: `any`;  } ; `visible?`: `boolean`  } & { `initialItems?`: `number` ; `items`: ([`FieldJson`](../README.md#fieldjson) \| [`ContainerJson`](../README.md#containerjson))[]  } & { id: string; items: ((TranslationBaseJson & RulesJson & TranslationConstraintsJson & { accept?: string[] \| undefined; ... 15 more ...; validationExpression?: string \| undefined; } & { ...; } & TranslationFieldJson & { ...; } & { ...; }) \| (TranslationBaseJson & ... 5 more ... & ...))[]; })[]  })[] ; `label?`: [`Label`](../README.md#label) ; `maxFileSize?`: `string` \| `number` ; `maxItems?`: `number` ; `maxLength?`: `number` ; `maximum?`: `number` ; `minItems?`: `number` ; `minLength?`: `number` ; `minimum?`: `number` ; `name?`: `string` ; `pattern?`: `string` ; `properties?`: { [key: string]: `any`;  } ; `required?`: `boolean` ; `rules?`: [`Items`](../README.md#items)<`string`\> ; `step?`: `number` ; `type?`: ``"object"`` \| ``"array"`` ; `validationExpression?`: `string` ; `visible?`: `boolean`  })[]  }

Returns the current container state

#### Returns

`T` & { `:type`: `string` ; `id`: `string` ; `items`: ({ `:type`: `string` ; `accept?`: `string`[] ; `constraintMessages?`: [`ConstraintsMessages`](../README.md#constraintsmessages) ; `dataRef?`: ``null`` \| `string` ; `default?`: `any` ; `description?`: `string` ; `emptyValue?`: ``""`` \| ``"undefined"`` \| ``"null"`` ; `enabled?`: `boolean` ; `enforceEnum?`: `boolean` ; `enum?`: `any`[] ; `enumNames?`: `string`[] ; `errorMessage?`: `string` ; `events?`: [`Items`](../README.md#items)<`undefined` \| `string` \| `string`[]\> ; `exclusiveMaximum?`: `number` ; `exclusiveMinimum?`: `number` ; `fieldType?`: `string` ; `format?`: `string` ; `id`: `string` ; `label?`: [`Label`](../README.md#label) ; `maxFileSize?`: `string` \| `number` ; `maxItems?`: `number` ; `maxLength?`: `number` ; `maximum?`: `number` ; `minItems?`: `number` ; `minLength?`: `number` ; `minimum?`: `number` ; `name?`: `string` ; `pattern?`: `string` ; `placeholder?`: `string` ; `properties?`: { [key: string]: `any`;  } ; `readOnly?`: `boolean` ; `required?`: `boolean` ; `rules?`: [`Items`](../README.md#items)<`string`\> ; `step?`: `number` ; `type?`: `string` ; `valid?`: `boolean` ; `validationExpression?`: `string` ; `value?`: `any` ; `visible?`: `boolean`  } \| { `:type?`: `string` ; `accept?`: `string`[] ; `constraintMessages?`: [`ConstraintsMessages`](../README.md#constraintsmessages) ; `dataRef?`: ``null`` \| `string` ; `description?`: `string` ; `enabled?`: `boolean` ; `enforceEnum?`: `boolean` ; `enum?`: `any`[] ; `enumNames?`: `string`[] ; `errorMessage?`: `string` ; `events?`: [`Items`](../README.md#items)<`undefined` \| `string` \| `string`[]\> ; `exclusiveMaximum?`: `number` ; `exclusiveMinimum?`: `number` ; `fieldType?`: `string` ; `format?`: `string` ; `id`: `string` ; `initialItems?`: `number` ; `items`: ([`FieldJson`](../README.md#fieldjson) \| [`ContainerJson`](../README.md#containerjson))[] & (`TranslationBaseJson` & [`RulesJson`](../README.md#rulesjson) & `TranslationConstraintsJson` & { `accept?`: `string`[] ; `enforceEnum?`: `boolean` ; `exclusiveMaximum?`: `number` ; `exclusiveMinimum?`: `number` ; `format?`: `string` ; `maxFileSize?`: `string` \| `number` ; `maxItems?`: `number` ; `maxLength?`: `number` ; `maximum?`: `number` ; `minItems?`: `number` ; `minLength?`: `number` ; `minimum?`: `number` ; `pattern?`: `string` ; `required?`: `boolean` ; `step?`: `number` ; `type?`: `string` ; `validationExpression?`: `string`  } & { `:type?`: `string` ; `constraintMessages?`: [`ConstraintsMessages`](../README.md#constraintsmessages) ; `dataRef?`: ``null`` \| `string` ; `enabled?`: `boolean` ; `errorMessage?`: `string` ; `fieldType?`: `string` ; `label?`: [`Label`](../README.md#label) ; `name?`: `string` ; `properties?`: { [key: string]: `any`;  } ; `visible?`: `boolean`  } & `TranslationFieldJson` & { `default?`: `any` ; `emptyValue?`: ``""`` \| ``"undefined"`` \| ``"null"`` ; `readOnly?`: `boolean` ; `valid?`: `boolean` ; `value?`: `any`  } & { `:type`: `string` ; `id`: `string`  } \| `TranslationBaseJson` & [`RulesJson`](../README.md#rulesjson) & `TranslationConstraintsJson` & { `accept?`: `string`[] ; `enforceEnum?`: `boolean` ; `exclusiveMaximum?`: `number` ; `exclusiveMinimum?`: `number` ; `format?`: `string` ; `maxFileSize?`: `string` \| `number` ; `maxItems?`: `number` ; `maxLength?`: `number` ; `maximum?`: `number` ; `minItems?`: `number` ; `minLength?`: `number` ; `minimum?`: `number` ; `pattern?`: `string` ; `required?`: `boolean` ; `step?`: `number` ; `type?`: `string` ; `validationExpression?`: `string`  } & { `:type?`: `string` ; `constraintMessages?`: [`ConstraintsMessages`](../README.md#constraintsmessages) ; `dataRef?`: ``null`` \| `string` ; `enabled?`: `boolean` ; `errorMessage?`: `string` ; `fieldType?`: `string` ; `label?`: [`Label`](../README.md#label) ; `name?`: `string` ; `properties?`: { [key: string]: `any`;  } ; `visible?`: `boolean`  } & { `initialItems?`: `number` ; `items`: ([`FieldJson`](../README.md#fieldjson) \| [`ContainerJson`](../README.md#containerjson))[]  } & { `id`: `string` ; `items`: (`TranslationBaseJson` & [`RulesJson`](../README.md#rulesjson) & `TranslationConstraintsJson` & { `accept?`: `string`[] ; `enforceEnum?`: `boolean` ; `exclusiveMaximum?`: `number` ; `exclusiveMinimum?`: `number` ; `format?`: `string` ; `maxFileSize?`: `string` \| `number` ; `maxItems?`: `number` ; `maxLength?`: `number` ; `maximum?`: `number` ; `minItems?`: `number` ; `minLength?`: `number` ; `minimum?`: `number` ; `pattern?`: `string` ; `required?`: `boolean` ; `step?`: `number` ; `type?`: `string` ; `validationExpression?`: `string`  } & { `:type?`: `string` ; `constraintMessages?`: [`ConstraintsMessages`](../README.md#constraintsmessages) ; `dataRef?`: ``null`` \| `string` ; `enabled?`: `boolean` ; `errorMessage?`: `string` ; `fieldType?`: `string` ; `label?`: [`Label`](../README.md#label) ; `name?`: `string` ; `properties?`: { [key: string]: `any`;  } ; `visible?`: `boolean`  } & `TranslationFieldJson` & { `default?`: `any` ; `emptyValue?`: ``""`` \| ``"undefined"`` \| ``"null"`` ; `readOnly?`: `boolean` ; `valid?`: `boolean` ; `value?`: `any`  } & { `:type`: `string` ; `id`: `string`  } \| `TranslationBaseJson` & [`RulesJson`](../README.md#rulesjson) & `TranslationConstraintsJson` & { `accept?`: `string`[] ; `enforceEnum?`: `boolean` ; `exclusiveMaximum?`: `number` ; `exclusiveMinimum?`: `number` ; `format?`: `string` ; `maxFileSize?`: `string` \| `number` ; `maxItems?`: `number` ; `maxLength?`: `number` ; `maximum?`: `number` ; `minItems?`: `number` ; `minLength?`: `number` ; `minimum?`: `number` ; `pattern?`: `string` ; `required?`: `boolean` ; `step?`: `number` ; `type?`: `string` ; `validationExpression?`: `string`  } & { `:type?`: `string` ; `constraintMessages?`: [`ConstraintsMessages`](../README.md#constraintsmessages) ; `dataRef?`: ``null`` \| `string` ; `enabled?`: `boolean` ; `errorMessage?`: `string` ; `fieldType?`: `string` ; `label?`: [`Label`](../README.md#label) ; `name?`: `string` ; `properties?`: { [key: string]: `any`;  } ; `visible?`: `boolean`  } & { `initialItems?`: `number` ; `items`: ([`FieldJson`](../README.md#fieldjson) \| [`ContainerJson`](../README.md#containerjson))[]  } & { id: string; items: ((TranslationBaseJson & RulesJson & TranslationConstraintsJson & { accept?: string[] \| undefined; ... 15 more ...; validationExpression?: string \| undefined; } & { ...; } & TranslationFieldJson & { ...; } & { ...; }) \| (TranslationBaseJson & ... 5 more ... & ...))[]; })[]  })[] ; `label?`: [`Label`](../README.md#label) ; `maxFileSize?`: `string` \| `number` ; `maxItems?`: `number` ; `maxLength?`: `number` ; `maximum?`: `number` ; `minItems?`: `number` ; `minLength?`: `number` ; `minimum?`: `number` ; `name?`: `string` ; `pattern?`: `string` ; `properties?`: { [key: string]: `any`;  } ; `required?`: `boolean` ; `rules?`: [`Items`](../README.md#items)<`string`\> ; `step?`: `number` ; `type?`: ``"object"`` \| ``"array"`` ; `validationExpression?`: `string` ; `visible?`: `boolean`  })[]  }

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

#### Inherited from

[Scriptable](Scriptable.md).[isTransparent](Scriptable.md#istransparent)

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
