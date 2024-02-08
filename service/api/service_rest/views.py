from django.shortcuts import render
from django.views.decorators.http import require_http_methods
import json
from common.json import ModelEncoder
from .models import AutomobileVO, Technician, Appointment
from django.http import JsonResponse
from django.forms.models import model_to_dict

class AutomobileVODetailEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "id",
        "vin"
                ]


class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
        "id",
        "first_name",
        "last_name",
        "employee_id"
    ]



class AppointmentEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "id",
        "date_time",
        "customer",
        "status",
        "vin",
        "reason",
        "technician"
    ]


    def get_extra_data(self, o):
        return {"technician": o.technician.employee_id}


@require_http_methods(["GET","POST"])
def api_list_technicians(request):
    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse(
            {"technicians": technicians},
            encoder= TechnicianEncoder,
            safe=False
        )
    else:
        try:
            content = json.loads(request.body)
            technician = Technician.objects.create(**content)
            return JsonResponse(
                technician,
                encoder = TechnicianEncoder,
                safe=False
            )
        except:
            response = JsonResponse(
                {"error": "could not create the technician"}
            )
            response.status_code = 400
            return response


@require_http_methods(["DELETE"])
def api_delete_technicians(request, id):
    if request.method == "DELETE":
        try:
            technician = Technician.objects.get(id=id)
            technician.delete()
            return JsonResponse(
                {"message": "technician successfully deleted"}
            )
        except Technician.DoesNotExist:
            return JsonResponse(
                {"error":"Technician doesnot exist"},
                status=404
            )


@require_http_methods(["GET","POST"])
def api_list_appointments(request):
    if request.method == "GET":
        appointments = Appointment.objects.all()
        return JsonResponse(
            {"appointment": appointments},
            encoder= AppointmentEncoder,
            safe=False
        )

    else:
        content = json.loads(request.body)
        date =content.pop("date")
        time = content.pop("time")
        content["date_time"] = f'{date} {time}'

        try:

            technician = Technician.objects.get(id = content["technician"])
            content["technician"] = technician
        except Technician.DoesNotExist:
            return JsonResponse(
                {"error": "Technician doesnot exist"},
                status=400
            )


        appointment = Appointment.objects.create(**content)
        return JsonResponse(
                appointment,
                encoder=AppointmentEncoder,
                safe=False
            )

@require_http_methods(["PUT"])
def cancel_appointment(request, id):

    content = {}
    content["status"] = "cancel"
    Appointment.objects.filter(id=id).update(**content)
    appointment = Appointment.objects.get(id = id)
    appointment = Appointment.objects.get(id=id)
    return JsonResponse(
        appointment,
        encoder= AppointmentEncoder,
        safe=False
    )


@require_http_methods(["PUT"])
def finish_appointment(request, id):

    content = {}
    content['status'] = "finished"
    Appointment.objects.filter(id=id).update(**content)
    appointment = Appointment.objects.get(id = id)
    return JsonResponse(
        appointment,
        encoder= AppointmentEncoder,
        safe=False
    )


@require_http_methods(["DELETE"])
def delete_appointment(request, vin):
    count,_ = Appointment.objects.filter(id=id).delete()
    return JsonResponse({"deleted": count > 0})








