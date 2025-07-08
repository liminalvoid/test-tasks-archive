import requests
import csv


BASE_URL = "https://ru.wikipedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Категория:Животные по алфавиту&cmlimit=max&format=json"

result = {}
cmcontinue = ""

while True:
    response = requests.get(BASE_URL, params={"cmcontinue": cmcontinue}).json()
    animals = response["query"]["categorymembers"]

    for animal in animals:
        animal_name = animal["title"]
        first_letter = animal_name[0].upper()

        if not result.get(first_letter):
            print(f"Adding animals with name's first letter {first_letter}")

            result[first_letter] = 0

        result[first_letter] += 1

    if not response.get("continue"):
        break

    cmcontinue = response["continue"]["cmcontinue"]

print("\n")
print("Count of records:", sum(result.values()))
print("Results are stored in count.csv file")

sorted_result = dict(sorted(result.items()))

with open("count.csv", "w", newline="") as file:
    writer = csv.writer(file)
    writer.writerows(sorted_result.items())
