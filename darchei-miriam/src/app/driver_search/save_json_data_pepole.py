import json

data = {
    "people": [
        {
            "first_name": "אבי",
            "last_name": "כהן",
            "source_address": "רחוב הרצל 10, תל אביב",
            "destination_address": "רחוב בן יהודה 20, חיפה",
            "passengers": 3,
            "date": "2021-08-15",
            "time": "10:30",
            "phone": "050-3431888"
        },
        {
            "first_name": "שרה",
            "last_name": "לוי",
            "source_address": "רחוב הגליל 5, נתניה",
            "destination_address": "רחוב יוסף לוי 15, ירושלים",
            "passengers": 2,
            "date": "2021-08-16",
            "time": "14:00",
            "phone": "050-3431888"

        },
        {
            "first_name": "משה",
            "last_name": "כהן",
            "source_address": "רחוב הרצל 10, תל אביב",
            "destination_address": "רחוב יצחק רבין 7, עפולה",
            "passengers": 1,
            "date": "2021-08-18",
            "time": "09:15",
            "phone": "050-3431888"

        }
    ]
}

try:
    with open('src/app/driver_search/people.json', 'w') as file:
        # Encode the data as JSON and write it to the file
        json.dump(data, file)
        file.flush()

        print("Data saved successfully to people.json!")
except Exception as e:
    print("An error occurred while saving the data to people.json:", e)