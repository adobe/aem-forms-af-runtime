# Class: SubmitError

## Hierarchy

- `ActionImpl`

  ↳ **`SubmitError`**

## Table of contents

### Constructors

- [constructor](SubmitError.md#constructor)

### Accessors

- [currentTarget](SubmitError.md#currenttarget)
- [isCustomEvent](SubmitError.md#iscustomevent)
- [metadata](SubmitError.md#metadata)
- [payload](SubmitError.md#payload)
- [target](SubmitError.md#target)
- [type](SubmitError.md#type)

### Methods

- [toJson](SubmitError.md#tojson)
- [toString](SubmitError.md#tostring)

## Constructors

### constructor

• **new SubmitError**(`payload?`, `dispatch?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `payload?` | `any` | `undefined` |
| `dispatch` | `boolean` | `false` |

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
