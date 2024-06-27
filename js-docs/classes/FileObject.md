# Class: FileObject

Defines a file object which implements the [file object interface](../interfaces/IFileObject.md)

## Implements

- [`IFileObject`](../interfaces/IFileObject.md)

## Table of contents

### Constructors

- [constructor](FileObject.md#constructor)

### Properties

- [data](FileObject.md#data)
- [mediaType](FileObject.md#mediatype)
- [name](FileObject.md#name)
- [size](FileObject.md#size)

### Methods

- [equals](FileObject.md#equals)
- [toJSON](FileObject.md#tojson)

### Accessors

- [type](FileObject.md#type)

## Constructors

### constructor

• **new FileObject**(`init?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `init?` | `Partial`<[`FileObject`](FileObject.md)\> |

## Properties

### data

• **data**: `any`

Data of the file attachment. It can be uri or any file interface specific to channel (in web, it is file object).

#### Implementation of

[IFileObject](../interfaces/IFileObject.md).[data](../interfaces/IFileObject.md#data)

___

### mediaType

• **mediaType**: `string` = `'application/octet-stream'`

Media type of the file data

#### Implementation of

[IFileObject](../interfaces/IFileObject.md).[mediaType](../interfaces/IFileObject.md#mediatype)

___

### name

• **name**: `string` = `'unknown'`

Name of the file

#### Implementation of

[IFileObject](../interfaces/IFileObject.md).[name](../interfaces/IFileObject.md#name)

___

### size

• **size**: `number` = `0`

Size of the file binary as per iec specification.

#### Implementation of

[IFileObject](../interfaces/IFileObject.md).[size](../interfaces/IFileObject.md#size)

## Methods

### equals

▸ **equals**(`obj`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`IFileObject`](../interfaces/IFileObject.md) |

#### Returns

`boolean`

___

### toJSON

▸ **toJSON**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `mediaType` | `string` |
| `name` | `string` |
| `size` | `number` |

## Accessors

### type

• `get` **type**(): `string`

#### Returns

`string`

• `set` **type**(`type`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

`void`
