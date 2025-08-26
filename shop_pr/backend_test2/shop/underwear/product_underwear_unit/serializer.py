from rest_framework import serializers
from .models import *
from underwear.product_underwear_variant.serializer import *
from underwear.product_underwear_size.serializer import *

class ProductUnderwearUnitSerializer(serializers.ModelSerializer):
    product_variant = ProductUnderwearVariantSerializer(source='variant', read_only=True)
    product_size = ProductUnderwearSizeSerializer(source='size', read_only=True)

    class Meta:
        model = ProductUnderwearVariant
        fields = ['id', 'product_variant', 'product_size']