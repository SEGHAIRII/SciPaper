# Generated by Django 4.2.7 on 2024-01-06 17:13

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("papers", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="paper",
            name="references",
            field=django.contrib.postgres.fields.ArrayField(
                base_field=models.TextField(blank=True, null=True),
                blank=True,
                default=list,
                null=True,
                size=None,
            ),
        ),
    ]