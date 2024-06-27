# Class: Save

Implementation of `save` event. The save event is triggered on the Form.
To trigger the save event, save function needs to be invoked or one can invoke dispatchEvent API.

## Hierarchy

- `ActionImpl`

  ↳ **`Save`**

## Table of contents

### Constructors

- [constructor](Save.md#constructor)

### Accessors

- [currentTarget](Save.md#currenttarget)
- [isCustomEvent](Save.md#iscustomevent)
- [metadata](Save.md#metadata)
- [payload](Save.md#payload)
- [target](Save.md#target)
- [type](Save.md#type)

### Methods

- [toJson](Save.md#tojson)
- [toString](Save.md#tostring)

## Constructors

### constructor

• **new Save**(`payload?`, `dispatch?`)

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
