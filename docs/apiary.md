### List All Questions [GET]

+ Response 200 (application/json)

        [
            {
                "question": "Favourite programming language?",
                "published_at": "2015-08-05T08:40:51.620Z",
                "choices": [
                    {
                        "choice": "Swift",
                        "votes": 2048
                    }, {
                        "choice": "Python",
                        "votes": 1024
                    }, {
                        "choice": "Objective-C",
                        "votes": 512
                    }, {
                        "choice": "Ruby",
                        "votes": 256
                    }
                ]
            }
        ]

### Create a New Question [POST]

You may create your own question using this action. It takes a JSON
object containing a question and a collection of answers in the
form of choices.

+ Request (application/json)

        {
            "question": "Favourite programming language?",
            "choices": [
                "Swift",
                "Python",
                "Objective-C",
                "Ruby"
            ]
        }

+ Response 201 (application/json)

    + Headers

            Location: /questions/2

    + Body

            {
                "question": "Favourite programming language?",
                "published_at": "2015-08-05T08:40:51.620Z",
                "choices": [
                    {
                        "choice": "Swift",
                        "votes": 0
                    }, {
                        "choice": "Python",
                        "votes": 0
                    }, {
                        "choice": "Objective-C",
                        "votes": 0
                    }, {
                        "choice": "Ruby",
                        "votes": 0
                    }
                ]
            }



### List All Departments [GET]

+ Response 200 (application/json)

        [
            {
                "name": "string",
                "desc": "string",
                "created_at": "2018-02-04T12:09:11.978Z",
                "updated_at": "2018-02-04T12:09:11.978Z",
                "id": "string"
            }
        ]    


### List All Ingredients from one departments - by department {id} [GET]

+ Response 200 (application/json)
    + Headers

            Location: /department/{id}/ingredients

    + Body   

        [
            {
                "name": "string",
                "description": "string",
                "custom": false,
                "created_at": "2018-02-04T12:09:12.058Z",
                "updated_at": "2018-02-04T12:09:12.058Z",
                "id": "string",
                "departmentId": "string",
                "favs": "string"
            }
        ]         

### List All Ingredients from one departments - short version [GET]

+ Response 200 (application/json)
    + Headers

            Location: /department/ingredients/list

    + Body  
    
        {
          "ingredients": [
            {}
          ]
        }
