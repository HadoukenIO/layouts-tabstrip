# OpenFin Layouts - Tabstrip


## Overview
OpenFin Layouts delivers window management and layout user experience across the desktop for OpenFin-based applications - https://github.com/HadoukenIO/layouts-service

This project is an example of how to build your own tabstrip to be used with the Layouts service. 

This repo is meant for educational purposes only, so we have removed the build script. Do not try to build this repo and use it in your application.
If you want to see this code in action, take a look at the `layouts-service` repo:
https://github.com/HadoukenIO/layouts-service/tree/develop/res/provider/tabbing/tabstrip
https://github.com/HadoukenIO/layouts-service/tree/develop/src/provider/tabbing/tabstrip

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
- HTML, with template section - /build/css/tabstrip.html

## Getting Started

### Usage

To use a custom tabstrip in an application, call setTabClient on startup of the application.
The applications main window and all child windows will now use the custom tabstrip when windows are tabbed, either programatically or by user drag/drop actions.
Windows with different tabstrips cannot be tabbed together. 

```typescript
//import the client module
import * as Layouts from "openfin-layouts"

Layouts.setTabClient("http://localhost:8080/tabstrip.html");

```

### Notes

## License
This project uses the [Apache2 license](https://www.apache.org/licenses/LICENSE-2.0)

However, if you run this code, it may call on the OpenFin RVM or OpenFin Runtime, which are covered by OpenFin's Developer, Community, and Enterprise licenses. You can learn more about OpenFin licensing at the links listed below or just email us at support@openfin.co with questions.

https://openfin.co/developer-agreement/
https://openfin.co/licensing/

## Support
This is an open source project and all are encouraged to contribute.
Please enter an issue in the repo for any questions or problems. For further inqueries, please contact us at support@openfin.co
