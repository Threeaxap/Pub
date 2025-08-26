from django.db import models
from underwear.product_underwear_model.models import *
from underwear.product_underwear_color.models import ProductUnderwearColor
from underwear.product_underwear_image.models import ProductUnderwearImage

class ProductUnderwearVariant(models.Model):
    product = models.ForeignKey(ProductUnderwearModel, on_delete=models.CASCADE)
    color = models.ForeignKey(ProductUnderwearColor, on_delete=models.CASCADE)
    image = models.ForeignKey(ProductUnderwearImage, null=True, on_delete=models.SET_NULL)

    def __str__(self):
       return f"{self.product.name} - {self.color}"


    