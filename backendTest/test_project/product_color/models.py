from django.db import models

class ProductColor(models.Model):
    color = models.CharField(max_length=30)

    def __str__(self):
        return self.color
