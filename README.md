# OpenFin Layouts - Tabstrip


## Overview
OpenFin Layouts delivers window management and layout user experience across the desktop for OpenFin-based applications - https://github.com/HadoukenIO/layouts-service

This project examplifies how to build your own tabstrip to be used with the Layouts service

### Dependencies
- Application using OpenFin Layouts - see https://github.com/HadoukenIO/layouts-service
- OpenFin Runtime & RVM dependencies - see https://github.com/HadoukenIO/layouts-service

### Features
- Example tabstrip with UI elements for tabs, with icons and css for maximize/minimize/close/restore
- Tabstrip enables rearranging and renaming tabs
- The code wires the tabstrip to the following events emited by the Layouts service
  - 'join-tab-group' 
  - 'leave-tab-group'
  - 'tab-activated'

### Repository overview

- Images in /build/css/image
- CSS in /build/css
- Typescript code
  - Separate tabs on the tabstrip - /src/TabItem.ts
  - Tabstrip - /src/TabManager.ts
  - Wiring and setup - /main.ts   
- HTHM, with template section - /build/css/tabstrip.html

### Run Locally
- Node 8.11 LTS.

```
npm install 
npm build
```
The files in /build need to be hosted on a server under your control

## Getting Started

### Usage

To use a custom tabstrip in an application, call setTabClient on startup of the application.
The applications main window and all child windows will now use the custom tabstrip when windows are tabbed, either programatically or by user drag/drop actions.
Windows with different tabstrips cannot be tabbed together. 

REFERENCE to JS/TS/docss ->

```typescript
//import the client module
import * as Layouts from "openfin-layouts"

Layouts.setTabClient("http://localhost:8080/tabstrip.html");

```

### Notes

## License
This project uses the [Apache2 license](https://www.apache.org/licenses/LICENSE-2.0)

## Support
This is an open source project and all are encouraged to contribute.
Please enter an issue in the repo for any questions or problems. For further inqueries, please contact us at support@openfin.co
