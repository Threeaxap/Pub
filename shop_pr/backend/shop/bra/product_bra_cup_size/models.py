from django.db import models

class ProductBraCupSize(models.Model):
    size = models.CharField(max_length=10, )

    def __str__(self):
        return self.size