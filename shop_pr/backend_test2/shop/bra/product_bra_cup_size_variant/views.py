from .serializer import *
from .models import *
from rest_framework import viewsets

class ProductBraCupSizeVariantViewset(viewsets.ModelViewSet):
    queryset = ProductBraCupSizeVariant.objects.all()
    serializer_class = ProductBraCupSizeVariantSerializer