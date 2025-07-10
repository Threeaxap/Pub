from django.db import models
from bra.product_model_bra.models import *
from bra.product_color_bra.models import ProductColor
from bra.product_image_bra.models import ProductImage
from bra.product_size_bra.models import ProductSize


class ProductVariant(models.Model):
    product = models.ForeignKey(ProductModel, on_delete=models.CASCADE)
    color = models.ForeignKey(ProductColor, on_delete=models.CASCADE)
    image = models.ForeignKey(ProductImage, null=True, on_delete=models.SET_NULL)
    size = models.ForeignKey(ProductSize, on_delete=models.CASCADE)
    stock = models.PositiveIntegerField(default=0)

    