# Description

This is a Node.js based promotion banner display sample project. This project allows you to create add,modify and remove promotion banners without restarting server. (Zero Downtime)
Modification reflects immediately after modifying data (/config/banners.json and /config/ip.json)

It has below features.

- You can add, modify and delete banners from banner list.
- You can change display time of a specific banner.
- Banners are visible even before start date to a specific request coming from specified IP. (IP filter list can be modified as well. /config/ip.json)

*For sample project I have used local file. Datasource can be anything e.g. s3 bucket,database etc.*

#### Prerequisites
```
node
npm
```

#### Install
```
$ git clone https://github.com/m-rec/689f22fcd07c22567e911ef3ec9b8ffe16dde781.git
$ cd 689f22fcd07c22567e911ef3ec9b8ffe16dde781
$ npm install
```

#### Run
- ###### Local Run
```
node server.js
```
- ###### Production Run
```
export NODE_ENV=production
node server.js
```

#### Test
- ###### Local Test
```
127.0.0.1:3000
```

- ###### Web Test
```
SYSTEM_IP:3000
```

#### Verification
- Try to update data into */config/banners.json* and reload the URL to see changes.
- For IP verification please generate a request from the ip listed in the */config/ip.json* or modify file if you require.

# Logic

![Logic](https://github.com/m-rec/689f22fcd07c22567e911ef3ec9b8ffe16dde781/blob/develop/doc/banner_logic.png)



- Request/Response :
  - Server receives user request and it ask *Display Decider* to provide banner list based on the user request.
  - Renders banner list provided by *Display Decider*

- Display Decider :
  - First Try to get banner list and Ip list from local data source. If it can not find local data then it will get data from main data source.
  - Filter banner list based on user Ip and display period.
  - Return fileter banner list.

- Local Data :
  - Chached data

- File Change Watcher :
  - Watches banner list and ip list file.
  - If it finds any changes, it clears local Data

- Data File :
  - Main data source. banner list and ip list
  - You can update banner list and ip list from here and it will reflect immediately without restarting server. (Zero Downtime)
