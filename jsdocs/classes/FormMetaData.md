# Class: FormMetaData

Defines form metadata which implements [Form MetaData Model](../interfaces/FormMetaDataModel.md)

## Hierarchy

- [`Node`](Node.md)<[`MetaDataJson`](../README.md#metadatajson)\>

  ↳ **`FormMetaData`**

## Implements

- [`FormMetaDataModel`](../interfaces/FormMetaDataModel.md)

## Table of contents

### Constructors

- [constructor](FormMetaData.md#constructor)

### Accessors

- [grammar](FormMetaData.md#grammar)
- [isContainer](FormMetaData.md#iscontainer)
- [locale](FormMetaData.md#locale)
- [version](FormMetaData.md#version)

## Constructors

### constructor

• **new FormMetaData**(`inputModel`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputModel` | [`MetaDataJson`](../README.md#metadatajson) |

#### Inherited from

[Node](Node.md).[constructor](Node.md#constructor)

## Accessors

### grammar

• `get` **grammar**(): `string`

Version of the rule grammar

#### Returns

`string`

#### Implementation of

[FormMetaDataModel](../interfaces/FormMetaDataModel.md).[grammar](../interfaces/FormMetaDataModel.md#grammar)

___

### isContainer

• `get` **isContainer**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Node.isContainer

___

### locale

• `get` **locale**(): `string`

Form locale

#### Returns

`string`

#### Implementation of

[FormMetaDataModel](../interfaces/FormMetaDataModel.md).[locale](../interfaces/FormMetaDataModel.md#locale)

___

### version

• `get` **version**(): `string`

Version of the adaptive form specification

#### Returns

`string`

#### Implementation of

[FormMetaDataModel](../interfaces/FormMetaDataModel.md).[version](../interfaces/FormMetaDataModel.md#version)
