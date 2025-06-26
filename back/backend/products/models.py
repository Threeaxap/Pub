from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    img = models.ImageField(upload_to='category_images/', unique=True )
    slug = models.SlugField(unique=True)


    def __str__(self):
        return self.name
    
    
    
class Product(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products')
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    discount = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    count = models.PositiveIntegerField(default=0)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    available = models.BooleanField(default=False)

    img = models.ImageField(upload_to='product_images/', unique=True )
    slug = models.SlugField(unique=True)

    def __str__(self):
        return self.name