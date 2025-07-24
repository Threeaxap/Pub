from .serializer import *
from .models import *
from rest_framework import viewsets

class ProductBraVariantViewset(viewsets.ModelViewSet):
    queryset = ProductBraVariant.objects.all()
    serializer_class = ProductBraVariantSerializer