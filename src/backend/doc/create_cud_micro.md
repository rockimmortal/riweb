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
IMG HERE
**B.** Create a new IAM role for an API Gateway with the AmazonAPIGatewayPushToCloudWatchLogs policy. Next, attach the newly created policy as such and take note of the  **Role ARN**, which will need to be communicated to the API Gateway.
IMG HERE
**C.**
Create a new IAM role for a Lambda function with the AWSLambdaSQSQueueExecutionRole policy.
IMG HERE

## 2. Lambda Function
Create a Lambda function that uses Python 3

 Every microservice has a main file: **service.py**, that has these two core functions:
```
def respond(err, res=None)
def lambda_handler(event, context)
```
**A.** The main code and dependencies for the Lambda function should be zipped and uploaded via this method.  Also,  note that **Handler** field is in the format of **main_filename.main_function_name**
IMG HERE
**B.** Edit the permissions of the Lambda function to use the newly created lambda-sqs-role.
IMG HERE
## 3. SQS Queue
Each microservice should have its own SQS queue and corresponding Dead Letter Queue, which will be used for collecting messages when there are errors in executing the Lambda function.
**A.** Create an SQS queue as well as its DLQ. Also take note of the **URL** of the primary queue, which will be used to direct the API Gateway.
IMG HERE
**B.** From the queue actions dropdown, configure the primary queue's trigger for Lambda function using the newly created one as such:
IMG HERE
**C.** From the queue actions dropdown, configure the primary queue's setting as such. A maximum receive value of 3 means the lambda function called by the queue, will be executed a maximum of 3 times upon error before being sent to the dead letter queue, adjust this value as desired.
IMG HERE
## 4. API Gateway
**A.** Create an API Gateway and a new resource. Then, create a new method for the resource using the URL of the SQS Queue and the ARN of the created API Gateway IAM role as such:
IMG HERE
**B.** Set the Integration Request of the API Gateway using ```Action=SendMessage&MessageBody=$input.body``` for the mapping template, this sets the body of the message as the body of the sent in JSON object.
IMG HERE
##
You can now test the API gateway and get an HTTP 200 response if everything went well.
