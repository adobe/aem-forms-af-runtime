# Interface: FieldModel

Generic field model interface.
Defines properties that each form field should have

## Hierarchy

- [`BaseModel`](BaseModel.md)

- [`ScriptableField`](ScriptableField.md)

- `WithState`<[`FieldJson`](../README.md#fieldjson)\>

  ↳ **`FieldModel`**

## Implemented by

- [`Field`](../classes/Field.md)
- [`FileUpload`](../classes/FileUpload.md)

## Table of contents

### Properties

- [:type](FieldModel.md#:type)
- [accept](FieldModel.md#accept)
- [dataRef](FieldModel.md#dataref)
- [default](FieldModel.md#default)
- [description](FieldModel.md#description)
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
- [maxFileSize](FieldModel.md#maxfilesize)
- [maxItems](FieldModel.md#maxitems)
- [maxLength](FieldModel.md#maxlength)
- [maximum](FieldModel.md#maximum)
- [minItems](FieldModel.md#minitems)
- [minLength](FieldModel.md#minlength)
- [minimum](FieldModel.md#minimum)
- [name](FieldModel.md#name)
- [parent](FieldModel.md#parent)
- [pattern](FieldModel.md#pattern)
- [placeholder](FieldModel.md#placeholder)
- [properties](FieldModel.md#properties)
- [readOnly](FieldModel.md#readonly)
- [required](FieldModel.md#required)
- [rules](FieldModel.md#rules)
- [step](FieldModel.md#step)
- [type](FieldModel.md#type)
- [valid](FieldModel.md#valid)
- [validationExpression](FieldModel.md#validationexpression)
- [value](FieldModel.md#value)
- [visible](FieldModel.md#visible)

### Methods

- [getState](FieldModel.md#getstate)
- [validate](FieldModel.md#validate)

## Properties

### :type

• `Readonly` **:type**: `string`

Custom widget type show to the user for capturing the data.

#### Inherited from

[BaseModel](BaseModel.md).[:type](BaseModel.md#:type)

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

### readOnly

• `Optional` **readOnly**: `boolean`

Whether the field should be readOnly to end user or not.

#### Inherited from

[BaseModel](BaseModel.md).[readOnly](BaseModel.md#readonly)

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

▸ **getState**(): [`State`](../README.md#state)<`T`\>

[state](../README.md#state) of the form object

#### Returns

[`State`](../README.md#state)<`T`\>

#### Inherited from

WithState.getState

___

### validate

▸ **validate**(): [`ValidationError`](../classes/ValidationError.md)[]

Validates the given form field

#### Returns

[`ValidationError`](../classes/ValidationError.md)[]

list of [validation errors](../classes/ValidationError.md)

#### Inherited from

[BaseModel](BaseModel.md).[validate](BaseModel.md#validate)
