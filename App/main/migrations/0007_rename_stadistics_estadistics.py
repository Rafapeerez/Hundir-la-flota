# Generated by Django 4.1.3 on 2023-05-30 18:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("main", "0006_game_stadistics_delete_user"),
    ]

    operations = [
        migrations.RenameModel(
            old_name="Stadistics",
            new_name="Estadistics",
        ),
    ]
