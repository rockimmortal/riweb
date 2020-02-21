#Create Event

* Requires a Google Service Account Key called credentials.json in the same folder
* Looking into how to best put a AWS Lambda Deployment Package on Github, needs the dependency files
* Appears to create a calendar but it belongs to the service account itself, looking into how to make it displayable

Creates a Google calendar event using a POST request with a body of:
'''
{
    "title": String,
    "location": String,
    "description": String,
    "startdate": DateTime,
    "enddate": DateTime,
}
'''


