##About OAuth2.0

One major problem we were facing was solved by having the token credentials stored with the correct syntax in the correct file.

The File: 

~/.credentals/sheets.googleapis.com-nodejs-quickstart.json

Must contain access token credentials in this format: 

{ "access_token": “THE_ACCESS_TOKEN_SENT_TO_YOUR_REDIRECT_URI",
"token_type": "Bearer",
"expires_in": 3600 }

Note:  The access token expires, so after you send a request for the token from Google, the next steps should be taken relatively quickly.

Sending a request for the token: 

After client_secret.json is in the root directory, build a request string in the following format and paste it into the browser:

https://accounts.google.com/o/oauth2/v2/auth?client_id=THE_CLIENT_ID_FROM_CLIENT_SECRET.JSON
&redirect_uri=REDIRECT_URI_FROM_CLIENT_SECRET.JSON_MUST_BE_URL_ENCODED&response_type=token&scope=SELECTED_SCOPE_FROM_GOOGLE

encode url here:

https://www.urlencoder.org/

select scopes here:

https://developers.google.com/identity/protocols/googlescopes

When you send this request you will receive a response in the form of a URL. The URL will contain your redirecturi, the acces token and some other info.  Format this info and make sure it is in the sheets.googleapis.com-nodejs-quickstart.json file found in ~/.credentials

                -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

(https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

                -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

To run the database locally, make sure you have cloned timesheet-backend from coderbunker github.

https://github.com/coderbunker

once you have the repo installed locally, run these commands on the terminal inside the project directory:

1)pg_ctl -D /usr/local/var/postgres start

2)node_modules/.bin/postgraphile -c $USER:localhost:5432/timesheet -s timedata -o

to stop the postgraphile server, you can simply hit control+c

to stop the postgres server run:

pg_ctl -D /usr/local/var/postgres stop
