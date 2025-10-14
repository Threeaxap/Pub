from .serializer import *
from .models import *
from rest_framework import viewsets, filters


class ProductBraUnitViewset(viewsets.ModelViewSet):
    queryset = ProductBraUnit.objects.all()
    serializer_class = ProductBraUnitSerializer
    