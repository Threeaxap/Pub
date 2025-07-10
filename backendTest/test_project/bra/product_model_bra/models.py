from django.db import models

class ProductModel(models.Model):
    name = models.CharField(max_length=20)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    desc = models.TextField(max_length=300)

    def __str__(self):
        return self.name
        
