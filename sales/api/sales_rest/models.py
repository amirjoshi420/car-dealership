from django.db import models

# Create your models here.

class AutomobileVO(models.Model):
    # import_href = models.CharField(max_length=200, unique=True)
    vin = models.CharField(max_length=150)
    sold = models.BooleanField(default=False)

class SalesPerson(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    employee_id = models.CharField(max_length=3, unique=True)


class Customer(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    address = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=10)


class Sale(models.Model):
    automobile = models.ForeignKey(
        AutomobileVO,
        related_name = "automobile",
        on_delete = models.CASCADE
    )

    salesperson = models.ForeignKey(
        SalesPerson,
        related_name="salesperson",
        on_delete = models.CASCADE

    )
    customer = models.ForeignKey(
        Customer,
        related_name="customer",
        on_delete = models.CASCADE
    )
    price = models.PositiveSmallIntegerField()
