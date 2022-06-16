# Class: RemoveItem

Implementation of `removeItem` event. The event is triggered on a panel to remove an instance of items inside it.

## Hierarchy

- `ActionImpl`

  ↳ **`RemoveItem`**

## Table of contents

### Constructors

- [constructor](RemoveItem.md#constructor)

### Accessors

- [isCustomEvent](RemoveItem.md#iscustomevent)
- [metadata](RemoveItem.md#metadata)
- [payload](RemoveItem.md#payload)
- [target](RemoveItem.md#target)
- [type](RemoveItem.md#type)

### Methods

- [toJson](RemoveItem.md#tojson)
- [toString](RemoveItem.md#tostring)

## Constructors

### constructor

• **new RemoveItem**(`payload?`)

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
