# Generated by Django 4.0.3 on 2024-02-07 17:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0004_alter_customer_phone_number'),
    ]

    operations = [
        migrations.AlterField(
            model_name='salesperson',
            name='employee_id',
            field=models.CharField(max_length=50),
        ),
    ]
