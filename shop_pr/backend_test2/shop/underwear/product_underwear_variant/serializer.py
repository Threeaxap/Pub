from rest_framework import serializers
from .models import *
from underwear.product_underwear_model.serializer import *
from underwear.product_underwear_color.serializer import *
from underwear.product_underwear_image.serializer import *

class ProductUnderwearVariantSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductUnderwearVariant
        fields = ['id', 'product_model', 'product_color', 'product_image']