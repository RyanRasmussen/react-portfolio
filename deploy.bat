:: Upload /dist/ folder to S3
CALL aws s3 sync ./dist/ s3://ryanrasmussen.dev --acl public-read --exclude ".git/*" --delete
ECHO Production site updated!