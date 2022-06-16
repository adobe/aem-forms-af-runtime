# Interface: ScriptableField

Generic Scriptable field interface. All non-transparent fields which support rule/events
should implement this interface

## Hierarchy

- **`ScriptableField`**

  ↳ [`FieldModel`](FieldModel.md)

  ↳ [`ContainerModel`](ContainerModel.md)

## Implemented by

- [`Scriptable`](../classes/Scriptable.md)

## Table of contents

### Properties

- [events](ScriptableField.md#events)
- [rules](ScriptableField.md#rules)

## Properties

### events

• `Optional` **events**: `Object`

Events is a dictionary of eventName to the actions to perform.

#### Index signature

▪ [key: `string`]: `string`

___

### rules

• `Optional` **rules**: `Object`

Rules that modify the property of the object dynamically. The rules are evaluated whenever the dependency changes.

#### Index signature

▪ [key: `string`]: `string`
