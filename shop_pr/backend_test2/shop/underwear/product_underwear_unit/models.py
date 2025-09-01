from django.db import models
from underwear.product_underwear_variant.models import *
from underwear.product_underwear_size.models import *

class ProductUnderwearUnit(models.Model):
    variant = models.ForeignKey(ProductUnderwearVariant, on_delete=models.CASCADE)
    size = models.ForeignKey(ProductUnderwearSize, on_delete=models.CASCADE)
    stock = models.PositiveIntegerField(default=0)

    
