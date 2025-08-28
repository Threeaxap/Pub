from rest_framework import serializers
from .models import *
from bra.product_bra_model.serializer import *
from bra.product_bra_color.serializer import *
from bra.product_bra_image.serializer import *

class ProductBraVariantSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductBraVariant
        fields = ['id', 'product', 'color', 'image']

