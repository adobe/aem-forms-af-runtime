# Interface: BaseModel

Generic base model interface.
Defines common properties that each form field should have

## Hierarchy

- [`ConstraintsJson`](../README.md#constraintsjson)

- `WithController`

  ↳ **`BaseModel`**

  ↳↳ [`FieldModel`](FieldModel.md)

  ↳↳ [`ContainerModel`](ContainerModel.md)

## Implemented by

- [`BaseNode`](../classes/BaseNode.md)

## Table of contents

### Properties

- [:type](BaseModel.md#:type)
- [accept](BaseModel.md#accept)
- [dataRef](BaseModel.md#dataref)
- [default](BaseModel.md#default)
- [description](BaseModel.md#description)
- [enabled](BaseModel.md#enabled)
- [enforceEnum](BaseModel.md#enforceenum)
- [enum](BaseModel.md#enum)
- [enumNames](BaseModel.md#enumnames)
- [exclusiveMaximum](BaseModel.md#exclusivemaximum)
- [exclusiveMinimum](BaseModel.md#exclusiveminimum)
- [fieldType](BaseModel.md#fieldtype)
- [format](BaseModel.md#format)
- [id](BaseModel.md#id)
- [index](BaseModel.md#index)
- [isContainer](BaseModel.md#iscontainer)
- [items](BaseModel.md#items)
- [label](BaseModel.md#label)
- [maxFileSize](BaseModel.md#maxfilesize)
- [maxItems](BaseModel.md#maxitems)
- [maxLength](BaseModel.md#maxlength)
- [maximum](BaseModel.md#maximum)
- [minItems](BaseModel.md#minitems)
- [minLength](BaseModel.md#minlength)
- [minimum](BaseModel.md#minimum)
- [name](BaseModel.md#name)
- [parent](BaseModel.md#parent)
- [pattern](BaseModel.md#pattern)
- [placeholder](BaseModel.md#placeholder)
- [properties](BaseModel.md#properties)
- [readOnly](BaseModel.md#readonly)
- [required](BaseModel.md#required)
- [step](BaseModel.md#step)
- [type](BaseModel.md#type)
- [valid](BaseModel.md#valid)
- [validationExpression](BaseModel.md#validationexpression)
- [value](BaseModel.md#value)
- [visible](BaseModel.md#visible)

### Methods

- [validate](BaseModel.md#validate)

## Properties

### :type

• `Readonly` **:type**: `string`

Custom widget type show to the user for capturing the data.

___

### accept

• `Optional` **accept**: `string`[]

#### Inherited from

ConstraintsJson.accept

___

### dataRef

• `Optional` `Readonly` **dataRef**: ``null`` \| `string`

To map the field’s value to a property in the data model.

___

### default

• `Optional` `Readonly` **default**: `any`

Default value of the Field.

___

### description

• `Optional` **description**: `string`

Extra description to be shown to the user to aid in form filling experience. It can be rich text.

___

### enabled

• `Optional` **enabled**: `boolean`

Whether the field is enabled and takes part in rules, events etc.

___

### enforceEnum

• `Optional` **enforceEnum**: `boolean`

#### Inherited from

ConstraintsJson.enforceEnum

___

### enum

• `Optional` **enum**: `any`[]

#### Inherited from

ConstraintsJson.enum

___

### enumNames

• `Optional` **enumNames**: `string`[]

#### Inherited from

ConstraintsJson.enumNames

___

### exclusiveMaximum

• `Optional` **exclusiveMaximum**: `number`

#### Inherited from

ConstraintsJson.exclusiveMaximum

___

### exclusiveMinimum

• `Optional` **exclusiveMinimum**: `number`

#### Inherited from

ConstraintsJson.exclusiveMinimum

___

### fieldType

• `Readonly` **fieldType**: `string`

Type of field to capture the user data.

___

### format

• `Optional` **format**: `string`

#### Inherited from

ConstraintsJson.format

___

### id

• `Readonly` **id**: `string`

Unique id of the form field.

___

### index

• `Readonly` **index**: `number`

The index of the Field within its parent.

___

### isContainer

• `Readonly` **isContainer**: `boolean`

Whether the form field is container or not

___

### items

• `Optional` `Readonly` **items**: ([`FieldModel`](FieldModel.md) \| [`FieldsetModel`](FieldsetModel.md))[]

Array containing Fields or Panels.

___

### label

• `Optional` **label**: [`Label`](../README.md#label)

Label to be used for the field.

___

### maxFileSize

• `Optional` **maxFileSize**: `string` \| `number`

#### Inherited from

ConstraintsJson.maxFileSize

___

### maxItems

• `Optional` **maxItems**: `number`

#### Inherited from

ConstraintsJson.maxItems

___

### maxLength

• `Optional` **maxLength**: `number`

#### Inherited from

ConstraintsJson.maxLength

___

### maximum

• `Optional` **maximum**: `number`

#### Inherited from

ConstraintsJson.maximum

___

### minItems

• `Optional` **minItems**: `number`

#### Inherited from

ConstraintsJson.minItems

___

### minLength

• `Optional` **minLength**: `number`

#### Inherited from

ConstraintsJson.minLength

___

### minimum

• `Optional` **minimum**: `number`

#### Inherited from

ConstraintsJson.minimum

___

### name

• `Optional` `Readonly` **name**: `string`

Name of the form field.

___

### parent

• `Readonly` **parent**: ``null`` \| [`ContainerModel`](ContainerModel.md)

The Parent Panel of the Field/Panel.

___

### pattern

• `Optional` **pattern**: `string`

#### Inherited from

ConstraintsJson.pattern

___

### placeholder

• `Optional` **placeholder**: `string`

The placeholder to show on the widget.

___

### properties

• **properties**: `Object`

Custom properties of the form field.

#### Index signature

▪ [key: `string`]: `any`

___

### readOnly

• `Optional` **readOnly**: `boolean`

Whether the field should be readOnly to end user or not.

___

### required

• `Optional` **required**: `boolean`

#### Inherited from

ConstraintsJson.required

___

### step

• `Optional` **step**: `number`

#### Inherited from

ConstraintsJson.step

___

### type

• `Optional` **type**: `string`

#### Inherited from

ConstraintsJson.type

___

### valid

• `Optional` **valid**: `boolean`

The current validation state of the Field. The property is always computed after merging the Data Model with the Form

___

### validationExpression

• `Optional` **validationExpression**: `string`

#### Inherited from

ConstraintsJson.validationExpression

___

### value

• **value**: `any`

The current value of the Field. The property is serialized in the Data Model.

___

### visible

• `Optional` **visible**: `boolean`

Whether the field should be visible to author or not.

## Methods

### validate

▸ **validate**(): [`ValidationError`](../classes/ValidationError.md)[]

Validates the given form field

#### Returns

[`ValidationError`](../classes/ValidationError.md)[]

list of [validation errors](../classes/ValidationError.md)
