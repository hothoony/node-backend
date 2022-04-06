## Database 생성
```javascript
> use mydb
switched to db mydb

> show dbs
admin   0.000GB
config  0.000GB
local   0.000GB
```

## User 생성
```javascript
> use admin

> db.createUser(
    {
        user: 'myuser', 
        pwd: 'test1234', 
        roles: ['root']
    }
)
Successfully added user: { "user" : "myuser", "roles" : [ "root" ] }

> db.getUsers()
[
	{
		"_id" : "admin.myuser",
		"userId" : UUID("078defc2-e3fc-4bdd-8c4f-af59a8bde357"),
		"user" : "myuser",
		"db" : "admin",
		"roles" : [
			{
				"role" : "root",
				"db" : "admin"
			}
		],
		"mechanisms" : [
			"SCRAM-SHA-1",
			"SCRAM-SHA-256"
		]
	}
]
```

## MongoDB 연결
```javascript
const mongoose = require('mongoose');

mongoose.connect('mongodb://myuser:test1234@localhost:27017/admin?retryWrites=true&w=majority', {
    dbName: 'mydb',
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(result => {
    console.log('connected to db');
    console.log(result);
})
.catch(err => {
    console.log('error occured');
    console.error(err)
});
```
