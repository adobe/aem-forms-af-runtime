# Class: FileUpload

Implementation of FileUpload runtime model which extends from [field](Field.md)

## Hierarchy

- [`Field`](Field.md)

  ↳ **`FileUpload`**

## Implements

- [`FieldModel`](../interfaces/FieldModel.md)

## Table of contents

### Accessors

- [:type](FileUpload.md#:type)
- [accept](FileUpload.md#accept)
- [dataRef](FileUpload.md#dataref)
- [default](FileUpload.md#default)
- [description](FileUpload.md#description)
- [displayFormat](FileUpload.md#displayformat)
- [displayValue](FileUpload.md#displayvalue)
- [displayValueExpression](FileUpload.md#displayvalueexpression)
- [editFormat](FileUpload.md#editformat)
- [editValue](FileUpload.md#editvalue)
- [emptyValue](FileUpload.md#emptyvalue)
- [enabled](FileUpload.md#enabled)
- [enforceEnum](FileUpload.md#enforceenum)
- [enum](FileUpload.md#enum)
- [enumNames](FileUpload.md#enumnames)
- [errorMessage](FileUpload.md#errormessage)
- [exclusiveMaximum](FileUpload.md#exclusivemaximum)
- [exclusiveMinimum](FileUpload.md#exclusiveminimum)
- [fieldType](FileUpload.md#fieldtype)
- [form](FileUpload.md#form)
- [format](FileUpload.md#format)
- [id](FileUpload.md#id)
- [index](FileUpload.md#index)
- [isContainer](FileUpload.md#iscontainer)
- [label](FileUpload.md#label)
- [lang](FileUpload.md#lang)
- [maxFileSize](FileUpload.md#maxfilesize)
- [maxLength](FileUpload.md#maxlength)
- [maximum](FileUpload.md#maximum)
- [minLength](FileUpload.md#minlength)
- [minimum](FileUpload.md#minimum)
- [name](FileUpload.md#name)
- [parent](FileUpload.md#parent)
- [pattern](FileUpload.md#pattern)
- [placeholder](FileUpload.md#placeholder)
- [properties](FileUpload.md#properties)
- [qualifiedName](FileUpload.md#qualifiedname)
- [readOnly](FileUpload.md#readonly)
- [repeatable](FileUpload.md#repeatable)
- [required](FileUpload.md#required)
- [ruleEngine](FileUpload.md#ruleengine)
- [screenReaderText](FileUpload.md#screenreadertext)
- [step](FileUpload.md#step)
- [tooltip](FileUpload.md#tooltip)
- [type](FileUpload.md#type)
- [uniqueItems](FileUpload.md#uniqueitems)
- [valid](FileUpload.md#valid)
- [validity](FileUpload.md#validity)
- [value](FileUpload.md#value)
- [visible](FileUpload.md#visible)

### Methods

- [dispatch](FileUpload.md#dispatch)
- [executeAction](FileUpload.md#executeaction)
- [executeExpression](FileUpload.md#executeexpression)
- [focus](FileUpload.md#focus)
- [getErrorMessage](FileUpload.md#geterrormessage)
- [getNonTransparentParent](FileUpload.md#getnontransparentparent)
- [getRules](FileUpload.md#getrules)
- [getState](FileUpload.md#getstate)
- [importData](FileUpload.md#importdata)
- [isTransparent](FileUpload.md#istransparent)
- [markAsInvalid](FileUpload.md#markasinvalid)
- [ruleNodeReference](FileUpload.md#rulenodereference)
- [toString](FileUpload.md#tostring)
- [triggerValidationEvent](FileUpload.md#triggervalidationevent)
- [validate](FileUpload.md#validate)
- [valueOf](FileUpload.md#valueof)

## Accessors

### :type

• `get` **:type**(): `string`

Custom widget type show to the user for capturing the data.

#### Returns

`string`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[:type](../interfaces/FieldModel.md#:type)

#### Inherited from

Field.:type

___

### accept

• `get` **accept**(): `undefined` \| `string`[]

Returns the list of mime types which file attachment can accept

#### Returns

`undefined` \| `string`[]

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[accept](../interfaces/FieldModel.md#accept)

___

### dataRef

• `get` **dataRef**(): `undefined` \| ``null`` \| `string`

To map the field’s value to a property in the data model.

#### Returns

`undefined` \| ``null`` \| `string`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[dataRef](../interfaces/FieldModel.md#dataref)

#### Inherited from

Field.dataRef

___

### default

• `get` **default**(): `any`

Default value of the Field.

#### Returns

`any`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[default](../interfaces/FieldModel.md#default)

#### Inherited from

Field.default

___

### description

• `get` **description**(): `undefined` \| `string`

Extra description to be shown to the user to aid in form filling experience. It can be rich text.

#### Returns

`undefined` \| `string`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[description](../interfaces/FieldModel.md#description)

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

[FieldModel](../interfaces/FieldModel.md).[description](../interfaces/FieldModel.md#description)

#### Inherited from

Field.description

___

### displayFormat

• `get` **displayFormat**(): `undefined` \| `string`

format in which user will see the value after update

#### Returns

`undefined` \| `string`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[displayFormat](../interfaces/FieldModel.md#displayformat)

#### Inherited from

Field.displayFormat

___

### displayValue

• `get` **displayValue**(): `any`

value to be displayed to the user after update

#### Returns

`any`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[displayValue](../interfaces/FieldModel.md#displayvalue)

#### Inherited from

Field.displayValue

___

### displayValueExpression

• `get` **displayValueExpression**(): `undefined` \| `string`

expression that when evaluated returns the displayValue of a field

#### Returns

`undefined` \| `string`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[displayValueExpression](../interfaces/FieldModel.md#displayvalueexpression)

#### Inherited from

Field.displayValueExpression

___

### editFormat

• `get` **editFormat**(): `undefined` \| `string`

format in which user will edit the value

#### Returns

`undefined` \| `string`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[editFormat](../interfaces/FieldModel.md#editformat)

#### Inherited from

Field.editFormat

___

### editValue

• `get` **editValue**(): `any`

value to be displayed to the user for edit

#### Returns

`any`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[editValue](../interfaces/FieldModel.md#editvalue)

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

[FieldModel](../interfaces/FieldModel.md).[enabled](../interfaces/FieldModel.md#enabled)

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

[FieldModel](../interfaces/FieldModel.md).[enabled](../interfaces/FieldModel.md#enabled)

#### Inherited from

Field.enabled

___

### enforceEnum

• `get` **enforceEnum**(): `undefined` \| `boolean`

#### Returns

`undefined` \| `boolean`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[enforceEnum](../interfaces/FieldModel.md#enforceenum)

#### Inherited from

Field.enforceEnum

___

### enum

• `get` **enum**(): `undefined` \| `any`[]

#### Returns

`undefined` \| `any`[]

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[enum](../interfaces/FieldModel.md#enum)

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

[FieldModel](../interfaces/FieldModel.md).[enum](../interfaces/FieldModel.md#enum)

#### Inherited from

Field.enum

___

### enumNames

• `get` **enumNames**(): `undefined` \| `string`[] \| [`EnumName`](../README.md#enumname)[]

#### Returns

`undefined` \| `string`[] \| [`EnumName`](../README.md#enumname)[]

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[enumNames](../interfaces/FieldModel.md#enumnames)

#### Inherited from

Field.enumNames

• `set` **enumNames**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `undefined` \| `string`[] \| [`EnumName`](../README.md#enumname)[] |

#### Returns

`void`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[enumNames](../interfaces/FieldModel.md#enumnames)

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

[FieldModel](../interfaces/FieldModel.md).[exclusiveMaximum](../interfaces/FieldModel.md#exclusivemaximum)

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

[FieldModel](../interfaces/FieldModel.md).[exclusiveMaximum](../interfaces/FieldModel.md#exclusivemaximum)

#### Inherited from

Field.exclusiveMaximum

___

### exclusiveMinimum

• `get` **exclusiveMinimum**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[exclusiveMinimum](../interfaces/FieldModel.md#exclusiveminimum)

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

[FieldModel](../interfaces/FieldModel.md).[exclusiveMinimum](../interfaces/FieldModel.md#exclusiveminimum)

#### Inherited from

Field.exclusiveMinimum

___

### fieldType

• `get` **fieldType**(): `string`

Type of field to capture the user data.

#### Returns

`string`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[fieldType](../interfaces/FieldModel.md#fieldtype)

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

[FieldModel](../interfaces/FieldModel.md).[format](../interfaces/FieldModel.md#format)

#### Inherited from

Field.format

___

### id

• `get` **id**(): `string`

Unique id of the form field.

#### Returns

`string`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[id](../interfaces/FieldModel.md#id)

#### Inherited from

Field.id

___

### index

• `get` **index**(): `number`

The index of the Field within its parent.

#### Returns

`number`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[index](../interfaces/FieldModel.md#index)

#### Inherited from

Field.index

___

### isContainer

• `get` **isContainer**(): `boolean`

Whether the form field is container or not

#### Returns

`boolean`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[isContainer](../interfaces/FieldModel.md#iscontainer)

#### Inherited from

Field.isContainer

___

### label

• `get` **label**(): `undefined` \| [`Label`](../README.md#label)

Label to be used for the field.

#### Returns

`undefined` \| [`Label`](../README.md#label)

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[label](../interfaces/FieldModel.md#label)

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

[FieldModel](../interfaces/FieldModel.md).[label](../interfaces/FieldModel.md#label)

#### Inherited from

Field.label

___

### lang

• `get` **lang**(): `undefined` \| `string`

language of the field

#### Returns

`undefined` \| `string`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[lang](../interfaces/FieldModel.md#lang)

#### Inherited from

Field.lang

___

### maxFileSize

• `get` **maxFileSize**(): `number`

Returns the max file size in bytes as per IEC specification

#### Returns

`number`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[maxFileSize](../interfaces/FieldModel.md#maxfilesize)

___

### maxLength

• `get` **maxLength**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[maxLength](../interfaces/FieldModel.md#maxlength)

#### Inherited from

Field.maxLength

___

### maximum

• `get` **maximum**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[maximum](../interfaces/FieldModel.md#maximum)

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

[FieldModel](../interfaces/FieldModel.md).[maximum](../interfaces/FieldModel.md#maximum)

#### Inherited from

Field.maximum

___

### minLength

• `get` **minLength**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[minLength](../interfaces/FieldModel.md#minlength)

#### Inherited from

Field.minLength

___

### minimum

• `get` **minimum**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[minimum](../interfaces/FieldModel.md#minimum)

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

[FieldModel](../interfaces/FieldModel.md).[minimum](../interfaces/FieldModel.md#minimum)

#### Inherited from

Field.minimum

___

### name

• `get` **name**(): `undefined` \| `string`

Name of the form field.

#### Returns

`undefined` \| `string`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[name](../interfaces/FieldModel.md#name)

#### Inherited from

Field.name

___

### parent

• `get` **parent**(): [`ContainerModel`](../interfaces/ContainerModel.md)

Parent of the current field

#### Returns

[`ContainerModel`](../interfaces/ContainerModel.md)

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[parent](../interfaces/FieldModel.md#parent)

#### Inherited from

Field.parent

___

### pattern

• `get` **pattern**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[pattern](../interfaces/FieldModel.md#pattern)

#### Inherited from

Field.pattern

___

### placeholder

• `get` **placeholder**(): `undefined` \| `string`

The placeholder to show on the widget.

#### Returns

`undefined` \| `string`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[placeholder](../interfaces/FieldModel.md#placeholder)

#### Inherited from

Field.placeholder

___

### properties

• `get` **properties**(): `Object`

Custom properties of the form field.

#### Returns

`Object`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[properties](../interfaces/FieldModel.md#properties)

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

[FieldModel](../interfaces/FieldModel.md).[properties](../interfaces/FieldModel.md#properties)

#### Inherited from

Field.properties

___

### qualifiedName

• `get` **qualifiedName**(): `any`

#### Returns

`any`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[qualifiedName](../interfaces/FieldModel.md#qualifiedname)

#### Inherited from

Field.qualifiedName

___

### readOnly

• `get` **readOnly**(): `undefined` \| `boolean`

Whether the field should be readOnly to end user or not.

#### Returns

`undefined` \| `boolean`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[readOnly](../interfaces/FieldModel.md#readonly)

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

[FieldModel](../interfaces/FieldModel.md).[readOnly](../interfaces/FieldModel.md#readonly)

#### Inherited from

Field.readOnly

___

### repeatable

• `get` **repeatable**(): `any`

Field is repeatable or not

#### Returns

`any`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[repeatable](../interfaces/FieldModel.md#repeatable)

#### Inherited from

Field.repeatable

___

### required

• `get` **required**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[required](../interfaces/FieldModel.md#required)

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

[FieldModel](../interfaces/FieldModel.md).[required](../interfaces/FieldModel.md#required)

#### Inherited from

Field.required

___

### ruleEngine

• `get` **ruleEngine**(): `RuleEngine`

#### Returns

`RuleEngine`

#### Implementation of

FieldModel.ruleEngine

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

[FieldModel](../interfaces/FieldModel.md).[step](../interfaces/FieldModel.md#step)

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

[FieldModel](../interfaces/FieldModel.md).[type](../interfaces/FieldModel.md#type)

#### Inherited from

Field.type

___

### uniqueItems

• `get` **uniqueItems**(): `undefined` \| `boolean`

#### Returns

`undefined` \| `boolean`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[uniqueItems](../interfaces/FieldModel.md#uniqueitems)

#### Inherited from

Field.uniqueItems

___

### valid

• `get` **valid**(): `any`

The current validation state of the Field. The property is always computed after merging the Data Model with the Form

#### Returns

`any`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[valid](../interfaces/FieldModel.md#valid)

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

[FieldModel](../interfaces/FieldModel.md).[valid](../interfaces/FieldModel.md#valid)

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

[FieldModel](../interfaces/FieldModel.md).[value](../interfaces/FieldModel.md#value)

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

[FieldModel](../interfaces/FieldModel.md).[value](../interfaces/FieldModel.md#value)

#### Inherited from

Field.value

___

### visible

• `get` **visible**(): `undefined` \| `boolean`

Whether the field should be visible to author or not.

#### Returns

`undefined` \| `boolean`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[visible](../interfaces/FieldModel.md#visible)

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

[FieldModel](../interfaces/FieldModel.md).[visible](../interfaces/FieldModel.md#visible)

#### Inherited from

Field.visible

## Methods

### dispatch

▸ **dispatch**(`action`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | [`Action`](../interfaces/Action.md) |

#### Returns

`void`

#### Implementation of

FieldModel.dispatch

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
| `enumNames?` | `string`[] \| [`EnumName`](../README.md#enumname)[] |
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

[FieldModel](../interfaces/FieldModel.md).[getState](../interfaces/FieldModel.md#getstate)

#### Inherited from

[Field](Field.md).[getState](Field.md#getstate)

___

### importData

▸ **importData**(`dataModel`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataModel` | `default` |

#### Returns

`void`

#### Implementation of

FieldModel.importData

#### Overrides

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

FieldModel.ruleNodeReference

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

[FieldModel](../interfaces/FieldModel.md).[validate](../interfaces/FieldModel.md#validate)

#### Inherited from

[Field](Field.md).[validate](Field.md#validate)

___

### valueOf

▸ **valueOf**(): `any`

#### Returns

`any`

#### Inherited from

[Field](Field.md).[valueOf](Field.md#valueof)
