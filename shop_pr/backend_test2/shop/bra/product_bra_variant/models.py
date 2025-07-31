from django.db import models
from bra.product_bra_model.models import *
from bra.product_bra_color.models import ProductBraColor
from bra.product_bra_image.models import ProductBraImage
from bra.product_bra_size.models import ProductBraSize
from bra.product_bra_cup_size.models import ProductBraCupSize


class ProductBraVariant(models.Model):
    product = models.ForeignKey(ProductBraModel, on_delete=models.CASCADE)
    color = models.ForeignKey(ProductBraColor, on_delete=models.CASCADE)
    image = models.ForeignKey(ProductBraImage, null=True, on_delete=models.SET_NULL)

    def __str__(self):
        return f"{self.product.name} - {self.color}"
    