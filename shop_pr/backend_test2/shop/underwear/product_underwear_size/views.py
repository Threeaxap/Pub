from .serializer import *
from .models import *
from rest_framework import viewsets

class ProductUnderwearSizeViewset(viewsets.ModelViewSet):
    queryset = ProductUnderwearSize.objects.all()
    serializer_class = ProductUnderwearSizeSerializer