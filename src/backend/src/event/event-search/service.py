import json
import os
import sys
# makes 'lib' directory visible for external dependencies
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), 'lib')))
import pymysql

# Will end up using Secrets Manager instead
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
    
    result = []
    conn = pymysql.connect(db_host, user=user, passwd=password, db=db_name, connect_timeout=5)
    with conn.cursor() as cur:
        cur.execute("INSERT INTO event (summary, location, description, startDate, endDate) "
                    "VALUES ('%s', '%s', '%s', '%s', '%s')" % (event['summary'], event['location'], event['description'], event['startDate'], event['endDate']))
        cur.execute("SELECT * FROM event") # Outputs all entries for testing purposes
        conn.commit()
        cur.close()
        for row in cur:
            result.append(list(row))
            
    conn.close()
    return respond(None, result)