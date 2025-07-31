from rest_framework import serializers
from .models import *
from bra.product_bra_cup_size_variant.serializer import *


class ProductBraUnitSerializer(serializers.ModelSerializer):
    product_variant = ProductBraCupSizeVariantSerializer(source='variant',read_only=True)
    class Meta:
        model = ProductBraUnit
        fields = '__all__'
