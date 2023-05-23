# Class: Checkbox

Implementation of check box runtime model which extends from [field](Field.md) model

## Hierarchy

- [`Field`](Field.md)

  ↳ **`Checkbox`**

## Table of contents

### Accessors

- [:type](Checkbox.md#:type)
- [dataRef](Checkbox.md#dataref)
- [default](Checkbox.md#default)
- [description](Checkbox.md#description)
- [displayFormat](Checkbox.md#displayformat)
- [displayValue](Checkbox.md#displayvalue)
- [editFormat](Checkbox.md#editformat)
- [editValue](Checkbox.md#editvalue)
- [emptyValue](Checkbox.md#emptyvalue)
- [enabled](Checkbox.md#enabled)
- [enforceEnum](Checkbox.md#enforceenum)
- [enum](Checkbox.md#enum)
- [enumNames](Checkbox.md#enumnames)
- [errorMessage](Checkbox.md#errormessage)
- [exclusiveMaximum](Checkbox.md#exclusivemaximum)
- [exclusiveMinimum](Checkbox.md#exclusiveminimum)
- [fieldType](Checkbox.md#fieldtype)
- [form](Checkbox.md#form)
- [format](Checkbox.md#format)
- [id](Checkbox.md#id)
- [index](Checkbox.md#index)
- [isContainer](Checkbox.md#iscontainer)
- [label](Checkbox.md#label)
- [lang](Checkbox.md#lang)
- [maxLength](Checkbox.md#maxlength)
- [maximum](Checkbox.md#maximum)
- [minLength](Checkbox.md#minlength)
- [minimum](Checkbox.md#minimum)
- [name](Checkbox.md#name)
- [parent](Checkbox.md#parent)
- [pattern](Checkbox.md#pattern)
- [placeholder](Checkbox.md#placeholder)
- [properties](Checkbox.md#properties)
- [qualifiedName](Checkbox.md#qualifiedname)
- [readOnly](Checkbox.md#readonly)
- [repeatable](Checkbox.md#repeatable)
- [required](Checkbox.md#required)
- [ruleEngine](Checkbox.md#ruleengine)
- [screenReaderText](Checkbox.md#screenreadertext)
- [step](Checkbox.md#step)
- [tooltip](Checkbox.md#tooltip)
- [type](Checkbox.md#type)
- [uniqueItems](Checkbox.md#uniqueitems)
- [valid](Checkbox.md#valid)
- [value](Checkbox.md#value)
- [visible](Checkbox.md#visible)

### Methods

- [dispatch](Checkbox.md#dispatch)
- [executeAction](Checkbox.md#executeaction)
- [executeExpression](Checkbox.md#executeexpression)
- [focus](Checkbox.md#focus)
- [getErrorMessage](Checkbox.md#geterrormessage)
- [getNonTransparentParent](Checkbox.md#getnontransparentparent)
- [getRules](Checkbox.md#getrules)
- [getState](Checkbox.md#getstate)
- [importData](Checkbox.md#importdata)
- [isTransparent](Checkbox.md#istransparent)
- [markAsInvalid](Checkbox.md#markasinvalid)
- [ruleNodeReference](Checkbox.md#rulenodereference)
- [toString](Checkbox.md#tostring)
- [triggerValidationEvent](Checkbox.md#triggervalidationevent)
- [validate](Checkbox.md#validate)
- [valueOf](Checkbox.md#valueof)

## Accessors

### :type

• `get` **:type**(): `string`

#### Returns

`string`

#### Inherited from

Field.:type

___

### dataRef

• `get` **dataRef**(): `undefined` \| ``null`` \| `string`

#### Returns

`undefined` \| ``null`` \| `string`

#### Inherited from

Field.dataRef

___

### default

• `get` **default**(): `any`

#### Returns

`any`

#### Inherited from

Field.default

___

### description

• `get` **description**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

Field.description

• `set` **description**(`d`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `d` | `undefined` \| `string` |

#### Returns

`void`

#### Inherited from

Field.description

___

### displayFormat

• `get` **displayFormat**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

Field.displayFormat

___

### displayValue

• `get` **displayValue**(): `any`

#### Returns

`any`

#### Inherited from

Field.displayValue

___

### editFormat

• `get` **editFormat**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

Field.editFormat

___

### editValue

• `get` **editValue**(): `any`

#### Returns

`any`

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

#### Returns

`undefined` \| `boolean`

#### Inherited from

Field.enabled

• `set` **enabled**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `undefined` \| `boolean` |

#### Returns

`void`

#### Inherited from

Field.enabled

___

### enforceEnum

• `get` **enforceEnum**(): `undefined` \| `boolean`

#### Returns

`undefined` \| `boolean`

#### Inherited from

Field.enforceEnum

___

### enum

• `get` **enum**(): `any`[]

Returns the `enum` constraints from the json

#### Returns

`any`[]

#### Overrides

Field.enum

___

### enumNames

• `get` **enumNames**(): `undefined` \| `string`[] \| [`EnumName`](../README.md#enumname)[]

#### Returns

`undefined` \| `string`[] \| [`EnumName`](../README.md#enumname)[]

#### Inherited from

Field.enumNames

• `set` **enumNames**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `undefined` \| `string`[] \| [`EnumName`](../README.md#enumname)[] |

#### Returns

`void`

#### Inherited from

Field.enumNames

___

### errorMessage

• `get` **errorMessage**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

Field.errorMessage

___

### exclusiveMaximum

• `get` **exclusiveMaximum**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Inherited from

Field.exclusiveMaximum

• `set` **exclusiveMaximum**(`eM`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eM` | `undefined` \| `number` |

#### Returns

`void`

#### Inherited from

Field.exclusiveMaximum

___

### exclusiveMinimum

• `get` **exclusiveMinimum**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Inherited from

Field.exclusiveMinimum

• `set` **exclusiveMinimum**(`eM`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eM` | `undefined` \| `number` |

#### Returns

`void`

#### Inherited from

Field.exclusiveMinimum

___

### fieldType

• `get` **fieldType**(): `string`

#### Returns

`string`

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

#### Inherited from

Field.format

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Inherited from

Field.id

___

### index

• `get` **index**(): `number`

#### Returns

`number`

#### Inherited from

Field.index

___

### isContainer

• `get` **isContainer**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Field.isContainer

___

### label

• `get` **label**(): `undefined` \| [`Label`](../README.md#label)

#### Returns

`undefined` \| [`Label`](../README.md#label)

#### Inherited from

Field.label

• `set` **label**(`l`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `l` | `undefined` \| [`Label`](../README.md#label) |

#### Returns

`void`

#### Inherited from

Field.label

___

### lang

• `get` **lang**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

Field.lang

___

### maxLength

• `get` **maxLength**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Inherited from

Field.maxLength

___

### maximum

• `get` **maximum**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Inherited from

Field.maximum

• `set` **maximum**(`m`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | `undefined` \| `number` |

#### Returns

`void`

#### Inherited from

Field.maximum

___

### minLength

• `get` **minLength**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Inherited from

Field.minLength

___

### minimum

• `get` **minimum**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Inherited from

Field.minimum

• `set` **minimum**(`m`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | `undefined` \| `number` |

#### Returns

`void`

#### Inherited from

Field.minimum

___

### name

• `get` **name**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

Field.name

___

### parent

• `get` **parent**(): [`ContainerModel`](../interfaces/ContainerModel.md)

#### Returns

[`ContainerModel`](../interfaces/ContainerModel.md)

#### Inherited from

Field.parent

___

### pattern

• `get` **pattern**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

Field.pattern

___

### placeholder

• `get` **placeholder**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

Field.placeholder

___

### properties

• `get` **properties**(): `Object`

#### Returns

`Object`

#### Inherited from

Field.properties

• `set` **properties**(`p`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | `Object` |

#### Returns

`void`

#### Inherited from

Field.properties

___

### qualifiedName

• `get` **qualifiedName**(): `any`

#### Returns

`any`

#### Inherited from

Field.qualifiedName

___

### readOnly

• `get` **readOnly**(): `undefined` \| `boolean`

#### Returns

`undefined` \| `boolean`

#### Inherited from

Field.readOnly

• `set` **readOnly**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `undefined` \| `boolean` |

#### Returns

`void`

#### Inherited from

Field.readOnly

___

### repeatable

• `get` **repeatable**(): `any`

#### Returns

`any`

#### Inherited from

Field.repeatable

___

### required

• `get` **required**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Field.required

• `set` **required**(`r`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | `boolean` |

#### Returns

`void`

#### Inherited from

Field.required

___

### ruleEngine

• `get` **ruleEngine**(): `RuleEngine`

#### Returns

`RuleEngine`

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

#### Inherited from

Field.type

___

### uniqueItems

• `get` **uniqueItems**(): `undefined` \| `boolean`

#### Returns

`undefined` \| `boolean`

#### Inherited from

Field.uniqueItems

___

### valid

• `get` **valid**(): `undefined` \| `boolean`

#### Returns

`undefined` \| `boolean`

#### Inherited from

Field.valid

___

### value

• `get` **value**(): `any`

#### Returns

`any`

#### Inherited from

Field.value

• `set` **value**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |

#### Returns

`void`

#### Inherited from

Field.value

___

### visible

• `get` **visible**(): `undefined` \| `boolean`

#### Returns

`undefined` \| `boolean`

#### Inherited from

Field.visible

• `set` **visible**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `undefined` \| `boolean` |

#### Returns

`void`

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

▸ **getState**(): `Object`

[state](../README.md#state) of the form object

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `:type` | `string` |
| `accept?` | `string`[] |
| `altText?` | `string` |
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
| `events` | [`Items`](../README.md#items)<`undefined` \| `string` \| `string`[]\> & {} |
| `exclusiveMaximum?` | `number` |
| `exclusiveMinimum?` | `number` |
| `fieldType?` | `string` |
| `format?` | `string` |
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
| `rules` | [`Items`](../README.md#items)<`string`\> & {} |
| `screenReaderText?` | `string` |
| `step?` | `number` |
| `tooltip?` | `string` |
| `type?` | `string` |
| `uniqueItems?` | `boolean` |
| `valid?` | `boolean` |
| `validationExpression?` | `string` |
| `value?` | `any` |
| `viewType?` | `string` |
| `visible?` | `boolean` |

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

▸ **markAsInvalid**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`void`

#### Inherited from

[Field](Field.md).[markAsInvalid](Field.md#markasinvalid)

___

### ruleNodeReference

▸ **ruleNodeReference**(): `any`

#### Returns

`any`

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

#### Inherited from

[Field](Field.md).[validate](Field.md#validate)

___

### valueOf

▸ **valueOf**(): `any`

#### Returns

`any`

#### Inherited from

[Field](Field.md).[valueOf](Field.md#valueof)
