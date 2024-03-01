import json
import boto3

def lambda_handler(event, context):
    # Create DynamoDB client
    dynamodb = boto3.resource('dynamodb')
    
    # Specify the table name
    table_name = 'YourTableName'

    # Get the DynamoDB table
    table = dynamodb.Table(table_name)
    
    try:
        # Retrieve data from DynamoDB table
        response = table.scan()
        items = response['Items']
        print("Items from DynamoDB table:")
        print(items)
        return {
            'statusCode': 200,
            'body': json.dumps(items)
        }
    except Exception as e:
        print("Error reading from DynamoDB table:", e)
        return {
            'statusCode': 500,
            'body': json.dumps({"error": str(e)})
        }
