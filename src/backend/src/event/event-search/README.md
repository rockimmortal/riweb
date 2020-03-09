# Search Event

* Requires a Google Service Account Key called credentials.json in the same folder
* Requires environment variable 'EMAIL' to create the event in, must allow service account's email to change events in the destination calendar's settings
* Looking into AWS CodePipeline

Searches ALL fields of ALL events of a Google calendar using a GET request with the optional query string parameter:
```
q
```
Returns a paginated list of events by id


