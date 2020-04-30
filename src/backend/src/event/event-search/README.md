# Search Event
* Requires environment variables for MySQL datbase host, name, username, password (Should probably be managed in another way)

Searches particular fields of a MySQL table using a GET request with the optional query string parameters:
```
q: String,
entry_count: int
```
Returns a json list of events and their details


