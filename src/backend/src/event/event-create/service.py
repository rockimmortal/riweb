import json
import os
import sys
# makes 'lib' directory visible for external dependencies
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), 'lib')))
from googleapiclient.discovery import build
import pymysql

os.environ['GOOGLE_APPLICATION_CREDENTIALS']='credentials.json'
REGION=os.environ["REGION"]
db_host=os.environ["DB_HOST"]
user=os.environ["DB_USER"]
password=os.environ["DB_PASSWORD"]
db_name=os.environ["DB_NAME"]

def respond(err, res=None):
    return {
        'statusCode': '400' if err else '200',
        'body': err.message if err else json.dumps(res),
        'headers': {
            'Content-Type': 'application/json',
        },
    }

def lambda_handler(event, context):
    event = json.loads(event['body'])
    
    # Insert into DB
    conn = pymysql.connect(db_host, user=user, passwd=password, db=db_name, connect_timeout=5)
    with conn.cursor() as cur:
        cur.execute("INSERT INTO event (summary, location, description, startDate, endDate) "
                    "VALUES ('%s', '%s', '%s', '%s', '%s')" % (event['summary'], event['location'], event['description'], event['startDate'], event['endDate']))
        conn.commit()
        cur.close()
    
    # Insert into Google Calendar
    service = build('calendar', 'v3', cache_discovery=False)
    cal_event = {
        'summary': event['summary'],
        'location': event['location'],
        'description': event['description'],
        'start': {
            'dateTime': event['startDate'],
        },
        'end': {
            'dateTime': event['endDate'],
        },
    }
    cal_event = service.events().insert(calendarId=os.environ['EMAIL'], body=cal_event).execute()
    
    return respond(None, f"Event created, id: {cal_event.get('htmlLink')}")