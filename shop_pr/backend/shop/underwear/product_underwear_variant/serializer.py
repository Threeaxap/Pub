from rest_framework import serializers
from .models import *
from underwear.product_underwear_model.serializer import *
from underwear.product_underwear_color.serializer import *
from underwear.product_underwear_image.serializer import *

class ProductUnderwearVariantSerializer(serializers.ModelSerializer):
    product_model = ProductUnderwearModelSerializer(source='product', read_only=True)
    product_color = ProductUnderwearColorSerializer(source='color', read_only=True)
    product_image = ProductUnderwearImageSerializer(source='image', read_only=True)

    class Meta:
        model = ProductUnderwearVariant
        fields = '__all__'