from rest_framework import serializers
from .models import *
from underwear.product_underwear_model.serializer import *

class ProductUnderwearVariantSerializer(serializers.ModelSerializer):
    product_model = ProductUnderwearModelSerializer(source='product', read_only=True)

    class Meta:
        model = ProductUnderwearVariant
        fields = ['id', 'product_model']