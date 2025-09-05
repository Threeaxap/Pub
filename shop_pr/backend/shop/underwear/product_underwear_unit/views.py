from .serializer import *
from .models import *
from rest_framework import viewsets

class ProductUnderwearUnitViewset(viewsets.ModelViewSet):
    queryset = ProductUnderwearUnit.objects.all()
    serializer_class = ProductUnderwearUnitSerializer