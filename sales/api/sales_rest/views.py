from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from common.json import DateEncoder, QuerySetEncoder, ModelEncoder
from .models import AutomobileVO, SalesPerson, Customer, Sale
from django.forms.models import model_to_dict


class SalesPersonListEncoder(ModelEncoder):
    model = SalesPerson
    properties = [
        "id",
        "first_name",
        "last_name",
        "employee_id"
    ]

class SalesPersonDetailEncoder(ModelEncoder):
    model = SalesPerson
    properties = [
        "id",
        "first_name",
        "last_name",
        "employee_id"
    ]

class CustomerListEncoder(ModelEncoder):
    model = Customer
    properties = [
        "id",
        "first_name",
        "last_name",
        "address",
        "phone_number"
    ]

class SemiCustomerListEncoder(ModelEncoder):
    model = Customer
    properties = [
        "first_name",
        "last_name"
    ]

class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "id",
        "vin",
        "sold"
    ]

class SalesListEncoder(ModelEncoder):
    model = Sale
    properties = [
        "id",
        "automobile",
        "salesperson",
        "customer",
        "price",
    ]

    # def get_extra_data(self, o):
    #     return {"customer": o.customer.first_name + "" +o.customer.last_name}
    encoders = {
        "automobile": AutomobileVOEncoder(),
        "salesperson": SalesPersonListEncoder(),
        "customer": CustomerListEncoder()
    }



@require_http_methods(["GET", "POST"])
def api_list_salesperson(request):
    if request.method == "GET":
        salesperson = SalesPerson.objects.all()
        return JsonResponse(
            {"salesperson": salesperson},
            encoder=SalesPersonListEncoder,
            safe=False
        )
    else:
        try:
            content = json.loads(request.body)
            salesperson = SalesPerson.objects.create(**content)
            return JsonResponse(
                salesperson,
                encoder = SalesPersonDetailEncoder,
                safe=False
        )
        except json.JSONDecodeError:
            return JsonResponse(
                {"message" : "Invalid JSON Body"},
                status=400
            )


@require_http_methods(["DELETE"])
def api_delete_salesperson(request, id):
    if request.method == "DELETE":
        try:
            salesperson = SalesPerson.objects.get(id=id)
            salesperson.delete()
            return JsonResponse(
                {"message": "Salesperson successfully deleted"}
            )
        except SalesPerson.DoesNotExist:
            return JsonResponse(
                {"message": "Sales Person not found"},
                status=404
            )


@require_http_methods(["GET", "POST"])
def api_list_customers(request):
    if request.method == "GET":
        customers = Customer.objects.all()
        return JsonResponse(
            customers,
            encoder=CustomerListEncoder,
            safe=False
        )
    else:
        try:
            content = json.loads(request.body)
            customers = Customer.objects.create(**content)
            return JsonResponse(
                customers,
                encoder = CustomerListEncoder,
                safe=False
        )
        except json.JSONDecodeError:
            return JsonResponse(
                {"message" : "Invalid JSON Body"},
                status=400
            )


@require_http_methods(["DELETE"])
def api_delete_customer(request, id):
     if request.method == "DELETE":
        try:
            customer = Customer.objects.get(id=id)
            customer.delete()
            return JsonResponse(
                {"message": "Customer successfully deleted"}
            )
        except SalesPerson.DoesNotExist:
            return JsonResponse(
                {"message": "Customer not found"},
                status=404
            )


@require_http_methods(["GET", "POST"])
def api_list_sales(request):
    if request.method == "GET":
        sales = Sale.objects.all()
        return JsonResponse(
            {"sales": sales},
            encoder=SalesListEncoder,
            safe=False
        )

    else:
        print("Hi")
        try:
            content = json.loads(request.body)
            print(content)

            automobile_id = content.get('automobile')
            salesperson_id = content.get('salesperson')
            customer_id = content.get('customer')
            price = content.get('price')

            # Check if the automobile exists
            try:
                automobile = AutomobileVO.objects.get(vin=automobile_id)
            except AutomobileVO.DoesNotExist:
                return JsonResponse({"message": "Automobile does not exist"}, status=404)

            # Check if the salesperson exists
            try:
                salesperson = SalesPerson.objects.get(id=salesperson_id)
            except SalesPerson.DoesNotExist:
                return JsonResponse({"message": "Salesperson does not exist"}, status=404)

            # Check if the customer exists
            try:
                customer = Customer.objects.get(id=customer_id)
            except Customer.DoesNotExist:
                return JsonResponse({"message": "Customer does not exist"}, status=404)

            # Create the sale
            sale = Sale.objects.create(
                automobile=automobile,
                salesperson=salesperson,
                customer=customer,
                price=price
            )
            return JsonResponse(
                model_to_dict(sale),
                encoder=SalesListEncoder,
                safe=False
            )

        except Exception as e:
            return JsonResponse({"message": str(e)}, status=400)

@require_http_methods(["DELETE"])
def api_delete_sale(request, id):
     if request.method == "DELETE":
        try:
            sale = Sale.objects.get(id=id)
            sale.delete()
            return JsonResponse(
                {"message": "Sale successfully deleted"}
            )
        except Sale.DoesNotExist:
            return JsonResponse(
                {"message": "Sale not found"},
                status=404
            )
