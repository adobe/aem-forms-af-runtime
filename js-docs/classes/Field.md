# Class: Field

## Hierarchy

- [`Scriptable`](Scriptable.md)<[`FieldJson`](../README.md#fieldjson)\>

  ↳ **`Field`**

  ↳↳ [`Checkbox`](Checkbox.md)

  ↳↳ [`CheckboxGroup`](CheckboxGroup.md)

  ↳↳ [`FileUpload`](FileUpload.md)

  ↳↳ [`EmailInput`](EmailInput.md)

  ↳↳ [`Captcha`](Captcha.md)

## Implements

- [`FieldModel`](../interfaces/FieldModel.md)

## Table of contents

### Accessors

- [:type](Field.md#:type)
- [dataRef](Field.md#dataref)
- [default](Field.md#default)
- [description](Field.md#description)
- [displayFormat](Field.md#displayformat)
- [displayValue](Field.md#displayvalue)
- [editFormat](Field.md#editformat)
- [editValue](Field.md#editvalue)
- [emptyValue](Field.md#emptyvalue)
- [enabled](Field.md#enabled)
- [enforceEnum](Field.md#enforceenum)
- [enum](Field.md#enum)
- [enumNames](Field.md#enumnames)
- [errorMessage](Field.md#errormessage)
- [exclusiveMaximum](Field.md#exclusivemaximum)
- [exclusiveMinimum](Field.md#exclusiveminimum)
- [fieldType](Field.md#fieldtype)
- [form](Field.md#form)
- [format](Field.md#format)
- [id](Field.md#id)
- [index](Field.md#index)
- [isContainer](Field.md#iscontainer)
- [label](Field.md#label)
- [lang](Field.md#lang)
- [maxLength](Field.md#maxlength)
- [maximum](Field.md#maximum)
- [minLength](Field.md#minlength)
- [minimum](Field.md#minimum)
- [name](Field.md#name)
- [parent](Field.md#parent)
- [pattern](Field.md#pattern)
- [placeholder](Field.md#placeholder)
- [properties](Field.md#properties)
- [qualifiedName](Field.md#qualifiedname)
- [readOnly](Field.md#readonly)
- [repeatable](Field.md#repeatable)
- [required](Field.md#required)
- [ruleEngine](Field.md#ruleengine)
- [screenReaderText](Field.md#screenreadertext)
- [step](Field.md#step)
- [tooltip](Field.md#tooltip)
- [type](Field.md#type)
- [uniqueItems](Field.md#uniqueitems)
- [valid](Field.md#valid)
- [validity](Field.md#validity)
- [value](Field.md#value)
- [visible](Field.md#visible)

### Methods

- [dispatch](Field.md#dispatch)
- [executeAction](Field.md#executeaction)
- [executeExpression](Field.md#executeexpression)
- [focus](Field.md#focus)
- [getErrorMessage](Field.md#geterrormessage)
- [getNonTransparentParent](Field.md#getnontransparentparent)
- [getRules](Field.md#getrules)
- [getState](Field.md#getstate)
- [importData](Field.md#importdata)
- [isTransparent](Field.md#istransparent)
- [markAsInvalid](Field.md#markasinvalid)
- [ruleNodeReference](Field.md#rulenodereference)
- [toString](Field.md#tostring)
- [triggerValidationEvent](Field.md#triggervalidationevent)
- [validate](Field.md#validate)
- [valueOf](Field.md#valueof)

## Accessors

### :type

• `get` **:type**(): `string`

Custom widget type show to the user for capturing the data.

#### Returns

`string`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[:type](../interfaces/FieldModel.md#:type)

#### Inherited from

Scriptable.:type

___

### dataRef

• `get` **dataRef**(): `undefined` \| ``null`` \| `string`

To map the field’s value to a property in the data model.

#### Returns

`undefined` \| ``null`` \| `string`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[dataRef](../interfaces/FieldModel.md#dataref)

#### Inherited from

Scriptable.dataRef

___

### default

• `get` **default**(): `any`

Default value of the Field.

#### Returns

`any`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[default](../interfaces/FieldModel.md#default)

___

### description

• `get` **description**(): `undefined` \| `string`

Extra description to be shown to the user to aid in form filling experience. It can be rich text.

#### Returns

`undefined` \| `string`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[description](../interfaces/FieldModel.md#description)

#### Inherited from

Scriptable.description

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

Scriptable.description

___

### displayFormat

• `get` **displayFormat**(): `undefined` \| `string`

format in which user will see the value after update

#### Returns

`undefined` \| `string`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[displayFormat](../interfaces/FieldModel.md#displayformat)

___

### displayValue

• `get` **displayValue**(): `any`

value to be displayed to the user after update

#### Returns

`any`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[displayValue](../interfaces/FieldModel.md#displayvalue)

___

### editFormat

• `get` **editFormat**(): `undefined` \| `string`

format in which user will edit the value

#### Returns

`undefined` \| `string`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[editFormat](../interfaces/FieldModel.md#editformat)

___

### editValue

• `get` **editValue**(): `any`

value to be displayed to the user for edit

#### Returns

`any`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[editValue](../interfaces/FieldModel.md#editvalue)

___

### emptyValue

• `get` **emptyValue**(): `undefined` \| ``null`` \| ``""``

#### Returns

`undefined` \| ``null`` \| ``""``

___

### enabled

• `get` **enabled**(): `undefined` \| `boolean`

Whether the field is enabled and takes part in rules, events etc.

#### Returns

`undefined` \| `boolean`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[enabled](../interfaces/FieldModel.md#enabled)

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

___

### enforceEnum

• `get` **enforceEnum**(): `undefined` \| `boolean`

#### Returns

`undefined` \| `boolean`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[enforceEnum](../interfaces/FieldModel.md#enforceenum)

___

### enum

• `get` **enum**(): `undefined` \| `any`[]

#### Returns

`undefined` \| `any`[]

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[enum](../interfaces/FieldModel.md#enum)

• `set` **enum**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `undefined` \| `any`[] |

#### Returns

`void`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[enum](../interfaces/FieldModel.md#enum)

___

### enumNames

• `get` **enumNames**(): `undefined` \| `string`[] \| [`EnumName`](../README.md#enumname)[]

#### Returns

`undefined` \| `string`[] \| [`EnumName`](../README.md#enumname)[]

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[enumNames](../interfaces/FieldModel.md#enumnames)

• `set` **enumNames**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `undefined` \| `string`[] \| [`EnumName`](../README.md#enumname)[] |

#### Returns

`void`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[enumNames](../interfaces/FieldModel.md#enumnames)

___

### errorMessage

• `get` **errorMessage**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

• `set` **errorMessage**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `undefined` \| `string` |

#### Returns

`void`

___

### exclusiveMaximum

• `get` **exclusiveMaximum**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[exclusiveMaximum](../interfaces/FieldModel.md#exclusivemaximum)

• `set` **exclusiveMaximum**(`eM`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eM` | `undefined` \| `number` |

#### Returns

`void`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[exclusiveMaximum](../interfaces/FieldModel.md#exclusivemaximum)

___

### exclusiveMinimum

• `get` **exclusiveMinimum**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[exclusiveMinimum](../interfaces/FieldModel.md#exclusiveminimum)

• `set` **exclusiveMinimum**(`eM`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eM` | `undefined` \| `number` |

#### Returns

`void`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[exclusiveMinimum](../interfaces/FieldModel.md#exclusiveminimum)

___

### fieldType

• `get` **fieldType**(): `string`

Type of field to capture the user data.

#### Returns

`string`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[fieldType](../interfaces/FieldModel.md#fieldtype)

#### Inherited from

Scriptable.fieldType

___

### form

• `get` **form**(): [`FormModel`](../interfaces/FormModel.md)

#### Returns

[`FormModel`](../interfaces/FormModel.md)

#### Inherited from

Scriptable.form

___

### format

• `get` **format**(): `undefined` \| `string`

returns the format constraint

#### Returns

`undefined` \| `string`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[format](../interfaces/FieldModel.md#format)

___

### id

• `get` **id**(): `string`

Unique id of the form field.

#### Returns

`string`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[id](../interfaces/FieldModel.md#id)

#### Inherited from

Scriptable.id

___

### index

• `get` **index**(): `number`

The index of the Field within its parent.

#### Returns

`number`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[index](../interfaces/FieldModel.md#index)

#### Inherited from

Scriptable.index

___

### isContainer

• `get` **isContainer**(): `boolean`

Whether the form field is container or not

#### Returns

`boolean`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[isContainer](../interfaces/FieldModel.md#iscontainer)

#### Inherited from

Scriptable.isContainer

___

### label

• `get` **label**(): `undefined` \| [`Label`](../README.md#label)

Label to be used for the field.

#### Returns

`undefined` \| [`Label`](../README.md#label)

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[label](../interfaces/FieldModel.md#label)

#### Inherited from

Scriptable.label

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

Scriptable.label

___

### lang

• `get` **lang**(): `undefined` \| `string`

language of the field

#### Returns

`undefined` \| `string`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[lang](../interfaces/FieldModel.md#lang)

#### Inherited from

Scriptable.lang

___

### maxLength

• `get` **maxLength**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[maxLength](../interfaces/FieldModel.md#maxlength)

___

### maximum

• `get` **maximum**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[maximum](../interfaces/FieldModel.md#maximum)

• `set` **maximum**(`m`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | `undefined` \| `number` |

#### Returns

`void`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[maximum](../interfaces/FieldModel.md#maximum)

___

### minLength

• `get` **minLength**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[minLength](../interfaces/FieldModel.md#minlength)

___

### minimum

• `get` **minimum**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[minimum](../interfaces/FieldModel.md#minimum)

• `set` **minimum**(`m`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | `undefined` \| `number` |

#### Returns

`void`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[minimum](../interfaces/FieldModel.md#minimum)

___

### name

• `get` **name**(): `undefined` \| `string`

Name of the form field.

#### Returns

`undefined` \| `string`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[name](../interfaces/FieldModel.md#name)

#### Inherited from

Scriptable.name

___

### parent

• `get` **parent**(): [`ContainerModel`](../interfaces/ContainerModel.md)

Parent of the current field

#### Returns

[`ContainerModel`](../interfaces/ContainerModel.md)

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[parent](../interfaces/FieldModel.md#parent)

#### Inherited from

Scriptable.parent

___

### pattern

• `get` **pattern**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[pattern](../interfaces/FieldModel.md#pattern)

___

### placeholder

• `get` **placeholder**(): `undefined` \| `string`

The placeholder to show on the widget.

#### Returns

`undefined` \| `string`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[placeholder](../interfaces/FieldModel.md#placeholder)

___

### properties

• `get` **properties**(): `Object`

Custom properties of the form field.

#### Returns

`Object`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[properties](../interfaces/FieldModel.md#properties)

#### Inherited from

Scriptable.properties

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

Scriptable.properties

___

### qualifiedName

• `get` **qualifiedName**(): `any`

#### Returns

`any`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[qualifiedName](../interfaces/FieldModel.md#qualifiedname)

#### Inherited from

Scriptable.qualifiedName

___

### readOnly

• `get` **readOnly**(): `undefined` \| `boolean`

Whether the field should be readOnly to end user or not.

#### Returns

`undefined` \| `boolean`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[readOnly](../interfaces/FieldModel.md#readonly)

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

___

### repeatable

• `get` **repeatable**(): `any`

Field is repeatable or not

#### Returns

`any`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[repeatable](../interfaces/FieldModel.md#repeatable)

#### Inherited from

Scriptable.repeatable

___

### required

• `get` **required**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[required](../interfaces/FieldModel.md#required)

• `set` **required**(`r`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | `boolean` |

#### Returns

`void`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[required](../interfaces/FieldModel.md#required)

___

### ruleEngine

• `get` **ruleEngine**(): `RuleEngine`

#### Returns

`RuleEngine`

#### Implementation of

FieldModel.ruleEngine

#### Inherited from

Scriptable.ruleEngine

___

### screenReaderText

• `get` **screenReaderText**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

___

### step

• `get` **step**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[step](../interfaces/FieldModel.md#step)

___

### tooltip

• `get` **tooltip**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

___

### type

• `get` **type**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[type](../interfaces/FieldModel.md#type)

#### Inherited from

Scriptable.type

___

### uniqueItems

• `get` **uniqueItems**(): `undefined` \| `boolean`

#### Returns

`undefined` \| `boolean`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[uniqueItems](../interfaces/FieldModel.md#uniqueitems)

#### Inherited from

Scriptable.uniqueItems

___

### valid

• `get` **valid**(): `any`

The current validation state of the Field. The property is always computed after merging the Data Model with the Form

#### Returns

`any`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[valid](../interfaces/FieldModel.md#valid)

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

___

### validity

• `get` **validity**(): `any`

#### Returns

`any`

___

### value

• `get` **value**(): `any`

The current value of the Field. The property is serialized in the Data Model.

#### Returns

`any`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[value](../interfaces/FieldModel.md#value)

#### Overrides

Scriptable.value

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

#### Overrides

Scriptable.value

___

### visible

• `get` **visible**(): `undefined` \| `boolean`

Whether the field should be visible to author or not.

#### Returns

`undefined` \| `boolean`

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[visible](../interfaces/FieldModel.md#visible)

#### Inherited from

Scriptable.visible

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

Scriptable.visible

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

[Scriptable](Scriptable.md).[dispatch](Scriptable.md#dispatch)

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

[Scriptable](Scriptable.md).[executeAction](Scriptable.md#executeaction)

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

[Scriptable](Scriptable.md).[executeExpression](Scriptable.md#executeexpression)

___

### focus

▸ **focus**(): `void`

#### Returns

`void`

#### Inherited from

[Scriptable](Scriptable.md).[focus](Scriptable.md#focus)

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

___

### getNonTransparentParent

▸ **getNonTransparentParent**(): [`ContainerModel`](../interfaces/ContainerModel.md)

#### Returns

[`ContainerModel`](../interfaces/ContainerModel.md)

#### Inherited from

[Scriptable](Scriptable.md).[getNonTransparentParent](Scriptable.md#getnontransparentparent)

___

### getRules

▸ **getRules**(): [`Items`](../README.md#items)<`string`\>

#### Returns

[`Items`](../README.md#items)<`string`\>

#### Inherited from

[Scriptable](Scriptable.md).[getRules](Scriptable.md#getrules)

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
| `columnClassNames` | `undefined` |
| `columnCount` | `undefined` |
| `constraintMessages?` | [`ConstraintsMessages`](../README.md#constraintsmessages) |
| `dataRef?` | ``null`` \| `string` |
| `default?` | `any` |
| `description?` | `string` |
| `displayFormat` | `undefined` \| `string` |
| `displayValue` | `any` |
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
| `repeatable` | `undefined` \| `boolean` |
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

#### Overrides

[Scriptable](Scriptable.md).[getState](Scriptable.md#getstate)

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

FieldModel.importData

#### Overrides

[Scriptable](Scriptable.md).[importData](Scriptable.md#importdata)

___

### isTransparent

▸ **isTransparent**(): `boolean`

Transparent form fields are meant only for creation of view. They are also not part of data

#### Returns

`boolean`

#### Inherited from

[Scriptable](Scriptable.md).[isTransparent](Scriptable.md#istransparent)

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

___

### ruleNodeReference

▸ **ruleNodeReference**(): `any`

#### Returns

`any`

#### Implementation of

FieldModel.ruleNodeReference

#### Overrides

Scriptable.ruleNodeReference

___

### toString

▸ **toString**(): `any`

#### Returns

`any`

___

### triggerValidationEvent

▸ **triggerValidationEvent**(`changes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `changes` | `any` |

#### Returns

`void`

___

### validate

▸ **validate**(): [`ValidationError`](ValidationError.md)[]

Validates the current form object

#### Returns

[`ValidationError`](ValidationError.md)[]

#### Implementation of

[FieldModel](../interfaces/FieldModel.md).[validate](../interfaces/FieldModel.md#validate)

#### Overrides

[Scriptable](Scriptable.md).[validate](Scriptable.md#validate)

___

### valueOf

▸ **valueOf**(): `any`

#### Returns

`any`
