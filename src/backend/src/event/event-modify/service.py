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
    
    target_event = service.events().get(calendarId=os.environ['EMAIL'], eventId=event['id']).execute()
    # Update only the fields specified
    for idx in target_event:
        target_event[idx] = target_event[idx] if idx not in event else event[idx]
        
    target_event = service.events().update(calendarId=os.environ['EMAIL'], eventId=event['id'], body=target_event).execute()
    
    return respond(None, f"Event modified, id: {target_event.get('htmlLink')}")