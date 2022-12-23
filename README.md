# Boo World

## Installation

Clone the Github repository and use npm to install dependencies at the server folder <br/>
```
$ git clone https://github.com/hazem-elsaayed/Boo-World.git
$ cd Boo-World
$ npm install
```
After installation run `$ npm start` to start the server at port 5000 and make sure that the following message are shown in the terminal `App is working on port 5000` and `Successfully connected to the database`. if not, restart the server by pressing CTRL+C and `$ npm start` again <br/>

## Usage
The server has 6 end points which are:
* **Add Profile `POST /profile`** : used to create new profile
* **Get Profile `GET /profile?name=#profileName`** : used to get a specific profile page
* **Add Account `POST /account`** : used to create new user account
* **Add Comment `POST /:accountName/comment`** : used to add a comment to a user account
* **Get Comments `GET /:accountName/comments?filter=#filter&sortBy=#sortBy`** : used to get comments of a user acoount, it can also sort and/or filter comments using query params. filter options are `MBTI, Enneagram, Zodiac` (you can use multiple filters by using a comma i.e: filter=MBTI,Zodiac). sort options are `createdBy` to sort by recent comments and `likes` to sort by the highest number of likes
* **Add/Remove Comment Like `PATCH /:commentId/likes`** : used to add or remove like to a comment  


### Models
3 models are used to store data
* **Profiles model** : in which profiles are stored and it has the following properties:<br/> **name**, 
**description**, 
**mbti**, 
**enneagram**, 
**variant**, 
**tritype**, 
**socionics**, 
**sloan**, 
**psyche**, 
**image**
* **Comments model** : in which Comments data are stored and it has the following properties: **owner**, 
**account**, 
**liked_by**, 
**title**, 
**content**, 
**likes**, 
**MBTI**, 
**Enneagram**, 
**Zodiac**, 
* **Accounts model** : in which Accounts data are stored and it has one property **name**

### Testing
Automated tests are written with **JEST, Supertest** to cover different use cases, to run them just run `npm test` command in a terminal inside the project folder