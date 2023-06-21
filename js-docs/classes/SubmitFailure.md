# Class: SubmitFailure

Implementation of `submitFailure` event. The submitFailure event is triggered on the Form.
This event is triggered post submit in case of a failure

## Hierarchy

- `ActionImpl`

  ↳ **`SubmitFailure`**

## Table of contents

### Constructors

- [constructor](SubmitFailure.md#constructor)

### Accessors

- [isCustomEvent](SubmitFailure.md#iscustomevent)
- [metadata](SubmitFailure.md#metadata)
- [payload](SubmitFailure.md#payload)
- [target](SubmitFailure.md#target)
- [type](SubmitFailure.md#type)

### Methods

- [toJson](SubmitFailure.md#tojson)
- [toString](SubmitFailure.md#tostring)

## Constructors

### constructor

• **new SubmitFailure**(`payload?`, `dispatch?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `payload?` | `any` | `undefined` |
| `dispatch` | `boolean` | `false` |

#### Overrides

ActionImpl.constructor

## Accessors

### isCustomEvent

• `get` **isCustomEvent**(): `boolean`

#### Returns

`boolean`

#### Inherited from

ActionImpl.isCustomEvent

___

### metadata

• `get` **metadata**(): `any`

#### Returns

`any`

#### Inherited from

ActionImpl.metadata

___

### payload

• `get` **payload**(): `any`

#### Returns

`any`

#### Inherited from

ActionImpl.payload

___

### target

• `get` **target**(): [`FormModel`](../interfaces/FormModel.md) \| [`FieldModel`](../interfaces/FieldModel.md) \| [`FieldsetModel`](../interfaces/FieldsetModel.md)

#### Returns

[`FormModel`](../interfaces/FormModel.md) \| [`FieldModel`](../interfaces/FieldModel.md) \| [`FieldsetModel`](../interfaces/FieldsetModel.md)

#### Inherited from

ActionImpl.target

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Inherited from

ActionImpl.type

## Methods

### toJson

▸ **toJson**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `isCustomEvent` | `boolean` |
| `payload` | `any` |
| `type` | `string` |

#### Inherited from

ActionImpl.toJson

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Inherited from

ActionImpl.toString
