import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "service_project.settings")
django.setup()
from service_rest.models import AutomobileVO

# Import models from service_rest, here. Ignore vs-code error hinting
# from service_rest.models import Something



def get_automobiles():
    url = "http://project-beta-inventory-api-1:8000/api/automobiles/"
    response = requests.get(url)
    content = json.loads(response.content)
    for automobile in content["autos"]:
        AutomobileVO.objects.update_or_create(
        vin=automobile["vin"],
        defaults={"sold":False}
)


def poll():
    while True:
        print('Service poller polling for data')
        try:
            get_automobiles()
        except Exception as e:
            print(e, file=sys.stderr)

        time.sleep(5)


if __name__ == "__main__":
    poll()
