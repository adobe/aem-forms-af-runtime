# Class: Reset

Implementation of `reset` event. The reset event is triggered on the Form.
To trigger the reset event, reset function needs to be invoked or one can invoke dispatchEvent API.

## Hierarchy

- `ActionImpl`

  ↳ **`Reset`**

## Table of contents

### Constructors

- [constructor](Reset.md#constructor)

### Accessors

- [isCustomEvent](Reset.md#iscustomevent)
- [metadata](Reset.md#metadata)
- [payload](Reset.md#payload)
- [target](Reset.md#target)
- [type](Reset.md#type)

### Methods

- [toJson](Reset.md#tojson)
- [toString](Reset.md#tostring)

## Constructors

### constructor

• **new Reset**(`payload?`, `dispatch?`)

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
