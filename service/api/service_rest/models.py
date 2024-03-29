from django.db import models


class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=200)
    vin = models.CharField(max_length=150)
    sold = models.BooleanField(default=False)


class Technician(models.Model):
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    employee_id = models.CharField(max_length=150)


class Appointment(models.Model):
    date_time = models.DateTimeField()
    reason = models.TextField()
    vin = models.CharField(max_length=150)
    status = models.CharField(max_length=150)
    customer = models.CharField(max_length=150)
    technician = models.ForeignKey(
        Technician,
        related_name = "technician",
        on_delete = models.CASCADE
    )
