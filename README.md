# now-mailgun-sender

> Lambda function to send form emails using NOW & MAILGUN

## Setup

1. copy `now.json.example` as `now.json` then replace with your settings.

2. set now.sh secrets:

```
now secrets add mailgun_api_key "YOU_MAILGUN_API_KEY"
now secrets add mailgun_domain "YOUR_MAILGUN_DOMAIN"
now secrets add mailgun_recipient "YOUR_EMAIL_ADDRESS"
now secrets add mailgun_sender "NOREPLY_ADDRESS"
```

3. deploy to now with `npm run now-deploy`

## Usage

**URL**: `/`

**Method**: `POST`

**Auth required**: NO

**Permissions required**: None

**Data example** (all fields must be sent):

```json
{
  "name": "John Doe",
  "email": "jdoe@company.com",
  "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
}
```