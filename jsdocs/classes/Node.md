# Class: Node<T\>

Defines generic form object class which any form runtime model (like textbox, checkbox etc)
should extend from.

## Type parameters

| Name | Description |
| :------ | :------ |
| `T` | type of the node (for example, [form meta data](../README.md#metadatajson) |

## Hierarchy

- **`Node`**

  ↳ [`FormMetaData`](FormMetaData.md)

## Table of contents

### Constructors

- [constructor](Node.md#constructor)

### Accessors

- [isContainer](Node.md#iscontainer)

## Constructors

### constructor

• **new Node**<`T`\>(`inputModel`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputModel` | `T` |

## Accessors

### isContainer

• `get` **isContainer**(): `boolean`

#### Returns

`boolean`
