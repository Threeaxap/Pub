from django.db import models
from underwear.product_model_underwear.models import ProductModel
from underwear.product_color_underwear.models import ProductColor
from underwear.product_image_underwear.models import ProductImage
from underwear.product_size_underwear.models import ProductSize


class ProductVariant(models.Model):
    product = models.ForeignKey(ProductModel, on_delete=models.CASCADE)
    color = models.ForeignKey(ProductColor, on_delete=models.CASCADE)
    image = models.ForeignKey(ProductImage, null=True, on_delete=models.SET_NULL)
    size = models.ForeignKey(ProductSize, on_delete=models.CASCADE)
    stock = models.PositiveIntegerField(default=0)

    