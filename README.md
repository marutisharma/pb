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
