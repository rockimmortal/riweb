
# Microservices Structure
The basic flow of data through the framework is:
```
1. Frontend HTTP Request
2. AWS API Gateway Endpoint
3. AWS SQS Queue (Only for non-fetching services) 
4. AWS Lambda Function
5. MySQL Database + Google Calendar
```

### [Creating a New Microservice for Fetching](https://github.com/rockimmortal/riweb/blob/documentation/src/backend/doc/create_r_micro.md)

### [Creating a New Microservice for Creating/Updating/Deleting](https://github.com/rockimmortal/riweb/blob/documentation/src/backend/doc/create_cud_micro.md)

### [Adding Google Calendar Functionality](https://github.com/rockimmortal/riweb/blob/documentation/src/backend/doc/add_google_cal.md)
