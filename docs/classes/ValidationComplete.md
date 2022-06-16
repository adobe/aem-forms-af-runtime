# Class: ValidationComplete

Implementation of `ValidationComplete` event. The ValidationComplete event is triggered once validation is completed
on the form.

An example of using this event,
```
function onValidationComplete(event) {
	 const x = event.payload[0].id;
	 // do something with the invalid field
}
```

## Hierarchy

- `ActionImpl`

  ↳ **`ValidationComplete`**

## Table of contents

### Constructors

- [constructor](ValidationComplete.md#constructor)

### Accessors

- [isCustomEvent](ValidationComplete.md#iscustomevent)
- [metadata](ValidationComplete.md#metadata)
- [payload](ValidationComplete.md#payload)
- [target](ValidationComplete.md#target)
- [type](ValidationComplete.md#type)

### Methods

- [toJson](ValidationComplete.md#tojson)
- [toString](ValidationComplete.md#tostring)

## Constructors

### constructor

• **new ValidationComplete**(`payload?`, `dispatch?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `payload?` | [`ValidationError`](ValidationError.md)[] | `undefined` |
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
