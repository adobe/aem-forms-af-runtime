# Class: ScriptError

Implementation of `scriptError` event. The event is triggered when a script execution or compilation fails.
This event is always triggered regardless of error logging settings, allowing third-party tools to capture form errors.

## Hierarchy

- `ActionImpl`

  ↳ **`ScriptError`**

## Table of contents

### Constructors

- [constructor](ScriptError.md#constructor)

### Accessors

- [currentTarget](ScriptError.md#currenttarget)
- [isCustomEvent](ScriptError.md#iscustomevent)
- [metadata](ScriptError.md#metadata)
- [payload](ScriptError.md#payload)
- [target](ScriptError.md#target)
- [type](ScriptError.md#type)

### Methods

- [toJson](ScriptError.md#tojson)
- [toString](ScriptError.md#tostring)

## Constructors

### constructor

• **new ScriptError**(`payload`, `dispatch?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `payload` | [`ScriptErrorPayload`](../README.md#scripterrorpayload) | `undefined` |
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
