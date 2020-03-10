import json
import os
import sys
# makes 'lib' directory visible for external dependencies
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), 'lib')))
from googleapiclient.discovery import build

os.environ['GOOGLE_APPLICATION_CREDENTIALS']='credentials.json'

def respond(err, res=None):
    return {
        'statusCode': '400' if err else '200',
        'body': err.message if err else json.dumps(res),
        'headers': {
            'Content-Type': 'application/json',
        },
    }

def lambda_handler(event, context):
    service = build('calendar', 'v3', cache_discovery=False)
    
    event = json.loads(event['body'])
    gcal_event = {
        'summary': event['summary'],
        'location': event['location'],
        'description': event['description'],
        'start': {
            'dateTime': event['startdate'],
        },
        'end': {
            'dateTime': event['enddate'],
        },
    }
    gcal_event = service.events().insert(calendarId=os.environ['EMAIL'], body=gcal_event).execute()
    
    return respond(None, f"Event created, id: {gcal_event.get('htmlLink')}")