# tutorial

This tutorial actually focuses on setting up a single EC2 instance using this simple websocket application.

Watch the video on each steps

1. sudo yum -y install curl
2. curl -sL https://rpm.nodesource.com/setup_14.x | sudo bash -
3. sudo yum install -y nodejs
4. sudo yum install git
5. git clone https://github.com/kb2232/ec2-helloworld-websocket.git
6. cd ec2-helloworld-websocket
7. npm install
8. node index.js

change inbound rule to allow your instance to be accessed from port 3000 by anyone