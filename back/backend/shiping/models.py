from django.db import models
from django.conf import settings

# Create your models here.

class Adres(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='adres')
    contry = models.CharField(max_length=100)
    street = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    postal_code = models.CharField(max_length=10)
    
    
    def __str__(self) -> str:
        return "_all_"
    