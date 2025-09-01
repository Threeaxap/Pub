from rest_framework import serializers
from .models import *
from bra.product_bra_model.serializer import *
from bra.product_bra_color.serializer import *
from bra.product_bra_image.serializer import *

class ProductBraVariantSerializer(serializers.ModelSerializer):
    product_model = ProductBraModelSerializer(source='product', read_only=True)
    product_color = ProductBraColorSerializer(source='color', read_only=True)
    product_image = ProductBraImageSerializer(source='image', read_only=True)
    class Meta:
        model = ProductBraVariant
        fields = '__all__'

