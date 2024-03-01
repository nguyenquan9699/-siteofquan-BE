import json
import boto3

def lambda_handler(event, context):
    dynamodb = boto3.resource('dynamodb')
    table_name = 'siteofquan'
    table = dynamodb.Table(table_name)
    
    try:
        key_value = event.get('queryStringParameters', {}).get('key')
        
        if key_value is None:
            return {
                'statusCode': 400,
                'body': json.dumps({"error": "Missing 'key' parameter in query"})
            }

        response = table.get_item(
            Key={
                'data': key_value
            }
        )
        item = response.get('Item')
        if item:
            return {
                'statusCode': 200,
                'body': json.dumps(item)
            }
        else:
            return {
                'statusCode': 404,
                'body': json.dumps({"error": "Item not found"})
            }
    except Exception as e:
        print("Error reading from DynamoDB table:", e)
        return {
            'statusCode': 500,
            'body': json.dumps({"error": str(e)})
        }
