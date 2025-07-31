from rest_framework import serializers
from .models import *
from bra.product_bra_model.serializer import *

class ProductBraVariantSerializer(serializers.ModelSerializer):
    product_model = ProductBraModelSerializer(source='product', read_only=True)
    class Meta:
        model = ProductBraVariant
        fields = '__all__'

