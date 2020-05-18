# Creating a New Create/Update/Delete Microservice
## 1. IAM Roles & Policies
**A.** Create a new IAM policy consisting of at least the sqs:SendMessage action, this gives the AWS resource permission to send messages to an SQS queue.
```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": "sqs:SendMessage",
            "Resource": "*"
        }
    ]
}
```
![enter image description here](https://raw.githubusercontent.com/rockimmortal/riweb/documentation/src/backend/doc/img/ss_iam_policy.png)

**B.** Create a new IAM role for an API Gateway with the AmazonAPIGatewayPushToCloudWatchLogs policy. Next, attach the newly created policy as such and take note of the  **Role ARN**, which will need to be communicated to the API Gateway.

![enter image description here](https://raw.githubusercontent.com/rockimmortal/riweb/documentation/src/backend/doc/img/ss_iam_role_api.png)

**C.** Create a new IAM role for a Lambda function with the AWSLambdaSQSQueueExecutionRole policy.

![enter image description here](https://raw.githubusercontent.com/rockimmortal/riweb/documentation/src/backend/doc/img/ss_iam_role_lambda.png)

## 2. Lambda Function
Create a Lambda function that uses Python 3

 Every microservice has a main file: **service.py**, that has these two core functions:
```
def respond(err, res=None)
def lambda_handler(event, context)
```
**A.** The main code and dependencies for the Lambda function should be zipped and uploaded via this method.  Also,  note that **Handler** field is in the format of **main_filename.main_function_name**
![ss_lambda_uload](https://raw.githubusercontent.com/rockimmortal/riweb/documentation/src/backend/doc/img/ss_lambda_uload.png)

**B.** Edit the permissions of the Lambda function to use the newly created lambda-sqs-role.

![enter image description here](https://raw.githubusercontent.com/rockimmortal/riweb/documentation/src/backend/doc/img/ss_lambda_perm.png)
## 3. SQS Queue
Each microservice should have its own SQS queue and corresponding Dead Letter Queue, which will be used for collecting messages when there are errors in executing the Lambda function.

**A.** Create an SQS queue as well as its DLQ. Also take note of the **URL** of the primary queue, which will be used to direct the API Gateway.

![ss_sqs_url](https://raw.githubusercontent.com/rockimmortal/riweb/documentation/src/backend/doc/img/ss_sqs_url.png)

**B.** From the queue actions dropdown, configure the primary queue's trigger for Lambda function using the newly created like this:

![ss_sqs_lambda](https://raw.githubusercontent.com/rockimmortal/riweb/documentation/src/backend/doc/img/ss_sqs_lambda.png)

**C.** From the queue actions dropdown, configure the primary queue's setting as such. A maximum receive value of 3 means the lambda function called by the queue, will be executed a maximum of 3 times upon error before being sent to the dead letter queue, adjust this value as desired.

![ss_sqs_dlq](https://raw.githubusercontent.com/rockimmortal/riweb/documentation/src/backend/doc/img/ss_sqs_dlq.png)
## 4. API Gateway
**A.** If it doesn't already exist, create an API Gateway and a new resource. Then, create a new method for the resource using the URL of the SQS Queue and the ARN of the created API Gateway IAM role as such:

![ss_api_url](https://raw.githubusercontent.com/rockimmortal/riweb/documentation/src/backend/doc/img/ss_api_url.png)

**B.** Set the Integration Request of the API Gateway using ```Action=SendMessage&MessageBody=$input.body``` for the mapping template, this sets the body of the message as the body of the sent in JSON object.

![ss_api_integ](https://raw.githubusercontent.com/rockimmortal/riweb/documentation/src/backend/doc/img/ss_api_integ.png)
##
You can now test the API gateway and get an HTTP 200 response if everything went well.
