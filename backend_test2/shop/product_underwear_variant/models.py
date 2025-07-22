from django.db import models
from product_underwear_model.models import *
from product_underwear_color.models import ProductUnderwearColor
from product_underwear_image.models import ProductUnderwearImage
from product_underwear_size.models import ProductUnderwearSize
from product_underwear_gender.models import ProductUnderwearGender


class ProductUnderwearVariant(models.Model):
    product = models.ForeignKey(ProductUnderwearModel, on_delete=models.CASCADE)
    color = models.ForeignKey(ProductUnderwearColor, on_delete=models.CASCADE)
    image = models.ForeignKey(ProductUnderwearImage, null=True, on_delete=models.SET_NULL)
    size = models.ForeignKey(ProductUnderwearSize, on_delete=models.CASCADE)
    cup_size = models.ForeignKey(ProductUnderwearGender, on_delete=models.CASCADE, null=True)
    stock = models.PositiveIntegerField(default=0)

    