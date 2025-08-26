from django.db import models
from underwear.product_underwear_gender.models import *

class ProductUnderwearModel(models.Model):
    name = models.CharField(max_length=20)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    desc = models.TextField(max_length=300)
    gender = models.ForeignKey(ProductUnderwearGender, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
        
