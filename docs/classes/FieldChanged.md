# Class: FieldChanged

Implementation of `fieldChanged` event. The field changed event is triggered on the field which it has changed.

## Hierarchy

- `ActionImpl`

  ↳ **`FieldChanged`**

## Table of contents

### Constructors

- [constructor](FieldChanged.md#constructor)

### Accessors

- [isCustomEvent](FieldChanged.md#iscustomevent)
- [metadata](FieldChanged.md#metadata)
- [payload](FieldChanged.md#payload)
- [target](FieldChanged.md#target)
- [type](FieldChanged.md#type)

### Methods

- [toJson](FieldChanged.md#tojson)
- [toString](FieldChanged.md#tostring)

## Constructors

### constructor

• **new FieldChanged**(`changes`, `field`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `changes` | [`ChangePayload`](../README.md#changepayload) |
| `field` | [`BaseJson`](../README.md#basejson) |

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
