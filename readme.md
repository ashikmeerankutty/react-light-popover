# React Light Popover

A lightweight weight (1kb), zero dependancy popover component for React

## Examples

See demo [here](https://codesandbox.io/s/react-light-popover-demo-reze2)

## Features

- Render popover inside a portal
- Supports positions left, right, top, bottom
- Supports align center (default), start, end
- Persist on scroll
- Switch direction on boundary violation with window
- Highly customisable no wrapper elements are created on content or target element.

# Documentation

- [Installation](#installation)
  - [Sample Usage](#sample-usage)
  - [Props](#props)

# Installation

```bash
$ npm i --save react-light-popover
# or
$ yarn add react-light-popover
```

## Sample Usage

```javascript
import { Popover } from "react-light-popover";

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Popover
        show={show}
        positions={["left", "bottom"]}
        align={"center"}
        offset={10}
        content={<div className="content__styles">Hello</div>}
        onClose={() => setShow(false)}
      >
        <button type="button" onClick={() => setShow(!show)}>
          Show popover
        </button>
      </Popover>
    </>
  );
}
```

## Props
| Prop  | Type | Description |
| ------------- | ------------- | ------------- |
| show  | boolean  | Show or hide popover.  |
| positions  | string[]  | Determines the positions in which the popover appear. Possible values left, right, top or bottom. By default popover appears on the first position in the array if there is a boundary violation with window it takes the next position if available. |
| align  | string  | Determines the alignment of the content, Possible values are start, end and center. By default it will be center. |
| content  | ReactElement  | Content to be rendered inside the popover. |
| onClose  | Function  | This function is called when popover on body click when popover is open.  |
| children  | ReactElement  | Target element to which the popover is attached |