# Generated by Django 4.1.5 on 2023-01-30 22:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('educata', '0007_annonce_titre'),
    ]

    operations = [
        migrations.RenameField(
            model_name='annonce',
            old_name='titre',
            new_name='title',
        ),
    ]