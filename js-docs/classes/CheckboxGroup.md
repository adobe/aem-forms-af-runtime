# Class: CheckboxGroup

Implementation of CheckBoxGroup runtime model which extends from [field](Field.md)

## Hierarchy

- [`Field`](Field.md)

  ↳ **`CheckboxGroup`**

## Table of contents

### Accessors

- [:type](CheckboxGroup.md#:type)
- [dataRef](CheckboxGroup.md#dataref)
- [default](CheckboxGroup.md#default)
- [description](CheckboxGroup.md#description)
- [displayFormat](CheckboxGroup.md#displayformat)
- [displayValue](CheckboxGroup.md#displayvalue)
- [displayValueExpression](CheckboxGroup.md#displayvalueexpression)
- [editFormat](CheckboxGroup.md#editformat)
- [editValue](CheckboxGroup.md#editvalue)
- [emptyValue](CheckboxGroup.md#emptyvalue)
- [enabled](CheckboxGroup.md#enabled)
- [enforceEnum](CheckboxGroup.md#enforceenum)
- [enum](CheckboxGroup.md#enum)
- [enumNames](CheckboxGroup.md#enumnames)
- [errorMessage](CheckboxGroup.md#errormessage)
- [exclusiveMaximum](CheckboxGroup.md#exclusivemaximum)
- [exclusiveMinimum](CheckboxGroup.md#exclusiveminimum)
- [fieldType](CheckboxGroup.md#fieldtype)
- [form](CheckboxGroup.md#form)
- [format](CheckboxGroup.md#format)
- [fragment](CheckboxGroup.md#fragment)
- [id](CheckboxGroup.md#id)
- [index](CheckboxGroup.md#index)
- [isContainer](CheckboxGroup.md#iscontainer)
- [label](CheckboxGroup.md#label)
- [lang](CheckboxGroup.md#lang)
- [maxLength](CheckboxGroup.md#maxlength)
- [maximum](CheckboxGroup.md#maximum)
- [minLength](CheckboxGroup.md#minlength)
- [minimum](CheckboxGroup.md#minimum)
- [name](CheckboxGroup.md#name)
- [parent](CheckboxGroup.md#parent)
- [pattern](CheckboxGroup.md#pattern)
- [placeholder](CheckboxGroup.md#placeholder)
- [properties](CheckboxGroup.md#properties)
- [qualifiedName](CheckboxGroup.md#qualifiedname)
- [readOnly](CheckboxGroup.md#readonly)
- [repeatable](CheckboxGroup.md#repeatable)
- [required](CheckboxGroup.md#required)
- [ruleEngine](CheckboxGroup.md#ruleengine)
- [screenReaderText](CheckboxGroup.md#screenreadertext)
- [step](CheckboxGroup.md#step)
- [tooltip](CheckboxGroup.md#tooltip)
- [type](CheckboxGroup.md#type)
- [uniqueItems](CheckboxGroup.md#uniqueitems)
- [valid](CheckboxGroup.md#valid)
- [validity](CheckboxGroup.md#validity)
- [value](CheckboxGroup.md#value)
- [visible](CheckboxGroup.md#visible)

### Properties

- [\_eventSource](CheckboxGroup.md#_eventsource)

### Methods

- [change](CheckboxGroup.md#change)
- [dispatch](CheckboxGroup.md#dispatch)
- [executeAction](CheckboxGroup.md#executeaction)
- [executeExpression](CheckboxGroup.md#executeexpression)
- [focus](CheckboxGroup.md#focus)
- [getDependents](CheckboxGroup.md#getdependents)
- [getErrorMessage](CheckboxGroup.md#geterrormessage)
- [getNonTransparentParent](CheckboxGroup.md#getnontransparentparent)
- [getRules](CheckboxGroup.md#getrules)
- [getState](CheckboxGroup.md#getstate)
- [isTransparent](CheckboxGroup.md#istransparent)
- [markAsInvalid](CheckboxGroup.md#markasinvalid)
- [ruleNodeReference](CheckboxGroup.md#rulenodereference)
- [syncDataAndFormModel](CheckboxGroup.md#syncdataandformmodel)
- [toString](CheckboxGroup.md#tostring)
- [triggerValidationEvent](CheckboxGroup.md#triggervalidationevent)
- [validate](CheckboxGroup.md#validate)
- [valueOf](CheckboxGroup.md#valueof)

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

### displayValueExpression

• `get` **displayValueExpression**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

Field.displayValueExpression

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

• `get` **enum**(): `undefined` \| `any`[]

#### Returns

`undefined` \| `any`[]

#### Inherited from

Field.enum

• `set` **enum**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `undefined` \| `any`[] |

#### Returns

`void`

#### Inherited from

Field.enum

___

### enumNames

• `get` **enumNames**(): `undefined` \| `string`[]

#### Returns

`undefined` \| `string`[]

#### Inherited from

Field.enumNames

• `set` **enumNames**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `undefined` \| `string`[] |

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

### fragment

• `get` **fragment**(): `string`

#### Returns

`string`

#### Inherited from

Field.fragment

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

• `get` **valid**(): `any`

#### Returns

`any`

#### Inherited from

Field.valid

• `set` **valid**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `any` |

#### Returns

`void`

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

## Properties

### \_eventSource

• **\_eventSource**: [`EventSource`](../enums/EventSource.md) = `EventSource.CODE`

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

#### Inherited from

[Field](Field.md).[getState](Field.md#getstate)

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

#### Inherited from

[Field](Field.md).[ruleNodeReference](Field.md#rulenodereference)

___

### syncDataAndFormModel

▸ **syncDataAndFormModel**(`dataNode`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataNode` | `default` |

#### Returns

`void`

#### Inherited from

[Field](Field.md).[syncDataAndFormModel](Field.md#syncdataandformmodel)

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
