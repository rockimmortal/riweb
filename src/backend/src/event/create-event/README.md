# Create Event

* Requires a Google Service Account Key called credentials.json in the same folder
* Requires an environment variable 'EMAIL' to ceate the event in, must allow service account's email to change events in the destination calendar's settings
* Looking into AWS CodePipeline

Creates a Google calendar event using a POST request with a body of:
```
{
    "title": String,
    "location": String,
    "description": String,
    "startdate": DateTime,
    "enddate": DateTime
}
```


