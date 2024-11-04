# Generated by Django 5.1.2 on 2024-11-02 17:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_medico_alter_pacient_options_and_more'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Medico',
            new_name='Doctor',
        ),
        migrations.RenameField(
            model_name='fila',
            old_name='medico',
            new_name='doctor',
        ),
        migrations.RenameField(
            model_name='triagem',
            old_name='medico',
            new_name='doctor',
        ),
    ]