# Class: RemoveInstance

Implementation of `removeInstance` event. The event is triggered on a field to remove an instance of it.

## Hierarchy

- `ActionImpl`

  ↳ **`RemoveInstance`**

## Table of contents

### Constructors

- [constructor](RemoveInstance.md#constructor)

### Accessors

- [isCustomEvent](RemoveInstance.md#iscustomevent)
- [metadata](RemoveInstance.md#metadata)
- [payload](RemoveInstance.md#payload)
- [target](RemoveInstance.md#target)
- [type](RemoveInstance.md#type)

### Methods

- [toJson](RemoveInstance.md#tojson)
- [toString](RemoveInstance.md#tostring)

## Constructors

### constructor

• **new RemoveInstance**(`payload?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload?` | `number` |

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
