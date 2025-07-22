from django.db import models
from product_bra_model.models import *
from product_bra_color.models import ProductBraColor
from product_bra_image.models import ProductBraImage
from product_bra_size.models import ProductBraSize
from product_bra_cup_size.models import ProductBraCupSize


class ProductBraVariant(models.Model):
    product = models.ForeignKey(ProductBraModel, on_delete=models.CASCADE)
    color = models.ForeignKey(ProductBraColor, on_delete=models.CASCADE)
    image = models.ForeignKey(ProductBraImage, null=True, on_delete=models.SET_NULL)
    size = models.ForeignKey(ProductBraSize, on_delete=models.CASCADE)
    cup_size = models.ForeignKey(ProductBraCupSize, on_delete=models.CASCADE, null=True)
    stock = models.PositiveIntegerField(default=0)

    