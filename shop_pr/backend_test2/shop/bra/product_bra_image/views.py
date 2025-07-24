from .serializer import *
from .models import *
from rest_framework import viewsets

class ProductBraImageViewset(viewsets.ModelViewSet):
    queryset = ProductBraImage.objects.all()
    serializer_class = ProductBraImageSerializer