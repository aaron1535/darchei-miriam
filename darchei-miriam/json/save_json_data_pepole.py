from faker import Faker

def generate_fake_person():
    fake = Faker('he_IL')
    id =  fake.random_int(min=100000000, max=999999999)
    first_name = fake.first_name()
    last_name = fake.last_name()
    address = fake.address()
    destination_address = fake.address()
    phone_number = fake.phone_number()
    email = fake.email()
    passengers = fake.random_int(min=1, max=4)
    date = fake.date()
    time = fake.time()
    return {
        'ID': id,
        'first_name': first_name,
        'last_name': last_name,
        'address': address,
        'destination_address': destination_address,
        'phone': phone_number,
        'email': email,
        'passengers': passengers,
        'date': date,
        'time': time
        }

import json


data = {"people": []}
for i in range(50):
    data["people"].append(generate_fake_person())

json_data = json.dumps(data, ensure_ascii=False)

try:
    with open('src/app/driver_search/people.json', 'w') as file:
        file.write(json_data)
        file.flush()
        print("Data saved successfully to people.json!")
except Exception as e:
    print("An error occurred while saving the data to people.json:", e)

