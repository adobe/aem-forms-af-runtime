# Interface: FieldsetModel

Generic field set model interface.
Defines properties that each field set should have

## Hierarchy

- [`ContainerModel`](ContainerModel.md)

- `WithState`<[`FieldsetJson`](../README.md#fieldsetjson)\>

  ↳ **`FieldsetModel`**

## Implemented by

- [`Fieldset`](../classes/Fieldset.md)

## Table of contents

### Properties

- [:type](FieldsetModel.md#:type)
- [\_eventSource](FieldsetModel.md#_eventsource)
- [accept](FieldsetModel.md#accept)
- [activeChild](FieldsetModel.md#activechild)
- [dataRef](FieldsetModel.md#dataref)
- [default](FieldsetModel.md#default)
- [description](FieldsetModel.md#description)
- [enabled](FieldsetModel.md#enabled)
- [enforceEnum](FieldsetModel.md#enforceenum)
- [enum](FieldsetModel.md#enum)
- [enumNames](FieldsetModel.md#enumnames)
- [events](FieldsetModel.md#events)
- [exclusiveMaximum](FieldsetModel.md#exclusivemaximum)
- [exclusiveMinimum](FieldsetModel.md#exclusiveminimum)
- [fieldType](FieldsetModel.md#fieldtype)
- [format](FieldsetModel.md#format)
- [fragment](FieldsetModel.md#fragment)
- [id](FieldsetModel.md#id)
- [index](FieldsetModel.md#index)
- [isContainer](FieldsetModel.md#iscontainer)
- [isFragment](FieldsetModel.md#isfragment)
- [items](FieldsetModel.md#items)
- [label](FieldsetModel.md#label)
- [lang](FieldsetModel.md#lang)
- [maxFileSize](FieldsetModel.md#maxfilesize)
- [maxItems](FieldsetModel.md#maxitems)
- [maxLength](FieldsetModel.md#maxlength)
- [maxOccur](FieldsetModel.md#maxoccur)
- [maximum](FieldsetModel.md#maximum)
- [minItems](FieldsetModel.md#minitems)
- [minLength](FieldsetModel.md#minlength)
- [minOccur](FieldsetModel.md#minoccur)
- [minimum](FieldsetModel.md#minimum)
- [name](FieldsetModel.md#name)
- [parent](FieldsetModel.md#parent)
- [pattern](FieldsetModel.md#pattern)
- [placeholder](FieldsetModel.md#placeholder)
- [properties](FieldsetModel.md#properties)
- [qualifiedName](FieldsetModel.md#qualifiedname)
- [readOnly](FieldsetModel.md#readonly)
- [repeatable](FieldsetModel.md#repeatable)
- [required](FieldsetModel.md#required)
- [rules](FieldsetModel.md#rules)
- [step](FieldsetModel.md#step)
- [type](FieldsetModel.md#type)
- [uniqueItems](FieldsetModel.md#uniqueitems)
- [valid](FieldsetModel.md#valid)
- [validationExpression](FieldsetModel.md#validationexpression)
- [value](FieldsetModel.md#value)
- [visible](FieldsetModel.md#visible)

### Methods

- [getState](FieldsetModel.md#getstate)
- [importData](FieldsetModel.md#importdata)
- [indexOf](FieldsetModel.md#indexof)
- [isTransparent](FieldsetModel.md#istransparent)
- [reset](FieldsetModel.md#reset)
- [syncDataAndFormModel](FieldsetModel.md#syncdataandformmodel)
- [validate](FieldsetModel.md#validate)

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

Unique id of the form field.

#### Inherited from

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

### step

• `Optional` **step**: `number`

#### Inherited from

[ContainerModel](ContainerModel.md).[step](ContainerModel.md#step)

___

### type

• `Optional` **type**: ``"object"`` \| ``"array"``

#### Overrides

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
