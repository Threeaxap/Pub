from rest_framework import serializers
from .models import *
from bra.product_bra_variant.serializer import *


class ProductBraCupSizeVariantSerializer(serializers.ModelSerializer):
    product_variant = ProductBraVariantSerializer(source='variant', read_only=True)
    class Meta:
        model = ProductBraCupSizeVariant
        fields = '__all__'
