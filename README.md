# OpenFin Layouts - Tabstrip


## Overview
OpenFin Layouts delivers window management and layout user experience across the desktop for OpenFin-based applications.

OpenFin Layouts core repository - https://github.com/HadoukenIO/layouts-service

This project examplifies how to build your own tabstrip to be used with the Layouts service

### Dependencies
- OpenFin Layouts client API's - npm package
- A http(s) server

### Features
- Example tabstrip supporting the events
- 
- Windows snap to the right or bottom edges of window or group.
- API available to undock or opt-out of snapping.
- On inclusion of plugin script undocking with `CTRL+SHIFT+U` or `CMD+SHIFT+U`.
- A window will not snap if it detects a collision. It will not try to find a more suitable point.

### Run Locally
- Node 8.11 LTS.
    
```
npm install 
npm build
```
The files in 
## Getting Started

Using the Layouts service is done in two steps, add the service to application manifest and import the API:


### Import the Client API

```bash
npm install openfin-layouts
```

### Usage

```javascript
import {undock, deregister} from 'openfin-layouts';

undock().then(() => console.log('successfully undocked myself'));
undock({uuid: 'otherWindow', name: 'otherWindow'}).then(() => console.log('successfully undocked otherWindow'));
deregister().then(() => console.log('successfully deregistered myself'));
deregister({uuid: 'otherWindow', name: 'otherWindow'}).then(() => console.log('successfully deregistered otherWindow'));
```

### Notes
- Testing runtime version must be >= 9.*
- alpha RVM
- If using Parallels Desktop, you have to be in a mode where Parallels can control the mouse. Set `Settings>Hardware>Mouse&Keyboard>Mouse` to `Optimize for Games`
- Other setups haven't been tested



## License
This project uses the [Apache2 license](https://www.apache.org/licenses/LICENSE-2.0)

## Support
This is an open source project and all are encouraged to contribute.
Please enter an issue in the repo for any questions or problems. For further inqueries, please contact us at support@openfin.co
