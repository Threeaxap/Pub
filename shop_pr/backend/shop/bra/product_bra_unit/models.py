from django.db import models
from bra.product_bra_variant.models import *


class ProductBraUnit(models.Model):
    variant = models.ForeignKey(ProductBraVariant, on_delete=models.CASCADE)
    stock = models.PositiveIntegerField(default=0)
    size = models.ForeignKey(ProductBraSize, on_delete=models.CASCADE)
    cup_size = models.ForeignKey(ProductBraCupSize, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.variant.product.name} - {self.variant.color} - {self.cup_size} - {self.size}"