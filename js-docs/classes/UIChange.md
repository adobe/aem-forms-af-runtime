# Class: UIChange

Implementation of `uiChange` event. The `uiChange` event is triggered on a field whenever a user interaction leads to a change in its value.
This event is specifically designed to differentiate changes initiated by user interactions from those made programmatically.

**`param`** event payload containing details of the changes.

**`param`** whether the event should be propagated to all fields in a depth-first search (DFS) order starting from the top-level form element. Defaults to false, indicating no propagation.

## Hierarchy

- `ActionImpl`

  ↳ **`UIChange`**

## Table of contents

### Constructors

- [constructor](UIChange.md#constructor)

### Accessors

- [currentTarget](UIChange.md#currenttarget)
- [isCustomEvent](UIChange.md#iscustomevent)
- [metadata](UIChange.md#metadata)
- [payload](UIChange.md#payload)
- [target](UIChange.md#target)
- [type](UIChange.md#type)

### Methods

- [toJson](UIChange.md#tojson)
- [toString](UIChange.md#tostring)

## Constructors

### constructor

• **new UIChange**(`payload`, `dispatch?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `payload` | [`UIChangePayload`](../README.md#uichangepayload) | `undefined` |
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
