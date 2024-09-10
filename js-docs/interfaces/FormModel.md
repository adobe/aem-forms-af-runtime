# Interface: FormModel

Defines the interface for form model

## Hierarchy

- [`ContainerModel`](ContainerModel.md)

- `WithState`<[`FormJson`](../README.md#formjson)\>

  ↳ **`FormModel`**

## Implemented by

- [`Form`](../classes/Form.md)

## Table of contents

### Properties

- [:type](FormModel.md#:type)
- [\_eventSource](FormModel.md#_eventsource)
- [accept](FormModel.md#accept)
- [activeChild](FormModel.md#activechild)
- [activeField](FormModel.md#activefield)
- [changeEventBehaviour](FormModel.md#changeeventbehaviour)
- [data](FormModel.md#data)
- [dataRef](FormModel.md#dataref)
- [default](FormModel.md#default)
- [description](FormModel.md#description)
- [enabled](FormModel.md#enabled)
- [enforceEnum](FormModel.md#enforceenum)
- [enum](FormModel.md#enum)
- [enumNames](FormModel.md#enumnames)
- [events](FormModel.md#events)
- [exclusiveMaximum](FormModel.md#exclusivemaximum)
- [exclusiveMinimum](FormModel.md#exclusiveminimum)
- [fieldType](FormModel.md#fieldtype)
- [format](FormModel.md#format)
- [fragment](FormModel.md#fragment)
- [id](FormModel.md#id)
- [index](FormModel.md#index)
- [isContainer](FormModel.md#iscontainer)
- [isFragment](FormModel.md#isfragment)
- [items](FormModel.md#items)
- [label](FormModel.md#label)
- [lang](FormModel.md#lang)
- [logger](FormModel.md#logger)
- [maxFileSize](FormModel.md#maxfilesize)
- [maxItems](FormModel.md#maxitems)
- [maxLength](FormModel.md#maxlength)
- [maxOccur](FormModel.md#maxoccur)
- [maximum](FormModel.md#maximum)
- [metadata](FormModel.md#metadata)
- [minItems](FormModel.md#minitems)
- [minLength](FormModel.md#minlength)
- [minOccur](FormModel.md#minoccur)
- [minimum](FormModel.md#minimum)
- [name](FormModel.md#name)
- [parent](FormModel.md#parent)
- [pattern](FormModel.md#pattern)
- [placeholder](FormModel.md#placeholder)
- [properties](FormModel.md#properties)
- [qualifiedName](FormModel.md#qualifiedname)
- [readOnly](FormModel.md#readonly)
- [repeatable](FormModel.md#repeatable)
- [required](FormModel.md#required)
- [rules](FormModel.md#rules)
- [specVersion](FormModel.md#specversion)
- [step](FormModel.md#step)
- [title](FormModel.md#title)
- [type](FormModel.md#type)
- [uniqueItems](FormModel.md#uniqueitems)
- [valid](FormModel.md#valid)
- [validationExpression](FormModel.md#validationexpression)
- [value](FormModel.md#value)
- [visible](FormModel.md#visible)

### Methods

- [exportData](FormModel.md#exportdata)
- [fieldAdded](FormModel.md#fieldadded)
- [getElement](FormModel.md#getelement)
- [getState](FormModel.md#getstate)
- [importData](FormModel.md#importdata)
- [indexOf](FormModel.md#indexof)
- [isTransparent](FormModel.md#istransparent)
- [reset](FormModel.md#reset)
- [resolveQualifiedName](FormModel.md#resolvequalifiedname)
- [syncDataAndFormModel](FormModel.md#syncdataandformmodel)
- [validate](FormModel.md#validate)
- [visit](FormModel.md#visit)

## Properties

### :type

• `Readonly` **:type**: `string`

Custom widget type show to the user for capturing the data.

#### Inherited from

[ContainerModel](ContainerModel.md).[:type](ContainerModel.md#:type)

___

### \_eventSource

• **\_eventSource**: [`EventSource`](../enums/EventSource.md)

#### Inherited from

[ContainerModel](ContainerModel.md).[_eventSource](ContainerModel.md#_eventsource)

___

### accept

• `Optional` **accept**: `string`[]

#### Inherited from

[ContainerModel](ContainerModel.md).[accept](ContainerModel.md#accept)

___

### activeChild

• **activeChild**: ``null`` \| [`BaseModel`](BaseModel.md)

#### Inherited from

[ContainerModel](ContainerModel.md).[activeChild](ContainerModel.md#activechild)

___

### activeField

• **activeField**: [`FieldModel`](FieldModel.md)

___

### changeEventBehaviour

• `Readonly` **changeEventBehaviour**: ``"deps"`` \| ``"self"``

___

### data

• `Optional` `Readonly` **data**: `any`

Form data

___

### dataRef

• `Optional` `Readonly` **dataRef**: ``null`` \| `string`

To map the field’s value to a property in the data model.

#### Inherited from

[ContainerModel](ContainerModel.md).[dataRef](ContainerModel.md#dataref)

___

### default

• `Optional` `Readonly` **default**: `any`

Default value of the Field.

#### Inherited from

[ContainerModel](ContainerModel.md).[default](ContainerModel.md#default)

___

### description

• `Optional` **description**: `string`

Extra description to be shown to the user to aid in form filling experience. It can be rich text.

#### Inherited from

[ContainerModel](ContainerModel.md).[description](ContainerModel.md#description)

___

### enabled

• `Optional` **enabled**: `boolean`

Whether the field is enabled and takes part in rules, events etc.

#### Inherited from

[ContainerModel](ContainerModel.md).[enabled](ContainerModel.md#enabled)

___

### enforceEnum

• `Optional` **enforceEnum**: `boolean`

#### Inherited from

[ContainerModel](ContainerModel.md).[enforceEnum](ContainerModel.md#enforceenum)

___

### enum

• `Optional` **enum**: `any`[]

#### Inherited from

[ContainerModel](ContainerModel.md).[enum](ContainerModel.md#enum)

___

### enumNames

• `Optional` **enumNames**: `string`[]

#### Inherited from

[ContainerModel](ContainerModel.md).[enumNames](ContainerModel.md#enumnames)

___

### events

• `Optional` **events**: `Object`

Events is a dictionary of eventName to the actions to perform.

#### Index signature

▪ [key: `string`]: `string`

#### Inherited from

[ContainerModel](ContainerModel.md).[events](ContainerModel.md#events)

___

### exclusiveMaximum

• `Optional` **exclusiveMaximum**: `number`

#### Inherited from

[ContainerModel](ContainerModel.md).[exclusiveMaximum](ContainerModel.md#exclusivemaximum)

___

### exclusiveMinimum

• `Optional` **exclusiveMinimum**: `number`

#### Inherited from

[ContainerModel](ContainerModel.md).[exclusiveMinimum](ContainerModel.md#exclusiveminimum)

___

### fieldType

• `Readonly` **fieldType**: `string`

Type of field to capture the user data.

#### Inherited from

[ContainerModel](ContainerModel.md).[fieldType](ContainerModel.md#fieldtype)

___

### format

• `Optional` **format**: `string`

#### Inherited from

[ContainerModel](ContainerModel.md).[format](ContainerModel.md#format)

___

### fragment

• `Readonly` **fragment**: `string`

#### Inherited from

[ContainerModel](ContainerModel.md).[fragment](ContainerModel.md#fragment)

___

### id

• `Readonly` **id**: `string`

Id of the form.

#### Overrides

[ContainerModel](ContainerModel.md).[id](ContainerModel.md#id)

___

### index

• `Readonly` **index**: `number`

The index of the Field within its parent.

#### Inherited from

[ContainerModel](ContainerModel.md).[index](ContainerModel.md#index)

___

### isContainer

• `Readonly` **isContainer**: `boolean`

Whether the form field is container or not

#### Inherited from

[ContainerModel](ContainerModel.md).[isContainer](ContainerModel.md#iscontainer)

___

### isFragment

• **isFragment**: `boolean`

#### Inherited from

[ContainerModel](ContainerModel.md).[isFragment](ContainerModel.md#isfragment)

___

### items

• **items**: ([`FieldModel`](FieldModel.md) \| [`FieldsetModel`](FieldsetModel.md))[]

Defines the children/items of the container

#### Inherited from

[ContainerModel](ContainerModel.md).[items](ContainerModel.md#items)

___

### label

• `Optional` **label**: [`Label`](../README.md#label)

Label to be used for the field.

#### Inherited from

[ContainerModel](ContainerModel.md).[label](ContainerModel.md#label)

___

### lang

• `Optional` `Readonly` **lang**: `string`

language of the field

#### Inherited from

[ContainerModel](ContainerModel.md).[lang](ContainerModel.md#lang)

___

### logger

• `Readonly` **logger**: `Logger`

___

### maxFileSize

• `Optional` **maxFileSize**: `string` \| `number`

#### Inherited from

[ContainerModel](ContainerModel.md).[maxFileSize](ContainerModel.md#maxfilesize)

___

### maxItems

• `Optional` **maxItems**: `number`

#### Inherited from

[ContainerModel](ContainerModel.md).[maxItems](ContainerModel.md#maxitems)

___

### maxLength

• `Optional` **maxLength**: `number`

#### Inherited from

[ContainerModel](ContainerModel.md).[maxLength](ContainerModel.md#maxlength)

___

### maxOccur

• `Optional` **maxOccur**: `number`

#### Inherited from

[ContainerModel](ContainerModel.md).[maxOccur](ContainerModel.md#maxoccur)

___

### maximum

• `Optional` **maximum**: `number`

#### Inherited from

[ContainerModel](ContainerModel.md).[maximum](ContainerModel.md#maximum)

___

### metadata

• `Optional` `Readonly` **metadata**: [`MetaDataJson`](../README.md#metadatajson)

Form metadata

___

### minItems

• `Optional` **minItems**: `number`

#### Inherited from

[ContainerModel](ContainerModel.md).[minItems](ContainerModel.md#minitems)

___

### minLength

• `Optional` **minLength**: `number`

#### Inherited from

[ContainerModel](ContainerModel.md).[minLength](ContainerModel.md#minlength)

___

### minOccur

• `Optional` **minOccur**: `number`

#### Inherited from

[ContainerModel](ContainerModel.md).[minOccur](ContainerModel.md#minoccur)

___

### minimum

• `Optional` **minimum**: `number`

#### Inherited from

[ContainerModel](ContainerModel.md).[minimum](ContainerModel.md#minimum)

___

### name

• `Optional` `Readonly` **name**: `string`

Name of the form field.

#### Inherited from

[ContainerModel](ContainerModel.md).[name](ContainerModel.md#name)

___

### parent

• **parent**: [`ContainerModel`](ContainerModel.md)

Defines the parent of the container

#### Inherited from

[ContainerModel](ContainerModel.md).[parent](ContainerModel.md#parent)

___

### pattern

• `Optional` **pattern**: `string`

#### Inherited from

[ContainerModel](ContainerModel.md).[pattern](ContainerModel.md#pattern)

___

### placeholder

• `Optional` **placeholder**: `string`

The placeholder to show on the widget.

#### Inherited from

[ContainerModel](ContainerModel.md).[placeholder](ContainerModel.md#placeholder)

___

### properties

• **properties**: `Object`

Custom properties of the form field.

#### Index signature

▪ [key: `string`]: `any`

#### Inherited from

[ContainerModel](ContainerModel.md).[properties](ContainerModel.md#properties)

___

### qualifiedName

• `Readonly` **qualifiedName**: `string`

#### Inherited from

[ContainerModel](ContainerModel.md).[qualifiedName](ContainerModel.md#qualifiedname)

___

### readOnly

• `Optional` **readOnly**: `boolean`

Whether the field should be readOnly to end user or not.

#### Inherited from

[ContainerModel](ContainerModel.md).[readOnly](ContainerModel.md#readonly)

___

### repeatable

• `Optional` `Readonly` **repeatable**: `boolean`

Field is repeatable or not

#### Inherited from

[ContainerModel](ContainerModel.md).[repeatable](ContainerModel.md#repeatable)

___

### required

• `Optional` **required**: `boolean`

#### Inherited from

[ContainerModel](ContainerModel.md).[required](ContainerModel.md#required)

___

### rules

• `Optional` **rules**: `Object`

Rules that modify the property of the object dynamically. The rules are evaluated whenever the dependency changes.

#### Index signature

▪ [key: `string`]: `string`

#### Inherited from

[ContainerModel](ContainerModel.md).[rules](ContainerModel.md#rules)

___

### specVersion

• `Readonly` **specVersion**: `Version`

___

### step

• `Optional` **step**: `number`

#### Inherited from

[ContainerModel](ContainerModel.md).[step](ContainerModel.md#step)

___

### title

• `Readonly` **title**: `string`

Form title.

___

### type

• `Optional` **type**: `string`

#### Inherited from

[ContainerModel](ContainerModel.md).[type](ContainerModel.md#type)

___

### uniqueItems

• `Optional` **uniqueItems**: `boolean`

#### Inherited from

[ContainerModel](ContainerModel.md).[uniqueItems](ContainerModel.md#uniqueitems)

___

### valid

• `Optional` **valid**: `boolean`

The current validation state of the Field. The property is always computed after merging the Data Model with the Form

#### Inherited from

[ContainerModel](ContainerModel.md).[valid](ContainerModel.md#valid)

___

### validationExpression

• `Optional` **validationExpression**: `string`

#### Inherited from

[ContainerModel](ContainerModel.md).[validationExpression](ContainerModel.md#validationexpression)

___

### value

• **value**: `any`

The current value of the Field. The property is serialized in the Data Model.

#### Inherited from

[ContainerModel](ContainerModel.md).[value](ContainerModel.md#value)

___

### visible

• `Optional` **visible**: `boolean`

Whether the field should be visible to author or not.

#### Inherited from

[ContainerModel](ContainerModel.md).[visible](ContainerModel.md#visible)

## Methods

### exportData

▸ **exportData**(): `any`

Exports the form data

#### Returns

`any`

___

### fieldAdded

▸ **fieldAdded**(`field`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `field` | [`FieldModel`](FieldModel.md) \| [`FieldsetModel`](FieldsetModel.md) |

#### Returns

`void`

___

### getElement

▸ **getElement**(`id`): [`FormModel`](FormModel.md) \| [`FieldModel`](FieldModel.md) \| [`FieldsetModel`](FieldsetModel.md)

Get form element model based on the id of the form element

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | id of the form element |

#### Returns

[`FormModel`](FormModel.md) \| [`FieldModel`](FieldModel.md) \| [`FieldsetModel`](FieldsetModel.md)

___

### getState

▸ **getState**(): `any`

[state](../README.md#state) of the form object

#### Returns

`any`

#### Inherited from

WithState.getState

___

### importData

▸ **importData**(`data`): `any`

Imports the given form data

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `any` | form data |

#### Returns

`any`

#### Inherited from

[ContainerModel](ContainerModel.md).[importData](ContainerModel.md#importdata)

___

### indexOf

▸ **indexOf**(`f`): `number`

Returns the index of the [child item](FieldModel.md) or the [child container](FieldsetModel.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `f` | [`FieldModel`](FieldModel.md) \| [`FieldsetModel`](FieldsetModel.md) | child item |

#### Returns

`number`

`index` of the item

#### Inherited from

[ContainerModel](ContainerModel.md).[indexOf](ContainerModel.md#indexof)

___

### isTransparent

▸ **isTransparent**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[ContainerModel](ContainerModel.md).[isTransparent](ContainerModel.md#istransparent)

___

### reset

▸ **reset**(): `any`

Resets the form model

#### Returns

`any`

#### Inherited from

[ContainerModel](ContainerModel.md).[reset](ContainerModel.md#reset)

___

### resolveQualifiedName

▸ **resolveQualifiedName**(`qualifiedName`): ``null`` \| [`FieldModel`](FieldModel.md) \| [`FieldsetModel`](FieldsetModel.md)

Resolves a form element by its qualified name.

**`see`** [FieldModel](FieldModel.md)

**`see`** [FieldsetModel](FieldsetModel.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `qualifiedName` | `string` | The qualified name to resolve. |

#### Returns

``null`` \| [`FieldModel`](FieldModel.md) \| [`FieldsetModel`](FieldsetModel.md)

The resolved form element, or null if not found.

___

### syncDataAndFormModel

▸ **syncDataAndFormModel**(`a?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a?` | `default` \| `default` |

#### Returns

`any`

#### Inherited from

[ContainerModel](ContainerModel.md).[syncDataAndFormModel](ContainerModel.md#syncdataandformmodel)

___

### validate

▸ **validate**(): [`ValidationError`](../classes/ValidationError.md)[]

Validates the given form field

#### Returns

[`ValidationError`](../classes/ValidationError.md)[]

list of [validation errors](../classes/ValidationError.md)

#### Inherited from

[ContainerModel](ContainerModel.md).[validate](ContainerModel.md#validate)

___

### visit

▸ **visit**(`callBack`): `void`

visits each element in the form

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callBack` | (`field`: [`FieldModel`](FieldModel.md) \| [`FieldsetModel`](FieldsetModel.md)) => `void` | a function which is invoked on each form element (including container type elements) visited |

#### Returns

`void`
