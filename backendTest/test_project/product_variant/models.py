from django.db import models
from product_model.models import ProductModel
from product_color.models import ProductColor
from product_image.models import ProductImage
from product_size.models import ProductSize


class ProductVariant(models.Model):
    product = models.ForeignKey(ProductModel, on_delete=models.CASCADE)
    color = models.ForeignKey(ProductColor, on_delete=models.CASCADE)
    image = models.ForeignKey(ProductImage, null=True, on_delete=models.SET_NULL)
    size = models.ForeignKey(ProductSize, on_delete=models.CASCADE)
    stock = models.PositiveIntegerField(default=0)

    