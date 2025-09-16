from django.db import models

class ProductBraColor(models.Model):
    color = models.CharField(max_length=300)

    def __str__(self):
        return self.color
