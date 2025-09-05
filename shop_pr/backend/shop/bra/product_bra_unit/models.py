from django.db import models
from bra.product_bra_variant.models import *
from bra.product_bra_cup_size_variant.models import *

class ProductBraUnit(models.Model):
    cup_size_variant = models.ForeignKey(ProductBraCupSizeVariant, on_delete=models.CASCADE)
    stock = models.PositiveIntegerField(default=0)
    size = models.ForeignKey(ProductBraSize, on_delete=models.CASCADE)

    