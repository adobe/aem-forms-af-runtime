# Interface: Action

Generic Action/Event interface.
Defines common properties that each action/event should have

## Table of contents

### Properties

- [currentTarget](Action.md#currenttarget)
- [isCustomEvent](Action.md#iscustomevent)
- [metadata](Action.md#metadata)
- [originalAction](Action.md#originalaction)
- [payload](Action.md#payload)
- [target](Action.md#target)
- [type](Action.md#type)

## Properties

### currentTarget

• `Readonly` **currentTarget**: [`FormModel`](FormModel.md) \| [`FieldModel`](FieldModel.md) \| [`FieldsetModel`](FieldsetModel.md)

___

### isCustomEvent

• `Readonly` **isCustomEvent**: `boolean`

Is the event custom

___

### metadata

• **metadata**: `any`

Event metadata.

___

### originalAction

• `Optional` `Readonly` **originalAction**: [`Action`](Action.md)

Original event. If the event is dispatched, this refers the original event

___

### payload

• **payload**: `any`

Event payload as defined by the event.

___

### target

• `Readonly` **target**: [`FormModel`](FormModel.md) \| [`FieldModel`](FieldModel.md) \| [`FieldsetModel`](FieldsetModel.md)

The field element on which the event is triggered.

___

### type

• **type**: `string`

Name of the event.
