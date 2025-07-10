from django.db import models

class ProductImage(models.Model):
    name = models.CharField(max_length=30, default='test')
    image = models.ImageField(upload_to='product_image/', blank=True, null=True)

    def __str__(self):
        return self.name

