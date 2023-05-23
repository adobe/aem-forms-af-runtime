# Class: Change

Implementation of `change` event. The change event is triggered on the field whenever the value of the field is changed

## Hierarchy

- `ActionImpl`

  ↳ **`Change`**

## Table of contents

### Constructors

- [constructor](Change.md#constructor)

### Accessors

- [isCustomEvent](Change.md#iscustomevent)
- [metadata](Change.md#metadata)
- [payload](Change.md#payload)
- [target](Change.md#target)
- [type](Change.md#type)

### Methods

- [toJson](Change.md#tojson)
- [toString](Change.md#tostring)
- [withAdditionalChange](Change.md#withadditionalchange)

## Constructors

### constructor

• **new Change**(`payload`, `dispatch?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `payload` | [`ChangePayload`](../README.md#changepayload) | `undefined` |
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

___

### withAdditionalChange

▸ **withAdditionalChange**(`change`): [`Change`](Change.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `change` | [`Change`](Change.md) |

#### Returns

[`Change`](Change.md)
