from .serializer import *
from .models import *
from rest_framework import viewsets

class ProductSizeViewset(viewsets.ModelViewSet):
    queryset = ProductSize.objects.all()
    serializer_class = ProductSizeSerializer