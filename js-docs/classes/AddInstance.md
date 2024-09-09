# Class: AddInstance

Implementation of `addInstance` event. The event is triggered on a field to add an instance of it.

## Hierarchy

- `ActionImpl`

  ↳ **`AddInstance`**

## Table of contents

### Constructors

- [constructor](AddInstance.md#constructor)

### Accessors

- [currentTarget](AddInstance.md#currenttarget)
- [isCustomEvent](AddInstance.md#iscustomevent)
- [metadata](AddInstance.md#metadata)
- [payload](AddInstance.md#payload)
- [target](AddInstance.md#target)
- [type](AddInstance.md#type)

### Methods

- [toJson](AddInstance.md#tojson)
- [toString](AddInstance.md#tostring)

## Constructors

### constructor

• **new AddInstance**(`payload?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload?` | `number` \| [`AddItemPayload`](../README.md#additempayload) |

#### Overrides

ActionImpl.constructor

## Accessors

### currentTarget

• `get` **currentTarget**(): [`FormModel`](../interfaces/FormModel.md) \| [`FieldModel`](../interfaces/FieldModel.md) \| [`FieldsetModel`](../interfaces/FieldsetModel.md)

#### Returns

[`FormModel`](../interfaces/FormModel.md) \| [`FieldModel`](../interfaces/FieldModel.md) \| [`FieldsetModel`](../interfaces/FieldsetModel.md)

#### Inherited from

ActionImpl.currentTarget

___

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
