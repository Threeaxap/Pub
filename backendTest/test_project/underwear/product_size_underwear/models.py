from django.db import models

class ProductSize(models.Model):
    size = models.CharField(max_length=10)

    def __str__(self):
        return self.size