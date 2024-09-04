# Interface: CaptchaModel

Generic captcha model interface.
Defines properties that each form's captcha should have

## Hierarchy

- [`FieldModel`](FieldModel.md)

  ↳ **`CaptchaModel`**

## Implemented by

- [`Captcha`](../classes/Captcha.md)

## Table of contents

### Properties

- [:type](CaptchaModel.md#:type)
- [\_eventSource](CaptchaModel.md#_eventsource)
- [accept](CaptchaModel.md#accept)
- [captchaDisplayMode](CaptchaModel.md#captchadisplaymode)
- [captchaProvider](CaptchaModel.md#captchaprovider)
- [captchaSiteKey](CaptchaModel.md#captchasitekey)
- [dataRef](CaptchaModel.md#dataref)
- [default](CaptchaModel.md#default)
- [description](CaptchaModel.md#description)
- [displayFormat](CaptchaModel.md#displayformat)
- [displayValue](CaptchaModel.md#displayvalue)
- [displayValueExpression](CaptchaModel.md#displayvalueexpression)
- [editFormat](CaptchaModel.md#editformat)
- [editValue](CaptchaModel.md#editvalue)
- [enabled](CaptchaModel.md#enabled)
- [enforceEnum](CaptchaModel.md#enforceenum)
- [enum](CaptchaModel.md#enum)
- [enumNames](CaptchaModel.md#enumnames)
- [events](CaptchaModel.md#events)
- [exclusiveMaximum](CaptchaModel.md#exclusivemaximum)
- [exclusiveMinimum](CaptchaModel.md#exclusiveminimum)
- [fieldType](CaptchaModel.md#fieldtype)
- [format](CaptchaModel.md#format)
- [id](CaptchaModel.md#id)
- [index](CaptchaModel.md#index)
- [isContainer](CaptchaModel.md#iscontainer)
- [items](CaptchaModel.md#items)
- [label](CaptchaModel.md#label)
- [lang](CaptchaModel.md#lang)
- [maxFileSize](CaptchaModel.md#maxfilesize)
- [maxItems](CaptchaModel.md#maxitems)
- [maxLength](CaptchaModel.md#maxlength)
- [maxOccur](CaptchaModel.md#maxoccur)
- [maximum](CaptchaModel.md#maximum)
- [minItems](CaptchaModel.md#minitems)
- [minLength](CaptchaModel.md#minlength)
- [minOccur](CaptchaModel.md#minoccur)
- [minimum](CaptchaModel.md#minimum)
- [name](CaptchaModel.md#name)
- [parent](CaptchaModel.md#parent)
- [pattern](CaptchaModel.md#pattern)
- [placeholder](CaptchaModel.md#placeholder)
- [properties](CaptchaModel.md#properties)
- [qualifiedName](CaptchaModel.md#qualifiedname)
- [readOnly](CaptchaModel.md#readonly)
- [repeatable](CaptchaModel.md#repeatable)
- [required](CaptchaModel.md#required)
- [rules](CaptchaModel.md#rules)
- [step](CaptchaModel.md#step)
- [type](CaptchaModel.md#type)
- [uniqueItems](CaptchaModel.md#uniqueitems)
- [valid](CaptchaModel.md#valid)
- [validationExpression](CaptchaModel.md#validationexpression)
- [value](CaptchaModel.md#value)
- [visible](CaptchaModel.md#visible)

### Methods

- [getState](CaptchaModel.md#getstate)
- [reset](CaptchaModel.md#reset)
- [syncDataAndFormModel](CaptchaModel.md#syncdataandformmodel)
- [validate](CaptchaModel.md#validate)

## Properties

### :type

• `Readonly` **:type**: `string`

Custom widget type show to the user for capturing the data.

#### Inherited from

[FieldModel](FieldModel.md).[:type](FieldModel.md#:type)

___

### \_eventSource

• **\_eventSource**: [`EventSource`](../enums/EventSource.md)

#### Inherited from

[FieldModel](FieldModel.md).[_eventSource](FieldModel.md#_eventsource)

___

### accept

• `Optional` **accept**: `string`[]

#### Inherited from

[FieldModel](FieldModel.md).[accept](FieldModel.md#accept)

___

### captchaDisplayMode

• **captchaDisplayMode**: `undefined` \| [`CaptchaDisplayMode`](../enums/CaptchaDisplayMode.md)

Display mode of the captcha. This property can be one of the [CaptchaDisplayMode](../enums/CaptchaDisplayMode.md) enum values.

___

### captchaProvider

• **captchaProvider**: `undefined` \| `string`

Field to identify the provider of the captcha service.

___

### captchaSiteKey

• **captchaSiteKey**: `undefined` \| `string`

Field to identify the siteKey for captcha, which is used for captcha's rendition.

___

### dataRef

• `Optional` `Readonly` **dataRef**: ``null`` \| `string`

To map the field’s value to a property in the data model.

#### Inherited from

[FieldModel](FieldModel.md).[dataRef](FieldModel.md#dataref)

___

### default

• `Optional` `Readonly` **default**: `any`

Default value of the Field.

#### Inherited from

[FieldModel](FieldModel.md).[default](FieldModel.md#default)

___

### description

• `Optional` **description**: `string`

Extra description to be shown to the user to aid in form filling experience. It can be rich text.

#### Inherited from

[FieldModel](FieldModel.md).[description](FieldModel.md#description)

___

### displayFormat

• `Optional` `Readonly` **displayFormat**: `string`

format in which user will see the value after update

#### Inherited from

[FieldModel](FieldModel.md).[displayFormat](FieldModel.md#displayformat)

___

### displayValue

• `Optional` `Readonly` **displayValue**: `string`

value to be displayed to the user after update

#### Inherited from

[FieldModel](FieldModel.md).[displayValue](FieldModel.md#displayvalue)

___

### displayValueExpression

• `Optional` `Readonly` **displayValueExpression**: `string`

expression that when evaluated returns the displayValue of a field

#### Inherited from

[FieldModel](FieldModel.md).[displayValueExpression](FieldModel.md#displayvalueexpression)

___

### editFormat

• `Optional` `Readonly` **editFormat**: `string`

format in which user will edit the value

#### Inherited from

[FieldModel](FieldModel.md).[editFormat](FieldModel.md#editformat)

___

### editValue

• `Optional` `Readonly` **editValue**: `string`

value to be displayed to the user for edit

#### Inherited from

[FieldModel](FieldModel.md).[editValue](FieldModel.md#editvalue)

___

### enabled

• `Optional` **enabled**: `boolean`

Whether the field is enabled and takes part in rules, events etc.

#### Inherited from

[FieldModel](FieldModel.md).[enabled](FieldModel.md#enabled)

___

### enforceEnum

• `Optional` **enforceEnum**: `boolean`

#### Inherited from

[FieldModel](FieldModel.md).[enforceEnum](FieldModel.md#enforceenum)

___

### enum

• `Optional` **enum**: `any`[]

#### Inherited from

[FieldModel](FieldModel.md).[enum](FieldModel.md#enum)

___

### enumNames

• `Optional` **enumNames**: `string`[]

#### Inherited from

[FieldModel](FieldModel.md).[enumNames](FieldModel.md#enumnames)

___

### events

• `Optional` **events**: `Object`

Events is a dictionary of eventName to the actions to perform.

#### Index signature

▪ [key: `string`]: `string`

#### Inherited from

[FieldModel](FieldModel.md).[events](FieldModel.md#events)

___

### exclusiveMaximum

• `Optional` **exclusiveMaximum**: `number`

#### Inherited from

[FieldModel](FieldModel.md).[exclusiveMaximum](FieldModel.md#exclusivemaximum)

___

### exclusiveMinimum

• `Optional` **exclusiveMinimum**: `number`

#### Inherited from

[FieldModel](FieldModel.md).[exclusiveMinimum](FieldModel.md#exclusiveminimum)

___

### fieldType

• `Readonly` **fieldType**: `string`

Type of field to capture the user data.

#### Inherited from

[FieldModel](FieldModel.md).[fieldType](FieldModel.md#fieldtype)

___

### format

• `Optional` **format**: `string`

#### Inherited from

[FieldModel](FieldModel.md).[format](FieldModel.md#format)

___

### id

• `Readonly` **id**: `string`

Unique id of the form field.

#### Inherited from

[FieldModel](FieldModel.md).[id](FieldModel.md#id)

___

### index

• `Readonly` **index**: `number`

The index of the Field within its parent.

#### Inherited from

[FieldModel](FieldModel.md).[index](FieldModel.md#index)

___

### isContainer

• `Readonly` **isContainer**: `boolean`

Whether the form field is container or not

#### Inherited from

[FieldModel](FieldModel.md).[isContainer](FieldModel.md#iscontainer)

___

### items

• `Optional` `Readonly` **items**: ([`FieldModel`](FieldModel.md) \| [`FieldsetModel`](FieldsetModel.md))[]

Array containing Fields or Panels.

#### Inherited from

[FieldModel](FieldModel.md).[items](FieldModel.md#items)

___

### label

• `Optional` **label**: [`Label`](../README.md#label)

Label to be used for the field.

#### Inherited from

[FieldModel](FieldModel.md).[label](FieldModel.md#label)

___

### lang

• `Optional` `Readonly` **lang**: `string`

language of the field

#### Inherited from

[FieldModel](FieldModel.md).[lang](FieldModel.md#lang)

___

### maxFileSize

• `Optional` **maxFileSize**: `string` \| `number`

#### Inherited from

[FieldModel](FieldModel.md).[maxFileSize](FieldModel.md#maxfilesize)

___

### maxItems

• `Optional` **maxItems**: `number`

#### Inherited from

[FieldModel](FieldModel.md).[maxItems](FieldModel.md#maxitems)

___

### maxLength

• `Optional` **maxLength**: `number`

#### Inherited from

[FieldModel](FieldModel.md).[maxLength](FieldModel.md#maxlength)

___

### maxOccur

• `Optional` **maxOccur**: `number`

#### Inherited from

[FieldModel](FieldModel.md).[maxOccur](FieldModel.md#maxoccur)

___

### maximum

• `Optional` **maximum**: `number`

#### Inherited from

[FieldModel](FieldModel.md).[maximum](FieldModel.md#maximum)

___

### minItems

• `Optional` **minItems**: `number`

#### Inherited from

[FieldModel](FieldModel.md).[minItems](FieldModel.md#minitems)

___

### minLength

• `Optional` **minLength**: `number`

#### Inherited from

[FieldModel](FieldModel.md).[minLength](FieldModel.md#minlength)

___

### minOccur

• `Optional` **minOccur**: `number`

#### Inherited from

[FieldModel](FieldModel.md).[minOccur](FieldModel.md#minoccur)

___

### minimum

• `Optional` **minimum**: `number`

#### Inherited from

[FieldModel](FieldModel.md).[minimum](FieldModel.md#minimum)

___

### name

• `Optional` `Readonly` **name**: `string`

Name of the form field.

#### Inherited from

[FieldModel](FieldModel.md).[name](FieldModel.md#name)

___

### parent

• **parent**: [`ContainerModel`](ContainerModel.md)

Parent of the current field

#### Inherited from

[FieldModel](FieldModel.md).[parent](FieldModel.md#parent)

___

### pattern

• `Optional` **pattern**: `string`

#### Inherited from

[FieldModel](FieldModel.md).[pattern](FieldModel.md#pattern)

___

### placeholder

• `Optional` **placeholder**: `string`

The placeholder to show on the widget.

#### Inherited from

[FieldModel](FieldModel.md).[placeholder](FieldModel.md#placeholder)

___

### properties

• **properties**: `Object`

Custom properties of the form field.

#### Index signature

▪ [key: `string`]: `any`

#### Inherited from

[FieldModel](FieldModel.md).[properties](FieldModel.md#properties)

___

### qualifiedName

• `Readonly` **qualifiedName**: `string`

#### Inherited from

[FieldModel](FieldModel.md).[qualifiedName](FieldModel.md#qualifiedname)

___

### readOnly

• `Optional` **readOnly**: `boolean`

Whether the field should be readOnly to end user or not.

#### Inherited from

[FieldModel](FieldModel.md).[readOnly](FieldModel.md#readonly)

___

### repeatable

• `Optional` `Readonly` **repeatable**: `boolean`

Field is repeatable or not

#### Inherited from

[FieldModel](FieldModel.md).[repeatable](FieldModel.md#repeatable)

___

### required

• `Optional` **required**: `boolean`

#### Inherited from

[FieldModel](FieldModel.md).[required](FieldModel.md#required)

___

### rules

• `Optional` **rules**: `Object`

Rules that modify the property of the object dynamically. The rules are evaluated whenever the dependency changes.

#### Index signature

▪ [key: `string`]: `string`

#### Inherited from

[FieldModel](FieldModel.md).[rules](FieldModel.md#rules)

___

### step

• `Optional` **step**: `number`

#### Inherited from

[FieldModel](FieldModel.md).[step](FieldModel.md#step)

___

### type

• `Optional` **type**: `string`

#### Inherited from

[FieldModel](FieldModel.md).[type](FieldModel.md#type)

___

### uniqueItems

• `Optional` **uniqueItems**: `boolean`

#### Inherited from

[FieldModel](FieldModel.md).[uniqueItems](FieldModel.md#uniqueitems)

___

### valid

• `Optional` **valid**: `boolean`

The current validation state of the Field. The property is always computed after merging the Data Model with the Form

#### Inherited from

[FieldModel](FieldModel.md).[valid](FieldModel.md#valid)

___

### validationExpression

• `Optional` **validationExpression**: `string`

#### Inherited from

[FieldModel](FieldModel.md).[validationExpression](FieldModel.md#validationexpression)

___

### value

• **value**: `any`

The current value of the Field. The property is serialized in the Data Model.

#### Inherited from

[FieldModel](FieldModel.md).[value](FieldModel.md#value)

___

### visible

• `Optional` **visible**: `boolean`

Whether the field should be visible to author or not.

#### Inherited from

[FieldModel](FieldModel.md).[visible](FieldModel.md#visible)

## Methods

### getState

▸ **getState**(): `any`

[state](../README.md#state) of the form object

#### Returns

`any`

#### Inherited from

[FieldModel](FieldModel.md).[getState](FieldModel.md#getstate)

___

### reset

▸ **reset**(): `any`

Resets the form model

#### Returns

`any`

#### Inherited from

[FieldModel](FieldModel.md).[reset](FieldModel.md#reset)

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

[FieldModel](FieldModel.md).[syncDataAndFormModel](FieldModel.md#syncdataandformmodel)

___

### validate

▸ **validate**(): [`ValidationError`](../classes/ValidationError.md)[]

Validates the given form field

#### Returns

[`ValidationError`](../classes/ValidationError.md)[]

list of [validation errors](../classes/ValidationError.md)

#### Inherited from

[FieldModel](FieldModel.md).[validate](FieldModel.md#validate)
