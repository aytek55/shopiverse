---
sidebar_label: 'Get Tasks'
---

# Get Tasks

### Parameter

![GetTasksRequest](../tasks/img/GetTasksRequest.png)

```json
 taskcode : string 
```
:::note
X-Client Key is the API-Key information found in the Api Definitions in the Shopiverse panel. Api Request limit is fixed as **2 requests per minute**.
:::

:::note
To attract suppliers on Shopiverse, you can try the **[Task Api GetTasks](https://api.shopiverse.com/swagger/index.html "Task Api GetTasks")** method by entering the necessary information through the ShopiVerse Api as above and creating the necessary request. .
:::

### Responses

#### Code 200 Success Response
```json
{
  "data": {
    "code": "string",
    "methodName": "string",
    "response": "string",
    "requestDate": "2023-11-20T10:00:32.971Z",
    "responseDate": "2023-11-20T10:00:32.971Z",
    "successCount": 0,
    "failCount": 0
  },
  "success": true,
  "message": "string"
}
```

#### Code 400 BadRequest
```json
{
  "success": true,
  "message": "string"
}
```
