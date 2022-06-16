# Interface: IFileObject

Defines file object interface.

## Implemented by

- [`FileObject`](../classes/FileObject.md)

## Table of contents

### Properties

- [data](IFileObject.md#data)
- [mediaType](IFileObject.md#mediatype)
- [name](IFileObject.md#name)
- [size](IFileObject.md#size)

## Properties

### data

• `Optional` **data**: `any`

Data of the file attachment. It can be uri or any file interface specific to channel (in web, it is file object).

___

### mediaType

• **mediaType**: `string`

Media type of the file data

___

### name

• **name**: `string`

Name of the file

___

### size

• `Optional` **size**: `number`

Size of the file binary as per iec specification.
