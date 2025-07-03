from django.db import models

class ProductImage(models.Model):
    image = models.ImageField(upload_to='product_image/', blank=True, null=True)


class Product(models.Model):
    title = models.CharField(max_length=20)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField(max_length=250)
    size = models.PositiveIntegerField()
    color = models.CharField(max_length=12)
    image = models.ForeignKey(ProductImage, null=True, on_delete=models.SET_NULL)



class ProductSize(models.Model):
    size = models.CharField(max_length=10)


class ProductVariant(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    size = models.ForeignKey(ProductSize, on_delete=models.CASCADE)
    stock = models.PositiveIntegerField(default=0)
