import boto3
import json

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('crc-website-table')

def lambda_handler(event, context):
    response = table.update_item(
        Key={
            'id': 1
        },
        UpdateExpression="SET visitorCounter = visitorCounter + :val",
        ExpressionAttributeValues={
            ':val': 1
        },
        ReturnValues="UPDATED_NEW"
    )

    counter_value = int(response['Attributes']['visitorCounter'])

    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
        },
        'body': json.dumps({
        'visitorCounter': counter_value
        })
    }