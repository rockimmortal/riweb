import json
import os
import sys
# makes 'lib' directory visible for external dependencies
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), 'lib')))
from googleapiclient.discovery import build
import pymysql

os.environ['GOOGLE_APPLICATION_CREDENTIALS']='credentials.json'
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

def db_delete(event):
    conn = pymysql.connect(db_host, user=user, passwd=password, db=db_name, connect_timeout=5)
    with conn.cursor() as cur:
        cur.execute(f"""
                    DELETE FROM event 
                    WHERE cal_id='{event['queryStringParameters']['id']}'
                    """)
        conn.commit()
        cur.close()
    conn.close()

def cal_delete(event):
    service = build('calendar', 'v3', cache_discovery=False)
    service.events().delete(calendarId=os.environ['EMAIL'], eventId=event['queryStringParameters']['id']).execute()

def lambda_handler(event, context):
    db_delete(event)
    cal_delete(event)

    return respond(None, f"Event deleted, id: {event['queryStringParameters']['id']}")