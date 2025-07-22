from django.db import models

class ProductUnderwearGender(models.Model):
    gender = models.CharField(max_length=10, )

    def __str__(self):
        return self.size