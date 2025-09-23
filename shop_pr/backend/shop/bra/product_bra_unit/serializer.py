from rest_framework import serializers
from .models import *
from bra.product_bra_variant.serializer import *
from bra.product_bra_cup_size.serializer import *
from bra.product_bra_size.serializer import *


class ProductBraUnitSerializer(serializers.ModelSerializer):
    product_variant = ProductBraVariantSerializer(source='variant', read_only=True)
    product_cup_size = ProductBraCupSizeSerializer(source='cup_size', read_only=True)
    product_size = ProductBraSizeSerializer(source='size', read_only=True)
    class Meta:
        model = ProductBraUnit
        fields = '__all__'
