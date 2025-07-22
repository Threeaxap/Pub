from .serializer import *
from .models import *
from rest_framework import viewsets

class ProductUnderwearImageViewset(viewsets.ModelViewSet):
    queryset = ProductUnderwearImage.objects.all()
    serializer_class = ProductUnderwearImageSerializer