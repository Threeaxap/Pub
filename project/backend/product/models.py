from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=20)
    stock_data = models.JSONField(default=dict,help_text='Формат: {"цвет": {"размер": количество}}')
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()
    structure = models.TextField()

    def __str__(self):
        return self.name