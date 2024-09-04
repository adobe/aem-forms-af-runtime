# Interface: FieldModel

Generic field model interface.
Defines properties that each form field should have

## Hierarchy

- [`BaseModel`](BaseModel.md)

- [`ScriptableField`](ScriptableField.md)

- `WithState`<[`FieldJson`](../README.md#fieldjson)\>

  ↳ **`FieldModel`**

  ↳↳ [`CaptchaModel`](CaptchaModel.md)

## Implemented by

- [`Field`](../classes/Field.md)
- [`FileUpload`](../classes/FileUpload.md)

## Table of contents

### Properties

- [:type](FieldModel.md#:type)
- [\_eventSource](FieldModel.md#_eventsource)
- [accept](FieldModel.md#accept)
- [dataRef](FieldModel.md#dataref)
- [default](FieldModel.md#default)
- [description](FieldModel.md#description)
- [displayFormat](FieldModel.md#displayformat)
- [displayValue](FieldModel.md#displayvalue)
- [displayValueExpression](FieldModel.md#displayvalueexpression)
- [editFormat](FieldModel.md#editformat)
- [editValue](FieldModel.md#editvalue)
- [enabled](FieldModel.md#enabled)
- [enforceEnum](FieldModel.md#enforceenum)
- [enum](FieldModel.md#enum)
- [enumNames](FieldModel.md#enumnames)
- [events](FieldModel.md#events)
- [exclusiveMaximum](FieldModel.md#exclusivemaximum)
- [exclusiveMinimum](FieldModel.md#exclusiveminimum)
- [fieldType](FieldModel.md#fieldtype)
- [format](FieldModel.md#format)
- [id](FieldModel.md#id)
- [index](FieldModel.md#index)
- [isContainer](FieldModel.md#iscontainer)
- [items](FieldModel.md#items)
- [label](FieldModel.md#label)
- [lang](FieldModel.md#lang)
- [maxFileSize](FieldModel.md#maxfilesize)
- [maxItems](FieldModel.md#maxitems)
- [maxLength](FieldModel.md#maxlength)
- [maxOccur](FieldModel.md#maxoccur)
- [maximum](FieldModel.md#maximum)
- [minItems](FieldModel.md#minitems)
- [minLength](FieldModel.md#minlength)
- [minOccur](FieldModel.md#minoccur)
- [minimum](FieldModel.md#minimum)
- [name](FieldModel.md#name)
- [parent](FieldModel.md#parent)
- [pattern](FieldModel.md#pattern)
- [placeholder](FieldModel.md#placeholder)
- [properties](FieldModel.md#properties)
- [qualifiedName](FieldModel.md#qualifiedname)
- [readOnly](FieldModel.md#readonly)
- [repeatable](FieldModel.md#repeatable)
- [required](FieldModel.md#required)
- [rules](FieldModel.md#rules)
- [step](FieldModel.md#step)
- [type](FieldModel.md#type)
- [uniqueItems](FieldModel.md#uniqueitems)
- [valid](FieldModel.md#valid)
- [validationExpression](FieldModel.md#validationexpression)
- [value](FieldModel.md#value)
- [visible](FieldModel.md#visible)

### Methods

- [getState](FieldModel.md#getstate)
- [reset](FieldModel.md#reset)
- [syncDataAndFormModel](FieldModel.md#syncdataandformmodel)
- [validate](FieldModel.md#validate)

## Properties

### :type

• `Readonly` **:type**: `string`

Custom widget type show to the user for capturing the data.

#### Inherited from

[BaseModel](BaseModel.md).[:type](BaseModel.md#:type)

___

### \_eventSource

• **\_eventSource**: [`EventSource`](../enums/EventSource.md)

#### Inherited from

[BaseModel](BaseModel.md).[_eventSource](BaseModel.md#_eventsource)

___

### accept

• `Optional` **accept**: `string`[]

#### Inherited from

[BaseModel](BaseModel.md).[accept](BaseModel.md#accept)

___

### dataRef

• `Optional` `Readonly` **dataRef**: ``null`` \| `string`

To map the field’s value to a property in the data model.

#### Inherited from

[BaseModel](BaseModel.md).[dataRef](BaseModel.md#dataref)

___

### default

• `Optional` `Readonly` **default**: `any`

Default value of the Field.

#### Inherited from

[BaseModel](BaseModel.md).[default](BaseModel.md#default)

___

### description

• `Optional` **description**: `string`

Extra description to be shown to the user to aid in form filling experience. It can be rich text.

#### Inherited from

[BaseModel](BaseModel.md).[description](BaseModel.md#description)

___

### displayFormat

• `Optional` `Readonly` **displayFormat**: `string`

format in which user will see the value after update

___

### displayValue

• `Optional` `Readonly` **displayValue**: `string`

value to be displayed to the user after update

___

### displayValueExpression

• `Optional` `Readonly` **displayValueExpression**: `string`

expression that when evaluated returns the displayValue of a field

___

### editFormat

• `Optional` `Readonly` **editFormat**: `string`

format in which user will edit the value

___

### editValue

• `Optional` `Readonly` **editValue**: `string`

value to be displayed to the user for edit

___

### enabled

• `Optional` **enabled**: `boolean`

Whether the field is enabled and takes part in rules, events etc.

#### Inherited from

[BaseModel](BaseModel.md).[enabled](BaseModel.md#enabled)

___

### enforceEnum

• `Optional` **enforceEnum**: `boolean`

#### Inherited from

[BaseModel](BaseModel.md).[enforceEnum](BaseModel.md#enforceenum)

___

### enum

• `Optional` **enum**: `any`[]

#### Inherited from

[BaseModel](BaseModel.md).[enum](BaseModel.md#enum)

___

### enumNames

• `Optional` **enumNames**: `string`[]

#### Inherited from

[BaseModel](BaseModel.md).[enumNames](BaseModel.md#enumnames)

___

### events

• `Optional` **events**: `Object`

Events is a dictionary of eventName to the actions to perform.

#### Index signature

▪ [key: `string`]: `string`

#### Inherited from

[ScriptableField](ScriptableField.md).[events](ScriptableField.md#events)

___

### exclusiveMaximum

• `Optional` **exclusiveMaximum**: `number`

#### Inherited from

[BaseModel](BaseModel.md).[exclusiveMaximum](BaseModel.md#exclusivemaximum)

___

### exclusiveMinimum

• `Optional` **exclusiveMinimum**: `number`

#### Inherited from

[BaseModel](BaseModel.md).[exclusiveMinimum](BaseModel.md#exclusiveminimum)

___

### fieldType

• `Readonly` **fieldType**: `string`

Type of field to capture the user data.

#### Inherited from

[BaseModel](BaseModel.md).[fieldType](BaseModel.md#fieldtype)

___

### format

• `Optional` **format**: `string`

#### Inherited from

[BaseModel](BaseModel.md).[format](BaseModel.md#format)

___

### id

• `Readonly` **id**: `string`

Unique id of the form field.

#### Inherited from

[BaseModel](BaseModel.md).[id](BaseModel.md#id)

___

### index

• `Readonly` **index**: `number`

The index of the Field within its parent.

#### Inherited from

[BaseModel](BaseModel.md).[index](BaseModel.md#index)

___

### isContainer

• `Readonly` **isContainer**: `boolean`

Whether the form field is container or not

#### Inherited from

[BaseModel](BaseModel.md).[isContainer](BaseModel.md#iscontainer)

___

### items

• `Optional` `Readonly` **items**: ([`FieldModel`](FieldModel.md) \| [`FieldsetModel`](FieldsetModel.md))[]

Array containing Fields or Panels.

#### Inherited from

[BaseModel](BaseModel.md).[items](BaseModel.md#items)

___

### label

• `Optional` **label**: [`Label`](../README.md#label)

Label to be used for the field.

#### Inherited from

[BaseModel](BaseModel.md).[label](BaseModel.md#label)

___

### lang

• `Optional` `Readonly` **lang**: `string`

language of the field

#### Inherited from

[BaseModel](BaseModel.md).[lang](BaseModel.md#lang)

___

### maxFileSize

• `Optional` **maxFileSize**: `string` \| `number`

#### Inherited from

[BaseModel](BaseModel.md).[maxFileSize](BaseModel.md#maxfilesize)

___

### maxItems

• `Optional` **maxItems**: `number`

#### Inherited from

[BaseModel](BaseModel.md).[maxItems](BaseModel.md#maxitems)

___

### maxLength

• `Optional` **maxLength**: `number`

#### Inherited from

[BaseModel](BaseModel.md).[maxLength](BaseModel.md#maxlength)

___

### maxOccur

• `Optional` **maxOccur**: `number`

#### Inherited from

[BaseModel](BaseModel.md).[maxOccur](BaseModel.md#maxoccur)

___

### maximum

• `Optional` **maximum**: `number`

#### Inherited from

[BaseModel](BaseModel.md).[maximum](BaseModel.md#maximum)

___

### minItems

• `Optional` **minItems**: `number`

#### Inherited from

[BaseModel](BaseModel.md).[minItems](BaseModel.md#minitems)

___

### minLength

• `Optional` **minLength**: `number`

#### Inherited from

[BaseModel](BaseModel.md).[minLength](BaseModel.md#minlength)

___

### minOccur

• `Optional` **minOccur**: `number`

#### Inherited from

[BaseModel](BaseModel.md).[minOccur](BaseModel.md#minoccur)

___

### minimum

• `Optional` **minimum**: `number`

#### Inherited from

[BaseModel](BaseModel.md).[minimum](BaseModel.md#minimum)

___

### name

• `Optional` `Readonly` **name**: `string`

Name of the form field.

#### Inherited from

[BaseModel](BaseModel.md).[name](BaseModel.md#name)

___

### parent

• **parent**: [`ContainerModel`](ContainerModel.md)

Parent of the current field

#### Overrides

[BaseModel](BaseModel.md).[parent](BaseModel.md#parent)

___

### pattern

• `Optional` **pattern**: `string`

#### Inherited from

[BaseModel](BaseModel.md).[pattern](BaseModel.md#pattern)

___

### placeholder

• `Optional` **placeholder**: `string`

The placeholder to show on the widget.

#### Inherited from

[BaseModel](BaseModel.md).[placeholder](BaseModel.md#placeholder)

___

### properties

• **properties**: `Object`

Custom properties of the form field.

#### Index signature

▪ [key: `string`]: `any`

#### Inherited from

[BaseModel](BaseModel.md).[properties](BaseModel.md#properties)

___

### qualifiedName

• `Readonly` **qualifiedName**: `string`

#### Inherited from

[BaseModel](BaseModel.md).[qualifiedName](BaseModel.md#qualifiedname)

___

### readOnly

• `Optional` **readOnly**: `boolean`

Whether the field should be readOnly to end user or not.

#### Inherited from

[BaseModel](BaseModel.md).[readOnly](BaseModel.md#readonly)

___

### repeatable

• `Optional` `Readonly` **repeatable**: `boolean`

Field is repeatable or not

#### Inherited from

[BaseModel](BaseModel.md).[repeatable](BaseModel.md#repeatable)

___

### required

• `Optional` **required**: `boolean`

#### Inherited from

[BaseModel](BaseModel.md).[required](BaseModel.md#required)

___

### rules

• `Optional` **rules**: `Object`

Rules that modify the property of the object dynamically. The rules are evaluated whenever the dependency changes.

#### Index signature

▪ [key: `string`]: `string`

#### Inherited from

[ScriptableField](ScriptableField.md).[rules](ScriptableField.md#rules)

___

### step

• `Optional` **step**: `number`

#### Inherited from

[BaseModel](BaseModel.md).[step](BaseModel.md#step)

___

### type

• `Optional` **type**: `string`

#### Inherited from

[BaseModel](BaseModel.md).[type](BaseModel.md#type)

___

### uniqueItems

• `Optional` **uniqueItems**: `boolean`

#### Inherited from

[BaseModel](BaseModel.md).[uniqueItems](BaseModel.md#uniqueitems)

___

### valid

• `Optional` **valid**: `boolean`

The current validation state of the Field. The property is always computed after merging the Data Model with the Form

#### Inherited from

[BaseModel](BaseModel.md).[valid](BaseModel.md#valid)

___

### validationExpression

• `Optional` **validationExpression**: `string`

#### Inherited from

[BaseModel](BaseModel.md).[validationExpression](BaseModel.md#validationexpression)

___

### value

• **value**: `any`

The current value of the Field. The property is serialized in the Data Model.

#### Inherited from

[BaseModel](BaseModel.md).[value](BaseModel.md#value)

___

### visible

• `Optional` **visible**: `boolean`

Whether the field should be visible to author or not.

#### Inherited from

[BaseModel](BaseModel.md).[visible](BaseModel.md#visible)

## Methods

### getState

▸ **getState**(): `any`

[state](../README.md#state) of the form object

#### Returns

`any`

#### Inherited from

WithState.getState

___

### reset

▸ **reset**(): `any`

Resets the form model

#### Returns

`any`

#### Inherited from

[BaseModel](BaseModel.md).[reset](BaseModel.md#reset)

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

[BaseModel](BaseModel.md).[syncDataAndFormModel](BaseModel.md#syncdataandformmodel)

___

### validate

▸ **validate**(): [`ValidationError`](../classes/ValidationError.md)[]

Validates the given form field

#### Returns

[`ValidationError`](../classes/ValidationError.md)[]

list of [validation errors](../classes/ValidationError.md)

#### Inherited from

[BaseModel](BaseModel.md).[validate](BaseModel.md#validate)
