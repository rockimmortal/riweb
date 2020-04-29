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

def gen_update_string(event):
    ret = ""
    for idx in event:
        if idx != 'id':
            ret += idx + "='" + event[idx] + "', "
    return ret[:-2]

def db_modify(event, update_string):
    conn = pymysql.connect(db_host, user=user, passwd=password, db=db_name, connect_timeout=5)
    with conn.cursor() as cur:
        cur.execute(f"""
                    UPDATE event 
                    SET {update_string}  
                    WHERE cal_id='{event['id']}'
                    """)
        conn.commit()
        cur.close()
    conn.close()

def cal_modify(event):
    service = build('calendar', 'v3', cache_discovery=False)
    target_event = service.events().get(calendarId=os.environ['EMAIL'], eventId=event['id']).execute()
    # Update only the fields specified
    for idx in target_event:
        target_event[idx] = target_event[idx] if idx not in event else event[idx]
    target_event = service.events().update(calendarId=os.environ['EMAIL'], eventId=event['id'], body=target_event).execute()

def lambda_handler(event, context):
    event = json.loads(event['Records'][0]['body'])
    update_string = gen_update_string(event)

    db_modify(event, update_string)
    cal_modify(event)
    return respond(None, f"Event modified, {update_string}")