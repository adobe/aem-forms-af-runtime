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
- [activeChild](Form.md#activechild)
- [activeField](Form.md#activefield)
- [captcha](Form.md#captcha)
- [changeEventBehaviour](Form.md#changeeventbehaviour)
- [dataRef](Form.md#dataref)
- [description](Form.md#description)
- [enabled](Form.md#enabled)
- [fieldType](Form.md#fieldtype)
- [form](Form.md#form)
- [fragment](Form.md#fragment)
- [id](Form.md#id)
- [index](Form.md#index)
- [isContainer](Form.md#iscontainer)
- [isFragment](Form.md#isfragment)
- [items](Form.md#items)
- [label](Form.md#label)
- [lang](Form.md#lang)
- [logger](Form.md#logger)
- [maxItems](Form.md#maxitems)
- [metaData](Form.md#metadata)
- [minItems](Form.md#minitems)
- [name](Form.md#name)
- [parent](Form.md#parent)
- [properties](Form.md#properties)
- [qualifiedName](Form.md#qualifiedname)
- [readOnly](Form.md#readonly)
- [repeatable](Form.md#repeatable)
- [ruleEngine](Form.md#ruleengine)
- [screenReaderText](Form.md#screenreadertext)
- [specVersion](Form.md#specversion)
- [title](Form.md#title)
- [type](Form.md#type)
- [uniqueItems](Form.md#uniqueitems)
- [value](Form.md#value)
- [visible](Form.md#visible)

### Methods

- [\_canHaveRepeatingChildren](Form.md#_canhaverepeatingchildren)
- [\_findActiveField](Form.md#_findactivefield)
- [change](Form.md#change)
- [executeAction](Form.md#executeaction)
- [executeExpression](Form.md#executeexpression)
- [exportData](Form.md#exportdata)
- [exportSubmitMetaData](Form.md#exportsubmitmetadata)
- [focus](Form.md#focus)
- [getDependents](Form.md#getdependents)
- [getElement](Form.md#getelement)
- [getNonTransparentParent](Form.md#getnontransparentparent)
- [getRules](Form.md#getrules)
- [getState](Form.md#getstate)
- [getUniqueId](Form.md#getuniqueid)
- [hasDynamicItems](Form.md#hasdynamicitems)
- [importData](Form.md#importdata)
- [indexOf](Form.md#indexof)
- [isTransparent](Form.md#istransparent)
- [isValid](Form.md#isvalid)
- [notifyChildren](Form.md#notifychildren)
- [resolveQualifiedName](Form.md#resolvequalifiedname)
- [setAdditionalSubmitMetadata](Form.md#setadditionalsubmitmetadata)
- [setFocus](Form.md#setfocus)
- [validate](Form.md#validate)
- [visit](Form.md#visit)

### Properties

- [\_eventSource](Form.md#_eventsource)

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

### activeChild

• `get` **activeChild**(): ``null`` \| [`BaseModel`](../interfaces/BaseModel.md)

#### Returns

``null`` \| [`BaseModel`](../interfaces/BaseModel.md)

#### Implementation of

[FormModel](../interfaces/FormModel.md).[activeChild](../interfaces/FormModel.md#activechild)

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

[FormModel](../interfaces/FormModel.md).[activeChild](../interfaces/FormModel.md#activechild)

#### Inherited from

Container.activeChild

___

### activeField

• `get` **activeField**(): [`FieldModel`](../interfaces/FieldModel.md)

Retrieves the active field in the form.

#### Returns

[`FieldModel`](../interfaces/FieldModel.md)

The active field.

#### Implementation of

[FormModel](../interfaces/FormModel.md).[activeField](../interfaces/FormModel.md#activefield)

___

### captcha

• `get` **captcha**(): ``null`` \| [`FieldModel`](../interfaces/FieldModel.md)

#### Returns

``null`` \| [`FieldModel`](../interfaces/FieldModel.md)

___

### changeEventBehaviour

• `get` **changeEventBehaviour**(): ``"deps"`` \| ``"self"``

#### Returns

``"deps"`` \| ``"self"``

#### Implementation of

[FormModel](../interfaces/FormModel.md).[changeEventBehaviour](../interfaces/FormModel.md#changeeventbehaviour)

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

### enabled

• `get` **enabled**(): `undefined` \| `boolean`

Whether the field is enabled and takes part in rules, events etc.

#### Returns

`undefined` \| `boolean`

#### Implementation of

[FormModel](../interfaces/FormModel.md).[enabled](../interfaces/FormModel.md#enabled)

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

[FormModel](../interfaces/FormModel.md).[enabled](../interfaces/FormModel.md#enabled)

#### Inherited from

Container.enabled

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

### fragment

• `get` **fragment**(): `string`

#### Returns

`string`

#### Implementation of

[FormModel](../interfaces/FormModel.md).[fragment](../interfaces/FormModel.md#fragment)

#### Inherited from

Container.fragment

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

### isFragment

• `get` **isFragment**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[FormModel](../interfaces/FormModel.md).[isFragment](../interfaces/FormModel.md#isfragment)

#### Overrides

Container.isFragment

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

### lang

• `get` **lang**(): `undefined` \| `string`

language of the field

#### Returns

`undefined` \| `string`

#### Implementation of

[FormModel](../interfaces/FormModel.md).[lang](../interfaces/FormModel.md#lang)

#### Inherited from

Container.lang

___

### logger

• `get` **logger**(): `Logger`

#### Returns

`Logger`

#### Implementation of

[FormModel](../interfaces/FormModel.md).[logger](../interfaces/FormModel.md#logger)

___

### maxItems

• `get` **maxItems**(): `number`

#### Returns

`number`

#### Implementation of

[FormModel](../interfaces/FormModel.md).[maxItems](../interfaces/FormModel.md#maxitems)

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

[FormModel](../interfaces/FormModel.md).[maxItems](../interfaces/FormModel.md#maxitems)

#### Inherited from

Container.maxItems

___

### metaData

• `get` **metaData**(): [`FormMetaData`](FormMetaData.md)

#### Returns

[`FormMetaData`](FormMetaData.md)

___

### minItems

• `get` **minItems**(): `number`

#### Returns

`number`

#### Implementation of

[FormModel](../interfaces/FormModel.md).[minItems](../interfaces/FormModel.md#minitems)

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

[FormModel](../interfaces/FormModel.md).[minItems](../interfaces/FormModel.md#minitems)

#### Inherited from

Container.minItems

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

### qualifiedName

• `get` **qualifiedName**(): `string`

#### Returns

`string`

#### Implementation of

[FormModel](../interfaces/FormModel.md).[qualifiedName](../interfaces/FormModel.md#qualifiedname)

#### Overrides

Container.qualifiedName

___

### readOnly

• `get` **readOnly**(): `any`

Whether the field should be readOnly to end user or not.

#### Returns

`any`

#### Implementation of

[FormModel](../interfaces/FormModel.md).[readOnly](../interfaces/FormModel.md#readonly)

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

[FormModel](../interfaces/FormModel.md).[readOnly](../interfaces/FormModel.md#readonly)

#### Inherited from

Container.readOnly

___

### repeatable

• `get` **repeatable**(): `any`

Field is repeatable or not

#### Returns

`any`

#### Implementation of

[FormModel](../interfaces/FormModel.md).[repeatable](../interfaces/FormModel.md#repeatable)

#### Inherited from

Container.repeatable

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

### screenReaderText

• `get` **screenReaderText**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

Container.screenReaderText

___

### specVersion

• `get` **specVersion**(): `Version`

#### Returns

`Version`

#### Implementation of

[FormModel](../interfaces/FormModel.md).[specVersion](../interfaces/FormModel.md#specversion)

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

### uniqueItems

• `get` **uniqueItems**(): `undefined` \| `boolean`

#### Returns

`undefined` \| `boolean`

#### Implementation of

[FormModel](../interfaces/FormModel.md).[uniqueItems](../interfaces/FormModel.md#uniqueitems)

#### Inherited from

Container.uniqueItems

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

### \_findActiveField

▸ **_findActiveField**(`field`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `field` | ``null`` \| [`FieldModel`](../interfaces/FieldModel.md) \| [`FieldsetModel`](../interfaces/FieldsetModel.md) |

#### Returns

`any`

___

### change

▸ **change**(`event`, `context`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Action`](../interfaces/Action.md) |
| `context` | `any` |

#### Returns

`void`

#### Inherited from

[Container](Container.md).[change](Container.md#change)

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

### exportData

▸ **exportData**(`attachmentSerializedMap?`): `any`

Exports the form data

#### Parameters

| Name | Type |
| :------ | :------ |
| `attachmentSerializedMap` | `Object` |

#### Returns

`any`

#### Implementation of

[FormModel](../interfaces/FormModel.md).[exportData](../interfaces/FormModel.md#exportdata)

___

### exportSubmitMetaData

▸ **exportSubmitMetaData**(): [`SubmitMetaData`](SubmitMetaData.md)

Retrieve submit meta data of form.

**`function`** exportSubmitMetaData

**`property`** {string} lang - The language of the form.

**`property`** {Object} captchaInfo - The information about the CAPTCHA.

#### Returns

[`SubmitMetaData`](SubmitMetaData.md)

- The submit meta data object.

___

### focus

▸ **focus**(): `void`

#### Returns

`void`

#### Inherited from

[Container](Container.md).[focus](Container.md#focus)

___

### getDependents

▸ **getDependents**(): `string`[]

#### Returns

`string`[]

#### Inherited from

[Container](Container.md).[getDependents](Container.md#getdependents)

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

▸ **getState**(`forRestore?`): `TranslationBaseJson` & [`RulesJson`](../README.md#rulesjson) & `TranslationConstraintsJson` & { `accept?`: `string`[] ; `enforceEnum?`: `boolean` ; `exclusiveMaximum?`: `number` ; `exclusiveMinimum?`: `number` ; `format?`: `string` ; `maxFileSize?`: `string` \| `number` ; `maxItems?`: `number` ; `maxLength?`: `number` ; `maxOccur?`: `number` ; `maximum?`: `number` ; `minItems?`: `number` ; `minLength?`: `number` ; `minOccur?`: `number` ; `minimum?`: `number` ; `pattern?`: `string` ; `required?`: `boolean` ; `step?`: `number` ; `type?`: `string` ; `uniqueItems?`: `boolean` ; `validationExpression?`: `string`  } & { `:type?`: `string` ; `altText?`: `string` ; `appliedCssClassNames?`: `string` ; `buttonType?`: `string` ; `constraintMessages?`: [`ConstraintsMessages`](../README.md#constraintsmessages) ; `dataRef?`: ``null`` \| `string` ; `enabled?`: `boolean` ; `errorMessage?`: `string` ; `fieldType?`: `string` ; `label?`: [`Label`](../README.md#label) ; `lang?`: `string` ; `name?`: `string` ; `properties?`: { [key: string]: `any`;  } ; `repeatable?`: `boolean` ; `screenReaderText?`: `string` ; `tooltip?`: `string` ; `viewType?`: `string` ; `visible?`: `boolean`  } & { `activeChild?`: `string` ; `initialItems?`: `number` ; `items`: ([`FieldJson`](../README.md#fieldjson) \| [`ContainerJson`](../README.md#containerjson))[]  } & { `action?`: `string` ; `adaptiveform?`: `string` ; `data?`: `any` ; `lang?`: `string` ; `metadata?`: [`MetaDataJson`](../README.md#metadatajson) ; `title?`: `string`  } & { `:items`: `undefined` = undefined; `:itemsOrder`: `undefined` = undefined; `:type`: `string` ; `_dependents`: `undefined` \| `string`[] ; `allowedComponents`: `undefined` = undefined; `columnClassNames`: `undefined` = undefined; `columnCount`: `undefined` = undefined; `enabled`: `undefined` \| `boolean` ; `gridClassNames`: `undefined` = undefined; `id`: `string` ; `index`: `number` ; `items`: `any`[] ; `maxOccur`: `undefined` \| `number` ; `minOccur`: `undefined` \| `number` ; `parent`: `undefined` = undefined; `properties`: { [key: string]: `any`;  } ; `qualifiedName`: `any` ; `readOnly`: `any` ; `repeatable`: `undefined` \| `boolean` = true }

Returns the current state of the form

To access the form data and attachments, one needs to use the `data` and `attachments` property.
For example,
```
const data = form.getState().data
const attachments = form.getState().attachments
```

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `forRestore` | `boolean` | `false` |

#### Returns

`TranslationBaseJson` & [`RulesJson`](../README.md#rulesjson) & `TranslationConstraintsJson` & { `accept?`: `string`[] ; `enforceEnum?`: `boolean` ; `exclusiveMaximum?`: `number` ; `exclusiveMinimum?`: `number` ; `format?`: `string` ; `maxFileSize?`: `string` \| `number` ; `maxItems?`: `number` ; `maxLength?`: `number` ; `maxOccur?`: `number` ; `maximum?`: `number` ; `minItems?`: `number` ; `minLength?`: `number` ; `minOccur?`: `number` ; `minimum?`: `number` ; `pattern?`: `string` ; `required?`: `boolean` ; `step?`: `number` ; `type?`: `string` ; `uniqueItems?`: `boolean` ; `validationExpression?`: `string`  } & { `:type?`: `string` ; `altText?`: `string` ; `appliedCssClassNames?`: `string` ; `buttonType?`: `string` ; `constraintMessages?`: [`ConstraintsMessages`](../README.md#constraintsmessages) ; `dataRef?`: ``null`` \| `string` ; `enabled?`: `boolean` ; `errorMessage?`: `string` ; `fieldType?`: `string` ; `label?`: [`Label`](../README.md#label) ; `lang?`: `string` ; `name?`: `string` ; `properties?`: { [key: string]: `any`;  } ; `repeatable?`: `boolean` ; `screenReaderText?`: `string` ; `tooltip?`: `string` ; `viewType?`: `string` ; `visible?`: `boolean`  } & { `activeChild?`: `string` ; `initialItems?`: `number` ; `items`: ([`FieldJson`](../README.md#fieldjson) \| [`ContainerJson`](../README.md#containerjson))[]  } & { `action?`: `string` ; `adaptiveform?`: `string` ; `data?`: `any` ; `lang?`: `string` ; `metadata?`: [`MetaDataJson`](../README.md#metadatajson) ; `title?`: `string`  } & { `:items`: `undefined` = undefined; `:itemsOrder`: `undefined` = undefined; `:type`: `string` ; `_dependents`: `undefined` \| `string`[] ; `allowedComponents`: `undefined` = undefined; `columnClassNames`: `undefined` = undefined; `columnCount`: `undefined` = undefined; `enabled`: `undefined` \| `boolean` ; `gridClassNames`: `undefined` = undefined; `id`: `string` ; `index`: `number` ; `items`: `any`[] ; `maxOccur`: `undefined` \| `number` ; `minOccur`: `undefined` \| `number` ; `parent`: `undefined` = undefined; `properties`: { [key: string]: `any`;  } ; `qualifiedName`: `any` ; `readOnly`: `any` ; `repeatable`: `undefined` \| `boolean` = true }

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

[Container](Container.md).[importData](Container.md#importdata)

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

#### Implementation of

[FormModel](../interfaces/FormModel.md).[isTransparent](../interfaces/FormModel.md#istransparent)

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

### resolveQualifiedName

▸ **resolveQualifiedName**(`qualifiedName`): ``null`` \| [`FieldModel`](../interfaces/FieldModel.md) \| [`FieldsetModel`](../interfaces/FieldsetModel.md)

Resolves a form element by its qualified name.

**`see`** [FieldModel](../interfaces/FieldModel.md)

**`see`** [FieldsetModel](../interfaces/FieldsetModel.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `qualifiedName` | `string` | The qualified name to resolve. |

#### Returns

``null`` \| [`FieldModel`](../interfaces/FieldModel.md) \| [`FieldsetModel`](../interfaces/FieldsetModel.md)

The resolved form element, or null if not found.

#### Implementation of

[FormModel](../interfaces/FormModel.md).[resolveQualifiedName](../interfaces/FormModel.md#resolvequalifiedname)

___

### setAdditionalSubmitMetadata

▸ **setAdditionalSubmitMetadata**(`metadata`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `metadata` | `Record`<`string`, `any`\> |

#### Returns

`void`

___

### setFocus

▸ **setFocus**(`field`, `focusOption`): `void`

This function sets the focus to the field passed
The field can be a panel or a form field.
If a focusOption is specified along with a panel the navigation is restricted to that panel.
If a focusOption is specified along with a field as input the navigation happens in the parent panel of that field.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `field` | [`BaseModel`](../interfaces/BaseModel.md) | can be a panel or a field. |
| `focusOption` | [`FocusOption`](../enums/FocusOption.md) | should be an enum of type FocusOption |

#### Returns

`void`

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

___

### visit

▸ **visit**(`callBack`): `void`

visits each element in the form

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callBack` | (`field`: [`FieldModel`](../interfaces/FieldModel.md) \| [`FieldsetModel`](../interfaces/FieldsetModel.md)) => `void` | a function which is invoked on each form element (including container type elements) visited |

#### Returns

`void`

#### Implementation of

[FormModel](../interfaces/FormModel.md).[visit](../interfaces/FormModel.md#visit)

## Properties

### \_eventSource

• **\_eventSource**: [`EventSource`](../enums/EventSource.md) = `EventSource.CODE`

#### Implementation of

[FormModel](../interfaces/FormModel.md).[_eventSource](../interfaces/FormModel.md#_eventsource)

#### Inherited from

[Container](Container.md).[_eventSource](Container.md#_eventsource)
