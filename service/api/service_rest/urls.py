from django.urls import path
from .views import api_delete_technicians, api_list_technicians, api_list_appointments, cancel_appointment, delete_appointment, finish_appointment


urlpatterns = [
    path("technicians/", api_list_technicians, name="api_list_technicians"),
    path("technicians/<int:id>/", api_delete_technicians, name="api_delete_technicians"),
    path("appointments/",api_list_appointments, name="api_list_appointments"),
    path("appointments/<int:id>/cancel/", cancel_appointment, name="cancel_appointment"),
    path("appointments/<int:id>/", delete_appointment, name= "delete_appointment"),
    path("appointments/<int:id>/finish/",finish_appointment, name= "finish_appointment"),
]

