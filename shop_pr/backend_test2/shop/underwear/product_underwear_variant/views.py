from .serializer import *
from .models import *
from rest_framework import viewsets

class ProductUnderwearVariantViewset(viewsets.ModelViewSet):
    queryset = ProductUnderwearVariant.objects.all()
    serializer_class = ProductUnderwearVariantSerializer