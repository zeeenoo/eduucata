# Generated by Django 4.1.5 on 2023-01-28 19:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('educata', '0005_alter_user_lieu'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='is_staff',
            field=models.BooleanField(default=False),
        ),
    ]