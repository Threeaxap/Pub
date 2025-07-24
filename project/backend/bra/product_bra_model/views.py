from .serializer import *
from .models import *
from rest_framework import viewsets

class ProductBraModelViewset(viewsets.ModelViewSet):
    queryset = ProductBraModel.objects.all()
    serializer_class = ProductBraModelSerializer