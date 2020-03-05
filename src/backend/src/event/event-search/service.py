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
    page_token = None
    event_list = []

    # get paginated list of event ids
    while True:
        event_page = service.events().list(calendarId=os.environ['EMAIL'], pageToken=page_token, q=event['queryStringParameters']['q']).execute()
        for item in event_page['items']:
            entry = []
            entry.append(item['id'])
            entry.append(item['summary'])
            entry.append(item['description'])
            event_list.append(entry)
        page_token = event_page.get('nextPageToken')
        if not page_token:
            break
    
    return respond(None, f"{event_list}")
    