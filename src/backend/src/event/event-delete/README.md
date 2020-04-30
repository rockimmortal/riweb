# Delete Event

* Requires a Google Service Account Key called credentials.json in the same folder
* Requires environment variable 'EMAIL' to create the event in, must allow service account's email to change events in the destination calendar's settings
* Looking into AWS CodePipeline

Deletes a Google calendar event and MySQL row using a DELETE request with a request body of:
```
{
    "id": String
}
```


