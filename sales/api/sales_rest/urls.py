from django.urls import path
from .views import api_list_salesperson, api_delete_salesperson, api_list_customers, api_delete_customer, api_list_sales, api_delete_sale



urlpatterns = [
    path("salespeople/", api_list_salesperson, name="api_list_salesperson"),
    path("salespeople/<int:id>/", api_delete_salesperson, name="api_delete_salesperson"),

    path("customers/", api_list_customers, name="api_list_customers"),
    path("customers/<int:id>", api_delete_customer, name="api_delete_customer"),

    path("sales/", api_list_sales, name="api_list_sales"),
    path("sales/<int:id>/", api_delete_sale, name="api_create_sales")
]
