# bq-dropdown-panel



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description                                             | Type                                                                                                                                                                 | Default    |
| ----------- | ----------- | ------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| `distance`  | `distance`  | Distance between dropdown panel and the trigger element | `number`                                                                                                                                                             | `0`        |
| `placement` | `placement` | Position of the panel                                   | `"bottom" \| "bottom-end" \| "bottom-start" \| "left" \| "left-end" \| "left-start" \| "right" \| "right-end" \| "right-start" \| "top" \| "top-end" \| "top-start"` | `'bottom'` |


## Events

| Event      | Description                                                     | Type                                      |
| ---------- | --------------------------------------------------------------- | ----------------------------------------- |
| `bqBlur`   | Handler to be called when the item loses focus                  | `CustomEvent<HTMLBqDropdownPanelElement>` |
| `bqFocus`  | Handler to be called when the item gets focus                   | `CustomEvent<HTMLBqDropdownPanelElement>` |
| `bqSelect` | Handler to be called when item is clicked or on Enter key press | `CustomEvent<HTMLBqDropdownPanelElement>` |


## Shadow Parts

| Part        | Description |
| ----------- | ----------- |
| `"base"`    |             |
| `"panel"`   |             |
| `"trigger"` |             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
