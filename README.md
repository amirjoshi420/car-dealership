# CarCar

CarCar is an application for managing the aspects of an automobile dealership. It manages the inventory, automobile sales, and automobile services.

CarCar is an application for managing the aspects of an automobile dealership. It manages the inventory, automobile sales, and automobile services.

Team:

* **Abrahim Abdulkader** - Auto Sales
* **Amir Joshi** - Auto Services

## Getting Started

Docker Installation:

Visit the Docker website: https://www.docker.com/get-started
Download and install Docker Desktop for your operating system (Windows, macOS, or Linux).
Follow the installation instructions provided on the website.
After installation, verify Docker is installed correctly by running docker --version in your terminal or command prompt.

Git Installation:
Visit the Git website: https://git-scm.com/downloads
Download and install Git for your operating system.
Follow the installation instructions provided on the website.
After installation, verify Git is installed correctly by running git --version in your terminal or command prompt.

Node.js Installation (version 18.2 or above):
Visit the Node.js website: https://nodejs.org/
Download and install the latest LTS version of Node.js for your operating system.
Follow the installation instructions provided on the website.
After installation, verify Node.js is installed correctly by running node --version and npm --version in your terminal or command prompt.

1. Fork this repository

2. Clone the forked repository onto your local computer:
git clone <<[respository.url.here](https://gitlab.com/abrahimabdulkader3/project-beta)>>

3. Build and run the project using Docker with these commands:
```
docker volume create beta-data
docker-compose build
docker-compose up
```
- After running these commands, make sure all of your Docker containers are running

- View the project in the browser: http://localhost:3000/

![Img](/images/CarCarWebsite.png)
![alt text](<Screenshot 2024-02-09 at 3.26.42 PM.png>)
## Design

CarCar is made up of 3 microservices which interact with one another.

- **Inventory**
- **Services**
- **Sales**
![alt text](Model_excalidraw-2.png)
![Img](/images/CarCarDiagram.png)


## Integration - How we put the "team" in "team"

Our Inventory and Sales domains work together with our Service domain to make everything here at **CarCar** possible.

How this all starts is at our inventory domain. We keep a record of automobiles on our lot that are available to buy. Our sales and service microservices obtain information from the inventory domain, using a **poller**, which talks to the inventory domain to keep track of which vehicles we have in our inventory so that the service and sales team always has up-to-date information.


## Accessing Endpoints to Send and View Data: Access Through Insomnia & Your Browser

### Manufacturers:


| Action | Method | URL
| ----------- | ----------- | ----------- |
| List manufacturers | GET | http://localhost:8100/api/manufacturers/
| Create a manufacturer | POST | http://localhost:8100/api/manufacturers/ |
| Get a specific manufacturer | GET | http://localhost:8100/api/manufacturers/id/
| Update a specific manufacturer | PUT | http://localhost:8100/api/manufacturers/id/
| Delete a specific manufacturer | DELETE | http://localhost:8100/api/manufacturers/id/


JSON body to send data:

Create and Update a manufacturer (SEND THIS JSON BODY):
- You cannot make two manufacturers with the same name
```
{
  "name": "Toyota"
}
```
The return value of creating, viewing, updating a single manufacturer:
```
{
			"href": "/api/manufacturers/12/",
			"id": 12,
			"name": "Toyota"
}
```
Getting a list of manufacturers return value:
```
{
  "manufacturers": [
    {
      "href": "/api/manufacturers/12/",
      "id": 12,
      "name": "Toyota"
    }
  ]
}
```

### Vehicle Models:

| Action | Method | URL
| ----------- | ----------- | ----------- |
| List vehicle models | GET | http://localhost:8100/api/models/
| Create a vehicle model | POST | http://localhost:8100/api/models/
| Get a specific vehicle model | GET | http://localhost:8100/api/models/id/
| Update a specific vehicle model | PUT | http://localhost:8100/api/models/id/
| Delete a specific vehicle model | DELETE | http://localhost:8100/api/models/id/

Create and update a vehicle model (SEND THIS JSON BODY):
```
{
  "name": "red",
  "picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
  "manufacturer_id":14
}
```

Updating a vehicle model can take the name and/or picture URL:
```
{
  "name": "Green",
  "picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg"
}
```
Return value of creating or updating a vehicle model:
- This returns the manufacturer's information as well
```
{
	"href": "/api/models/11/",
	"id": 11,
	"name": "Green",
	"picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
	"manufacturer": {
		"href": "/api/manufacturers/12/",
		"id": 12,
		"name": "Toyota"
	}
}
```
Getting a List of Vehicle Models Return Value:
```
{
  "models": [
    {
      "href": "/api/models/11/",
			"id": 11,
			"name": "Green",
			"picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
			"manufacturer": {
				"href": "/api/manufacturers/12/",
				"id": 12,
				"name": "Toyota
      }
    }
  ]
}
```

### Automobiles:
- The **'vin'** at the end of the detail urls represents the VIN for the specific automobile you want to access. This is not an integer ID. This is a string value so you can use numbers and/or letters.

| Action | Method | URL
| ----------- | ----------- | ----------- |
| List automobiles | GET | http://localhost:8100/api/automobiles/
| Create an automobile | POST | http://localhost:8100/api/automobiles/
| Get a specific automobile | GET | http://localhost:8100/api/automobiles/vin/
| Update a specific automobile | PUT | http://localhost:8100/api/automobiles/vin/
| Delete a specific automobile | DELETE | http://localhost:8100/api/automobiles/vin/


Create an automobile (SEND THIS JSON BODY):
- You cannot make two automobiles with the same vin
```
{
  "color": "silver",
  "year": 2023,
  "vin": "WDDNG71X17A170285",
  "model":11
}
```
Return Value of Creating an Automobile:
```
{
	"href": "/api/automobiles/WDDNG71X17A170285/",
			"id": 17,
			"color": "silver",
			"year": 2023,
			"vin": "WDDNG71X17A170285",
			"model": {
				"href": "/api/models/11/",
				"id": 11,
				"name": "Green",
				"picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
				"manufacturer": {
					"href": "/api/manufacturers/12/",
					"id": 12,
					"name": "Toyota"
		}
	}
}
```
To get the details of a specific automobile, you can query by its VIN:
example url: http://localhost:8100/api/automobiles/1C3CC5FB2AN120174/

Return Value:
```
{
  "href": "/api/automobiles/WDDNG71X17A170285/",
	"id": 17,
	"color": "silver",
	"year": 2023,
	"vin": "WDDNG71X17A170285",
	"model": {
		"href": "/api/models/11/",
		"id": 11,
		"name": "Green",
		"picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
		"manufacturer": {
			"href": "/api/manufacturers/12/",
			"id": 12,
			"name": "Toyota"
		}
	},
	"sold": false
}
```
You can update the color and/or year of an automobile (SEND THIS JSON BODY):
```
{
	"color":"green",
	"year": 2020

}
```
Getting a list of Automobile Return Value:
```
{
  "autos": [
    {
	"href": "/api/automobiles/1C3CC5FB2AN120233/",
	"id": 2,
	"color": "green",
	"year": 2020,
	"vin": "1C3CC5FB2AN120233",
	"model": {
		"href": "/api/models/3/",
		"id": 3,
		"name": "Honda",
		"picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
		"manufacturer": {
			"href": "/api/manufacturers/4/",
			"id": 4,
			"name": "Honda"
		}
	},
	"sold": false
}
  ]
}
```

### Technician

List technicians	GET	http://localhost:8080/api/technicians/
Create a technician	POST	http://localhost:8080/api/technicians/
Delete a specific technician	DELETE	http://localhost:8080/api/technicians/:id/

Create a technician model (SEND THIS JSON BODY):
```
{
	"first_name":"abdul",
	"last_name" :"gibson",
	"employee_id":"12333"
}
```

Deleting a technician model can take first_name, last_name and employee_id
```
{
	"first_name":"abdul",
	"last_name" :"gibson",
	"employee_id":"12333"
}
```

Listing Technician model:
```
{
	"technicians": [
		{
			"id": 4,
			"first_name": "james",
			"last_name": "martinez",
			"employee_id": "12399"
		},
		{
			"id": 5,
			"first_name": "dobber",
			"last_name": "wilson",
			"employee_id": "12322"
		},
		{
			"id": 6,
			"first_name": "robert",
			"last_name": "kim",
			"employee_id": "12333"
		},
		{
			"id": 7,
			"first_name": "abdul",
			"last_name": "gibson",
			"employee_id": "12333"
		},
		{
			"id": 8,
			"first_name": "abdul",
			"last_name": "gibson",
			"employee_id": "12333"
		},
		{
			"id": 9,
			"first_name": "Amir",
			"last_name": "Joshi",
			"employee_id": "benz"
		},
		{
			"id": 10,
			"first_name": "benz ",
			"last_name": "crptz",
			"employee_id": "4545Benz"
		},
		{
			"id": 11,
			"first_name": "dsjaflkjdsfj",
			"last_name": "fdsjaf;lkdsjfkls",
			"employee_id": "4343242"
		},
		{
			"id": 12,
			"first_name": "Naruto",
			"last_name": "ujumaki",
			"employee_id": "9005"
		}
	]
}
```

### Appointments model:

List appointments	GET	http://localhost:8080/api/appointments/
Create an appointment	POST	http://localhost:8080/api/appointments/
Delete an appointment	DELETE	http://localhost:8080/api/appointments/:id/
Set appointment status to "canceled"	PUT	http://localhost:8080/api/appointments/:id/cancel/
Set appointment status to "finished"	PUT	http://localhost:8080/api/appointments/:id/finish/

List Appointments:
```
{
	"appointment": [
		{
			"id": 17,
			"date_time": "2024-02-16T20:03:00+00:00",
			"customer": "Helwod Park",
			"status": "finished",
			"vin": "1GC4K0C87FF132904",
			"reason": "tire change",
			"technician": "james martinez"
		},
		{
			"id": 19,
			"date_time": "2024-02-01T17:17:00+00:00",
			"customer": "dsak;lfjhdskljfljdsf sdfdsfdsaf",
			"status": "created",
			"vin": "asfds324324",
			"reason": "dsafdsfasdfaf",
			"technician": "benz  crptz"
		},
		{
			"id": 20,
			"date_time": "2024-02-16T22:49:00+00:00",
			"customer": "efa dsfa",
			"status": "created",
			"vin": "fdsf3424",
			"reason": "fsdfdfafd",
			"technician": "dobber wilson"
		},
		{
			"id": 21,
			"date_time": "2024-02-17T12:48:00+00:00",
			"customer": "dfgfg gsdfg",
			"status": "created",
			"vin": "1C3CC5FB2AN120174",
			"reason": "ggertret",
			"technician": "james martinez"
		}]
}
```

Create Appointments:
```
{
	"date": "2024-02-23",
	"time":"12:00:00",
	"customer": "kishan karki",
	"status": "finished",
	"vin": "1245NV46800",
	"reason":"oil change",
	"technician":"6"
}
```

Status to Finished and status to Canceled:
```
{
  "status": "finished"
}
```
{
  "status": "Canceled"
}
```

Delete the application must provide specific id



# Sales Microservice

On the backend, the sales microservice has 4 models: AutomobileVO, Customer, SalesPerson, and SalesRecord. SalesRecord is the model that interacts with the other three models. This model gets data from the three other models.

The AutomobileVO is a value object that gets data about the automobiles in the inventory using a poller. The sales poller automotically polls the inventory microservice for data, so the sales microservice is constantly getting the updated data.

The reason for integration between these two microservices is that when recording a new sale, you'll need to choose which car is being sold and that information lives inside of the inventory microservice.


## Accessing Endpoints to Send and View Data - Access through Insomnia:

### Customers:


| Action | Method | URL
| ----------- | ----------- | ----------- |
| List customers | GET | http://localhost:8090/api/customers/
| Create a customer | POST | http://localhost:8090/api/customers/
| Show a specific customer | GET | http://localhost:8090/api/customers/id/

To create a Customer (SEND THIS JSON BODY):
```
{
    "first_name": "Mohamed",
    "last_name": "Abdulkarim",
    "address": "123 Bowling Street",
    "phone_number": "6462069260"
}
```
Return Value of Creating a Customer:
```
{
    "first_name": "Mohamed",
    "last_name": "Abdulkarim",
    "address": "123 Bowling Street",
    "phone_number": "6462069260"
}
```
Return value of Listing all Customers:
```
[
    {
        "id": 1,
        "first_name": "Abrahim",
        "last_name": "Abdulkader",
        "address": "123 Bowling Street",
        "phone_number": "6462069260"
    },
    {
        "id": 2,
        "first_name": "Abrahim",
        "last_name": "Abdulkader",
        "address": "123 Bowling Street",
        "phone_number": "6462069260"
    },
    {
        "id": 3,
        "first_name": "Abrahim",
        "last_name": "Abdulkader",
        "address": "123 Bowling Street",
        "phone_number": "6462069260"
    },
    {
        "id": 4,
        "first_name": "Abrahim",
        "last_name": "Abdulkader",
        "address": "123 Bowling Street",
        "phone_number": "6462069260"
    },
    {
        "id": 5,
        "first_name": "Mohamed",
        "last_name": "Abdulkarim",
        "address": "123 Bowling Street",
        "phone_number": "6462069260"
    }
]
```
### Salespeople:
| Action | Method | URL
| ----------- | ----------- | ----------- |
| List salespeople | GET | http://localhost:8090/api/salespeople/
| Salesperson details | GET | http://localhost:8090/api/salesperson/id/
| Create a salesperson | POST | http://localhost:8090/api/salespeople/
| Delete a salesperson | DELETE | http://localhost:8090/api/salesperson/id/


To create a salesperson (SEND THIS JSON BODY):
```
{
    "first_name": "Kevin",
    "last_name": "Durant",
    "employee_id": "4"
}
```
Return Value of creating a salesperson:
```
{
    "salesperson": [
        {
            "id": 10,
            "first_name": "Kevin",
            "last_name": "Durant",
            "employee_id": "4"
        }
    ]
}
```
List all salespeople Return Value:
```
{
    "salesperson": [
        {
            "id": 10,
            "first_name": "Kevin",
            "last_name": "Durant",
            "employee_id": "4"
        }
    ]
}
```
### Salesrecords:
- the id value to show a salesperson's salesrecord is the **"id" value tied to a salesperson.**

| Action | Method | URL
| ----------- | ----------- | ----------- |
| List all salesrecords | GET | http://localhost:8090/api/salesrecords/
| Create a new sale | POST | http://localhost:8090/api/salesrecords/
| Show salesperson's salesrecords | GET | http://localhost:8090/api/salesrecords/id/
List all Salesrecords Return Value:
```
{
    "sales": [
        {
            "id": 1,
            "price": 111000,
            "vin": {
                "vin": "111"
            },
            "salesperson": {
                "id": 1,
                "name": "Liz",
                "employee_number": 1
            },
            "customer": {
                "name": "Martha Stewart",
                "address": "1313 Baker Street",
                "phone_number": "980720890"
            }
        }
    ]
}
```
Create a New Sale (SEND THIS JSON BODY):
```
{
    "automobile": "1045NGONCA800613",
    "salesperson": 10,
    "customer": 5,
    "price": "10"

}

```
Return Value of Creating a New Sale:
```
{
    "sales": [
        {
            "id": 23,
            "automobile": {
                "id": 2,
                "vin": "1045NGONCA800613",
                "sold": false
            },
            "salesperson": {
                "id": 10,
                "first_name": "Kevin",
                "last_name": "Durant",
                "employee_id": "4"
            },
            "customer": {
                "id": 5,
                "first_name": "Mohamed",
                "last_name": "Abdulkarim",
                "address": "123 Bowling Street",
                "phone_number": "6462069260"
            },
            "price": 10
        }
    ]
}
```
Show a Salesperson's Salesrecord Return Value:
```
{
    "id": 1,
    "price": 111000,
    "vin": {
        "vin": "111"
    },
    "salesperson": {
        "id": 1,
        "name": "Liz",
        "employee_number": 1
    },
    "customer": {
        "id",
        "name": "Martha Stewart",
        "address": "1313 Baker Street",
        "phone_number": "980720890"
    }
}
```




