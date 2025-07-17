from .serializer import *
from .models import *
from rest_framework import viewsets

class ProductCupSizeBraViewset(viewsets.ModelViewSet):
    queryset = ProductCupSize.objects.all()
    serializer_class = ProductCupSizeSerializer