from .serializer import *
from .models import *
from rest_framework import viewsets

class ProductBraCupSizeViewset(viewsets.ModelViewSet):
    queryset = ProductBraCupSize.objects.all()
    serializer_class = ProductBraCupSizeSerializer