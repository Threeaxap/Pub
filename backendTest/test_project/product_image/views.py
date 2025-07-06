from .serializer import *
from .models import *
from rest_framework import viewsets

class ProductImageViewset(viewsets.ModelViewSet):
    queryset = ProductImage.objects.all()
    serializer_class = ProductImageSerializer