from rest_framework import serializers
from .models import *
from bra.product_bra_variant.serializer import *
from bra.product_bra_cup_size.serializer import *


class ProductBraCupSizeVariantSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductBraCupSizeVariant
        fields = ['id', 'product_variant', 'product_cup_size']
