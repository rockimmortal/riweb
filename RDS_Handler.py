#Adapted from Noah's event-create
import json
import os
import sys
# makes 'lib' directory visible for external dependencies
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), 'lib')))
import mysql.connector

eventdb = mysql.connector.connect(
  host="localhost", #Assuming this is an IP needed
  user="yourusername", #See next comment
  passwd="yourpassword", #Let's find a way to *not* have this be in the source code.
  database="RIDB"
)

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
    c = eventdb.cursor()
	sql = "INSERT INTO customers (summary, location, description, start, end) VALUES (%s, %s, %s, %s, %s)" #Need to see if there is a %(date)
	val = (event['summary'], event['location'], event['description'], event['startdate'], event['enddate'])
	mycursor.execute(sql, val)

	eventdb.commit()
	return respond(None, f"Entry Added")