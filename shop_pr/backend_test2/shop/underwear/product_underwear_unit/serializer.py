from rest_framework import serializers
from .models import *
from underwear.product_underwear_variant.serializer import *
from underwear.product_underwear_size.serializer import *

class ProductUnderwearUnitSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductUnderwearVariant
        fields = ['id', 'product_variant', 'product_size']