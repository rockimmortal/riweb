import json
import os
import sys
# makes 'lib' directory visible for external dependencies
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), 'lib')))
import pymysql

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

def get_params(event):
    query = ''
    entry_count = 10
    
    if 'queryStringParameters' in event:
        if 'q' in event['queryStringParameters']:
            query = event['queryStringParameters']['q']
        if 'entry_count' in event['queryStringParameters']:
            entry_count = event['queryStringParameters']['entry_count']
    return (query, entry_count)
    
def db_search(event, query, entry_count):
    result = []
    conn = pymysql.connect(db_host, user=user, passwd=password, db=db_name, connect_timeout=5)
    with conn.cursor() as cur:
        cur.execute(f"""
                    SELECT * FROM event 
                    WHERE summary LIKE '%{query}%' OR description LIKE '%{query}%'
                    LIMIT {entry_count}
                    """)
        for row in cur:
            result.append(list(row))
            
    conn.close()
    return result

def lambda_handler(event, context):
    params = get_params(event)
    result = db_search(event, params[0], params[1])
    
    return respond(None, result)