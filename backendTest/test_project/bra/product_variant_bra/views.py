from .serializer import *
from .models import *
from rest_framework import viewsets

class ProductVariantBraViewset(viewsets.ModelViewSet):
    queryset = ProductVariant.objects.all()
    serializer_class = ProductVariantSerializer