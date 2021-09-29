# Generated by Django 3.2.7 on 2021-09-29 09:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('author_backend', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Picture',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, verbose_name='Имя фото')),
                ('image', models.ImageField(upload_to='media')),
                ('date_add', models.DateTimeField(verbose_name='Дата добавления фото')),
            ],
            options={
                'ordering': ('-date_add',),
            },
        ),
    ]