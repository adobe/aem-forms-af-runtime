# Class: FormLoad

Implementation of `load` event. The event is when the form initialization is complete

## Hierarchy

- `ActionImpl`

  ↳ **`FormLoad`**

## Table of contents

### Constructors

- [constructor](FormLoad.md#constructor)

### Accessors

- [isCustomEvent](FormLoad.md#iscustomevent)
- [metadata](FormLoad.md#metadata)
- [payload](FormLoad.md#payload)
- [target](FormLoad.md#target)
- [type](FormLoad.md#type)

### Methods

- [toJson](FormLoad.md#tojson)
- [toString](FormLoad.md#tostring)

## Constructors

### constructor

• **new FormLoad**()

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
