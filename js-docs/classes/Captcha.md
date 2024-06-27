# Class: Captcha

Implementation of Captcha runtime model which extends from [field](Field.md) model

## Hierarchy

- [`Field`](Field.md)

  ↳ **`Captcha`**

## Implements

- [`CaptchaModel`](../interfaces/CaptchaModel.md)

## Table of contents

### Accessors

- [:type](Captcha.md#:type)
- [captchaDisplayMode](Captcha.md#captchadisplaymode)
- [captchaProvider](Captcha.md#captchaprovider)
- [captchaSiteKey](Captcha.md#captchasitekey)
- [dataRef](Captcha.md#dataref)
- [default](Captcha.md#default)
- [description](Captcha.md#description)
- [displayFormat](Captcha.md#displayformat)
- [displayValue](Captcha.md#displayvalue)
- [displayValueExpression](Captcha.md#displayvalueexpression)
- [editFormat](Captcha.md#editformat)
- [editValue](Captcha.md#editvalue)
- [emptyValue](Captcha.md#emptyvalue)
- [enabled](Captcha.md#enabled)
- [enforceEnum](Captcha.md#enforceenum)
- [enum](Captcha.md#enum)
- [enumNames](Captcha.md#enumnames)
- [errorMessage](Captcha.md#errormessage)
- [exclusiveMaximum](Captcha.md#exclusivemaximum)
- [exclusiveMinimum](Captcha.md#exclusiveminimum)
- [fieldType](Captcha.md#fieldtype)
- [form](Captcha.md#form)
- [format](Captcha.md#format)
- [id](Captcha.md#id)
- [index](Captcha.md#index)
- [isContainer](Captcha.md#iscontainer)
- [label](Captcha.md#label)
- [lang](Captcha.md#lang)
- [maxLength](Captcha.md#maxlength)
- [maximum](Captcha.md#maximum)
- [minLength](Captcha.md#minlength)
- [minimum](Captcha.md#minimum)
- [name](Captcha.md#name)
- [parent](Captcha.md#parent)
- [pattern](Captcha.md#pattern)
- [placeholder](Captcha.md#placeholder)
- [properties](Captcha.md#properties)
- [qualifiedName](Captcha.md#qualifiedname)
- [readOnly](Captcha.md#readonly)
- [repeatable](Captcha.md#repeatable)
- [required](Captcha.md#required)
- [ruleEngine](Captcha.md#ruleengine)
- [screenReaderText](Captcha.md#screenreadertext)
- [step](Captcha.md#step)
- [tooltip](Captcha.md#tooltip)
- [type](Captcha.md#type)
- [uniqueItems](Captcha.md#uniqueitems)
- [valid](Captcha.md#valid)
- [validity](Captcha.md#validity)
- [value](Captcha.md#value)
- [visible](Captcha.md#visible)

### Properties

- [\_eventSource](Captcha.md#_eventsource)

### Methods

- [change](Captcha.md#change)
- [custom\_setProperty](Captcha.md#custom_setproperty)
- [dispatch](Captcha.md#dispatch)
- [executeAction](Captcha.md#executeaction)
- [executeExpression](Captcha.md#executeexpression)
- [focus](Captcha.md#focus)
- [getDataNode](Captcha.md#getdatanode)
- [getDependents](Captcha.md#getdependents)
- [getErrorMessage](Captcha.md#geterrormessage)
- [getNonTransparentParent](Captcha.md#getnontransparentparent)
- [getRules](Captcha.md#getrules)
- [getState](Captcha.md#getstate)
- [importData](Captcha.md#importdata)
- [isTransparent](Captcha.md#istransparent)
- [markAsInvalid](Captcha.md#markasinvalid)
- [ruleNodeReference](Captcha.md#rulenodereference)
- [toString](Captcha.md#tostring)
- [triggerValidationEvent](Captcha.md#triggervalidationevent)
- [validate](Captcha.md#validate)
- [valueOf](Captcha.md#valueof)

### Constructors

- [constructor](Captcha.md#constructor)

## Accessors

### :type

• `get` **:type**(): `string`

Custom widget type show to the user for capturing the data.

#### Returns

`string`

#### Implementation of

[CaptchaModel](../interfaces/CaptchaModel.md).[:type](../interfaces/CaptchaModel.md#:type)

#### Inherited from

Field.:type

___

### captchaDisplayMode

• `get` **captchaDisplayMode**(): `undefined` \| [`CaptchaDisplayMode`](../enums/CaptchaDisplayMode.md)

Display mode of the captcha. This property can be one of the [CaptchaDisplayMode](../enums/CaptchaDisplayMode.md) enum values.

#### Returns

`undefined` \| [`CaptchaDisplayMode`](../enums/CaptchaDisplayMode.md)

#### Implementation of

[CaptchaModel](../interfaces/CaptchaModel.md).[captchaDisplayMode](../interfaces/CaptchaModel.md#captchadisplaymode)

___

### captchaProvider

• `get` **captchaProvider**(): `undefined` \| `string`

Field to identify the provider of the captcha service.

#### Returns

`undefined` \| `string`

#### Implementation of

[CaptchaModel](../interfaces/CaptchaModel.md).[captchaProvider](../interfaces/CaptchaModel.md#captchaprovider)

___

### captchaSiteKey

• `get` **captchaSiteKey**(): `undefined` \| `string`

Field to identify the siteKey for captcha, which is used for captcha's rendition.

#### Returns

`undefined` \| `string`

#### Implementation of

[CaptchaModel](../interfaces/CaptchaModel.md).[captchaSiteKey](../interfaces/CaptchaModel.md#captchasitekey)

___

### dataRef

• `get` **dataRef**(): `undefined` \| ``null`` \| `string`

To map the field’s value to a property in the data model.

#### Returns

`undefined` \| ``null`` \| `string`

#### Implementation of

[CaptchaModel](../interfaces/CaptchaModel.md).[dataRef](../interfaces/CaptchaModel.md#dataref)

#### Inherited from

Field.dataRef

___

### default

• `get` **default**(): `any`

Default value of the Field.

#### Returns

`any`

#### Implementation of

[CaptchaModel](../interfaces/CaptchaModel.md).[default](../interfaces/CaptchaModel.md#default)

#### Inherited from

Field.default

___

### description

• `get` **description**(): `undefined` \| `string`

Extra description to be shown to the user to aid in form filling experience. It can be rich text.

#### Returns

`undefined` \| `string`

#### Implementation of

[CaptchaModel](../interfaces/CaptchaModel.md).[description](../interfaces/CaptchaModel.md#description)

#### Inherited from

Field.description

• `set` **description**(`d`): `void`

Extra description to be shown to the user to aid in form filling experience. It can be rich text.

#### Parameters

| Name | Type |
| :------ | :------ |
| `d` | `undefined` \| `string` |

#### Returns

`void`

#### Implementation of

[CaptchaModel](../interfaces/CaptchaModel.md).[description](../interfaces/CaptchaModel.md#description)

#### Inherited from

Field.description

___

### displayFormat

• `get` **displayFormat**(): `undefined` \| `string`

format in which user will see the value after update

#### Returns

`undefined` \| `string`

#### Implementation of

[CaptchaModel](../interfaces/CaptchaModel.md).[displayFormat](../interfaces/CaptchaModel.md#displayformat)

#### Inherited from

Field.displayFormat

___

### displayValue

• `get` **displayValue**(): `any`

value to be displayed to the user after update

#### Returns

`any`

#### Implementation of

[CaptchaModel](../interfaces/CaptchaModel.md).[displayValue](../interfaces/CaptchaModel.md#displayvalue)

#### Inherited from

Field.displayValue

___

### displayValueExpression

• `get` **displayValueExpression**(): `undefined` \| `string`

expression that when evaluated returns the displayValue of a field

#### Returns

`undefined` \| `string`

#### Implementation of

[CaptchaModel](../interfaces/CaptchaModel.md).[displayValueExpression](../interfaces/CaptchaModel.md#displayvalueexpression)

#### Inherited from

Field.displayValueExpression

___

### editFormat

• `get` **editFormat**(): `undefined` \| `string`

format in which user will edit the value

#### Returns

`undefined` \| `string`

#### Implementation of

[CaptchaModel](../interfaces/CaptchaModel.md).[editFormat](../interfaces/CaptchaModel.md#editformat)

#### Inherited from

Field.editFormat

___

### editValue

• `get` **editValue**(): `any`

value to be displayed to the user for edit

#### Returns

`any`

#### Implementation of

[CaptchaModel](../interfaces/CaptchaModel.md).[editValue](../interfaces/CaptchaModel.md#editvalue)

#### Inherited from

Field.editValue

___

### emptyValue

• `get` **emptyValue**(): `undefined` \| ``null`` \| ``""``

#### Returns

`undefined` \| ``null`` \| ``""``

#### Inherited from

Field.emptyValue

___

### enabled

• `get` **enabled**(): `undefined` \| `boolean`

Whether the field is enabled and takes part in rules, events etc.

#### Returns

`undefined` \| `boolean`

#### Implementation of

[CaptchaModel](../interfaces/CaptchaModel.md).[enabled](../interfaces/CaptchaModel.md#enabled)

#### Inherited from

Field.enabled

• `set` **enabled**(`e`): `void`

Whether the field is enabled and takes part in rules, events etc.

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `undefined` \| `boolean` |

#### Returns

`void`

#### Implementation of

[CaptchaModel](../interfaces/CaptchaModel.md).[enabled](../interfaces/CaptchaModel.md#enabled)

#### Inherited from

Field.enabled

___

### enforceEnum

• `get` **enforceEnum**(): `undefined` \| `boolean`

#### Returns

`undefined` \| `boolean`

#### Implementation of

[CaptchaModel](../interfaces/CaptchaModel.md).[enforceEnum](../interfaces/CaptchaModel.md#enforceenum)

#### Inherited from

Field.enforceEnum

___

### enum

• `get` **enum**(): `undefined` \| `any`[]

#### Returns

`undefined` \| `any`[]

#### Implementation of

[CaptchaModel](../interfaces/CaptchaModel.md).[enum](../interfaces/CaptchaModel.md#enum)

#### Inherited from

Field.enum

• `set` **enum**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `undefined` \| `any`[] |

#### Returns

`void`

#### Implementation of

[CaptchaModel](../interfaces/CaptchaModel.md).[enum](../interfaces/CaptchaModel.md#enum)

#### Inherited from

Field.enum

___

### enumNames

• `get` **enumNames**(): `undefined` \| `string`[]

#### Returns

`undefined` \| `string`[]

#### Implementation of

[CaptchaModel](../interfaces/CaptchaModel.md).[enumNames](../interfaces/CaptchaModel.md#enumnames)

#### Inherited from

Field.enumNames

• `set` **enumNames**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `undefined` \| `string`[] |

#### Returns

`void`

#### Implementation of

[CaptchaModel](../interfaces/CaptchaModel.md).[enumNames](../interfaces/CaptchaModel.md#enumnames)

#### Inherited from

Field.enumNames

___

### errorMessage

• `get` **errorMessage**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

Field.errorMessage

• `set` **errorMessage**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `undefined` \| `string` |

#### Returns

`void`

#### Inherited from

Field.errorMessage

___

### exclusiveMaximum

• `get` **exclusiveMaximum**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Implementation of

[CaptchaModel](../interfaces/CaptchaModel.md).[exclusiveMaximum](../interfaces/CaptchaModel.md#exclusivemaximum)

#### Inherited from

Field.exclusiveMaximum

• `set` **exclusiveMaximum**(`eM`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eM` | `undefined` \| `number` |

#### Returns

`void`

#### Implementation of

[CaptchaModel](../interfaces/CaptchaModel.md).[exclusiveMaximum](../interfaces/CaptchaModel.md#exclusivemaximum)

#### Inherited from

Field.exclusiveMaximum

___

### exclusiveMinimum

• `get` **exclusiveMinimum**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Implementation of

[CaptchaModel](../interfaces/CaptchaModel.md).[exclusiveMinimum](../interfaces/CaptchaModel.md#exclusiveminimum)

#### Inherited from

Field.exclusiveMinimum

• `set` **exclusiveMinimum**(`eM`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eM` | `undefined` \| `number` |

#### Returns

`void`

#### Implementation of

[CaptchaModel](../interfaces/CaptchaModel.md).[exclusiveMinimum](../interfaces/CaptchaModel.md#exclusiveminimum)

#### Inherited from

Field.exclusiveMinimum

___

### fieldType

• `get` **fieldType**(): `string`

Type of field to capture the user data.

#### Returns

`string`

#### Implementation of

[CaptchaModel](../interfaces/CaptchaModel.md).[fieldType](../interfaces/CaptchaModel.md#fieldtype)

#### Inherited from

Field.fieldType

___

### form

• `get` **form**(): [`FormModel`](../interfaces/FormModel.md)

#### Returns

[`FormModel`](../interfaces/FormModel.md)

#### Inherited from

Field.form

___

### format

• `get` **format**(): `undefined` \| `string`

returns the format constraint

#### Returns

`undefined` \| `string`

#### Implementation of

[CaptchaModel](../interfaces/CaptchaModel.md).[format](../interfaces/CaptchaModel.md#format)

#### Inherited from

Field.format

___

### id

• `get` **id**(): `string`

Unique id of the form field.

#### Returns

`string`

#### Implementation of

[CaptchaModel](../interfaces/CaptchaModel.md).[id](../interfaces/CaptchaModel.md#id)

#### Inherited from

Field.id

___

### index

• `get` **index**(): `number`

The index of the Field within its parent.

#### Returns

`number`

#### Implementation of

[CaptchaModel](../interfaces/CaptchaModel.md).[index](../interfaces/CaptchaModel.md#index)

#### Inherited from

Field.index

___

### isContainer

• `get` **isContainer**(): `boolean`

Whether the form field is container or not

#### Returns

`boolean`

#### Implementation of

[CaptchaModel](../interfaces/CaptchaModel.md).[isContainer](../interfaces/CaptchaModel.md#iscontainer)

#### Inherited from

Field.isContainer

___

### label

• `get` **label**(): `undefined` \| [`Label`](../README.md#label)

Label to be used for the field.

#### Returns

`undefined` \| [`Label`](../README.md#label)

#### Implementation of

[CaptchaModel](../interfaces/CaptchaModel.md).[label](../interfaces/CaptchaModel.md#label)

#### Inherited from

Field.label

• `set` **label**(`l`): `void`

Label to be used for the field.

#### Parameters

| Name | Type |
| :------ | :------ |
| `l` | `undefined` \| [`Label`](../README.md#label) |

#### Returns

`void`

#### Implementation of

[CaptchaModel](../interfaces/CaptchaModel.md).[label](../interfaces/CaptchaModel.md#label)

#### Inherited from

Field.label

___

### lang

• `get` **lang**(): `undefined` \| `string`

language of the field

#### Returns

`undefined` \| `string`

#### Implementation of

[CaptchaModel](../interfaces/CaptchaModel.md).[lang](../interfaces/CaptchaModel.md#lang)

#### Inherited from

Field.lang

___

### maxLength

• `get` **maxLength**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Implementation of

[CaptchaModel](../interfaces/CaptchaModel.md).[maxLength](../interfaces/CaptchaModel.md#maxlength)

#### Inherited from

Field.maxLength

___

### maximum

• `get` **maximum**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Implementation of

[CaptchaModel](../interfaces/CaptchaModel.md).[maximum](../interfaces/CaptchaModel.md#maximum)

#### Inherited from

Field.maximum

• `set` **maximum**(`m`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | `undefined` \| `number` |

#### Returns

`void`

#### Implementation of

[CaptchaModel](../interfaces/CaptchaModel.md).[maximum](../interfaces/CaptchaModel.md#maximum)

#### Inherited from

Field.maximum

___

### minLength

• `get` **minLength**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Implementation of

[CaptchaModel](../interfaces/CaptchaModel.md).[minLength](../interfaces/CaptchaModel.md#minlength)

#### Inherited from

Field.minLength

___

### minimum

• `get` **minimum**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Implementation of

[CaptchaModel](../interfaces/CaptchaModel.md).[minimum](../interfaces/CaptchaModel.md#minimum)

#### Inherited from

Field.minimum

• `set` **minimum**(`m`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | `undefined` \| `number` |

#### Returns

`void`

#### Implementation of

[CaptchaModel](../interfaces/CaptchaModel.md).[minimum](../interfaces/CaptchaModel.md#minimum)

#### Inherited from

Field.minimum

___

### name

• `get` **name**(): `undefined` \| `string`

Name of the form field.

#### Returns

`undefined` \| `string`

#### Implementation of

[CaptchaModel](../interfaces/CaptchaModel.md).[name](../interfaces/CaptchaModel.md#name)

#### Inherited from

Field.name

___

### parent

• `get` **parent**(): [`ContainerModel`](../interfaces/ContainerModel.md)

Parent of the current field

#### Returns

[`ContainerModel`](../interfaces/ContainerModel.md)

#### Implementation of

[CaptchaModel](../interfaces/CaptchaModel.md).[parent](../interfaces/CaptchaModel.md#parent)

#### Inherited from

Field.parent

___

### pattern

• `get` **pattern**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Implementation of

[CaptchaModel](../interfaces/CaptchaModel.md).[pattern](../interfaces/CaptchaModel.md#pattern)

#### Inherited from

Field.pattern

___

### placeholder

• `get` **placeholder**(): `undefined` \| `string`

The placeholder to show on the widget.

#### Returns

`undefined` \| `string`

#### Implementation of

[CaptchaModel](../interfaces/CaptchaModel.md).[placeholder](../interfaces/CaptchaModel.md#placeholder)

#### Inherited from

Field.placeholder

___

### properties

• `get` **properties**(): `Object`

Custom properties of the form field.

#### Returns

`Object`

#### Implementation of

[CaptchaModel](../interfaces/CaptchaModel.md).[properties](../interfaces/CaptchaModel.md#properties)

#### Inherited from

Field.properties

• `set` **properties**(`p`): `void`

Custom properties of the form field.

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | `Object` |

#### Returns

`void`

#### Implementation of

[CaptchaModel](../interfaces/CaptchaModel.md).[properties](../interfaces/CaptchaModel.md#properties)

#### Inherited from

Field.properties

___

### qualifiedName

• `get` **qualifiedName**(): `any`

#### Returns

`any`

#### Implementation of

[CaptchaModel](../interfaces/CaptchaModel.md).[qualifiedName](../interfaces/CaptchaModel.md#qualifiedname)

#### Inherited from

Field.qualifiedName

___

### readOnly

• `get` **readOnly**(): `undefined` \| `boolean`

Whether the field should be readOnly to end user or not.

#### Returns

`undefined` \| `boolean`

#### Implementation of

[CaptchaModel](../interfaces/CaptchaModel.md).[readOnly](../interfaces/CaptchaModel.md#readonly)

#### Inherited from

Field.readOnly

• `set` **readOnly**(`e`): `void`

Whether the field should be readOnly to end user or not.

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `undefined` \| `boolean` |

#### Returns

`void`

#### Implementation of

[CaptchaModel](../interfaces/CaptchaModel.md).[readOnly](../interfaces/CaptchaModel.md#readonly)

#### Inherited from

Field.readOnly

___

### repeatable

• `get` **repeatable**(): `any`

Field is repeatable or not

#### Returns

`any`

#### Implementation of

[CaptchaModel](../interfaces/CaptchaModel.md).[repeatable](../interfaces/CaptchaModel.md#repeatable)

#### Inherited from

Field.repeatable

___

### required

• `get` **required**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[CaptchaModel](../interfaces/CaptchaModel.md).[required](../interfaces/CaptchaModel.md#required)

#### Inherited from

Field.required

• `set` **required**(`r`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | `boolean` |

#### Returns

`void`

#### Implementation of

[CaptchaModel](../interfaces/CaptchaModel.md).[required](../interfaces/CaptchaModel.md#required)

#### Inherited from

Field.required

___

### ruleEngine

• `get` **ruleEngine**(): `RuleEngine`

#### Returns

`RuleEngine`

#### Implementation of

CaptchaModel.ruleEngine

#### Inherited from

Field.ruleEngine

___

### screenReaderText

• `get` **screenReaderText**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

Field.screenReaderText

___

### step

• `get` **step**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Implementation of

[CaptchaModel](../interfaces/CaptchaModel.md).[step](../interfaces/CaptchaModel.md#step)

#### Inherited from

Field.step

___

### tooltip

• `get` **tooltip**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

Field.tooltip

___

### type

• `get` **type**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Implementation of

[CaptchaModel](../interfaces/CaptchaModel.md).[type](../interfaces/CaptchaModel.md#type)

#### Inherited from

Field.type

___

### uniqueItems

• `get` **uniqueItems**(): `undefined` \| `boolean`

#### Returns

`undefined` \| `boolean`

#### Implementation of

[CaptchaModel](../interfaces/CaptchaModel.md).[uniqueItems](../interfaces/CaptchaModel.md#uniqueitems)

#### Inherited from

Field.uniqueItems

___

### valid

• `get` **valid**(): `any`

The current validation state of the Field. The property is always computed after merging the Data Model with the Form

#### Returns

`any`

#### Implementation of

[CaptchaModel](../interfaces/CaptchaModel.md).[valid](../interfaces/CaptchaModel.md#valid)

#### Inherited from

Field.valid

• `set` **valid**(`e`): `void`

The current validation state of the Field. The property is always computed after merging the Data Model with the Form

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `any` |

#### Returns

`void`

#### Implementation of

[CaptchaModel](../interfaces/CaptchaModel.md).[valid](../interfaces/CaptchaModel.md#valid)

#### Inherited from

Field.valid

___

### validity

• `get` **validity**(): `any`

#### Returns

`any`

#### Inherited from

Field.validity

___

### value

• `get` **value**(): `any`

The current value of the Field. The property is serialized in the Data Model.

#### Returns

`any`

#### Implementation of

[CaptchaModel](../interfaces/CaptchaModel.md).[value](../interfaces/CaptchaModel.md#value)

#### Inherited from

Field.value

• `set` **value**(`v`): `void`

The current value of the Field. The property is serialized in the Data Model.

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |

#### Returns

`void`

#### Implementation of

[CaptchaModel](../interfaces/CaptchaModel.md).[value](../interfaces/CaptchaModel.md#value)

#### Inherited from

Field.value

___

### visible

• `get` **visible**(): `undefined` \| `boolean`

Whether the field should be visible to author or not.

#### Returns

`undefined` \| `boolean`

#### Implementation of

[CaptchaModel](../interfaces/CaptchaModel.md).[visible](../interfaces/CaptchaModel.md#visible)

#### Inherited from

Field.visible

• `set` **visible**(`v`): `void`

Whether the field should be visible to author or not.

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `undefined` \| `boolean` |

#### Returns

`void`

#### Implementation of

[CaptchaModel](../interfaces/CaptchaModel.md).[visible](../interfaces/CaptchaModel.md#visible)

#### Inherited from

Field.visible

## Properties

### \_eventSource

• **\_eventSource**: [`EventSource`](../enums/EventSource.md) = `EventSource.CODE`

#### Implementation of

[CaptchaModel](../interfaces/CaptchaModel.md).[_eventSource](../interfaces/CaptchaModel.md#_eventsource)

#### Inherited from

[Field](Field.md).[_eventSource](Field.md#_eventsource)

## Methods

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

[Field](Field.md).[change](Field.md#change)

___

### custom\_setProperty

▸ **custom_setProperty**(`action`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | [`Action`](../interfaces/Action.md) |

#### Returns

`void`

___

### dispatch

▸ **dispatch**(`action`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | [`Action`](../interfaces/Action.md) |

#### Returns

`void`

#### Implementation of

CaptchaModel.dispatch

#### Inherited from

[Field](Field.md).[dispatch](Field.md#dispatch)

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

[Field](Field.md).[executeAction](Field.md#executeaction)

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

[Field](Field.md).[executeExpression](Field.md#executeexpression)

___

### focus

▸ **focus**(): `void`

#### Returns

`void`

#### Inherited from

[Field](Field.md).[focus](Field.md#focus)

___

### getDataNode

▸ **getDataNode**(): `undefined`

#### Returns

`undefined`

#### Overrides

Field.getDataNode

___

### getDependents

▸ **getDependents**(): `string`[]

#### Returns

`string`[]

#### Inherited from

[Field](Field.md).[getDependents](Field.md#getdependents)

___

### getErrorMessage

▸ **getErrorMessage**(`constraint`): `string`

Returns the error message for a given constraint

#### Parameters

| Name | Type |
| :------ | :------ |
| `constraint` | keyof [`ConstraintsMessages`](../README.md#constraintsmessages) |

#### Returns

`string`

#### Inherited from

[Field](Field.md).[getErrorMessage](Field.md#geterrormessage)

___

### getNonTransparentParent

▸ **getNonTransparentParent**(): [`ContainerModel`](../interfaces/ContainerModel.md)

#### Returns

[`ContainerModel`](../interfaces/ContainerModel.md)

#### Inherited from

[Field](Field.md).[getNonTransparentParent](Field.md#getnontransparentparent)

___

### getRules

▸ **getRules**(): [`Items`](../README.md#items)<`string`\>

#### Returns

[`Items`](../README.md#items)<`string`\>

#### Inherited from

[Field](Field.md).[getRules](Field.md#getrules)

___

### getState

▸ **getState**(`isRepeatableChild?`, `forRestore?`): `Object`

[state](../README.md#state) of the form object

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `isRepeatableChild` | `boolean` | `false` |
| `forRestore` | `boolean` | `false` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `:type` | `string` |
| `_dependents` | `undefined` \| `string`[] |
| `accept?` | `string`[] |
| `allowedComponents` | `undefined` |
| `altText?` | `string` |
| `appliedCssClassNames?` | `string` |
| `buttonType?` | `string` |
| `checked?` | `boolean` |
| `columnClassNames` | `undefined` |
| `columnCount` | `undefined` |
| `constraintMessages?` | [`ConstraintsMessages`](../README.md#constraintsmessages) |
| `dataRef?` | ``null`` \| `string` |
| `default?` | `any` |
| `description?` | `string` |
| `displayFormat` | `undefined` \| `string` |
| `displayValue` | `any` |
| `displayValueExpression?` | `string` |
| `editFormat` | `undefined` \| `string` |
| `editValue` | `any` |
| `emptyValue?` | ``""`` \| ``"undefined"`` \| ``"null"`` |
| `enabled` | `undefined` \| `boolean` |
| `enforceEnum?` | `boolean` |
| `enum?` | `any`[] |
| `enumNames?` | `string`[] |
| `errorMessage?` | `string` |
| `events?` | [`Items`](../README.md#items)<`undefined` \| `string` \| `string`[]\> |
| `exclusiveMaximum?` | `number` |
| `exclusiveMinimum?` | `number` |
| `fieldType?` | `string` |
| `format?` | `string` |
| `gridClassNames` | `undefined` |
| `id` | `string` |
| `index` | `number` |
| `label?` | [`Label`](../README.md#label) |
| `lang?` | `string` |
| `maxFileSize?` | `string` \| `number` |
| `maxItems?` | `number` |
| `maxLength?` | `number` |
| `maxOccur?` | `number` |
| `maximum?` | `number` |
| `minItems?` | `number` |
| `minLength?` | `number` |
| `minOccur?` | `number` |
| `minimum?` | `number` |
| `name?` | `string` |
| `parent` | `undefined` |
| `pattern?` | `string` |
| `placeholder?` | `string` |
| `properties` | { [key: string]: `any`;  } |
| `qualifiedName` | `any` |
| `readOnly` | `undefined` \| `boolean` |
| `repeatable?` | `boolean` |
| `required?` | `boolean` |
| `rules?` | [`Items`](../README.md#items)<`string`\> |
| `screenReaderText?` | `string` |
| `step?` | `number` |
| `tooltip?` | `string` |
| `type?` | `string` |
| `uniqueItems?` | `boolean` |
| `valid?` | `boolean` |
| `validationExpression?` | `string` |
| `validationMessage?` | `string` |
| `validity?` | `any` |
| `value?` | `any` |
| `viewType?` | `string` |
| `visible?` | `boolean` |

#### Implementation of

[CaptchaModel](../interfaces/CaptchaModel.md).[getState](../interfaces/CaptchaModel.md#getstate)

#### Inherited from

[Field](Field.md).[getState](Field.md#getstate)

___

### importData

▸ **importData**(`contextualDataModel`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextualDataModel` | `default` |

#### Returns

`void`

#### Implementation of

CaptchaModel.importData

#### Inherited from

[Field](Field.md).[importData](Field.md#importdata)

___

### isTransparent

▸ **isTransparent**(): `boolean`

Transparent form fields are meant only for creation of view. They are also not part of data

#### Returns

`boolean`

#### Inherited from

[Field](Field.md).[isTransparent](Field.md#istransparent)

___

### markAsInvalid

▸ **markAsInvalid**(`message`, `constraint?`): `void`

API to mark a particular field as invalid

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `message` | `string` | `undefined` | error message |
| `constraint` | ``null`` \| keyof [`ConstraintsMessages`](../README.md#constraintsmessages) | `null` | constraint type due to which field is marked invalid. It should be key of [ConstraintsMessages](../README.md#constraintsmessages) or null |

#### Returns

`void`

#### Inherited from

[Field](Field.md).[markAsInvalid](Field.md#markasinvalid)

___

### ruleNodeReference

▸ **ruleNodeReference**(): `any`

#### Returns

`any`

#### Implementation of

CaptchaModel.ruleNodeReference

#### Inherited from

[Field](Field.md).[ruleNodeReference](Field.md#rulenodereference)

___

### toString

▸ **toString**(): `any`

#### Returns

`any`

#### Inherited from

[Field](Field.md).[toString](Field.md#tostring)

___

### triggerValidationEvent

▸ **triggerValidationEvent**(`changes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `changes` | `any` |

#### Returns

`void`

#### Inherited from

[Field](Field.md).[triggerValidationEvent](Field.md#triggervalidationevent)

___

### validate

▸ **validate**(): [`ValidationError`](ValidationError.md)[]

Validates the current form object

#### Returns

[`ValidationError`](ValidationError.md)[]

#### Implementation of

[CaptchaModel](../interfaces/CaptchaModel.md).[validate](../interfaces/CaptchaModel.md#validate)

#### Inherited from

[Field](Field.md).[validate](Field.md#validate)

___

### valueOf

▸ **valueOf**(): `any`

#### Returns

`any`

#### Inherited from

[Field](Field.md).[valueOf](Field.md#valueof)

## Constructors

### constructor

• **new Captcha**(`params`, `_options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`CaptchaJson`](../README.md#captchajson) |
| `_options` | `Object` |
| `_options.form` | [`FormModel`](../interfaces/FormModel.md) |
| `_options.mode?` | ``"create"`` \| ``"restore"`` |
| `_options.parent` | [`ContainerModel`](../interfaces/ContainerModel.md) |

#### Overrides

Field.constructor
