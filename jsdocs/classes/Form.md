# Class: Form

Defines `form model` which implements [form model](../interfaces/FormModel.md)

## Hierarchy

- [`Container`](Container.md)<[`FormJson`](../README.md#formjson)\>

  ↳ **`Form`**

## Implements

- [`FormModel`](../interfaces/FormModel.md)

## Table of contents

### Accessors

- [:type](Form.md#:type)
- [action](Form.md#action)
- [dataRef](Form.md#dataref)
- [description](Form.md#description)
- [fieldType](Form.md#fieldtype)
- [form](Form.md#form)
- [id](Form.md#id)
- [index](Form.md#index)
- [isContainer](Form.md#iscontainer)
- [items](Form.md#items)
- [label](Form.md#label)
- [logger](Form.md#logger)
- [maxItems](Form.md#maxitems)
- [metaData](Form.md#metadata)
- [name](Form.md#name)
- [parent](Form.md#parent)
- [properties](Form.md#properties)
- [ruleEngine](Form.md#ruleengine)
- [rules](Form.md#rules)
- [title](Form.md#title)
- [type](Form.md#type)
- [value](Form.md#value)
- [visible](Form.md#visible)

### Methods

- [executeExpression](Form.md#executeexpression)
- [exportData](Form.md#exportdata)
- [getElement](Form.md#getelement)
- [getState](Form.md#getstate)
- [getUniqueId](Form.md#getuniqueid)
- [hasDynamicItems](Form.md#hasdynamicitems)
- [importData](Form.md#importdata)
- [indexOf](Form.md#indexof)
- [isTransparent](Form.md#istransparent)
- [isValid](Form.md#isvalid)
- [validate](Form.md#validate)

## Accessors

### :type

• `get` **:type**(): `string`

Custom widget type show to the user for capturing the data.

#### Returns

`string`

#### Implementation of

[FormModel](../interfaces/FormModel.md).[:type](../interfaces/FormModel.md#:type)

#### Inherited from

Container.:type

___

### action

• `get` **action**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

___

### dataRef

• `get` **dataRef**(): `undefined` \| ``null`` \| `string`

To map the field’s value to a property in the data model.

#### Returns

`undefined` \| ``null`` \| `string`

#### Implementation of

[FormModel](../interfaces/FormModel.md).[dataRef](../interfaces/FormModel.md#dataref)

#### Inherited from

Container.dataRef

___

### description

• `get` **description**(): `undefined` \| `string`

Extra description to be shown to the user to aid in form filling experience. It can be rich text.

#### Returns

`undefined` \| `string`

#### Implementation of

[FormModel](../interfaces/FormModel.md).[description](../interfaces/FormModel.md#description)

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

[FormModel](../interfaces/FormModel.md).[description](../interfaces/FormModel.md#description)

#### Inherited from

Container.description

___

### fieldType

• `get` **fieldType**(): `string`

Type of field to capture the user data.

#### Returns

`string`

#### Implementation of

[FormModel](../interfaces/FormModel.md).[fieldType](../interfaces/FormModel.md#fieldtype)

#### Inherited from

Container.fieldType

___

### form

• `get` **form**(): [`FormModel`](../interfaces/FormModel.md)

#### Returns

[`FormModel`](../interfaces/FormModel.md)

#### Overrides

Container.form

___

### id

• `get` **id**(): `string`

Id of the form.

#### Returns

`string`

#### Implementation of

[FormModel](../interfaces/FormModel.md).[id](../interfaces/FormModel.md#id)

#### Overrides

Container.id

___

### index

• `get` **index**(): `number`

The index of the Field within its parent.

#### Returns

`number`

#### Implementation of

[FormModel](../interfaces/FormModel.md).[index](../interfaces/FormModel.md#index)

#### Inherited from

Container.index

___

### isContainer

• `get` **isContainer**(): `boolean`

Whether the form field is container or not

#### Returns

`boolean`

#### Implementation of

[FormModel](../interfaces/FormModel.md).[isContainer](../interfaces/FormModel.md#iscontainer)

#### Inherited from

Container.isContainer

___

### items

• `get` **items**(): ([`FieldModel`](../interfaces/FieldModel.md) \| [`FieldsetModel`](../interfaces/FieldsetModel.md))[]

Defines the children/items of the container

#### Returns

([`FieldModel`](../interfaces/FieldModel.md) \| [`FieldsetModel`](../interfaces/FieldsetModel.md))[]

#### Implementation of

[FormModel](../interfaces/FormModel.md).[items](../interfaces/FormModel.md#items)

#### Inherited from

Container.items

___

### label

• `get` **label**(): `undefined` \| [`Label`](../README.md#label)

Label to be used for the field.

#### Returns

`undefined` \| [`Label`](../README.md#label)

#### Implementation of

[FormModel](../interfaces/FormModel.md).[label](../interfaces/FormModel.md#label)

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

[FormModel](../interfaces/FormModel.md).[label](../interfaces/FormModel.md#label)

#### Inherited from

Container.label

___

### logger

• `get` **logger**(): `Logger`

#### Returns

`Logger`

#### Implementation of

[FormModel](../interfaces/FormModel.md).[logger](../interfaces/FormModel.md#logger)

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

[FormModel](../interfaces/FormModel.md).[maxItems](../interfaces/FormModel.md#maxitems)

#### Inherited from

Container.maxItems

___

### metaData

• `get` **metaData**(): [`FormMetaData`](FormMetaData.md)

#### Returns

[`FormMetaData`](FormMetaData.md)

___

### name

• `get` **name**(): `string`

Name of the form field.

#### Returns

`string`

#### Implementation of

[FormModel](../interfaces/FormModel.md).[name](../interfaces/FormModel.md#name)

#### Overrides

Container.name

___

### parent

• `get` **parent**(): [`ContainerModel`](../interfaces/ContainerModel.md)

Defines the parent of the container

#### Returns

[`ContainerModel`](../interfaces/ContainerModel.md)

#### Implementation of

[FormModel](../interfaces/FormModel.md).[parent](../interfaces/FormModel.md#parent)

#### Inherited from

Container.parent

___

### properties

• `get` **properties**(): `Object`

Custom properties of the form field.

#### Returns

`Object`

#### Implementation of

[FormModel](../interfaces/FormModel.md).[properties](../interfaces/FormModel.md#properties)

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

[FormModel](../interfaces/FormModel.md).[properties](../interfaces/FormModel.md#properties)

#### Inherited from

Container.properties

___

### ruleEngine

• `get` **ruleEngine**(): `RuleEngine`

#### Returns

`RuleEngine`

#### Implementation of

FormModel.ruleEngine

#### Overrides

Container.ruleEngine

___

### rules

• `get` **rules**(): [`Items`](../README.md#items)<`string`\>

Rules that modify the property of the object dynamically. The rules are evaluated whenever the dependency changes.

#### Returns

[`Items`](../README.md#items)<`string`\>

#### Implementation of

[FormModel](../interfaces/FormModel.md).[rules](../interfaces/FormModel.md#rules)

#### Inherited from

Container.rules

___

### title

• `get` **title**(): `string`

Form title.

#### Returns

`string`

#### Implementation of

[FormModel](../interfaces/FormModel.md).[title](../interfaces/FormModel.md#title)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Implementation of

[FormModel](../interfaces/FormModel.md).[type](../interfaces/FormModel.md#type)

#### Overrides

Container.type

___

### value

• `get` **value**(): ``null``

The current value of the Field. The property is serialized in the Data Model.

#### Returns

``null``

#### Implementation of

[FormModel](../interfaces/FormModel.md).[value](../interfaces/FormModel.md#value)

#### Overrides

Container.value

___

### visible

• `get` **visible**(): `undefined` \| `boolean`

Whether the field should be visible to author or not.

#### Returns

`undefined` \| `boolean`

#### Implementation of

[FormModel](../interfaces/FormModel.md).[visible](../interfaces/FormModel.md#visible)

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

[FormModel](../interfaces/FormModel.md).[visible](../interfaces/FormModel.md#visible)

#### Inherited from

Container.visible

## Methods

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

### exportData

▸ **exportData**(): `any`

Exports the form data

#### Returns

`any`

#### Implementation of

[FormModel](../interfaces/FormModel.md).[exportData](../interfaces/FormModel.md#exportdata)

___

### getElement

▸ **getElement**(`id`): [`FieldModel`](../interfaces/FieldModel.md) \| [`FieldsetModel`](../interfaces/FieldsetModel.md) \| [`Form`](Form.md)

Get form element model based on the id of the form element

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

[`FieldModel`](../interfaces/FieldModel.md) \| [`FieldsetModel`](../interfaces/FieldsetModel.md) \| [`Form`](Form.md)

#### Implementation of

[FormModel](../interfaces/FormModel.md).[getElement](../interfaces/FormModel.md#getelement)

___

### getState

▸ **getState**(): `TranslationBaseJson` & [`RulesJson`](../README.md#rulesjson) & `TranslationConstraintsJson` & { `accept?`: `string`[] ; `enforceEnum?`: `boolean` ; `exclusiveMaximum?`: `number` ; `exclusiveMinimum?`: `number` ; `format?`: `string` ; `maxFileSize?`: `string` \| `number` ; `maxItems?`: `number` ; `maxLength?`: `number` ; `maximum?`: `number` ; `minItems?`: `number` ; `minLength?`: `number` ; `minimum?`: `number` ; `pattern?`: `string` ; `required?`: `boolean` ; `step?`: `number` ; `type?`: `string` ; `validationExpression?`: `string`  } & { `:type?`: `string` ; `constraintMessages?`: [`ConstraintsMessages`](../README.md#constraintsmessages) ; `dataRef?`: ``null`` \| `string` ; `enabled?`: `boolean` ; `errorMessage?`: `string` ; `fieldType?`: `string` ; `label?`: [`Label`](../README.md#label) ; `name?`: `string` ; `properties?`: { [key: string]: `any`;  } ; `visible?`: `boolean`  } & { `initialItems?`: `number` ; `items`: ([`FieldJson`](../README.md#fieldjson) \| [`ContainerJson`](../README.md#containerjson))[]  } & { `action?`: `string` ; `adaptiveForm?`: `string` ; `data?`: `any` ; `metadata?`: [`MetaDataJson`](../README.md#metadatajson) ; `title?`: `string`  } & { `:type`: `string` ; `id`: `string` ; `items`: ({ `:type`: `string` ; `accept?`: `string`[] ; `constraintMessages?`: [`ConstraintsMessages`](../README.md#constraintsmessages) ; `dataRef?`: ``null`` \| `string` ; `default?`: `any` ; `description?`: `string` ; `emptyValue?`: ``""`` \| ``"undefined"`` \| ``"null"`` ; `enabled?`: `boolean` ; `enforceEnum?`: `boolean` ; `enum?`: `any`[] ; `enumNames?`: `string`[] ; `errorMessage?`: `string` ; `events?`: [`Items`](../README.md#items)<`undefined` \| `string` \| `string`[]\> ; `exclusiveMaximum?`: `number` ; `exclusiveMinimum?`: `number` ; `fieldType?`: `string` ; `format?`: `string` ; `id`: `string` ; `label?`: [`Label`](../README.md#label) ; `maxFileSize?`: `string` \| `number` ; `maxItems?`: `number` ; `maxLength?`: `number` ; `maximum?`: `number` ; `minItems?`: `number` ; `minLength?`: `number` ; `minimum?`: `number` ; `name?`: `string` ; `pattern?`: `string` ; `placeholder?`: `string` ; `properties?`: { [key: string]: `any`;  } ; `readOnly?`: `boolean` ; `required?`: `boolean` ; `rules?`: [`Items`](../README.md#items)<`string`\> ; `step?`: `number` ; `type?`: `string` ; `valid?`: `boolean` ; `validationExpression?`: `string` ; `value?`: `any` ; `visible?`: `boolean`  } \| { `:type?`: `string` ; `accept?`: `string`[] ; `constraintMessages?`: [`ConstraintsMessages`](../README.md#constraintsmessages) ; `dataRef?`: ``null`` \| `string` ; `description?`: `string` ; `enabled?`: `boolean` ; `enforceEnum?`: `boolean` ; `enum?`: `any`[] ; `enumNames?`: `string`[] ; `errorMessage?`: `string` ; `events?`: [`Items`](../README.md#items)<`undefined` \| `string` \| `string`[]\> ; `exclusiveMaximum?`: `number` ; `exclusiveMinimum?`: `number` ; `fieldType?`: `string` ; `format?`: `string` ; `id`: `string` ; `initialItems?`: `number` ; `items`: ([`FieldJson`](../README.md#fieldjson) \| [`ContainerJson`](../README.md#containerjson))[] & (`TranslationBaseJson` & [`RulesJson`](../README.md#rulesjson) & `TranslationConstraintsJson` & { `accept?`: `string`[] ; `enforceEnum?`: `boolean` ; `exclusiveMaximum?`: `number` ; `exclusiveMinimum?`: `number` ; `format?`: `string` ; `maxFileSize?`: `string` \| `number` ; `maxItems?`: `number` ; `maxLength?`: `number` ; `maximum?`: `number` ; `minItems?`: `number` ; `minLength?`: `number` ; `minimum?`: `number` ; `pattern?`: `string` ; `required?`: `boolean` ; `step?`: `number` ; `type?`: `string` ; `validationExpression?`: `string`  } & { `:type?`: `string` ; `constraintMessages?`: [`ConstraintsMessages`](../README.md#constraintsmessages) ; `dataRef?`: ``null`` \| `string` ; `enabled?`: `boolean` ; `errorMessage?`: `string` ; `fieldType?`: `string` ; `label?`: [`Label`](../README.md#label) ; `name?`: `string` ; `properties?`: { [key: string]: `any`;  } ; `visible?`: `boolean`  } & `TranslationFieldJson` & { `default?`: `any` ; `emptyValue?`: ``""`` \| ``"undefined"`` \| ``"null"`` ; `readOnly?`: `boolean` ; `valid?`: `boolean` ; `value?`: `any`  } & { `:type`: `string` ; `id`: `string`  } \| `TranslationBaseJson` & [`RulesJson`](../README.md#rulesjson) & `TranslationConstraintsJson` & { `accept?`: `string`[] ; `enforceEnum?`: `boolean` ; `exclusiveMaximum?`: `number` ; `exclusiveMinimum?`: `number` ; `format?`: `string` ; `maxFileSize?`: `string` \| `number` ; `maxItems?`: `number` ; `maxLength?`: `number` ; `maximum?`: `number` ; `minItems?`: `number` ; `minLength?`: `number` ; `minimum?`: `number` ; `pattern?`: `string` ; `required?`: `boolean` ; `step?`: `number` ; `type?`: `string` ; `validationExpression?`: `string`  } & { `:type?`: `string` ; `constraintMessages?`: [`ConstraintsMessages`](../README.md#constraintsmessages) ; `dataRef?`: ``null`` \| `string` ; `enabled?`: `boolean` ; `errorMessage?`: `string` ; `fieldType?`: `string` ; `label?`: [`Label`](../README.md#label) ; `name?`: `string` ; `properties?`: { [key: string]: `any`;  } ; `visible?`: `boolean`  } & { `initialItems?`: `number` ; `items`: ([`FieldJson`](../README.md#fieldjson) \| [`ContainerJson`](../README.md#containerjson))[]  } & { `id`: `string` ; `items`: (`TranslationBaseJson` & [`RulesJson`](../README.md#rulesjson) & `TranslationConstraintsJson` & { `accept?`: `string`[] ; `enforceEnum?`: `boolean` ; `exclusiveMaximum?`: `number` ; `exclusiveMinimum?`: `number` ; `format?`: `string` ; `maxFileSize?`: `string` \| `number` ; `maxItems?`: `number` ; `maxLength?`: `number` ; `maximum?`: `number` ; `minItems?`: `number` ; `minLength?`: `number` ; `minimum?`: `number` ; `pattern?`: `string` ; `required?`: `boolean` ; `step?`: `number` ; `type?`: `string` ; `validationExpression?`: `string`  } & { `:type?`: `string` ; `constraintMessages?`: [`ConstraintsMessages`](../README.md#constraintsmessages) ; `dataRef?`: ``null`` \| `string` ; `enabled?`: `boolean` ; `errorMessage?`: `string` ; `fieldType?`: `string` ; `label?`: [`Label`](../README.md#label) ; `name?`: `string` ; `properties?`: { [key: string]: `any`;  } ; `visible?`: `boolean`  } & `TranslationFieldJson` & { `default?`: `any` ; `emptyValue?`: ``""`` \| ``"undefined"`` \| ``"null"`` ; `readOnly?`: `boolean` ; `valid?`: `boolean` ; `value?`: `any`  } & { `:type`: `string` ; `id`: `string`  } \| `TranslationBaseJson` & [`RulesJson`](../README.md#rulesjson) & `TranslationConstraintsJson` & { `accept?`: `string`[] ; `enforceEnum?`: `boolean` ; `exclusiveMaximum?`: `number` ; `exclusiveMinimum?`: `number` ; `format?`: `string` ; `maxFileSize?`: `string` \| `number` ; `maxItems?`: `number` ; `maxLength?`: `number` ; `maximum?`: `number` ; `minItems?`: `number` ; `minLength?`: `number` ; `minimum?`: `number` ; `pattern?`: `string` ; `required?`: `boolean` ; `step?`: `number` ; `type?`: `string` ; `validationExpression?`: `string`  } & { `:type?`: `string` ; `constraintMessages?`: [`ConstraintsMessages`](../README.md#constraintsmessages) ; `dataRef?`: ``null`` \| `string` ; `enabled?`: `boolean` ; `errorMessage?`: `string` ; `fieldType?`: `string` ; `label?`: [`Label`](../README.md#label) ; `name?`: `string` ; `properties?`: { [key: string]: `any`;  } ; `visible?`: `boolean`  } & { `initialItems?`: `number` ; `items`: ([`FieldJson`](../README.md#fieldjson) \| [`ContainerJson`](../README.md#containerjson))[]  } & { id: string; items: ((TranslationBaseJson & RulesJson & TranslationConstraintsJson & { accept?: string[] \| undefined; ... 15 more ...; validationExpression?: string \| undefined; } & { ...; } & TranslationFieldJson & { ...; } & { ...; }) \| (TranslationBaseJson & ... 5 more ... & ...))[]; })[]  })[] ; `label?`: [`Label`](../README.md#label) ; `maxFileSize?`: `string` \| `number` ; `maxItems?`: `number` ; `maxLength?`: `number` ; `maximum?`: `number` ; `minItems?`: `number` ; `minLength?`: `number` ; `minimum?`: `number` ; `name?`: `string` ; `pattern?`: `string` ; `properties?`: { [key: string]: `any`;  } ; `required?`: `boolean` ; `rules?`: [`Items`](../README.md#items)<`string`\> ; `step?`: `number` ; `type?`: ``"object"`` \| ``"array"`` ; `validationExpression?`: `string` ; `visible?`: `boolean`  })[]  }

Returns the current state of the form

To access the form data and attachments, one needs to use the `data` and `attachments` property.
For example,
```
const data = form.getState().data
const attachments = form.getState().attachments
```

#### Returns

`TranslationBaseJson` & [`RulesJson`](../README.md#rulesjson) & `TranslationConstraintsJson` & { `accept?`: `string`[] ; `enforceEnum?`: `boolean` ; `exclusiveMaximum?`: `number` ; `exclusiveMinimum?`: `number` ; `format?`: `string` ; `maxFileSize?`: `string` \| `number` ; `maxItems?`: `number` ; `maxLength?`: `number` ; `maximum?`: `number` ; `minItems?`: `number` ; `minLength?`: `number` ; `minimum?`: `number` ; `pattern?`: `string` ; `required?`: `boolean` ; `step?`: `number` ; `type?`: `string` ; `validationExpression?`: `string`  } & { `:type?`: `string` ; `constraintMessages?`: [`ConstraintsMessages`](../README.md#constraintsmessages) ; `dataRef?`: ``null`` \| `string` ; `enabled?`: `boolean` ; `errorMessage?`: `string` ; `fieldType?`: `string` ; `label?`: [`Label`](../README.md#label) ; `name?`: `string` ; `properties?`: { [key: string]: `any`;  } ; `visible?`: `boolean`  } & { `initialItems?`: `number` ; `items`: ([`FieldJson`](../README.md#fieldjson) \| [`ContainerJson`](../README.md#containerjson))[]  } & { `action?`: `string` ; `adaptiveForm?`: `string` ; `data?`: `any` ; `metadata?`: [`MetaDataJson`](../README.md#metadatajson) ; `title?`: `string`  } & { `:type`: `string` ; `id`: `string` ; `items`: ({ `:type`: `string` ; `accept?`: `string`[] ; `constraintMessages?`: [`ConstraintsMessages`](../README.md#constraintsmessages) ; `dataRef?`: ``null`` \| `string` ; `default?`: `any` ; `description?`: `string` ; `emptyValue?`: ``""`` \| ``"undefined"`` \| ``"null"`` ; `enabled?`: `boolean` ; `enforceEnum?`: `boolean` ; `enum?`: `any`[] ; `enumNames?`: `string`[] ; `errorMessage?`: `string` ; `events?`: [`Items`](../README.md#items)<`undefined` \| `string` \| `string`[]\> ; `exclusiveMaximum?`: `number` ; `exclusiveMinimum?`: `number` ; `fieldType?`: `string` ; `format?`: `string` ; `id`: `string` ; `label?`: [`Label`](../README.md#label) ; `maxFileSize?`: `string` \| `number` ; `maxItems?`: `number` ; `maxLength?`: `number` ; `maximum?`: `number` ; `minItems?`: `number` ; `minLength?`: `number` ; `minimum?`: `number` ; `name?`: `string` ; `pattern?`: `string` ; `placeholder?`: `string` ; `properties?`: { [key: string]: `any`;  } ; `readOnly?`: `boolean` ; `required?`: `boolean` ; `rules?`: [`Items`](../README.md#items)<`string`\> ; `step?`: `number` ; `type?`: `string` ; `valid?`: `boolean` ; `validationExpression?`: `string` ; `value?`: `any` ; `visible?`: `boolean`  } \| { `:type?`: `string` ; `accept?`: `string`[] ; `constraintMessages?`: [`ConstraintsMessages`](../README.md#constraintsmessages) ; `dataRef?`: ``null`` \| `string` ; `description?`: `string` ; `enabled?`: `boolean` ; `enforceEnum?`: `boolean` ; `enum?`: `any`[] ; `enumNames?`: `string`[] ; `errorMessage?`: `string` ; `events?`: [`Items`](../README.md#items)<`undefined` \| `string` \| `string`[]\> ; `exclusiveMaximum?`: `number` ; `exclusiveMinimum?`: `number` ; `fieldType?`: `string` ; `format?`: `string` ; `id`: `string` ; `initialItems?`: `number` ; `items`: ([`FieldJson`](../README.md#fieldjson) \| [`ContainerJson`](../README.md#containerjson))[] & (`TranslationBaseJson` & [`RulesJson`](../README.md#rulesjson) & `TranslationConstraintsJson` & { `accept?`: `string`[] ; `enforceEnum?`: `boolean` ; `exclusiveMaximum?`: `number` ; `exclusiveMinimum?`: `number` ; `format?`: `string` ; `maxFileSize?`: `string` \| `number` ; `maxItems?`: `number` ; `maxLength?`: `number` ; `maximum?`: `number` ; `minItems?`: `number` ; `minLength?`: `number` ; `minimum?`: `number` ; `pattern?`: `string` ; `required?`: `boolean` ; `step?`: `number` ; `type?`: `string` ; `validationExpression?`: `string`  } & { `:type?`: `string` ; `constraintMessages?`: [`ConstraintsMessages`](../README.md#constraintsmessages) ; `dataRef?`: ``null`` \| `string` ; `enabled?`: `boolean` ; `errorMessage?`: `string` ; `fieldType?`: `string` ; `label?`: [`Label`](../README.md#label) ; `name?`: `string` ; `properties?`: { [key: string]: `any`;  } ; `visible?`: `boolean`  } & `TranslationFieldJson` & { `default?`: `any` ; `emptyValue?`: ``""`` \| ``"undefined"`` \| ``"null"`` ; `readOnly?`: `boolean` ; `valid?`: `boolean` ; `value?`: `any`  } & { `:type`: `string` ; `id`: `string`  } \| `TranslationBaseJson` & [`RulesJson`](../README.md#rulesjson) & `TranslationConstraintsJson` & { `accept?`: `string`[] ; `enforceEnum?`: `boolean` ; `exclusiveMaximum?`: `number` ; `exclusiveMinimum?`: `number` ; `format?`: `string` ; `maxFileSize?`: `string` \| `number` ; `maxItems?`: `number` ; `maxLength?`: `number` ; `maximum?`: `number` ; `minItems?`: `number` ; `minLength?`: `number` ; `minimum?`: `number` ; `pattern?`: `string` ; `required?`: `boolean` ; `step?`: `number` ; `type?`: `string` ; `validationExpression?`: `string`  } & { `:type?`: `string` ; `constraintMessages?`: [`ConstraintsMessages`](../README.md#constraintsmessages) ; `dataRef?`: ``null`` \| `string` ; `enabled?`: `boolean` ; `errorMessage?`: `string` ; `fieldType?`: `string` ; `label?`: [`Label`](../README.md#label) ; `name?`: `string` ; `properties?`: { [key: string]: `any`;  } ; `visible?`: `boolean`  } & { `initialItems?`: `number` ; `items`: ([`FieldJson`](../README.md#fieldjson) \| [`ContainerJson`](../README.md#containerjson))[]  } & { `id`: `string` ; `items`: (`TranslationBaseJson` & [`RulesJson`](../README.md#rulesjson) & `TranslationConstraintsJson` & { `accept?`: `string`[] ; `enforceEnum?`: `boolean` ; `exclusiveMaximum?`: `number` ; `exclusiveMinimum?`: `number` ; `format?`: `string` ; `maxFileSize?`: `string` \| `number` ; `maxItems?`: `number` ; `maxLength?`: `number` ; `maximum?`: `number` ; `minItems?`: `number` ; `minLength?`: `number` ; `minimum?`: `number` ; `pattern?`: `string` ; `required?`: `boolean` ; `step?`: `number` ; `type?`: `string` ; `validationExpression?`: `string`  } & { `:type?`: `string` ; `constraintMessages?`: [`ConstraintsMessages`](../README.md#constraintsmessages) ; `dataRef?`: ``null`` \| `string` ; `enabled?`: `boolean` ; `errorMessage?`: `string` ; `fieldType?`: `string` ; `label?`: [`Label`](../README.md#label) ; `name?`: `string` ; `properties?`: { [key: string]: `any`;  } ; `visible?`: `boolean`  } & `TranslationFieldJson` & { `default?`: `any` ; `emptyValue?`: ``""`` \| ``"undefined"`` \| ``"null"`` ; `readOnly?`: `boolean` ; `valid?`: `boolean` ; `value?`: `any`  } & { `:type`: `string` ; `id`: `string`  } \| `TranslationBaseJson` & [`RulesJson`](../README.md#rulesjson) & `TranslationConstraintsJson` & { `accept?`: `string`[] ; `enforceEnum?`: `boolean` ; `exclusiveMaximum?`: `number` ; `exclusiveMinimum?`: `number` ; `format?`: `string` ; `maxFileSize?`: `string` \| `number` ; `maxItems?`: `number` ; `maxLength?`: `number` ; `maximum?`: `number` ; `minItems?`: `number` ; `minLength?`: `number` ; `minimum?`: `number` ; `pattern?`: `string` ; `required?`: `boolean` ; `step?`: `number` ; `type?`: `string` ; `validationExpression?`: `string`  } & { `:type?`: `string` ; `constraintMessages?`: [`ConstraintsMessages`](../README.md#constraintsmessages) ; `dataRef?`: ``null`` \| `string` ; `enabled?`: `boolean` ; `errorMessage?`: `string` ; `fieldType?`: `string` ; `label?`: [`Label`](../README.md#label) ; `name?`: `string` ; `properties?`: { [key: string]: `any`;  } ; `visible?`: `boolean`  } & { `initialItems?`: `number` ; `items`: ([`FieldJson`](../README.md#fieldjson) \| [`ContainerJson`](../README.md#containerjson))[]  } & { id: string; items: ((TranslationBaseJson & RulesJson & TranslationConstraintsJson & { accept?: string[] \| undefined; ... 15 more ...; validationExpression?: string \| undefined; } & { ...; } & TranslationFieldJson & { ...; } & { ...; }) \| (TranslationBaseJson & ... 5 more ... & ...))[]; })[]  })[] ; `label?`: [`Label`](../README.md#label) ; `maxFileSize?`: `string` \| `number` ; `maxItems?`: `number` ; `maxLength?`: `number` ; `maximum?`: `number` ; `minItems?`: `number` ; `minLength?`: `number` ; `minimum?`: `number` ; `name?`: `string` ; `pattern?`: `string` ; `properties?`: { [key: string]: `any`;  } ; `required?`: `boolean` ; `rules?`: [`Items`](../README.md#items)<`string`\> ; `step?`: `number` ; `type?`: ``"object"`` \| ``"array"`` ; `validationExpression?`: `string` ; `visible?`: `boolean`  })[]  }

#### Implementation of

[FormModel](../interfaces/FormModel.md).[getState](../interfaces/FormModel.md#getstate)

#### Overrides

[Container](Container.md).[getState](Container.md#getstate)

___

### getUniqueId

▸ **getUniqueId**(): `string`

#### Returns

`string`

#### Implementation of

FormModel.getUniqueId

___

### hasDynamicItems

▸ **hasDynamicItems**(): `boolean`

returns whether the items in the Panel can repeat or not

#### Returns

`boolean`

#### Inherited from

[Container](Container.md).[hasDynamicItems](Container.md#hasdynamicitems)

___

### importData

▸ **importData**(`dataModel`): `void`

Imports the given form data

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataModel` | `any` |

#### Returns

`void`

#### Implementation of

[FormModel](../interfaces/FormModel.md).[importData](../interfaces/FormModel.md#importdata)

#### Overrides

Container.importData

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

[FormModel](../interfaces/FormModel.md).[indexOf](../interfaces/FormModel.md#indexof)

#### Inherited from

[Container](Container.md).[indexOf](Container.md#indexof)

___

### isTransparent

▸ **isTransparent**(): `boolean`

Transparent form fields are meant only for creation of view. They are also not part of data

#### Returns

`boolean`

#### Overrides

[Container](Container.md).[isTransparent](Container.md#istransparent)

___

### isValid

▸ **isValid**(): `boolean`

Checks if the given form is valid or not

#### Returns

`boolean`

`true`, if form is valid, `false` otherwise

___

### validate

▸ **validate**(): [`ValidationError`](ValidationError.md)[]

Validates the given form field

#### Returns

[`ValidationError`](ValidationError.md)[]

#### Implementation of

[FormModel](../interfaces/FormModel.md).[validate](../interfaces/FormModel.md#validate)

#### Overrides

[Container](Container.md).[validate](Container.md#validate)
