# Interface: IFormFieldFactory

## Table of contents

### Methods

- [createField](IFormFieldFactory.md#createfield)

## Methods

### createField

▸ **createField**(`child`, `options`): [`FieldModel`](FieldModel.md) \| [`FieldsetModel`](FieldsetModel.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`FieldJson`](../README.md#fieldjson) \| [`FieldsetJson`](../README.md#fieldsetjson) |
| `options` | `Object` |
| `options.form` | [`FormModel`](FormModel.md) |
| `options.parent` | [`ContainerModel`](ContainerModel.md) |

#### Returns

[`FieldModel`](FieldModel.md) \| [`FieldsetModel`](FieldsetModel.md)
