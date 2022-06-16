# Class: ValidationError

Implementation of [Validation Error](../interfaces/IValidationError.md) interface

## Implements

- [`IValidationError`](../interfaces/IValidationError.md)

## Table of contents

### Constructors

- [constructor](ValidationError.md#constructor)

### Properties

- [errorMessages](ValidationError.md#errormessages)
- [fieldName](ValidationError.md#fieldname)

## Constructors

### constructor

• **new ValidationError**(`fieldName?`, `errorMessages?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `fieldName` | `string` | `''` |
| `errorMessages` | `any`[] | `[]` |

## Properties

### errorMessages

• **errorMessages**: `string`[]

List of error messages

#### Implementation of

[IValidationError](../interfaces/IValidationError.md).[errorMessages](../interfaces/IValidationError.md#errormessages)

___

### fieldName

• **fieldName**: `string`

[name](../interfaces/FieldModel.md#id) of the field

#### Implementation of

[IValidationError](../interfaces/IValidationError.md).[fieldName](../interfaces/IValidationError.md#fieldname)
