from .serializer import *
from .models import *
from rest_framework import viewsets

class ProductBraSizeViewset(viewsets.ModelViewSet):
    queryset = ProductBraSize.objects.all()
    serializer_class = ProductBraSizeSerializer