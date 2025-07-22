from rest_framework import serializers
from .models import ProductBraImage

class ProductBraImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductBraImage
        fields = '__all__'