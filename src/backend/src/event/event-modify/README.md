# Modify Event

* Requires a Google Service Account Key called credentials.json in the same folder
* Requires environment variable 'EMAIL' to create the event in, must allow service account's email to change events in the destination calendar's settings
* Looking into AWS CodePipeline

Modifies a Google calendar event using a POST request with a body of at least:
```
{
    "id": String,
}
```
Example: Modifying event title and description
```
{
    "id": "a1",
    "summary": "Rock Immortal",
    "description": "Example Description"
}
```



