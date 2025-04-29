from django.db import models

class Product(models.Model):
    name = models.CharField
    price = models.FloatField
    desc = models.TextField
    # img