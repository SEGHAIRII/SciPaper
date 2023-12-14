# Generated by Django 4.2.7 on 2023-12-13 17:15

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("baseApp", "0004_alter_paper_auteurs_alter_paper_file_pdf_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="paper",
            name="auteurs",
            field=django.contrib.postgres.fields.ArrayField(
                base_field=models.CharField(blank=True, max_length=100, null=True),
                null=True,
                size=None,
            ),
        ),
        migrations.AlterField(
            model_name="paper",
            name="institutions",
            field=django.contrib.postgres.fields.ArrayField(
                base_field=models.CharField(blank=True, max_length=100, null=True),
                null=True,
                size=None,
            ),
        ),
        migrations.AlterField(
            model_name="paper",
            name="mots_cles",
            field=django.contrib.postgres.fields.ArrayField(
                base_field=models.CharField(blank=True, max_length=50, null=True),
                null=True,
                size=None,
            ),
        ),
        migrations.AlterField(
            model_name="paper",
            name="references",
            field=django.contrib.postgres.fields.ArrayField(
                base_field=models.CharField(blank=True, max_length=50, null=True),
                null=True,
                size=None,
            ),
        ),
    ]
